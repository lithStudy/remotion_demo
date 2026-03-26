#!/usr/bin/env python3
"""
Step 1: 口播文案分析（模板驱动版 v2） -> 现在升级为 v3 分步拆解版
将口播文案拆解为场景脚本JSON，AI 拆分为：第一步大场景、第二步镜面画面类型、第三步具体参数与字幕。
模板指南由 template_registry 动态生成。

用法：
  python step1_analyze_script.py --input 文案.txt --output output_dir --name video_name
"""

import argparse
import json
import os
import re
import shutil
import time
from datetime import datetime
from pathlib import Path

from scene_script_validate import validate_and_normalize_scene_scripts
from template_registry import TEMPLATE_REGISTRY, generate_ai_prompt_guide

_JSON_CFG = None
_AI_LOG_PATH = None


def _set_ai_log_path(output_dir: Path, video_name: str) -> None:
    """初始化 AI 请求日志文件路径。"""
    global _AI_LOG_PATH
    log_dir = output_dir / "logs"
    log_dir.mkdir(parents=True, exist_ok=True)
    ts = datetime.now().strftime("%Y%m%d_%H%M%S")
    _AI_LOG_PATH = log_dir / f"{video_name}_step1_ai_{ts}.log"


def _append_ai_log(block: str) -> None:
    """追加写入 AI 日志。"""
    if _AI_LOG_PATH is None:
        return
    _AI_LOG_PATH.parent.mkdir(parents=True, exist_ok=True)
    with open(_AI_LOG_PATH, "a", encoding="utf-8") as f:
        f.write(block)
        if not block.endswith("\n"):
            f.write("\n")


def _json_generate_config():
    """延迟导入，首轮与重试共用。"""
    global _JSON_CFG
    if _JSON_CFG is not None:
        return _JSON_CFG
    from google.genai import types

    _JSON_CFG = types.GenerateContentConfig(response_mime_type="application/json")
    return _JSON_CFG


def _parse_json_from_response(response_text: str) -> dict:
    response_text = response_text.strip()
    if response_text.startswith("```"):
        response_text = re.sub(r"^```(?:json)?\s*\n?", "", response_text)
        response_text = re.sub(r"\n?```\s*$", "", response_text)
    return json.loads(response_text)


def _extract_content_text(content_item) -> str:
    if isinstance(content_item, str):
        return content_item
    if isinstance(content_item, dict):
        return str(content_item.get("text", ""))
    return str(content_item)


def _inject_preview_timings(scene_scripts: dict, fps: int, config: dict) -> None:
    """
    为 Step1 结果注入默认时间轴，避免无音频预览时字幕重叠。
    Step3 会在生成真实音频后覆盖这些字段。
    """
    min_frames = int(config.get("preview_min_duration_frames", max(1, fps)))
    frames_per_char = float(config.get("preview_frames_per_char", 2.2))

    for scene in scene_scripts.get("scenes", []):
        for item in scene.get("items", []):
            param = item.get("param", {})
            if not isinstance(param, dict):
                continue

            content = param.get("content", [])
            if not isinstance(content, list) or not content:
                continue

            upgraded_content = []
            cursor = 0
            for content_item in content:
                text = _extract_content_text(content_item)
                text_len = max(1, len(text.strip()))
                duration_frames = max(min_frames, int(round(text_len * frames_per_char)))

                if isinstance(content_item, dict):
                    upgraded_content.append({
                        "text": text,
                        "startFrame": cursor,
                        "durationFrames": duration_frames,
                    })
                else:
                    upgraded_content.append({
                        "text": text,
                        "startFrame": cursor,
                        "durationFrames": duration_frames,
                    })

                cursor += duration_frames

            param["content"] = upgraded_content
            anchors = param.get("anchors", [])
            if not isinstance(anchors, list):
                print(f"   ⚠️ item order={item.get('order', '?')} 的 anchors 非数组，已清空")
                anchors = []
            valid_anchors = []
            for anchor_idx, anchor_item in enumerate(anchors):
                if not isinstance(anchor_item, dict):
                    print(
                        f"   ⚠️ item order={item.get('order', '?')} anchors[{anchor_idx}] 非对象，已丢弃"
                    )
                    continue
                anchor_text = str(anchor_item.get("text", "")).strip()
                show_from = anchor_item.get("showFrom")
                if not anchor_text:
                    print(
                        f"   ⚠️ item order={item.get('order', '?')} anchors[{anchor_idx}] 缺少 text，已丢弃"
                    )
                    continue
                if not isinstance(show_from, int) or show_from < 0 or show_from >= len(upgraded_content):
                    print(
                        f"   ⚠️ item order={item.get('order', '?')} anchors[{anchor_idx}].showFrom 非法，已丢弃"
                    )
                    continue
                valid_anchors.append({
                    "text": anchor_text,
                    "showFrom": show_from,
                    "color": anchor_item.get("color"),
                    "anim": anchor_item.get("anim"),
                    "audioEffect": anchor_item.get("audioEffect"),
                })
            param["anchors"] = valid_anchors
            param["totalDurationFrames"] = max(cursor, min_frames)


def load_env(script_dir: Path):
    """加载 .env 文件"""
    env_path = script_dir / ".env"
    if env_path.exists():
        with open(env_path, "r", encoding="utf-8") as f:
            for line in f:
                line = line.strip()
                if line and not line.startswith("#") and "=" in line:
                    key, value = line.split("=", 1)
                    os.environ[key.strip()] = value.strip()


def load_config(script_dir: Path) -> dict:
    """加载配置"""
    config_path = script_dir / "config.json"
    with open(config_path, "r", encoding="utf-8") as f:
        return json.load(f)


def _cleanup_related_resources(video_name: str, output_dir: Path, config: dict, script_dir: Path) -> None:
    """
    Step1 执行前清理与当前视频相关的历史产物，避免旧资源干扰新生成结果。
    """
    project_root = Path(config.get("project_root", script_dir.parent))
    scenes_dir = project_root / "src" / "remotions" / video_name / "scenes"
    images_dir = project_root / "public" / "images" / video_name
    audio_dir = project_root / "public" / "audio" / video_name

    # 如果 Step1 输出目录本身不是 scenes_dir，也补充清理其中旧的 scene-scripts.json
    output_script_path = output_dir / "scene-scripts.json"
    cleanup_targets = [
        scenes_dir,
        images_dir,
        audio_dir,
    ]
    if output_script_path != cleanup_targets[0]:
        cleanup_targets.append(output_script_path)

    print("\n🧹 Step1 预清理相关资源...")
    removed_any = False
    for target in cleanup_targets:
        if target.is_dir():
            shutil.rmtree(target)
            print(f"   ✅ 已删除目录: {target}")
            removed_any = True
            continue
        if target.is_file():
            target.unlink()
            print(f"   ✅ 已删除文件: {target}")
            removed_any = True

    if not removed_any:
        print("   ℹ️ 未发现可清理的历史资源")


# ─────────────────────────────────────────────────────────────
# Gemini 调用 - 分步处理
# ─────────────────────────────────────────────────────────────

def _generate_with_retry(client, model: str, prompt: str, retries: int = 3):
    """带指数退避的 API 请求重试封装"""
    request_at = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    print("\n" + "=" * 40 + " AI PROMPT " + "=" * 40)
    print(prompt)
    print("=" * 91 + "\n")
    _append_ai_log(
        "\n".join(
            [
                "",
                "=" * 40 + " REQUEST " + "=" * 40,
                f"time: {request_at}",
                f"model: {model}",
                f"retries: {retries}",
                "",
                "[PROMPT]",
                prompt,
                "=" * 91,
                "",
            ]
        )
    )
    for attempt in range(retries):
        try:
            resp = client.models.generate_content(
                model=model,
                contents=prompt,
                config=_json_generate_config(),
            )
            response_text = getattr(resp, "text", "")
            _append_ai_log(
                "\n".join(
                    [
                        "-" * 40 + " RESPONSE " + "-" * 40,
                        f"time: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}",
                        f"attempt: {attempt + 1}/{retries}",
                        "",
                        "[OUTPUT]",
                        str(response_text),
                        "-" * 91,
                        "",
                    ]
                )
            )
            return resp
        except Exception as e:
            _append_ai_log(
                "\n".join(
                    [
                        "-" * 40 + " ERROR " + "-" * 40,
                        f"time: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}",
                        f"attempt: {attempt + 1}/{retries}",
                        f"error: {e}",
                        "-" * 89,
                        "",
                    ]
                )
            )
            if attempt < retries - 1:
                print(f"   ⚠️ API请求异常 ({e})，2秒后进行第 {attempt + 1} 次重试...")
                time.sleep(2 * (attempt + 1))
            else:
                raise


def _gemini_fix_after_warnings(
    client,
    model: str,
    text: str,
    draft: dict,
    warnings: list[str],
    template_guide: str,
) -> dict:
    """校验告警后的单次修订调用；不得改写 content 内原文。"""
    fix_prompt = f"""你是短视频脚本 JSON 修订助手。下面初稿已通过结构解析，但校验器报告了部分问题。

## 口播原文（保证不丢失）
{text}

## 校验告警（请对症修订）
{json.dumps(warnings, ensure_ascii=False, indent=2)}

## 当前 JSON 初稿
{json.dumps(draft, ensure_ascii=False, indent=2)}

## 模板要求
{template_guide}

请输出**一份**修订后的完整 JSON：顶层含 `topic`、`scenes`（每 scene 含 `sceneId`、`sceneName`、`items`），每个 item 含 `order`、`narrativeType`、`reasoning`、`template`、`param`。不要包含 `fps` 字段。
所有 `content` 中的原文必须一致。`audioEffect` 只能出现在 `anchors` 条目上，不得出现在 `content`。仅输出 JSON，不要 markdown 代码块。"""

    resp = _generate_with_retry(client, model, fix_prompt)
    return _parse_json_from_response(resp.text)


def _analyze_scenes(client, model: str, text: str) -> dict:
    prompt = f"""你是专业短视频脚本策划师。请将以下口播文案拆解为大场景结构。

## 口播文案
{text}

## 拆解法则
场景（Scene）是顶级叙事单元。通常对应文案中的一个完整段落或核心论点。只有当“论证主题”、“叙事目标”或“情绪段位”发生根本性转变时，才能新建 scene。禁止频繁切分场景！
完整覆盖与原文零修改法则：所有场景的 text 拼合起来，必须 100% 完整覆盖全文。必须使用原文原句，严禁修改、缩写或重新措辞。

## 输出格式 (严格输出 JSON，不要 markdown 代码块)
{{
  "topic": "视频核心主题",
  "scenes": [
    {{
      "sceneId": "scene_1",
      "sceneName": "场景简短命名",
      "text": "该场景包含的完整口播原文"
    }}
  ]
}}"""
    print("   [Step 1/3] 正在拆解场景 (Scenes)...")
    resp = _generate_with_retry(client, model, prompt)
    return _parse_json_from_response(resp.text)


def _analyze_items_for_scene(client, model: str, topic: str, scene: dict, template_guide: str) -> dict:
    scene_text = scene.get("text", "")
    scene_name = scene.get("sceneName", "未命名场景")
    
    prompt = f"""你是顶级短视频脚本策划专家与资深剪辑师。请根据视频主题与场景目标，将文案精准拆解为多个具有视觉冲击力的画面镜头（Item）。

## 🎥 视频大背景
- **核心主题**：{topic}
- **当前场景**：{scene_name}

## 📄 场景原文（严禁修改、严禁漏字、严禁补字）
{scene_text}

## 🧩 镜头拆解与策略指南

### 1. 拆解节奏与呼吸感（Heuristics）
- **高频切分**：短视频核心是“变”。严禁一个镜头停留超过 4 秒。
- **切分点建议**：
    - 只要逻辑发生转折（比如：但、但是、其实、然而、却）或并列（比如：而且、且、不仅...还、此外）必须切分。
    - 只要话题从叙述转向举例（比如：例如、比如、拿...来说），或从问题转向对策（比如：所以、于是、由此可见）必须切分。
    - 单个镜头（Item）的文案长度建议控制在 **12-28 个字** 之间。

### 2. 叙事类型分类 (Narrative Types)
请在 reasoning 中按照“叙事角色 -> 视觉重心 -> 模板选型”的逻辑进行思考：
- `HOOK`：引子。制造悬念、反直觉、抛出痛点。匹配模板：`CENTER_FOCUS` (配强冲击力图片)。
- `LOGIC`：推导。原理分析、因果论证、底层逻辑。匹配模板：`MAGNIFYING_GLASS`, `STAT_COMPARE`, `CONCEPT_CHIP`。
- `CASE`：举证。具体场景、案例模拟、步骤演示。**若同一段落里出现「你/我/咱们」与「他/她/对方/有些人」的行为对仗，或分号（；）隔开的两段形成对立**（一方理性一方耍赖、一方客观一方选择性接收等），**必须优先 `SPLIT_COMPARE`**，禁止再用 `CENTER_FOCUS` 凑合。无对仗的单一画面、纯氛围描写用 `CENTER_FOCUS` 或 `ALERT`。步骤链、时间演进用 `TIMELINE`；显式多分点并列用 `MULTI_IMAGE`（见下条）。
- `DATA`：量化。硬核指标、对比增长、价值点。匹配模板：`KPI_HERO`, `PROGRESS_RING` (针对占比)。
- `CONCLUSION`：收束。核心金句、行动号召、价值升华。匹配模板：`CENTER_FOCUS` (建议高对比度)。

### 2.1 `MULTI_IMAGE` 选用规则（易误用，务必遵守）
- **禁止**因「评论区很乱」「不同观点吵架」等**笼统比喻或混战画面**就选 `MULTI_IMAGE`；这类用**一张**图表现整体氛围即可（`CENTER_FOCUS`）。
- **仅当**口播中存在**显式排比、分点列举、或 2～4 个可分别画成独立主体的要素**（如「一要…二要…」「A 怎样、B 又怎样」且各自成画）时才用 `MULTI_IMAGE`。
- 单纯转折拆成两句字幕（如「简单…却…」）**不等于**需要多张并列图。

### 2.2 `SPLIT_COMPARE` 优先（减少 `CENTER_FOCUS` 滥用）
- **强信号**：一句/几句内交替出现「你…他…」「你…对方…」「我…他…」；或 **分号（；）** 前后各描述一方行为；或「讲道理 vs 甩链接」「保持客观 vs 只看想看的」等 **A 侧行为 vs B 侧行为**。
- **选型**：上述情况**优先 `SPLIT_COMPARE`**（左右各一图 + `leftLabel`/`rightLabel` 短语），**不要**拆成多个 `CENTER_FOCUS`。
- **反例**：仅「评论区吵成一锅粥」这类**无双方对仗的笼统场景**仍用单图 `CENTER_FOCUS`/`ALERT`，不用 `SPLIT_COMPARE`。

### 3. 文案覆盖协议（Zero-Modification）
- **绝对要求**：所有 item 的 `text` 字段按 order 顺次拼接后，必须与【场景原文】**字符级一致**（包括所有标点符号）。

{template_guide}

## 🛠 输出格式 (严格 JSON，禁止包含 markdown 代码块)
{{
  "items": [
    {{
      "order": 1,
      "narrativeType": "HOOK | LOGIC | CASE | DATA | CONCLUSION | TRANSITION",
      "reasoning": "1.识别语义重心 -> 2.确定视觉交互逻辑 -> 3.最终选型理由",
      "template": "选定的模板名称（必须来自指南）",
      "text": "分配给该镜头的完整口播原文片段"
    }}
  ]
}}"""
    try:
        resp = _generate_with_retry(client, model, prompt)
        res_json = _parse_json_from_response(resp.text)
        scene["items"] = res_json.get("items", [])
    except Exception as e:
        print(f"   ❌ 解析 Scene {scene.get('sceneId')} 的 items 彻底失败: {e}")
        scene["items"] = []
    # 如果缺失 order，补齐
    for idx, item in enumerate(scene.get("items", [])):
        if "order" not in item:
            item["order"] = idx + 1
    return scene


def _analyze_param_for_item(client, model: str, scene_text: str, item: dict, template_registry: dict) -> dict:
    item_text = item.get("text", "")
    template_name = item.get("template", "CENTER_FOCUS")
    tmpl_info = template_registry.get(template_name, template_registry.get("CENTER_FOCUS", {}))
    
    schema_str = json.dumps(tmpl_info.get("param_schema", {}), ensure_ascii=False, indent=2)
    example_str = json.dumps(tmpl_info.get("example", {}), ensure_ascii=False, indent=2)

    prompt = f"""你是短视频字幕与画面细节处理专家。请把指定台词细化为字模显示参数。

## 完整段落上下文（仅供理解整体语境，判断当前句子的重要性）
{scene_text}

## 🎯 待处理的目标文案（你只需要处理这个片段！必须原封不动且完整包含在 content 中）
{item_text}

## 选定模板及参数规范
模板名称：{template_name}
参数 Schema 说明：
{schema_str}

模板该项的示例供参考：
{example_str}

注意：如果该模板生成的参数包含图片视觉描述（如 imageSrc / leftSrc / rightSrc 等等），请只描述纯视觉场景与动作，绝不要包含任何文字、标语或注音。

1. 字幕层（Text）：这是短视频的单行字幕：
   - ⚠️ 核心规则：必须根据语气停顿的标点符号（逗号、分号、句号、感叹号、问号），强制把一段话切分成多个字典对象放入 content 数组中！
   - 包含标点在内，每条 `content` 元素的单个 `text` 长度务必控制在 **20 个汉字内**，绝不能出现超长单行字幕！大段文字必须被切碎！
2. ⚠️ 极其重要的锚点克制与“高价值”原则（Anchor）：
   - 【锚点的价值】：锚点词必须是“高价值且有用”的！它应该是让人一眼记住的**核心概念、情绪爆点或痛点名词**（如：“底层Bug”、“信息囚笼”、“确认偏误”、“诱饵”）。
   - 【拒绝无效锚点】：❌ 绝不要提取平庸无奇的词作为锚点（如：“现实”、“隐蔽”、“保护”、“受害者”、“多刷半小时”、“可能错了”）。锚点词必须精简（通常2-4个字），且具备强烈的独立视觉/情绪冲击力。
   - 【克制原则】：由于你是逐句处理的，极易产生“每句话都要有锚点”的错觉！如果不克制，满屏叮叮当当的高亮会产生极其严重的视觉疲劳和恶俗感。
   - 请结合【段落上下文】冷静判断：当前文案真的是整个段落的**最高潮**或**核心反转**吗？如果不是，不需要填充锚点数据
   - 绝大部分（85%以上）的铺垫、举例、描述片段，**绝对、千万不要加锚点**（anchors 返回空数组）！宁缺毋滥！！
3. 锚点颜色与动画样式：
   - 颜色仅限两种：
     - "#EF4444" (警示/反转/负面/核心结论)。
     - "#000000" (事实/专业术语/客观数据)。
   - 动画样式 (anim) 选择：
     - "spring": 默认弹性（适合一般性强调）。
     - "slideUp": 向上升起（适合正面结论、上升趋势、启发性观点）。
     - "popIn": 突然弹出（适合震惊、警示、负面反转、强调痛点）。
     - "highlight": 底部抹色（适合术语、背景事实、平淡但重要的名词）。
   - 音效可选（仅绑在锚点上）：impact_thud(低沉重击)、ping(清脆提示)、woosh(挥舞转场)。若某锚点需要强调音，在该锚点对象上填 `audioEffect`；**不要**写在 content 条目里。
4. ⚠️ 视觉标题与字幕的分离（极其重要）：
   - 如果模板要求填充 `notText` / `butText` / `dontLabel` / `doLabel` / `conceptName` 等**视觉标题**字段：
     - **极简原则**：这些字段必须是极简的**关键词（2-6个汉字）**。它们是画面的视觉重点，不是台词！
     - **严禁重复**：绝对禁止直接把台词原封不动地填入这些标题字段！
     - **示例**：如果台词是“其实赚钱不是靠拼命，而是靠认知”，那么 `notText` 应为“靠拼命”，`butText` 应为“靠认知”。
   - 字幕层（content）则必须完整包含【待处理的目标文案】的所有文字。
5. 完整覆盖与原文零修改法则：所有 content 内的 text 按顺序拼合起来，必须完全等于“待处理文案”。严禁缩写、改写或缩减字数！

## 输出格式 (严格输出 JSON，不要 markdown 代码块)
仅输出该 item 的参数对象 `param`，里面包含 `content` 数组、`anchors` 数组和选定模板要求的其他参数（请根据 Schema 生成相应字段）。

{{
  "param": {{
    // (如果模板要求图片等其他字段，在此生成，但需符合 Schema 返回纯内容)
    "content": [
      {{
        "text": "完整原文片段（顺次无缝拼接，不能漏字）"
      }}
    ],
    "anchors": [
      {{
        "text": "被高亮的关键词",
        "showFrom": 0,
        "color": "#颜色",
        "anim": "动画样式",
        "audioEffect": "可选：impact_thud / ping / woosh 或省略"
      }}
    ]
  }}
}}"""
    try:
        resp = _generate_with_retry(client, model, prompt)
        res_json = _parse_json_from_response(resp.text)
        item["param"] = res_json.get("param", {})
    except Exception as e:
        print(f"   ❌ 解析 Item {item.get('order')} ({template_name}) 的 param 彻底失败: {e}")
        item["param"] = {"content": [{"text": item_text}], "anchors": []}
    return item


def analyze_with_gemini(text: str, config: dict) -> dict:
    from google import genai

    api_key = os.environ.get("GEMINI_API_KEY", "")
    if not api_key:
        raise ValueError("未设置 GEMINI_API_KEY，请在 .env 中配置")

    client = genai.Client(api_key=api_key)
    image_style = config.get("image_style", "简洁线条插画风格，无背景，无文字")
    fps = config.get("fps", 30)

    # 模板选择阶段不提供示例，避免模型在 Step2 过拟合样例。
    template_guide = generate_ai_prompt_guide(image_style, include_examples=False)
    model = config.get("gemini_model", "gemini-2.0-flash")

    print("\n" + "=" * 60)
    print("🤖 正在调用 Gemini 分析文案（分层次处理 v3）...")
    print("=" * 60 + "\n")

    # 第一步：拆解场景
    result = _analyze_scenes(client, model, text)
    scenes = result.get("scenes", [])
    print(f"   ✅ [Step 1/3] 完成，拆解为 {len(scenes)} 个 Scene。")

    # 第二步：分场景循环拆解 Item
    print("   [Step 2/3] 正在循环拆解 Items...")
    topic = result.get("topic", "未命名主题")
    for scene in scenes:
        _analyze_items_for_scene(client, model, topic, scene, template_guide)
    
    total_items = sum(len(s.get("items", [])) for s in scenes)
    print(f"   ✅ [Step 2/3] 完成，共拆解为 {total_items} 个 Item。")

    # 第三步：分 Item 循环拆解 text 和锚定词
    print("   [Step 3/3] 正在循环拆解 Text 与 Anchors...")
    for scene in scenes:
        scene_text_full = scene.get("text", "")
        for item in scene.get("items", []):
            # 💡 强制清理 Step 2 可能产生的冗余 AI 注入字段，确保 Step 3 参数纯净且不重复
            allowed_keys = {"order", "narrativeType", "reasoning", "template", "text"}
            redundant_keys = [k for k in item.keys() if k not in allowed_keys]
            for rk in redundant_keys:
                item.pop(rk)

            _analyze_param_for_item(client, model, scene_text_full, item, TEMPLATE_REGISTRY)

    print("   ✅ [Step 3/3] 完成。")

    # 清理多余的用于传递的临时字段 (text)
    for scene in scenes:
        scene.pop("text", None)
        for item in scene.get("items", []):
            item.pop("text", None)

    # 添加 fps
    result["fps"] = fps

    default_tmpl = config.get("default_template", "CENTER_FOCUS")
    _, v_warnings = validate_and_normalize_scene_scripts(
        result, TEMPLATE_REGISTRY, default_template=default_tmpl
    )
    if v_warnings:
        print("\n⚠️ 脚本校验与归一化（请人工复核）：")
        for w in v_warnings:
            print(f"   {w}")

    if v_warnings and config.get("step1_retry_on_validate_warnings", True):
        print("\n🔄 根据校验告警尝试自动修订（最多 1 次）…")
        try:
            fixed = _gemini_fix_after_warnings(
                client, model, text, result, v_warnings, template_guide
            )
            fixed["fps"] = fps
            _, w2 = validate_and_normalize_scene_scripts(
                fixed, TEMPLATE_REGISTRY, default_template=default_tmpl
            )
            if w2:
                print("⚠️ 修订后仍有告警：")
                for w in w2:
                    print(f"   {w}")
            else:
                print("✅ 修订后校验无告警。")
            result = fixed
        except (ValueError, json.JSONDecodeError) as ex:
            print(f"⚠️ 自动修订失败，保留初稿：{ex}")

    return result


def main():
    parser = argparse.ArgumentParser(description="Step 1: 口播文案分析（模板驱动 v3）")
    parser.add_argument("--input", "-i", required=True, help="口播文案文件路径")
    parser.add_argument("--output", "-o", required=True, help="输出目录路径")
    parser.add_argument("--name", "-n", help="视频名称（英文，不填则读取 config.json）")
    args = parser.parse_args()

    script_dir = Path(__file__).parent
    load_env(script_dir)
    config = load_config(script_dir)

    input_path = Path(args.input)
    if not input_path.exists():
        print(f"❌ 文案文件不存在: {input_path}")
        return False

    video_name = args.name or config.get("package_name", "my_video")
    output_dir = Path(args.output)

    _cleanup_related_resources(video_name, output_dir, config, script_dir)
    _set_ai_log_path(output_dir, video_name)

    with open(input_path, "r", encoding="utf-8") as f:
        text = f.read().strip()

    if not text:
        print("❌ 文案内容为空")
        return False

    print(f"📄 读取文案: {len(text)} 字符")

    result = analyze_with_gemini(text, config)
    _inject_preview_timings(result, config.get("fps", 30), config)

    output_dir.mkdir(parents=True, exist_ok=True)
    output_path = output_dir / "scene-scripts.json"

    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(result, f, ensure_ascii=False, indent=2)

    # 统计信息
    scenes = result.get("scenes", [])
    total_items = sum(len(s.get("items", [])) for s in scenes)
    template_counts = {}
    for s in scenes:
        for it in s.get("items", []):
            t = it.get("template", "?")
            template_counts[t] = template_counts.get(t, 0) + 1

    print("\n✅ 文案分析完成!")
    print(f"   📦 视频名: {video_name}")
    print(f"   📊 主题: {result.get('topic', '未知')}")
    print(f"   🎬 场景数: {len(scenes)}")
    print(f"   📝 文案条目: {total_items}")
    print(f"   🎨 模板分布: {template_counts}")
    print(f"   💾 保存到: {output_path}")
    if _AI_LOG_PATH is not None:
        print(f"   🧾 AI日志: {_AI_LOG_PATH}")

    return True


if __name__ == "__main__":
    success = main()
    exit(0 if success else 1)
