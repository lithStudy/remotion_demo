#!/usr/bin/env python3
"""
Step 2: AI 图片生成
根据 scene-scripts.json 中的 imagePrompt，使用 Gemini Imagen API 生成场景配图。

用法：
  python step2_generate_images.py --input scene-scripts.json --output public/images/video_name
  python step2_generate_images.py --input D:\code\study\remotion_test\src\remotions\my_video\scenes\scene-scripts.json --output public/images/video_name --scene scene1
"""

import argparse
import json
import os
import time
from pathlib import Path

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
    config_path = script_dir / "config.json"
    with open(config_path, "r", encoding="utf-8") as f:
        return json.load(f)

def is_imagen_model(model: str) -> bool:
    """判断是否是 Imagen 模型（使用 generate_images API）"""
    return "imagen" in model.lower()

def generate_image(client, model: str, prompt: str, output_path: Path, aspect_ratio: str = "3:4") -> bool:
    """根据模型类型自动选择 API 生成图片"""
    if is_imagen_model(model):
        return _generate_with_imagen(client, model, prompt, output_path, aspect_ratio)
    else:
        return _generate_with_gemini(client, model, prompt, output_path, aspect_ratio)

def _generate_with_imagen(client, model: str, prompt: str, output_path: Path, aspect_ratio: str) -> bool:
    """使用 Imagen API (generate_images) 生成图片"""
    from google.genai import types
    try:
        response = client.models.generate_images(
            model=model,
            prompt=prompt,
            config=types.GenerateImagesConfig(
                number_of_images=1,
                output_mime_type="image/png",
                aspect_ratio=aspect_ratio,
            ),
        )
        if response.generated_images:
            response.generated_images[0].image.save(str(output_path))
            return True
        print(f"  ⚠️ 未生成图片")
        return False
    except Exception as e:
        print(f"  ❌ Imagen API 失败: {e}")
        return False

def _generate_with_gemini(client, model: str, prompt: str, output_path: Path, aspect_ratio: str = "3:4") -> bool:
    """使用 Gemini API (generate_content) 生成图片"""
    from google.genai import types
    try:
        response = client.models.generate_content(
            model=model,
            contents=f"Generate an image with aspect ratio {aspect_ratio} (portrait): {prompt}",
            config=types.GenerateContentConfig(
                response_modalities=["IMAGE"],
            ),
        )
        for part in response.candidates[0].content.parts:
            if part.inline_data and part.inline_data.mime_type.startswith("image/"):
                with open(output_path, "wb") as f:
                    f.write(part.inline_data.data)
                return True
        print(f"  ⚠️ Gemini 未返回图片")
        return False
    except Exception as e:
        print(f"  ❌ Gemini 生图失败: {e}")
        return False

def main():
    parser = argparse.ArgumentParser(description="Step 2: AI 图片生成")
    parser.add_argument("--input", "-i", required=True, help="scene-scripts.json 路径")
    parser.add_argument("--output", "-o", required=True, help="图片输出目录")
    parser.add_argument("--scene", "-s", help="只生成指定场景的图片")
    parser.add_argument("--delay", "-d", type=float, default=2.0, help="每张图片间隔秒数（避免限流）")
    args = parser.parse_args()

    script_dir = Path(__file__).parent
    load_env(script_dir)
    config = load_config(script_dir)

    api_key = os.environ.get("GEMINI_API_KEY", "")
    if not api_key:
        print("❌ 未设置 GEMINI_API_KEY")
        return False

    from google import genai
    client = genai.Client(api_key=api_key)

    # 读取脚本
    input_path = Path(args.input)
    if not input_path.exists():
        print(f"❌ 文件不存在: {input_path}")
        return False

    with open(input_path, "r", encoding="utf-8") as f:
        scripts_data = json.load(f)

    output_dir = Path(args.output)
    output_dir.mkdir(parents=True, exist_ok=True)

    imagen_model = config.get("imagen_model", "imagen-3.0-generate-002")
    image_style = config.get("image_style", "")
    aspect_ratio = config.get("image_aspect_ratio", "3:4")

    print(f"🎨 开始生成场景配图...")
    print(f"   🤖 模型: {imagen_model}")
    print(f"   📐 宽高比: {aspect_ratio}")
    print(f"   📂 输出: {output_dir}")

    success_count = 0
    fail_count = 0

    for scene in scripts_data.get("scenes", []):
        scene_id = scene["sceneId"]

        if args.scene and scene_id != args.scene:
            continue

        print(f"\n📁 场景: {scene['sceneName']} ({scene_id})")

        for item in scene.get("items", []):
            image_prompt = item.get("imagePrompt", "")
            if not image_prompt:
                print(f"  ⏭️ [{item['order']}]: 无 imagePrompt，跳过")
                continue

            # 组合完整提示词
            full_prompt = f"{image_prompt}. Style: {image_style}" if image_style else image_prompt
            output_path = output_dir / f"{scene_id}_{item['order']}.png"

            text_preview = str(item.get('text', ''))[:30] + "..."
            print(f"  🖼️ [{item['order']}] {text_preview}")
            print(f"     Prompt: {image_prompt[:60]}...")

            if generate_image(client, imagen_model, full_prompt, output_path, aspect_ratio):
                print(f"     ✅ 已保存: {output_path.name}")
                success_count += 1
            else:
                fail_count += 1

            # 避免限流
            if args.delay > 0:
                time.sleep(args.delay)

    print(f"\n{'='*40}")
    print(f"✅ 成功: {success_count} | ❌ 失败: {fail_count}")
    return fail_count == 0

if __name__ == "__main__":
    success = main()
    exit(0 if success else 1)
