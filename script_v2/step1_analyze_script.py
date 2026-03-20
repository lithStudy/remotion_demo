#!/usr/bin/env python3
"""
Step 1: 口播文案分析
将口播文案拆解为场景脚本JSON，包含画面描述(imagePrompt)。
使用 Gemini API 进行智能拆解。

用法：
  python step1_analyze_script.py --input 文案.txt --output output_dir --name video_name
"""

import argparse
import json
import os
import re
from pathlib import Path
from datetime import datetime, timezone

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

def analyze_with_gemini(text: str, config: dict) -> dict:
    """调用 Gemini 分析文案，生成场景脚本"""
    from google import genai

    api_key = os.environ.get("GEMINI_API_KEY", "")
    if not api_key:
        raise ValueError("未设置 GEMINI_API_KEY，请在 .env 中配置")

    client = genai.Client(api_key=api_key)
    image_style = config.get("image_style", "Modern digital illustration")

    prompt = f"""你是一个专业的短视频脚本策划师。请将以下口播文案拆解为场景脚本。

## 口播文案
{text}

## ⚠️ 核心规则（必须遵守）

**text 字段必须使用原始文案的原文**，严禁缩写、改写、概括或重新措辞！
- 每一张配图（每一个 item）对应的原文，往往包含多句话。为了让字幕展示更美观、短促，请按自然停顿或标点（如逗号、句号、分号）将其拆分成短句，放在数组中返回（text 字段必须是数组格式 `["短句1", "短句2"...]`）。每一个短句将生成一段独立的音频和字幕
- text 数组中的每一句连起来，必须精确等于对应的原文部分，不能修改或遗漏。

## 要求

1. 将文案按内容逻辑拆解为 4-10 个场景（scene），每个场景包含若干连续的文案条目（item）,按照适合制作独立配图的维度拆分item,item尽可能的拆分的多一些,一个item不应该有超过5个text
2. 场景结构：开场 → 内容场景 → 结尾
3. **每个 item 都必须包含一个 `imagePrompt` 字段**，用中文描述该条文案对应的配图画面。
   - **除 SPLIT_COMPARE 外**：imagePrompt 为字符串，描述整张配图。
   - **当 layout 为 "SPLIT_COMPARE" 时**：imagePrompt 必须为对象，包含 "left" 和 "right" 两个键，分别描述左侧画面（A方/对比前）和右侧画面（B方/对比后）；并可选的 "leftLabel"、"rightLabel" 作为左右侧显示的短标签（如 "方案A"、"方案B" 或数据项名称）。
4. imagePrompt 要求：
   - 使用中文描述
   - 风格统一：{image_style}
   - 画面要与该条 item 的文案内容紧密关联
   - 绝对不要包含任何长段的文字文案描述，只描述视觉画面和重点名词的标注如国家名、人名、地名、机构名等（文案将以字幕方式叠加显示）
   - 描述要具体、生动，适合AI图片生成
5. **所有 item 的 type 统一为「正文」**，不要使用标题、副标题等类型

6. **每个 item 必须包含以下字段**（与 BW 短视频视觉锚点与音效同步）：
   - **anchor**：与 text 等长的数组。**宜少不宜多，每条 item 最多只标 1～2 个锚点**，其余位置一律填 null，避免观众注意力分散。
     - 只选真正值得强调的：数字、关键专有名词、转折/冲击词（如 "60%"、"失业"、"陷阱"）
     - 概念词（原文中不存在的抽象词，如 "失控"）可配合 ALERT_STYLE 使用
   - **audio_effect**：与 anchor 等长的数组。仅在有 anchor 的对应位置填音效，无音效填 null。
     - "impact_thud"：冲击音，配合转折/揭露/概念词
     - "woosh"：过渡音，配合场景切换/对比
     - "ping"：点击音，配合数字/结论
   - **layout**：item 级单值，根据整体内容情绪选择其一：
     - "CENTER_FOCUS"：中心大词+单图（默认，定义/事实类）
     - "SPLIT_COMPARE"：左右对撞（数据对比/A-B对比）。此时 imagePrompt 必须为 {{ "left": "左侧画面描述", "right": "右侧画面描述" }}，可另加 "leftLabel"、"rightLabel" 短标签
     - "STEP_LIST"：层级列表（步骤/推导）
     - "ALERT_STYLE"：全屏反色/震动（揭露套路/重大转折）
   - **image_effect**：图片入场动画，根据内容情绪选择：
     - "breathe"：平静叙述、定义类内容（默认）
     - "zoomIn"：重要数据、引人注目的事实
     - "slideLeft"：顺序推进、因果关系
     - "slideBottom"：揭晓、转折、冲击性结论
     - "fadeIn"：收尾、总结、平缓过渡
   - **anchor_color**：与 anchor 等长的数组，根据情绪/内容语义为每个锚点指定颜色，无锚点处填 null：
     - "#E53E3E"：危险/负面/警告词（失业、陷阱、崩溃、骗局）
     - "#FF8C00"：注意/质疑/反直觉词（财富密码、套路、陷阱）
     - "#2B6CB0"：事实/数据/中性专有名词（百分比数字、相关性、研究）
     - "#276749"：正面/结论/建议词（理性、正确、有效）
     - "#805AD5"：认知/洞察/抽象概念词（幻觉、本质、规律）
   - **anchor_anim**：与 anchor 等长的数组，为每个锚点指定动画样式，无锚点处填 null：
     - "spring"：通用弹性入场（默认）
     - "slideUp"：事实揭示、数据出现（配合 ping）
     - "popIn"：高冲击词、转折词（配合 impact_thud）
     - "highlight"：正面结论、关键建议

## 输出格式

严格输出以下JSON格式（不要包含markdown代码块标记）：
{{
  "topic": "主题名称",
  "generatedAt": "{datetime.now(timezone.utc).isoformat()}",
  "fps": {config.get("fps", 30)},
  "scenes": [
    {{
      "sceneId": "scene1",
      "sceneName": "场景名称",
      "items": [
        {{
          "order": 1,
          "type": "正文",
          "text": ["第一句短句，", "拆分出来的第二短句，", "这是第三短句。"],
          "anchor": [null, "关键词", null],
          "audio_effect": [null, "ping", null],
          "anchor_color": [null, "#2B6CB0", null],
          "anchor_anim": [null, "slideUp", null],
          "image_effect": "breathe",
          "layout": "CENTER_FOCUS",
          "imagePrompt": "该条文案对应的配图画面描述，不包含文字"
        }},
        {{
          "order": 2,
          "type": "正文",
          "text": ["这里也必须是原来形式拆分后的多段数组格式。"],
          "anchor": ["冲击词"],
          "audio_effect": ["impact_thud"],
          "anchor_color": ["#E53E3E"],
          "anchor_anim": ["popIn"],
          "image_effect": "slideBottom",
          "layout": "ALERT_STYLE",
          "imagePrompt": "该条文案对应的另一张配图画面描述"
        }},
        {{
          "order": 3,
          "type": "正文",
          "text": ["数据对比的短句。"],
          "anchor": [null],
          "audio_effect": [null],
          "anchor_color": [null],
          "anchor_anim": [null],
          "image_effect": "slideLeft",
          "layout": "SPLIT_COMPARE",
          "imagePrompt": {{ "left": "左侧画面描述（A方或对比前）", "right": "右侧画面描述（B方或对比后）" }},
          "leftLabel": "A方",
          "rightLabel": "B方"
        }}
      ]
    }}
  ]
}}"""

    print("🤖 正在调用 Gemini 分析文案...")
    response = client.models.generate_content(
        model=config.get("gemini_model", "gemini-2.0-flash"),
        contents=prompt,
    )

    response_text = response.text.strip()
    # 移除可能的 markdown 代码块包裹
    if response_text.startswith("```"):
        response_text = re.sub(r'^```(?:json)?\s*\n?', '', response_text)
        response_text = re.sub(r'\n?```\s*$', '', response_text)

    try:
        result = json.loads(response_text)
    except json.JSONDecodeError as e:
        print(f"⚠️ JSON解析失败，尝试修复...")
        print(f"原始输出前200字符: {response_text[:200]}")
        raise ValueError(f"Gemini 返回的JSON格式无效: {e}")

    return result

def main():
    parser = argparse.ArgumentParser(description="Step 1: 口播文案分析")
    parser.add_argument("--input", "-i", required=True, help="口播文案文件路径")
    parser.add_argument("--output", "-o", required=True, help="输出目录路径")
    parser.add_argument("--name", "-n", help="视频名称（英文，不填则读取 config.json）")
    args = parser.parse_args()

    script_dir = Path(__file__).parent
    load_env(script_dir)
    config = load_config(script_dir)

    # 读取文案
    input_path = Path(args.input)
    if not input_path.exists():
        print(f"❌ 文案文件不存在: {input_path}")
        return False

    name = args.name or config.get("package_name", "my_video")

    with open(input_path, "r", encoding="utf-8") as f:
        text = f.read().strip()

    if not text:
        print("❌ 文案内容为空")
        return False

    print(f"📄 读取文案: {len(text)} 字符")

    # 分析文案
    result = analyze_with_gemini(text, config)

   

    # 保存结果
    output_dir = Path(args.output)
    output_dir.mkdir(parents=True, exist_ok=True)
    output_path = output_dir / "scene-scripts.json"

    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(result, f, ensure_ascii=False, indent=2)

    # 统计信息
    scenes = result.get("scenes", [])
    total_items = sum(len(s.get("items", [])) for s in scenes)
    print(f"\n✅ 文案分析完成!")
    print(f"   📊 主题: {result.get('topic', '未知')}")
    print(f"   🎬 场景数: {len(scenes)}")
    print(f"   📝 文案条目: {total_items}")
    print(f"   💾 保存到: {output_path}")

    return True

if __name__ == "__main__":
    success = main()
    exit(0 if success else 1)
