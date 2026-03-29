#!/usr/bin/env python3
"""
对 Step1 输出的 scene-scripts 做注册表校验与归一化（新架构）。

- 未知 template → 回退到 config.default_template（默认 CENTER_FOCUS）并记录 warning
- param_schema kind=enum → 非法值钳制为 defaultValue 或 values[0]
- param_schema kind=array → 递归校验数组项（object item 深度验证）
- param_schema kind=object → 递归校验嵌套字段
- 必填字段缺失或空字符串 → warning
- content 缺失或全无有效 text → 优先用 item.text，其次 coreSentence 回填单条字幕并 warning
- content 条数与 content_min_items / content_max_items 不匹配 → warning
- 数组类型的 minItems / maxItems → warning
"""

from __future__ import annotations

import re
from typing import Any

# 与 template-schema.ts IMAGE_ENTER_EFFECTS 一致
_IMAGE_ENTER_EFFECTS = frozenset(
    {"breathe", "slideLeft", "slideBottom", "zoomIn", "fadeIn"}
)

# 与 TemplateContentRenderer 使用的 public/audio/effects/{id}.wav 一致
_ANCHOR_SFX_IDS = frozenset({"impact_thud", "ping", "woosh"})


# ─────────────────────────────────────────────────────────────
# 保留：旧废弃字段迁移（不变）
# ─────────────────────────────────────────────────────────────

def migrate_content_audio_effect_to_anchors(data: dict) -> list[str]:
    """
    将已废弃的 content[].audioEffect 迁到对应 showFrom 的 anchor.audioEffect，
    并从 content 中删除该字段。
    """
    warnings: list[str] = []
    for scene in data.get("scenes", []):
        scene_id = scene.get("sceneId", "?")
        for item in scene.get("items", []):
            param = item.get("param")
            if not isinstance(param, dict):
                continue
            content = param.get("content")
            if not isinstance(content, list):
                continue
            anchors = param.get("anchors")
            if not isinstance(anchors, list):
                anchors = []
                param["anchors"] = anchors
            for i, ci in enumerate(content):
                if not isinstance(ci, dict):
                    continue
                ae = ci.pop("audioEffect", None)
                if ae is None or ae == "":
                    continue
                matched = False
                for a in anchors:
                    if isinstance(a, dict) and a.get("showFrom") == i:
                        matched = True
                        if not a.get("audioEffect"):
                            a["audioEffect"] = ae
                if not matched:
                    warnings.append(
                        f"[{scene_id}] item order={item.get('order', '?')} "
                        f"content[{i}] 有 audioEffect={ae!r} 但无对应 anchor，已丢弃"
                    )
    return warnings


# ─────────────────────────────────────────────────────────────
# 辅助工具
# ─────────────────────────────────────────────────────────────

def _parse_image_count_range(image_count: Any) -> tuple[int | None, int | None]:
    """返回 (min, max)，无法解析则 (None, None) 表示不检查。"""
    if image_count is None:
        return None, None
    if isinstance(image_count, (int, float)):
        n = int(image_count)
        return n, n
    s = str(image_count).strip()
    m = re.match(r"^(\d+)\s*-\s*(\d+)$", s)
    if m:
        return int(m.group(1)), int(m.group(2))
    if s.isdigit():
        n = int(s)
        return n, n
    return None, None


def _content_len(content: Any) -> int:
    if not isinstance(content, list):
        return 0
    return len(content)


# ─────────────────────────────────────────────────────────────
# Schema-driven 递归校验
# ─────────────────────────────────────────────────────────────

def _validate_schema_node(
    value: Any,
    node: dict,
    field_path: str,
    warnings: list[str],
    scene_id: str,
    order: Any,
) -> Any:
    """
    递归校验并归一化单个字段值，按 schema 节点描述进行类型/枚举/范围检查。
    返回（可能归一化后的）值。
    """
    kind = node.get("kind", "string")
    required = node.get("required", False)

    if value is None:
        if required:
            warnings.append(
                f"[{scene_id}] item order={order} 必填字段 `{field_path}` 缺失"
            )
        return value

    if kind == "enum":
        values = node.get("values", [])
        default = node.get("defaultValue") or (values[0] if values else None)
        if values and value not in values:
            warnings.append(
                f"[{scene_id}] item order={order} 字段 `{field_path}` 值 {value!r} 非法，"
                f"已改为 {default!r}"
            )
            return default
        return value

    if kind == "string":
        if required and (not isinstance(value, str) or not value.strip()):
            warnings.append(
                f"[{scene_id}] item order={order} 必填字段 `{field_path}` 为空字符串"
            )
        return value

    if kind == "number":
        if not isinstance(value, (int, float)):
            warnings.append(
                f"[{scene_id}] item order={order} 字段 `{field_path}` 应为数字，"
                f"实际值 {value!r}"
            )
        return value

    if kind == "boolean":
        if not isinstance(value, bool):
            warnings.append(
                f"[{scene_id}] item order={order} 字段 `{field_path}` 应为布尔值，"
                f"实际值 {value!r}"
            )
        return value

    if kind == "object":
        if not isinstance(value, dict):
            warnings.append(
                f"[{scene_id}] item order={order} 字段 `{field_path}` 应为对象"
            )
            return value
        fields = node.get("fields", {})
        for sub_key, sub_node in fields.items():
            sub_path = f"{field_path}.{sub_key}"
            cur = value.get(sub_key)
            updated = _validate_schema_node(cur, sub_node, sub_path, warnings, scene_id, order)
            if updated is not None or sub_node.get("required"):
                value[sub_key] = updated
        return value

    if kind == "array":
        if not isinstance(value, list):
            warnings.append(
                f"[{scene_id}] item order={order} 字段 `{field_path}` 应为数组"
            )
            return value
        min_items = node.get("minItems")
        max_items = node.get("maxItems")
        n = len(value)
        if min_items is not None and n < min_items:
            warnings.append(
                f"[{scene_id}] item order={order} 字段 `{field_path}` 数量 {n} "
                f"少于 minItems={min_items}"
            )
        if max_items is not None and n > max_items:
            warnings.append(
                f"[{scene_id}] item order={order} 字段 `{field_path}` 数量 {n} "
                f"多于 maxItems={max_items}"
            )
        item_node = node.get("item", {})
        item_kind = item_node.get("kind", "string")
        if item_kind in ("object", "array"):
            for i, elem in enumerate(value):
                value[i] = _validate_schema_node(
                    elem, item_node, f"{field_path}[{i}]", warnings, scene_id, order
                )
        return value

    return value


def _validate_param_schema(
    param: dict,
    schema: dict,
    scene_id: str,
    order: Any,
    warnings: list[str],
) -> None:
    """对 param 中每个 schema 字段执行递归校验与归一化（原地修改 param）。"""
    for field, node in schema.items():
        if not isinstance(node, dict):
            continue
        value = param.get(field)
        updated = _validate_schema_node(value, node, field, warnings, scene_id, order)
        if updated is not None or node.get("required"):
            param[field] = updated


# ─────────────────────────────────────────────────────────────
# content 回填
# ─────────────────────────────────────────────────────────────

def _normalize_missing_content(
    param: dict,
    item: dict,
    scene_id: str,
    order: Any,
    tname: str,
    warnings: list[str],
) -> None:
    """content 缺失或全无有效 text 时，用 item.text 或 coreSentence 回填一条字幕。"""
    content = param.get("content")
    has_nonempty = (
        isinstance(content, list)
        and any(
            isinstance(ci, dict) and str(ci.get("text", "")).strip()
            for ci in content
        )
    )
    if has_nonempty:
        return
    fallback = None
    it = item.get("text")
    if isinstance(it, str) and it.strip():
        fallback = it.strip()
    else:
        cs = param.get("coreSentence")
        if isinstance(cs, str) and cs.strip():
            fallback = cs.strip()
    if fallback is None:
        return
    warnings.append(
        f"[{scene_id}] item order={order} 模板 {tname} content 缺失或无效，已用兜底填充为单条字幕"
    )
    param["content"] = [{"text": fallback}]


# ─────────────────────────────────────────────────────────────
# 主校验入口
# ─────────────────────────────────────────────────────────────

def validate_and_normalize_scene_scripts(
    data: dict,
    registry: dict[str, dict],
    *,
    default_template: str = "CENTER_FOCUS",
) -> tuple[dict, list[str]]:
    """
    就地修改 data 并返回 (data, warnings)。
    registry 来自 template_registry.TEMPLATE_REGISTRY。
    """
    warnings: list[str] = []
    warnings.extend(migrate_content_audio_effect_to_anchors(data))
    if default_template not in registry:
        default_template = (
            "CENTER_FOCUS" if "CENTER_FOCUS" in registry else next(iter(registry.keys()))
        )

    for scene in data.get("scenes", []):
        scene_id = scene.get("sceneId", "?")
        for item in scene.get("items", []):
            order = item.get("order", "?")
            tname = item.get("template")

            # — 未知 / 缺失模板
            if not isinstance(tname, str) or not tname.strip():
                warnings.append(
                    f"[{scene_id}] item order={order} 缺少 template，已设为 {default_template}"
                )
                item["template"] = default_template
                tname = default_template
            tname = tname.strip()
            if tname not in registry:
                warnings.append(
                    f"[{scene_id}] item order={order} 未知模板 {tname!r}，已回退为 {default_template}"
                )
                item["template"] = default_template
                tname = default_template

            tmpl = registry[tname]
            param = item.get("param")
            if not isinstance(param, dict):
                warnings.append(
                    f"[{scene_id}] item order={order} param 非对象，已改为 {{}}"
                )
                item["param"] = {}
                param = item["param"]

            schema = tmpl.get("param_schema") or {}

            # — content 回填
            _normalize_missing_content(param, item, scene_id, order, tname, warnings)

            # — schema-driven 递归校验
            _validate_param_schema(param, schema, scene_id, order, warnings)

            # — image_count 与实际图片数量校验（针对含嵌套数组的字段）
            image_paths = tmpl.get("image_paths", [])
            if image_paths:
                ic = tmpl.get("image_count")
                lo, hi = _parse_image_count_range(ic)
                if lo is not None and hi is not None:
                    # 统计顶层 image_paths 中不同 array_key 下的数组长度
                    for path in image_paths:
                        if "[]" in path:
                            array_key = path[: path.index("[]")]
                            arr = param.get(array_key)
                            if isinstance(arr, list):
                                n = len(arr)
                                if n < lo or n > hi:
                                    warnings.append(
                                        f"[{scene_id}] item order={order} 模板 {tname} "
                                        f"`{array_key}` 数量 {n} 不在期望范围 [{lo},{hi}]"
                                        f"（image_count={ic!r}）"
                                    )
                            break  # 只检查一次（同 template 的多路径共享同一 image_count）

            # — content 条数
            cmin = tmpl.get("content_min_items")
            cmax = tmpl.get("content_max_items")
            content = param.get("content")
            clen = _content_len(content)
            if isinstance(cmin, int) and clen < cmin:
                warnings.append(
                    f"[{scene_id}] item order={order} 模板 {tname} content 条数 {clen} "
                    f"少于 content_min_items={cmin}"
                )
            if isinstance(cmax, int) and clen > cmax:
                warnings.append(
                    f"[{scene_id}] item order={order} 模板 {tname} content 条数 {clen} "
                    f"多于 content_max_items={cmax}"
                )

            if clen == 0:
                warnings.append(
                    f"[{scene_id}] item order={order} 模板 {tname} content 为空且无法兜底"
                )

            if isinstance(content, list):
                for idx, ci in enumerate(content):
                    if not isinstance(ci, dict):
                        warnings.append(
                            f"[{scene_id}] item order={order} 模板 {tname} "
                            f"content[{idx}] 类型错误，必须为对象格式"
                        )

            # — anchors 校验
            anchors = param.get("anchors")
            if anchors is None:
                anchors = []
                param["anchors"] = anchors
            elif not isinstance(anchors, list):
                warnings.append(
                    f"[{scene_id}] item order={order} 模板 {tname} anchors 非数组，已重置为空数组"
                )
                anchors = []
                param["anchors"] = anchors

            valid_anchors = []
            for aidx, anchor in enumerate(anchors):
                if not isinstance(anchor, dict):
                    warnings.append(
                        f"[{scene_id}] item order={order} 模板 {tname} "
                        f"anchors[{aidx}] 非对象，已丢弃"
                    )
                    continue
                atext = anchor.get("text")
                show_from = anchor.get("showFrom")
                if not isinstance(atext, str) or not atext.strip():
                    warnings.append(
                        f"[{scene_id}] item order={order} 模板 {tname} "
                        f"anchors[{aidx}].text 为空，已丢弃"
                    )
                    continue
                if not isinstance(show_from, int) or show_from < 0 or show_from >= clen:
                    warnings.append(
                        f"[{scene_id}] item order={order} 模板 {tname} "
                        f"anchors[{aidx}].showFrom={show_from!r} 非法，已丢弃"
                    )
                    continue
                ae = anchor.get("audioEffect")
                if ae is not None and ae != "" and ae not in _ANCHOR_SFX_IDS:
                    warnings.append(
                        f"[{scene_id}] item order={order} 模板 {tname} "
                        f"anchors[{aidx}].audioEffect={ae!r} 非法，已清除"
                    )
                    anchor["audioEffect"] = None
                valid_anchors.append(anchor)
            param["anchors"] = valid_anchors

            if tmpl.get("content_anchor_required") is True and len(valid_anchors) == 0:
                warnings.append(
                    f"[{scene_id}] item order={order} 模板 {tname} 要求非空 anchors，但当前为空"
                )

    return data, warnings
