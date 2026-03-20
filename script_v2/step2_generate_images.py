#!/usr/bin/env python3
"""
Step 2: AI 图片生成（3×3 网格批量 + 透明化）
将 scene-scripts.json 中所有 imagePrompt 扁平化，每 9 个为一批生成一张 3×3 网格图，
再用 Pillow 裁剪为单张并去除白底为透明 PNG。

用法：
  python step2_generate_images.py --input scene-scripts.json --output public/images/video_name
  python step2_generate_images.py --input path/to/scene-scripts.json --output public/images/video_name --scene scene1
"""

import argparse
import json
import os
import time
from pathlib import Path

try:
    from PIL import Image
except ImportError:
    Image = None


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


def remove_white_background(img: "Image.Image", threshold: int = 240) -> "Image.Image":
    """白底转透明，亮度 > threshold 的像素 alpha=0。"""
    if Image is None:
        return img
    img = img.convert("RGBA")
    grayscale = img.convert("L")
    alpha = grayscale.point(lambda p: 0 if p > threshold else 255)
    img.putalpha(alpha)
    return img


def is_imagen_model(model: str) -> bool:
    """判断是否是 Imagen 模型（使用 generate_images API）"""
    return "imagen" in model.lower()


def generate_image(
    client,
    model: str,
    prompt: str,
    output_path: Path,
    aspect_ratio: str = "1:1",
    image_size: str = "1K",
) -> bool:
    """根据模型类型自动选择 API 生成图片"""
    if is_imagen_model(model):
        return _generate_with_imagen(client, model, prompt, output_path, aspect_ratio)
    return _generate_with_gemini(
        client, model, prompt, output_path, aspect_ratio, image_size
    )


def _generate_with_imagen(
    client, model: str, prompt: str, output_path: Path, aspect_ratio: str
) -> bool:
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
        print("  ⚠️ 未生成图片")
        return False
    except Exception as e:
        print(f"  ❌ Imagen API 失败: {e}")
        return False


def _generate_with_gemini(
    client,
    model: str,
    prompt: str,
    output_path: Path,
    aspect_ratio: str = "1:1",
    image_size: str = "1K",
) -> bool:
    from google.genai import types

    try:
        response = client.models.generate_content(
            model=model,
            contents=prompt,
            config=types.GenerateContentConfig(
                response_modalities=["IMAGE"],
                image_config=types.ImageConfig(
                    aspect_ratio=aspect_ratio,
                    image_size=image_size,
                ),
            ),
        )
        for part in response.candidates[0].content.parts:
            if part.inline_data and part.inline_data.mime_type.startswith("image/"):
                with open(output_path, "wb") as f:
                    f.write(part.inline_data.data)
                return True
            if hasattr(part, "as_image") and callable(part.as_image):
                if image := part.as_image():
                    image.save(str(output_path))
                    return True
        print("  ⚠️ Gemini 未返回图片")
        return False
    except Exception as e:
        print(f"  ❌ Gemini 生图失败: {e}")
        return False


def main():
    parser = argparse.ArgumentParser(
        description="Step 2: AI 图片生成（3×3 网格批量 + 透明 PNG）"
    )
    parser.add_argument("--input", "-i", required=True, help="scene-scripts.json 路径")
    parser.add_argument("--output", "-o", required=True, help="图片输出目录")
    parser.add_argument("--scene", "-s", help="只生成指定场景的图片")
    parser.add_argument(
        "--delay", "-d", type=float, default=2.0, help="每批网格图间隔秒数（避免限流）"
    )
    args = parser.parse_args()

    script_dir = Path(__file__).parent
    load_env(script_dir)
    config = load_config(script_dir)

    api_key = os.environ.get("GEMINI_API_KEY", "")
    if not api_key:
        print("❌ 未设置 GEMINI_API_KEY")
        return False

    if Image is None:
        print("❌ 请安装 Pillow: pip install Pillow")
        return False

    from google import genai

    client = genai.Client(api_key=api_key)

    input_path = Path(args.input)
    if not input_path.exists():
        print(f"❌ 文件不存在: {input_path}")
        return False

    with open(input_path, "r", encoding="utf-8") as f:
        scripts_data = json.load(f)

    output_dir = Path(args.output)
    output_dir.mkdir(parents=True, exist_ok=True)

    image_style = config.get("image_style", "")
    grid_aspect_ratio = "1:1"
    image_size = config.get("image_size", "1K")

    # ① 收集：扁平化 (scene_id, order, imagePrompt[, suffix])
    # SPLIT_COMPARE 时 imagePrompt 为 {left, right}，展开为两条：_left / _right
    items_flat = []
    for scene in scripts_data.get("scenes", []):
        scene_id = scene["sceneId"]
        if args.scene and scene_id != args.scene:
            continue
        for item in scene.get("items", []):
            raw_prompt = item.get("imagePrompt")
            layout = item.get("layout", "CENTER_FOCUS")
            if layout == "SPLIT_COMPARE" and isinstance(raw_prompt, dict):
                left_p = (raw_prompt.get("left") or "").strip()
                right_p = (raw_prompt.get("right") or "").strip()
                if left_p:
                    items_flat.append(
                        {
                            "scene_id": scene_id,
                            "order": item["order"],
                            "imagePrompt": left_p,
                            "suffix": "left",
                        }
                    )
                if right_p:
                    items_flat.append(
                        {
                            "scene_id": scene_id,
                            "order": item["order"],
                            "imagePrompt": right_p,
                            "suffix": "right",
                        }
                    )
                continue
            prompt = (raw_prompt if isinstance(raw_prompt, str) else "").strip()
            if not prompt:
                continue
            items_flat.append(
                {"scene_id": scene_id, "order": item["order"], "imagePrompt": prompt}
            )

    if not items_flat:
        print("❌ 无有效 imagePrompt")
        return False

    # ② 分批：每 9 个一批
    batch_size = 9
    chunks = [
        items_flat[i : i + batch_size]
        for i in range(0, len(items_flat), batch_size)
    ]

    print(f"🎨 开始生成场景配图（3×3 网格批量，共 {len(items_flat)} 张 → {len(chunks)} 次 API）")
    print(f"   📐 网格宽高比: {grid_aspect_ratio}")
    print(f"   📂 输出: {output_dir}")

    success_count = 0
    fail_count = 0

    for batch_idx, batch in enumerate(chunks):
        # ③ 网格 Prompt：不足 9 个用 empty white cell 补白
        style_suffix = f" Style for ALL cells: {image_style}." if image_style else ""
        lines = [
            "A 3x3 grid image with exactly 9 equal cells.",
            "CRITICAL: absolutely NO borders, NO dividing lines, NO grid lines, NO separators, NO outlines between cells. Each cell occupies exactly 1/9 of the image with no visual separation whatsoever.",
            "CRITICAL - NO TEXT: The image must contain ZERO text. No letters, no numbers, no words, no captions, no labels, no subtitles, no signs, no writing of any kind in any language. Each cell must be pure visual imagery only (illustration, photo, diagram without text). If the prompt describes text or text content, ignore that and show only the non-text visual part.",
            "",
        ]
        for i in range(9):
            row, col = i // 3 + 1, i % 3 + 1
            if i < len(batch):
                cell_prompt = batch[i]["imagePrompt"]
                lines.append(f"Row {row}, Col {col}: {cell_prompt} (visual only, no text no letters no numbers)")
            else:
                lines.append(f"Row {row}, Col {col}: (empty white cell, no content)")
        lines.append("FINAL RULE: The entire 3x3 image must have no text anywhere. Pure pictures only.")
        lines.append(style_suffix)
        grid_prompt = "\n".join(lines)

        grid_path = output_dir / f"_grid_{batch_idx}.png"
        preview = batch[0]["imagePrompt"][:50] + "..." if batch else ""
        print(f"\n📦 批次 {batch_idx + 1}/{len(chunks)}: {len(batch)} 张 → 1 次 API")
        print(f"    首条: {preview}")

        if not generate_image(
            client,
            config.get("imagen_model", "gemini-3.1-flash-image-preview"),
            grid_prompt,
            grid_path,
            grid_aspect_ratio,
            image_size,
        ):
            fail_count += len(batch)
            if grid_path.exists():
                grid_path.unlink()
            if args.delay > 0:
                time.sleep(args.delay)
            continue

        # ④ 裁剪 + 去白底（内缩 8px 去掉可能残留的格线/边框）
        try:
            img = Image.open(grid_path).convert("RGBA")
            w, h = img.size
            cell_w, cell_h = w // 3, h // 3
            margin = 8
            for i, item in enumerate(batch):
                row, col = i // 3, i % 3
                left = col * cell_w + margin
                top = row * cell_h + margin
                right = (col + 1) * cell_w - margin
                bottom = (row + 1) * cell_h - margin
                cell = img.crop((left, top, right, bottom))
                cell = remove_white_background(cell, threshold=240)
                suffix = item.get("suffix")
                if suffix:
                    out_path = output_dir / f"{item['scene_id']}_{item['order']}_{suffix}.png"
                else:
                    out_path = output_dir / f"{item['scene_id']}_{item['order']}.png"
                cell.save(out_path)
                print(f"     ✅ {out_path.name}")
                success_count += 1
        except Exception as e:
            print(f"     ❌ 裁剪/去背失败: {e}")
            fail_count += len(batch)
        finally:
            if grid_path.exists():
                grid_path.unlink()

        if args.delay > 0:
            time.sleep(args.delay)

    print(f"\n{'='*40}")
    print(f"✅ 成功: {success_count} | ❌ 失败: {fail_count}")
    return fail_count == 0


if __name__ == "__main__":
    success = main()
    exit(0 if success else 1)
