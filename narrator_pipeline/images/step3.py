#!/usr/bin/env python3
"""
Step 3: AI 图片生成（模板驱动版）
从 scene-scripts.json 中读取每个 item 的 param，
通过 template_registry 识别图片字段，批量生成图片并替换提示词为文件路径。

用法：
  python -m narrator_pipeline.images.step3 --name video_name
"""

import argparse
import base64
import json
import os
import time
from pathlib import Path
from typing import Any, Literal

from narrator_pipeline.paths import PACKAGE_ROOT, resolve_video_paths
try:
    from PIL import Image
except ImportError:
    Image = None

from narrator_pipeline.contracts.param_schema_tools import apply_image_task_results, iter_image_prompt_tasks
from narrator_pipeline.contracts.template_registry import get_template
from narrator_pipeline.common import load_config, load_env


def remove_white_background(img: "Image.Image", threshold: int = 240) -> "Image.Image":
    """白底转透明，亮度 > threshold 的像素 alpha=0。"""
    if Image is None:
        return img
    img = img.convert("RGBA")
    grayscale = img.convert("L")
    alpha = grayscale.point(lambda p: 0 if p > threshold else 255)
    img.putalpha(alpha)
    return img


ImageProvider = Literal["gemini", "gpt"]


def normalize_image_provider(value: Any) -> ImageProvider:
    v = str(value or "gemini").strip().lower()
    if v in ("gpt", "openai", "oai"):
        return "gpt"
    return "gemini"


def resolve_grid_pixel_size(aspect_ratio: str, image_size: str) -> str:
    """将网格宽高比 + 尺寸档位映射为 GPT Images API 的 WIDTHxHEIGHT（宽高须能被 16 整除）。"""
    size_key = str(image_size or "1K").strip().upper()
    base = 2048 if size_key == "2K" else 1024

    ratio = str(aspect_ratio or "1:1").strip()
    if ratio == "1:1":
        return f"{base}x{base}"

    parts = ratio.replace("/", ":").split(":")
    if len(parts) != 2:
        return f"{base}x{base}"
    try:
        w_ratio, h_ratio = int(parts[0]), int(parts[1])
    except ValueError:
        return f"{base}x{base}"
    if w_ratio <= 0 or h_ratio <= 0:
        return f"{base}x{base}"

    if w_ratio >= h_ratio:
        width = base
        height = round(base * h_ratio / w_ratio)
    else:
        height = base
        width = round(base * w_ratio / h_ratio)

    width = max(16, (width // 16) * 16)
    height = max(16, (height // 16) * 16)
    return f"{width}x{height}"


def is_imagen_model(model: str) -> bool:
    """判断是否是 Imagen 模型"""
    return "imagen" in model.lower()


def generate_grid_image(
    provider: ImageProvider,
    client: Any,
    model: str,
    prompt: str,
    output_path: Path,
    aspect_ratio: str = "1:1",
    image_size: str = "1K",
    gpt_quality: str = "medium",
) -> bool:
    """按 image_provider 选择 API 生成 3×3 网格整图。"""
    if provider == "gpt":
        pixel_size = resolve_grid_pixel_size(aspect_ratio, image_size)
        return _generate_with_gpt(
            client, model, prompt, output_path, pixel_size, gpt_quality
        )
    if is_imagen_model(model):
        return _generate_with_imagen(client, model, prompt, output_path, aspect_ratio)
    return _generate_with_gemini(
        client, model, prompt, output_path, aspect_ratio, image_size
    )


def _generate_with_gpt(
    client: Any,
    model: str,
    prompt: str,
    output_path: Path,
    pixel_size: str,
    quality: str,
) -> bool:
    try:
        response = client.images.generate(
            model=model,
            prompt=prompt,
            size=pixel_size,
            quality=quality,
        )
        if not response.data:
            print("  ⚠️ GPT 未返回图片")
            return False
        image_b64 = response.data[0].b64_json
        if not image_b64:
            print("  ⚠️ GPT 响应缺少 b64_json")
            return False
        with open(output_path, "wb") as f:
            f.write(base64.b64decode(image_b64))
        return True
    except Exception as e:
        print(f"  ❌ GPT Image API 失败: {e}")
        return False


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


# ─────────────────────────────────────────────────────────────
# 从 param 中收集图片提示词
# ─────────────────────────────────────────────────────────────

def collect_image_tasks(scripts_data: dict, scene_filter: str = None) -> tuple[list, int]:
    """
    按模板 param_schema 递归收集 format=image_prompt 的叶子，生成扁平任务列表。
    返回 (待生成任务列表, 已跳过的已生成图片数)。
    """
    tasks = []
    skipped = 0
    for scene in scripts_data.get("scenes", []):
        scene_id = scene["sceneId"]
        if scene_filter and scene_id != scene_filter:
            continue
        for item in scene.get("items", []):
            template_name = item.get("template", "CENTER_FOCUS")
            param = item.get("param", {})
            tmpl = get_template(template_name)
            schema = tmpl.get("param_schema") or {}
            sub = iter_image_prompt_tasks(
                param if isinstance(param, dict) else {},
                schema if isinstance(schema, dict) else {},
                scene_id=scene_id,
                order=item["order"],
                include_generated=True,
            )
            for t in sub:
                if t["already_generated"]:
                    skipped += 1
                    continue
                tasks.append({
                    "scene_id": t["scene_id"],
                    "order": t["order"],
                    "field_name": t["field_name"],
                    "prompt": t["prompt"],
                    "array_index": t["array_index"],
                    "position": t["position"],
                    "task_key": t["task_key"],
                })
    return tasks, skipped


def get_output_filename(task: dict) -> str:
    """根据任务生成输出文件名"""
    base = f"{task['scene_id']}_{task['order']}"
    if task["array_index"] is not None:
        return f"{base}_img{task['array_index']}.png"
    if task["field_name"] in ("leftSrc", "rightSrc"):
        side = "left" if task["field_name"] == "leftSrc" else "right"
        return f"{base}_{side}.png"
    if task["field_name"] in ("left", "right"):
        return f"{base}_{task['field_name']}.png"
    return f"{base}.png"


def apply_image_paths(scripts_data: dict, task_results: dict):
    """
    将生成的图片路径回写到 scene-scripts.json 的 param 中。
    task_results: {task_key: relative_path}
    """
    for scene in scripts_data.get("scenes", []):
        for item in scene.get("items", []):
            param = item.get("param", {})
            if not isinstance(param, dict):
                continue
            template_name = item.get("template", "CENTER_FOCUS")
            tmpl = get_template(template_name)
            schema = tmpl.get("param_schema") or {}
            apply_image_task_results(
                param,
                schema if isinstance(schema, dict) else {},
                task_results,
                scene_id=scene["sceneId"],
                order=item["order"],
            )


def main():
    parser = argparse.ArgumentParser(
        description="Step 3: AI 图片生成（模板驱动版）"
    )
    parser.add_argument(
        "--name",
        "-n",
        required=True,
        help="视频名称（推导 scene-scripts.json 与图片输出目录）",
    )
    parser.add_argument("--scene", "-s", help="只生成指定场景的图片")
    parser.add_argument(
        "--delay", "-d", type=float, default=2.0, help="每批网格图间隔秒数（避免限流）"
    )
    args = parser.parse_args()

    script_dir = PACKAGE_ROOT
    load_env(script_dir)
    config = load_config(script_dir)

    image_provider = normalize_image_provider(config.get("image_provider", "gemini"))
    gpt_quality = str(config.get("gpt_image_quality", "medium")).strip() or "medium"

    if Image is None:
        print("❌ 请安装 Pillow: pip install Pillow")
        return False

    if image_provider == "gpt":
        api_key = os.environ.get("OPENAI_API_KEY", "")
        if not api_key:
            print("❌ 未设置 OPENAI_API_KEY（image_provider=gpt）")
            return False
        from openai import OpenAI

        client = OpenAI(api_key=api_key)
        image_model = str(config.get("gpt_image_model", "gpt-image-2")).strip() or "gpt-image-2"
    else:
        api_key = os.environ.get("GEMINI_API_KEY", "")
        if not api_key:
            print("❌ 未设置 GEMINI_API_KEY")
            return False
        from google import genai

        client = genai.Client(api_key=api_key)
        image_model = str(
            config.get("imagen_model", "gemini-3.1-flash-image-preview")
        ).strip() or "gemini-3.1-flash-image-preview"

    paths = resolve_video_paths(args.name, config)
    input_path = paths.scene_scripts
    if not input_path.exists():
        print(f"❌ 文件不存在: {input_path}")
        return False

    with open(input_path, "r", encoding="utf-8") as f:
        scripts_data = json.load(f)

    output_dir = paths.images_dir
    output_dir.mkdir(parents=True, exist_ok=True)

    image_style = config.get("image_style", "")
    grid_aspect_ratio = "1:1"
    image_size = config.get("image_size", "1K")

    # ① 收集图片任务
    tasks, skipped = collect_image_tasks(scripts_data, args.scene)

    if skipped:
        print(f"⏭️  跳过 {skipped} 张已生成的图片（images/ 路径）")

    if not tasks:
        print("✅ 无图片需要生成" if skipped else "❌ 未找到任何图片字段")
        return skipped > 0

    # ② 分批：每 9 个一批
    batch_size = 9
    chunks = [
        tasks[i: i + batch_size]
        for i in range(0, len(tasks), batch_size)
    ]

    grid_pixel_size = (
        resolve_grid_pixel_size(grid_aspect_ratio, image_size)
        if image_provider == "gpt"
        else None
    )

    print(f"🎨 开始生成场景配图（3×3 网格批量，共 {len(tasks)} 张 → {len(chunks)} 次 API）")
    print(f"   🖼️  provider: {image_provider} | model: {image_model}")
    print(f"   📐 网格宽高比: {grid_aspect_ratio} | 尺寸档位: {image_size}")
    if grid_pixel_size:
        print(f"   📏 GPT 像素: {grid_pixel_size} | quality: {gpt_quality}")
    print(f"   📂 输出: {output_dir}")

    success_count = 0
    fail_count = 0
    # task_key → relative_path
    task_results = {}

    # 计算图片相对路径前缀（用于写入 JSON）
    project_root = paths.project_root
    rel_prefix = str(output_dir.relative_to(project_root / "public")).replace("\\", "/")

    for batch_idx, batch in enumerate(chunks):
        # ③ 网格 Prompt
        style_suffix = f" Style for ALL cells: {image_style}." if image_style else ""
        lines = [
            "A 3x3 grid image with exactly 9 equal cells.",
            "CRITICAL: absolutely NO borders, NO dividing lines, NO grid lines, NO separators, NO outlines between cells.",
            "CRITICAL - NO TEXT: The image must contain ZERO text. No letters, no numbers, no words, no captions.",
            "CRITICAL - WHITE BACKGROUND ONLY: Every cell MUST have a pure white background. "
            "NO black, dark gray, colored, gradient, or textured backgrounds. "
            "Subjects are bold thick black line art on pure white only. "
            "Use heavy comic-style outlines with thick strokes. "
            "NO thin hairline, NO pencil sketch, NO delicate minimalist lines.",
            "",
        ]
        for i in range(9):
            row, col = i // 3 + 1, i % 3 + 1
            if i < len(batch):
                cell_prompt = batch[i]["prompt"]
                lines.append(f"Row {row}, Col {col}: {cell_prompt} (visual only, no text)")
            else:
                lines.append(f"Row {row}, Col {col}: (empty white cell, no content)")
        lines.append("FINAL RULE: The entire 3x3 image must have no text anywhere. Pure pictures only.")
        lines.append(style_suffix)
        grid_prompt = "\n".join(lines)

        grid_path = output_dir / f"_grid_{batch_idx}.png"
        preview = batch[0]["prompt"][:50] + "..." if batch else ""
        print(f"\n📦 批次 {batch_idx + 1}/{len(chunks)}: {len(batch)} 张 → 1 次 API")
        print(f"    首条: {preview}")

        if not generate_grid_image(
            image_provider,
            client,
            image_model,
            grid_prompt,
            grid_path,
            grid_aspect_ratio,
            image_size,
            gpt_quality,
        ):
            fail_count += len(batch)
            if grid_path.exists():
                grid_path.unlink()
            if args.delay > 0:
                time.sleep(args.delay)
            continue

        # ④ 裁剪 + 去白底
        try:
            img = Image.open(grid_path).convert("RGBA")
            w, h = img.size
            cell_w, cell_h = w // 3, h // 3
            margin = 8
            for i, task in enumerate(batch):
                row, col = i // 3, i % 3
                left = col * cell_w + margin
                top = row * cell_h + margin
                right = (col + 1) * cell_w - margin
                bottom = (row + 1) * cell_h - margin
                cell = img.crop((left, top, right, bottom))
                cell = remove_white_background(cell, threshold=240)

                out_name = get_output_filename(task)
                out_path = output_dir / out_name
                cell.save(out_path)
                print(f"     ✅ {out_name}")
                success_count += 1

                task_results[task["task_key"]] = f"{rel_prefix}/{out_name}"

        except Exception as e:
            print(f"     ❌ 裁剪/去背失败: {e}")
            fail_count += len(batch)
        finally:
            if grid_path.exists():
                grid_path.unlink()

        if args.delay > 0:
            time.sleep(args.delay)

    # ⑤ 回写路径到 scene-scripts.json
    if task_results:
        apply_image_paths(scripts_data, task_results)
        with open(input_path, "w", encoding="utf-8") as f:
            json.dump(scripts_data, f, ensure_ascii=False, indent=2)
        print(f"\n📝 已将图片路径回写到 {input_path}")

    print(f"\n{'='*40}")
    print(f"✅ 成功: {success_count} | ❌ 失败: {fail_count}")
    return fail_count == 0


if __name__ == "__main__":
    success = main()
    exit(0 if success else 1)
