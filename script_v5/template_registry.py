#!/usr/bin/env python3
"""
模板注册表 (Template Registry) — 新架构

从 script_v5/template_registry.json（由 npm run generate-registry 生成）加载模板元数据。
Python 侧不再解析 TSX 源码。

公开 API：
  TEMPLATE_REGISTRY          — dict[name, entry]
  get_template(name)         — 查询单个模板
  get_image_fields(name)     — 返回 image_paths 列表（如 ["imageSrc", "stages[].imageSrc"]）
  get_template_to_component_map() — {模板名: 组件导出名}
  generate_ai_prompt_guide() — 生成 AI 提示词模板选择指南
"""

import json
from pathlib import Path


# ─────────────────────────────────────────────────────────────
# 加载注册表
# ─────────────────────────────────────────────────────────────

def _load_registry() -> dict:
    script_dir = Path(__file__).resolve().parent
    registry_path = script_dir / "template_registry.json"
    if not registry_path.exists():
        raise FileNotFoundError(
            f"template_registry.json not found at {registry_path}.\n"
            "Run: npm run generate-registry"
        )
    with registry_path.open(encoding="utf-8") as f:
        return json.load(f)


TEMPLATE_REGISTRY: dict = _load_registry()


# ─────────────────────────────────────────────────────────────
# 基础查询 API
# ─────────────────────────────────────────────────────────────

def get_all_templates() -> dict:
    """返回全部模板注册表"""
    return TEMPLATE_REGISTRY


def get_template(name: str) -> dict:
    """查询单个模板；不存在则回退到 CENTER_FOCUS"""
    return TEMPLATE_REGISTRY.get(name, TEMPLATE_REGISTRY.get("CENTER_FOCUS", {}))


def get_image_fields(template_name: str) -> list[str]:
    """
    返回 image_paths 列表（由 generate-registry 预先计算）。
    每条路径可能是：
      "imageSrc"            — 顶层简单字段
      "stages[].imageSrc"   — 数组项的字段
      "groups[].image.src"  — 多级嵌套
    调用方使用 image_paths_to_tasks() 把这些路径展开为具体的提示词任务。
    """
    return get_template(template_name).get("image_paths", [])


def get_template_to_component_map() -> dict[str, str]:
    """返回 {模板名: Remotion 组件导出名} 映射（来自 component_export 字段）"""
    return {
        name: tmpl["component_export"]
        for name, tmpl in TEMPLATE_REGISTRY.items()
        if isinstance(tmpl.get("component_export"), str) and tmpl["component_export"].strip()
    }


# ─────────────────────────────────────────────────────────────
# image_paths 路径解析工具（供 step2 使用）
# ─────────────────────────────────────────────────────────────

def _get_nested(obj: dict, key_path: str):
    """按点号路径从 dict 中取值，如 "image.src"。"""
    parts = key_path.split(".")
    cur = obj
    for p in parts:
        if not isinstance(cur, dict):
            return None
        cur = cur.get(p)
    return cur


def _set_nested(obj: dict, key_path: str, value) -> None:
    """按点号路径向 dict 中写值，如 "image.src"。"""
    parts = key_path.split(".")
    cur = obj
    for p in parts[:-1]:
        if not isinstance(cur.get(p), dict):
            cur[p] = {}
        cur = cur[p]
    cur[parts[-1]] = value


def image_paths_to_tasks(param: dict, image_paths: list[str], scene_id: str, order: int) -> list[dict]:
    """
    根据注册表中的 image_paths 从 param 中提取图片提示词任务列表。

    每条任务格式：
      {
        "scene_id": str,
        "order": int,
        "resolved_path": str,   # 如 "imageSrc" 或 "stages[2].imageSrc"
        "prompt": str,
        "array_key": str | None,  # 若路径含 [] 则为数组字段名
        "array_index": int | None,
        "field_suffix": str | None,  # [] 后的子路径
      }
    """
    tasks = []
    for path in image_paths:
        if "[]" not in path:
            # 简单字段: "imageSrc"
            value = param.get(path)
            if isinstance(value, str) and value.strip():
                tasks.append({
                    "scene_id": scene_id,
                    "order": order,
                    "resolved_path": path,
                    "prompt": value.strip(),
                    "array_key": None,
                    "array_index": None,
                    "field_suffix": None,
                })
        else:
            # 数组路径: "stages[].imageSrc" 或 "groups[].image.src"
            bracket_idx = path.index("[]")
            array_key = path[:bracket_idx]
            remainder = path[bracket_idx + 3:]  # skip "[].": e.g. "imageSrc" or "image.src"
            arr = param.get(array_key)
            if not isinstance(arr, list):
                continue
            for i, item in enumerate(arr):
                if not isinstance(item, dict):
                    continue
                if remainder:
                    value = _get_nested(item, remainder)
                else:
                    value = item
                if isinstance(value, str) and value.strip():
                    resolved = f"{array_key}[{i}].{remainder}" if remainder else f"{array_key}[{i}]"
                    tasks.append({
                        "scene_id": scene_id,
                        "order": order,
                        "resolved_path": resolved,
                        "prompt": value.strip(),
                        "array_key": array_key,
                        "array_index": i,
                        "field_suffix": remainder or None,
                    })
    return tasks


def apply_image_result(param: dict, task: dict, result_path: str) -> None:
    """将图片生成结果路径写回 param 中对应位置。"""
    array_key = task.get("array_key")
    array_index = task.get("array_index")
    field_suffix = task.get("field_suffix")
    resolved_path = task.get("resolved_path")

    if array_key is None:
        # 简单字段
        param[resolved_path] = result_path
    else:
        # 数组项字段
        arr = param.get(array_key)
        if not isinstance(arr, list) or array_index >= len(arr):
            return
        item = arr[array_index]
        if not isinstance(item, dict):
            return
        if field_suffix:
            _set_nested(item, field_suffix, result_path)
        else:
            arr[array_index] = result_path


# ─────────────────────────────────────────────────────────────
# AI 提示词生成工具（内部辅助）
# ─────────────────────────────────────────────────────────────

def _description_table_cell(description, max_len: int = 88) -> str:
    """汇总表「说明摘要」列：单行、限长，避免 markdown 表格断行。"""
    if description is None:
        return "—"
    text = " ".join(str(description).replace("\n", " ").split())
    if not text:
        return "—"
    if len(text) > max_len:
        return text[: max_len - 1] + "…"
    return text


def _format_schema_node(name: str, node: dict, indent: int = 0) -> list[str]:
    """
    将单个 schema 节点格式化为 AI 可读的说明行列表。
    支持递归嵌套（object / array）。
    """
    lines = []
    kind = node.get("kind", "string")
    tags = node.get("tags", [])
    required = node.get("required", False)
    description = node.get("description", "")
    req_label = "必填" if required else "可选"
    prefix = "  " * indent + f"- `{name}` ({req_label}): {description}"

    if kind == "enum":
        values = node.get("values", [])
        default = node.get("defaultValue", "")
        vals_str = "/".join(str(v) for v in values)
        lines.append(f"{prefix}，可选值: {vals_str}，默认: {default}")
    elif "imagePrompt" in tags:
        lines.append(f"{prefix}（填写图片视觉描述）")
    elif kind == "array":
        item = node.get("item", {})
        item_kind = item.get("kind", "")
        min_items = node.get("minItems")
        max_items = node.get("maxItems")
        count_hint = ""
        if min_items is not None and max_items is not None:
            count_hint = f"，共 {min_items}～{max_items} 项"
        elif min_items is not None:
            count_hint = f"，至少 {min_items} 项"
        elif max_items is not None:
            count_hint = f"，至多 {max_items} 项"
        if item_kind == "object":
            lines.append(f"{prefix}（数组{count_hint}，每项含：）")
            for sub_name, sub_node in item.get("fields", {}).items():
                lines.extend(_format_schema_node(sub_name, sub_node, indent + 1))
        else:
            lines.append(f"{prefix}（数组{count_hint}）")
    elif kind == "object":
        lines.append(f"{prefix}（对象，含：）")
        for sub_name, sub_node in node.get("fields", {}).items():
            lines.extend(_format_schema_node(sub_name, sub_node, indent + 1))
    else:
        lines.append(prefix)

    return lines


# ─────────────────────────────────────────────────────────────
# AI 提示词生成
# ─────────────────────────────────────────────────────────────

def generate_ai_prompt_guide(image_style: str = "", include_examples: bool = True) -> str:
    """
    生成 AI 提示词中的模板选择指南。
    含兜底策略、汇总表、各模板 description + param 说明、示例。
    """
    lines: list[str] = []
    count = len(TEMPLATE_REGISTRY)
    lines.append(f"## 模板选择指南（必须从以下 {count} 个中选一个）\n")

    lines.append("## 模板选型兜底策略\n")
    lines.append(
        "- 为**每个 item** 先判断叙事类型，再选模板：单图叙述 / 双图并列 / 对错避坑 / 步骤清单 / **方法卡片** / 时间演进 / 多图并列 / 纯文字金句 / 引用出处 / 对话气泡 / 术语卡 / 揭秘锚点（放大镜）/ 冲击收束 / **数据 KPI 大字报（KPI_HERO）/ 双指标对比（STAT_COMPARE）/ 进度占比（PROGRESS_RING）**。\n"
    )
    lines.append(
        "- **严禁通篇使用 `CENTER_FOCUS`**：仅在**无 A/B 对仗、无结构化语义**时兜底。若口播出现**你方 vs 他方/对方**的行为对仗，或分号（；）两侧对立叙述，**必须优先 `SPLIT_COMPARE`**，不得用单图糊弄。\n"
    )
    lines.append("- **`ALERT`** 仅用于强情绪、转折、冲击收束；禁止通篇堆砌。\n")
    lines.append(
        "- **`BEAT_SEQUENCE`**：**同一 item、同一论证动作**内需要 2～4 个连续节拍（图随口播分段切换、情绪可 calm→alert）。用来避免为求变化而把连贯逻辑拆成多个零碎 item；`stages` 条数须与后续台词分段数一致。\n"
    )
    lines.append(
        "- **`STEP_LIST`**：仅用于**短步骤 / 短分点 / 强清单感**内容。若单个 item 是"方法标题/提醒标题 + 解释展开"，优先改用 **`METHOD_STACK`**；不要把解释型口播硬塞成纯清单。\n"
    )
    lines.append(
        "- **`METHOD_STACK`**：适合**单个 item 内的一个方法/提醒/观点标题**，后面继续跟 2～4 句解释展开。用"标题 + 单图 + 解释条"承接一个完整叙事，不要拿它去跨 item 合并多个方法。\n"
    )
    lines.append(
        "- **`MAGNIFYING_GLASS`** 仅当该 item 可提供非空 `anchors`（通过 `showFrom` 关联台词索引）时使用；否则换其他模板。\n"
    )
    lines.append(
        "- **`LIST_MULTI_GROUP`**：**同一论证下的多分点并列**（2～4 个可独立成画的主体），**优先用单 item + `LIST_MULTI_GROUP` 覆盖全部分点**，而不是每个分点各开一个 item。若当前 item 只是"给你两个方法："这类总起句、真正分点已经拆到后续 item，**禁止**用 `LIST_MULTI_GROUP` 去脑补多组。该模板只输出 `groups`，每组使用 `textIndex + image + 可选 anchor`。\n"
    )
    lines.append(
        "- **`SPLIT_COMPARE`**：左右**两方行为/立场**对照。与 `LIST_MULTI_GROUP`（同机制下多分点平铺）区分：**对仗用双分屏，同一机制下的「第一第二」用多图/节拍模板而非 SPLIT**。\n"
    )

    lines.append("\n| 模板名 | 心理学原理 | 说明摘要 | 图片数量 | 额外必填参数 |")
    lines.append("|--------|-----------|----------|---------|-------------|")
    for name, tmpl in TEMPLATE_REGISTRY.items():
        extra = ", ".join(tmpl.get("required_extra_params", [])) or "无"
        psych = tmpl.get("psychology") or "—"
        desc_cell = _description_table_cell(tmpl.get("description"))
        img_c = tmpl.get("image_count", "—")
        lines.append(f"| {name} | {psych} | {desc_cell} | {img_c} | {extra} |")

    lines.append("\n## 各模板说明与 param 字段\n")
    for name, tmpl in TEMPLATE_REGISTRY.items():
        schema = tmpl.get("param_schema", {})
        lines.append(f"### {name}\n")
        if not schema:
            lines.append("无需额外参数。")
            if tmpl.get("content_anchor_required") is True:
                lines.append(
                    "- **必填**：`param.anchors` 需非空；每项必须包含 `text` 与合法 `showFrom`（0-based 台词分段索引）。"
                )
        else:
            for field, node in schema.items():
                lines.extend(_format_schema_node(field, node, indent=0))
            if tmpl.get("content_anchor_required") is True:
                lines.append(
                    "- **必填**：`param.anchors` 需非空；每项必须包含 `text` 与合法 `showFrom`（0-based 台词分段索引）。"
                )

        cmin = tmpl.get("content_min_items")
        cmax = tmpl.get("content_max_items")
        if isinstance(cmin, int) or isinstance(cmax, int):
            hint = []
            if isinstance(cmin, int):
                hint.append(f"台词至少 {cmin} 段")
            if isinstance(cmax, int):
                hint.append(f"至多 {cmax} 段")
            lines.append(f"- *建议*：{'；'.join(hint)}。")
        lines.append("")

    if image_style:
        lines.append(f"\n## 图片描述要求\n- 图片风格：{image_style}")
        lines.append("- 纯视觉内容，无文字、无标注")
        lines.append("- 描述具体生动（如\"一个戴眼镜的白领简笔画图标\"）")

    if include_examples:
        lines.append("\n## 各模板 item 示例（每个代码块仅为一个 item）\n")
        lines.append(
            "下列 JSON **不是**让你合并成一个 scene：每块只展示该模板的字段形态。实际撰稿时按口播拆多个 scene，`items` 内按需选用模板，**禁止**单 scene 堆砌全部模板。\n"
        )
        for tname in sorted(TEMPLATE_REGISTRY.keys()):
            tmpl = TEMPLATE_REGISTRY[tname]
            ex = tmpl.get("example")
            if not isinstance(ex, dict):
                continue
            item = dict(ex)
            item.setdefault("order", 1)
            lines.append(f"### {tname}\n")
            lines.append("```json")
            lines.append(json.dumps(item, ensure_ascii=False, indent=2))
            lines.append("```\n")

    return "\n".join(lines)


if __name__ == "__main__":
    print(generate_ai_prompt_guide("简洁线条插画风格，无背景，无文字"))
