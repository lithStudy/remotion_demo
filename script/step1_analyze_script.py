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
3. **每个 item 都必须包含一个 `imagePrompt` 字段**，用中文描述该条文案对应的配图画面
4. imagePrompt 要求：
   - 使用中文描述
   - 风格统一：{image_style}
   - 画面要与该条 item 的文案内容紧密关联
   - 绝对不要包含任何长段的文字文案描述，只描述视觉画面和重点名词的标注如国家名、人名、地名、机构名等（文案将以字幕方式叠加显示）
   - 描述要具体、生动，适合AI图片生成
5. **所有 item 的 type 统一为「正文」**，不要使用标题、副标题等类型

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
          "text": [
            "第一句短句，",
            "拆分出来的第二短句，",
            "这是第三短句。"
          ],
          "imagePrompt": "该条文案对应的配图画面描述，不包含文字"
        }},
        {{
          "order": 2,
          "type": "正文",
          "text": [
            "这里也必须是原来形式拆分后的多段数组格式。"
          ],
          "imagePrompt": "该条文案对应的另一张配图画面描述"
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
    parser.add_argument("--name", "-n", required=True, help="视频名称（英文）")
    args = parser.parse_args()

    script_dir = Path(__file__).parent
    load_env(script_dir)
    config = load_config(script_dir)

    # 读取文案
    input_path = Path(args.input)
    if not input_path.exists():
        print(f"❌ 文案文件不存在: {input_path}")
        return False

    with open(input_path, "r", encoding="utf-8") as f:
        text = f.read().strip()

    if not text:
        print("❌ 文案内容为空")
        return False

    print(f"📄 读取文案: {len(text)} 字符")

    # 分析文案
    result = analyze_with_gemini(text, config)

    # 清理每句话末尾的标点，整理生成的内容
    for scene in result.get('scenes', []):
        for item in scene.get('items', []):
            if 'text' in item:
                new_text = []
                for t in item['text']:
                    t = re.sub(r'[，。！？,\.\!\?]+$', '', t)
                    new_text.append(t)
                item['text'] = new_text

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
