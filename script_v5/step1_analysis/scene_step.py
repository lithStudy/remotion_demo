import re

from .gemini_utils import generate_with_retry, parse_json_from_response
from .prompt_loader import load_prompt, render_prompt


def _normalize_ws(s: str) -> str:
    """折叠所有空白（空格/换行）为单个空格，用于文本对齐比较。"""
    return re.sub(r"\s+", " ", s).strip()


def _realign_scene_texts(scenes: list[dict], original_text: str) -> None:
    """
    后处理：将模型输出的 scene.text 与原始文案重新对齐，恢复被压平的换行符。

    策略：
    1. 把 original_text 按折叠空白后的内容做一次"扁平化映射"，记录每个字符在原文中的位置。
    2. 对每个 scene.text，在原文中找到对应子串起止位置，用原文切片（含换行）替换。
    3. 若找不到（模型改写了文字），保留模型输出，不报错。
    """
    # 构建 original_text 的扁平化版本与位置映射
    # flat_to_orig[i] = 扁平字符串第 i 个字符对应原文的位置
    flat_chars: list[str] = []
    flat_to_orig: list[int] = []
    for orig_idx, ch in enumerate(original_text):
        if re.match(r"\s", ch):
            # 空白字符：只有在上一个扁平字符不是空格时才插入一个空格
            if flat_chars and flat_chars[-1] != " ":
                flat_chars.append(" ")
                flat_to_orig.append(orig_idx)
        else:
            flat_chars.append(ch)
            flat_to_orig.append(orig_idx)

    flat_orig = "".join(flat_chars).strip()

    search_start = 0  # 在 flat_orig 中的搜索起点，保证相邻 scene 不重叠
    for scene in scenes:
        model_text = scene.get("text", "")
        if not model_text:
            continue

        flat_scene = _normalize_ws(model_text)
        if not flat_scene:
            continue

        pos = flat_orig.find(flat_scene, search_start)
        if pos == -1:
            # 模型可能修改了文字，保持原样，不覆盖
            continue

        # 找到原文起止下标
        orig_start = flat_to_orig[pos]
        end_flat_idx = pos + len(flat_scene) - 1
        orig_end = flat_to_orig[end_flat_idx] + 1  # exclusive

        # 用原文切片（含空白/换行）替换 scene.text
        scene["text"] = original_text[orig_start:orig_end]
        search_start = pos + len(flat_scene)


def analyze_scenes(client, model: str, text: str, append_ai_log=None) -> dict:
    prompt_template = load_prompt("scene_step.md")
    prompt = render_prompt(prompt_template, {"TEXT": text})
    print("   [Step 1/3] 正在拆解场景 (Scenes)...")
    resp = generate_with_retry(client, model, prompt, append_ai_log=append_ai_log)
    result = parse_json_from_response(resp.text)

    # 后处理：将 scene.text 反向对齐到原文，恢复换行结构
    scenes = result.get("scenes", [])
    if scenes:
        _realign_scene_texts(scenes, text)

    return result
