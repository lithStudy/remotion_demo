#!/usr/bin/env python3
"""
Step 2: AI 图片生成（模板驱动版）
从 scene-scripts.json 中读取每个 item 的 param，
通过 template_registry 识别图片字段，批量生成图片并替换提示词为文件路径。

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

from template_registry import get_image_fields, get_template, image_paths_to_tasks, apply_image_result
from utils import load_config, load_env


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
    """判断是否是 Imagen 模型"""
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


# ─────────────────────────────────────────────────────────────
# 从 param 中收集图片提示词（新架构：基于 image_paths）
# ─────────────────────────────────────────────────────────────

def collect_image_tasks(scripts_data: dict, scene_filter: str = None) -> list:
    """
    遍历所有 item，通过 template_registry 的 image_paths 识别 param 中的图片字段，
    返回扁平化的图片任务列表。

    每个任务包含 image_paths_to_tasks() 返回的字段，并附加：
      "position": str  —— 来自 image item 的 position 字段（若有），否则为 "center"
    """
    tasks = []
    for scene in scripts_data.get("scenes", []):
        scene_id = scene["sceneId"]
        if scene_filter and scene_id != scene_filter:
            continue
        for item in scene.get("items", []):
            template_name = item.get("template", "CENTER_FOCUS")
            param = item.get("param", {})
            image_paths = get_image_fields(template_name)
            item_tasks = image_paths_to_tasks(param, image_paths, scene_id, item.get("order", 0))
            # 对数组项附加 position（主要用于 TIMELINE images[].position）
            for t in item_tasks:
                array_key = t.get("array_key")
                array_index = t.get("array_index")
                field_suffix = t.get("field_suffix")
                if array_key is not None and array_index is not None:
                    arr = param.get(array_key)
                    if isinstance(arr, list) and array_index < len(arr):
                        elem = arr[array_index]
                        if isinstance(elem, dict):
                            # position 优先来自该数组项本身，其次来自其上层（如 image 对象的父对象）
                            pos = elem.get("position")
                            if pos is None and isinstance(field_suffix, str) and "." in field_suffix:
                                parent_key = field_suffix.split(".")[0]
                                parent = elem.get(parent_key)
                                if isinstance(parent, dict):
                                    pos = parent.get("position")
                            t["position"] = pos or "center"
                        else:
                            t["position"] = "center"
                else:
                    t["position"] = None
            tasks.extend(item_tasks)
    return tasks


def _task_key(task: dict) -> str:
    """生成唯一的 task 标识键，用于 task_results 字典的查找与回写。"""
    base = f"{task['scene_id']}_{task['order']}"
    array_key = task.get("array_key")
    array_index = task.get("array_index")
    field_suffix = task.get("field_suffix")
    resolved_path = task.get("resolved_path", "")

    if array_key is not None and array_index is not None:
        return f"{base}_{array_key}_{field_suffix or ''}_{array_index}"
    return f"{base}_{resolved_path}"


def get_output_filename(task: dict) -> str:
    """根据任务生成输出文件名"""
    scene_id = task["scene_id"]
    order = task["order"]
    base = f"{scene_id}_{order}"
    array_index = task.get("array_index")
    resolved_path = task.get("resolved_path", "")
    position = task.get("position")

    if array_index is not None:
        # 数组项图片：用 position 或索引生成唯一名
        pos_or_idx = position if position and position != "center" else f"img{array_index}"
        # TIMELINE images[]：用 position（left/right/center）
        # BEAT_SEQUENCE stages[]：用 imageSrc 的数组索引
        # LIST_MULTI_GROUP groups[]：用索引
        return f"{base}_{pos_or_idx}.png"
    # 简单字段：leftSrc/rightSrc → left/right，其余用字段名
    if resolved_path in ("leftSrc", "rightSrc"):
        side = "left" if resolved_path == "leftSrc" else "right"
        return f"{base}_{side}.png"
    if resolved_path in ("butSrc",):
        return f"{base}_but.png"
    return f"{base}.png"


def apply_image_paths(scripts_data: dict, task_results: dict):
    """
    将生成的图片路径回写到 scene-scripts.json 的 param 中。
    task_results: {task_key: relative_path}
    """
    for scene in scripts_data.get("scenes", []):
        scene_id = scene["sceneId"]
        for item in scene.get("items", []):
            param = item.get("param", {})
            template_name = item.get("template", "CENTER_FOCUS")
            image_paths = get_image_fields(template_name)
            item_tasks = image_paths_to_tasks(param, image_paths, scene_id, item.get("order", 0))
            for task in item_tasks:
                key = _task_key(task)
                if key in task_results:
                    apply_image_result(param, task, task_results[key])


def main():
    parser = argparse.ArgumentParser(
        description="Step 2: AI 图片生成（模板驱动版）"
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

    # ① 收集图片任务
    tasks = collect_image_tasks(scripts_data, args.scene)

    if not tasks:
        print("❌ 无图片需要生成")
        return False

    # ② 分批：每 9 个一批
    batch_size = 9
    chunks = [
        tasks[i: i + batch_size]
        for i in range(0, len(tasks), batch_size)
    ]

    print(f"🎨 开始生成场景配图（3×3 网格批量，共 {len(tasks)} 张 → {len(chunks)} 次 API）")
    print(f"   📐 网格宽高比: {grid_aspect_ratio}")
    print(f"   📂 输出: {output_dir}")

    success_count = 0
    fail_count = 0
    # task_key → relative_path
    task_results = {}

    # 计算图片相对路径前缀（用于写入 JSON）
    project_root = Path(config.get("project_root", script_dir.parent))
    rel_prefix = str(output_dir.relative_to(project_root / "public")).replace("\\", "/")

    for batch_idx, batch in enumerate(chunks):
        # ③ 网格 Prompt
        style_suffix = f" Style for ALL cells: {image_style}." if image_style else ""
        lines = [
            "A 3x3 grid image with exactly 9 equal cells.",
            "CRITICAL: absolutely NO borders, NO dividing lines, NO grid lines, NO separators, NO outlines between cells.",
            "CRITICAL - NO TEXT: The image must contain ZERO text. No letters, no numbers, no words, no captions.",
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

                # 记录结果供回写
                key = _task_key(task)
                task_results[key] = f"{rel_prefix}/{out_name}"

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
