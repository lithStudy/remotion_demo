#!/usr/bin/env python3
"""
Step 4: Remotion 动画代码生成（模板驱动版）
根据 scene-scripts.json（含音频时长）生成 Remotion 动画 TSX 代码。
每个 item 的 `content`、`totalDurationFrames` 与 `param`（模板字段）共同传给对应组件。

交付物（与 docs/横竖屏双导出与字幕改造指南.md 一致）：
  - 横屏主片 1920×1080（*Landscape 组件，Root id 为 PascalCase 名）
  - 竖屏壳 1080×1920（*Vertical 组件，Root id 为 同名 + 「竖屏」后缀）
  生成 *Constants.ts、*MainBody.tsx、*Landscape.tsx、*Vertical.tsx、*VerticalChrome.tsx，
  入口 *.tsx 为双 Composition re-export。
  若 scene-scripts.json 含有效 cover（title/subtitle），另生成 *CoverProps.ts、*CoverStills.tsx，
  并在 Root 注册「PascalCase封面横屏」「PascalCase封面竖屏」（横 1920×1080；竖 3:4 即 1080×1440，duration=1）。

用法：
  python step4_generate_remotion.py --input scene-scripts.json --name video_name
"""

import argparse
import json
import re
import shutil
import sys
from pathlib import Path

# 与 step1/step2 一致：保证可从脚本目录加载 template_registry
_SCRIPT_DIR = Path(__file__).resolve().parent
if str(_SCRIPT_DIR) not in sys.path:
    sys.path.insert(0, str(_SCRIPT_DIR))

from template_registry import TEMPLATE_REGISTRY, get_template_to_component_map
from scene_timing import inject_text_length_content_timings, needs_text_length_timings_from_scripts
from utils import load_config

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
if hasattr(sys.stderr, "reconfigure"):
    sys.stderr.reconfigure(encoding="utf-8", errors="replace")


def to_pascal_case(name: str) -> str:
    """video_name → VideoName"""
    return "".join(word.capitalize() for word in re.split(r'[_\-\s]+', name))


# ─────────────────────────────────────────────────────────────
# 模板名 → React 组件名映射（来自各 TSX templateMeta.componentExport）
# ─────────────────────────────────────────────────────────────

TEMPLATE_TO_COMPONENT = get_template_to_component_map()
_COMPONENT_FALLBACK = "BWCenterFocus"
_missing_export = sorted(set(TEMPLATE_REGISTRY.keys()) - set(TEMPLATE_TO_COMPONENT.keys()))
if _missing_export:
    print(
        "⚠️ Step4: 以下模板缺少 templateMeta.componentExport，将回退为 "
        f"{_COMPONENT_FALLBACK}: {_missing_export}"
    )

# param 中图片相关的字段（需要 staticFile 包装）
IMAGE_PARAM_FIELDS = {
    "imageSrc",
    "leftSrc",
    "rightSrc",
    "notSrc",
    "butSrc",
}


def _escape_jsx(text: str) -> str:
    return text.replace("{", "{{").replace("}", "}}").replace('"', '\\"')


def _param_to_jsx_props(param: dict, name: str, scene_id: str, order: int) -> str:
    """
    将 param 对象转换为 JSX props 字符串（不含 item 层级的 content / totalDurationFrames）。
    - 图片字段用 staticFile() 包装
    - images 数组中的 src 也用 staticFile() 包装
    """
    props = []
    for key, value in param.items():
        if key in ("content", "totalDurationFrames"):
            continue
        elif key == "audioSrc":
            # audioSrc 已移到 scene 级别，不在 item props 中传递
            continue
        elif key == "images" and isinstance(value, list):
            # images 数组，需要包装 src
            img_items = []
            for img in value:
                img_copy = dict(img)
                src = img_copy.get("src", "")
                img_copy["src"] = f'__STATIC_FILE__({src})'
                img_items.append(img_copy)
            # 手动构建 JSX 数组
            img_jsx_parts = []
            for img in value:
                parts = []
                for ik, iv in img.items():
                    if ik == "src":
                        parts.append(f'src: staticFile("{iv}")')
                    elif ik == "startFrame":
                        parts.append(f'startFrame: {iv}')
                    elif isinstance(iv, str):
                        parts.append(f'{ik}: "{_escape_jsx(iv)}"')
                    else:
                        parts.append(f'{ik}: {json.dumps(iv)}')
                img_jsx_parts.append("{ " + ", ".join(parts) + " }")
            props.append(f'images={{[{", ".join(img_jsx_parts)}]}}')
        elif key == "stages" and isinstance(value, list):
            # BEAT_SEQUENCE：每项含 imageSrc、可选 enterEffect/tone
            stage_jsx_parts = []
            for st in value:
                if not isinstance(st, dict):
                    continue
                parts = []
                for sk, sv in st.items():
                    if sk == "imageSrc" and isinstance(sv, str):
                        parts.append(f'imageSrc: staticFile("{_escape_jsx(sv)}")')
                    elif sk == "enterEffect" and isinstance(sv, str):
                        parts.append(f'{sk}: "{_escape_jsx(sv)}"')
                    elif sk == "tone" and isinstance(sv, str):
                        parts.append(f'{sk}: "{_escape_jsx(sv)}"')
                    elif isinstance(sv, str):
                        parts.append(f'{sk}: "{_escape_jsx(sv)}"')
                    elif isinstance(sv, bool):
                        parts.append(f'{sk}: {str(sv).lower()}')
                    elif isinstance(sv, (int, float)):
                        parts.append(f'{sk}: {sv}')
                    else:
                        parts.append(f'{sk}: {json.dumps(sv, ensure_ascii=False)}')
                stage_jsx_parts.append("{ " + ", ".join(parts) + " }")
            props.append(f'stages={{[{", ".join(stage_jsx_parts)}]}}')
        elif key == "nodes" and isinstance(value, list):
            # CAUSE_CHAIN：每项含 label、imageSrc、showFrom、可选 enterEffect
            node_jsx_parts = []
            for nd in value:
                if not isinstance(nd, dict):
                    continue
                parts = []
                for nk, nv in nd.items():
                    if nk == "imageSrc" and isinstance(nv, str):
                        parts.append(f'imageSrc: staticFile("{_escape_jsx(nv)}")')
                    elif nk == "enterEffect" and isinstance(nv, str):
                        parts.append(f'{nk}: "{_escape_jsx(nv)}"')
                    elif isinstance(nv, str):
                        parts.append(f'{nk}: "{_escape_jsx(nv)}"')
                    elif isinstance(nv, bool):
                        parts.append(f'{nk}: {str(nv).lower()}')
                    elif isinstance(nv, (int, float)):
                        parts.append(f'{nk}: {nv}')
                    else:
                        parts.append(f'{nk}: {json.dumps(nv, ensure_ascii=False)}')
                node_jsx_parts.append("{ " + ", ".join(parts) + " }")
            props.append(f'nodes={{[{", ".join(node_jsx_parts)}]}}')
        elif key == "panels" and isinstance(value, list):
            # PANEL_GRID：每项含 src、showFrom、可选 enterEffect、position
            panel_jsx_parts = []
            for pn in value:
                if not isinstance(pn, dict):
                    continue
                parts = []
                for pk, pv in pn.items():
                    if pk == "src" and isinstance(pv, str):
                        parts.append(f'src: staticFile("{_escape_jsx(pv)}")')
                    elif pk == "enterEffect" and isinstance(pv, str):
                        parts.append(f'{pk}: "{_escape_jsx(pv)}"')
                    elif pk == "position" and isinstance(pv, str):
                        parts.append(f'{pk}: "{_escape_jsx(pv)}"')
                    elif isinstance(pv, str):
                        parts.append(f'{pk}: "{_escape_jsx(pv)}"')
                    elif isinstance(pv, bool):
                        parts.append(f'{pk}: {str(pv).lower()}')
                    elif isinstance(pv, (int, float)):
                        parts.append(f'{pk}: {pv}')
                    else:
                        parts.append(f'{pk}: {json.dumps(pv, ensure_ascii=False)}')
                panel_jsx_parts.append("{ " + ", ".join(parts) + " }")
            props.append(f'panels={{[{", ".join(panel_jsx_parts)}]}}')
        elif key in IMAGE_PARAM_FIELDS:
            if isinstance(value, str):
                props.append(f'{key}={{staticFile("{value}")}}')
            else:
                props.append(f'{key}={{{json.dumps(value, ensure_ascii=False)}}}')
        elif key == "tiltDirection":
            props.append(f'{key}="{value}"')
        elif key == "enterEffect":
            props.append(f'{key}="{value}"')
        elif isinstance(value, str):
            props.append(f'{key}={{{json.dumps(value, ensure_ascii=False)}}}')
        elif isinstance(value, bool):
            props.append(f'{key}={{{str(value).lower()}}}')
        elif isinstance(value, (int, float)):
            props.append(f'{key}={{{value}}}')
        else:
            props.append(f'{key}={{{json.dumps(value, ensure_ascii=False)}}}')

    return " ".join(props)


def normalize_cover(scripts_data: dict) -> dict | None:
    """
    从 scene-scripts.json 顶层读取可选 cover。
    有效条件：cover 为对象，durationFrames 为正整数，且含非空字符串 title、subtitle。
    可选：themeColor、badge、seriesLabel、seriesLabelEn（字符串）；
    methodologySteps（非空字符串数组）、methodologyStepsEn（字符串）。
    """
    raw = scripts_data.get("cover")
    if not isinstance(raw, dict):
        return None
    try:
        dur = int(raw.get("durationFrames", 0))
    except (TypeError, ValueError):
        return None
    if dur <= 0:
        return None
    title = raw.get("title")
    subtitle = raw.get("subtitle")
    if not isinstance(title, str) or not title.strip():
        return None
    if not isinstance(subtitle, str) or not subtitle.strip():
        return None
    out = {"durationFrames": dur, "title": title.strip(), "subtitle": subtitle.strip()}
    tc = raw.get("themeColor")
    if isinstance(tc, str) and tc.strip():
        out["themeColor"] = tc.strip()
    bd = raw.get("badge")
    if isinstance(bd, str) and bd.strip():
        out["badge"] = bd.strip()
    sl = raw.get("seriesLabel")
    if isinstance(sl, str) and sl.strip():
        out["seriesLabel"] = sl.strip()
    sle = raw.get("seriesLabelEn")
    if isinstance(sle, str) and sle.strip():
        out["seriesLabelEn"] = sle.strip()
    ms = raw.get("methodologySteps")
    if isinstance(ms, list):
        steps = [str(x).strip() for x in ms if isinstance(x, str) and str(x).strip()]
        if steps:
            out["methodologySteps"] = steps
    mse = raw.get("methodologyStepsEn")
    if isinstance(mse, str) and mse.strip():
        out["methodologyStepsEn"] = mse.strip()
    return out


def normalize_cover_still(scripts_data: dict) -> dict | None:
    """
    从 scene-scripts.json 顶层 cover 提取横/竖屏封面 still 用文案。
    不要求 durationFrames > 0；只要 title、subtitle 非空即可（可与正片无封面片头并存）。
    """
    raw = scripts_data.get("cover")
    if not isinstance(raw, dict):
        return None
    title = raw.get("title")
    subtitle = raw.get("subtitle")
    if not isinstance(title, str) or not title.strip():
        return None
    if not isinstance(subtitle, str) or not subtitle.strip():
        return None
    out: dict = {"title": title.strip(), "subtitle": subtitle.strip()}
    tc = raw.get("themeColor")
    if isinstance(tc, str) and tc.strip():
        out["themeColor"] = tc.strip()
    bd = raw.get("badge")
    if isinstance(bd, str) and bd.strip():
        out["badge"] = bd.strip()
    sl = raw.get("seriesLabel")
    if isinstance(sl, str) and sl.strip():
        out["seriesLabel"] = sl.strip()
    sle = raw.get("seriesLabelEn")
    if isinstance(sle, str) and sle.strip():
        out["seriesLabelEn"] = sle.strip()
    ms = raw.get("methodologySteps")
    if isinstance(ms, list):
        steps = [str(x).strip() for x in ms if isinstance(x, str) and str(x).strip()]
        if steps:
            out["methodologySteps"] = steps
    mse = raw.get("methodologyStepsEn")
    if isinstance(mse, str) and mse.strip():
        out["methodologyStepsEn"] = mse.strip()
    return out


def static_cover_props_jsx(cover: dict) -> str:
    """LandscapeCoverPoster 的 JSX 属性行（多行缩进与 Scene 内一致）。时长由外层 Sequence 的 durationInFrames 控制。"""
    lines = [
        f'title={json.dumps(cover["title"], ensure_ascii=False)}',
        f'subtitle={json.dumps(cover["subtitle"], ensure_ascii=False)}',
    ]
    if cover.get("themeColor"):
        lines.append(f'themeColor={json.dumps(cover["themeColor"], ensure_ascii=False)}')
    if cover.get("badge"):
        lines.append(f'badge={json.dumps(cover["badge"], ensure_ascii=False)}')
    if cover.get("seriesLabel"):
        lines.append(f'seriesLabel={json.dumps(cover["seriesLabel"], ensure_ascii=False)}')
    if cover.get("seriesLabelEn"):
        lines.append(f'seriesLabelEn={json.dumps(cover["seriesLabelEn"], ensure_ascii=False)}')
    if cover.get("methodologySteps"):
        arr = json.dumps(cover["methodologySteps"], ensure_ascii=False)
        lines.append(f"methodologySteps={{{arr}}}")
    if cover.get("methodologyStepsEn"):
        lines.append(
            f'methodologyStepsEn={json.dumps(cover["methodologyStepsEn"], ensure_ascii=False)}'
        )
    return "\n                    ".join(lines)


def generate_cover_props_tsx(pascal: str, cover: dict) -> str:
    """*CoverProps.ts：StaticCoverProps 常量，供 CoverStills 与文档对照。"""
    parts = [
        f'\ttitle: {json.dumps(cover["title"], ensure_ascii=False)},',
        f'\tsubtitle: {json.dumps(cover["subtitle"], ensure_ascii=False)},',
    ]
    if cover.get("themeColor"):
        parts.append(f'\tthemeColor: {json.dumps(cover["themeColor"], ensure_ascii=False)},')
    if cover.get("badge"):
        parts.append(f'\tbadge: {json.dumps(cover["badge"], ensure_ascii=False)},')
    if cover.get("seriesLabel"):
        parts.append(f'\tseriesLabel: {json.dumps(cover["seriesLabel"], ensure_ascii=False)},')
    if cover.get("seriesLabelEn"):
        parts.append(f'\tseriesLabelEn: {json.dumps(cover["seriesLabelEn"], ensure_ascii=False)},')
    if cover.get("methodologySteps"):
        arr = json.dumps(cover["methodologySteps"], ensure_ascii=False)
        parts.append(f"\tmethodologySteps: {arr},")
    if cover.get("methodologyStepsEn"):
        parts.append(
            f'\tmethodologyStepsEn: {json.dumps(cover["methodologyStepsEn"], ensure_ascii=False)},'
        )
    body = "\n".join(parts)
    return f'''import type {{ StaticCoverProps }} from "../../components";

/** 与 scene-scripts.json 中 cover 一致，供横/竖屏封面 still 与文档对照 */
export const {pascal}_STATIC_COVER_PROPS: StaticCoverProps = {{
{body}
}};
'''


def generate_cover_stills_tsx(pascal: str) -> str:
    """*CoverStills.tsx：横屏 LandscapeCoverPoster + 竖屏 VerticalCoverPoster。"""
    return f'''import React from "react";

import {{ LandscapeCoverPoster, VerticalCoverPoster }} from "../../components";
import {{ {pascal}_STATIC_COVER_PROPS }} from "./{pascal}CoverProps";

/** 1920×1080，`remotion still` 横屏封面 */
export const {pascal}封面横屏: React.FC = () => (
\t<LandscapeCoverPoster {{...{pascal}_STATIC_COVER_PROPS}} />
);

/** 3:4（1080×1440），`remotion still` 竖屏/抖音封面 */
export const {pascal}封面竖屏: React.FC = () => (
\t<VerticalCoverPoster {{...{pascal}_STATIC_COVER_PROPS}} />
);
'''


def _apply_preview_overrides(scenes: list, preview_image: str | None, mute_audio: bool) -> None:
    """
    预览覆盖：
    - mute_audio=True: 去掉场景级 audioSrc
    - preview_image: 将已存在的图片字段统一替换为固定占位图
    """
    for scene in scenes:
        if mute_audio:
            scene["audioSrc"] = ""

        for item in scene.get("items", []):
            param = item.get("param")
            if not isinstance(param, dict):
                continue

            if preview_image:
                for field in IMAGE_PARAM_FIELDS:
                    if field in param and isinstance(param[field], str):
                        param[field] = preview_image

                images = param.get("images")
                if isinstance(images, list):
                    for img in images:
                        if isinstance(img, dict) and "src" in img:
                            img["src"] = preview_image

                stages = param.get("stages")
                if isinstance(stages, list):
                    for st in stages:
                        if isinstance(st, dict) and "imageSrc" in st:
                            st["imageSrc"] = preview_image

                nodes = param.get("nodes")
                if isinstance(nodes, list):
                    for nd in nodes:
                        if isinstance(nd, dict) and "imageSrc" in nd:
                            nd["imageSrc"] = preview_image

                panels = param.get("panels")
                if isinstance(panels, list):
                    for pn in panels:
                        if isinstance(pn, dict) and "src" in pn:
                            pn["src"] = preview_image

def generate_scene_tsx(scene_index: int, scene: dict, name: str, config: dict) -> str:
    """生成单个场景文件"""
    scene_id = scene["sceneId"]
    scene_name = scene.get("sceneName", f"Scene {scene_index + 1}")
    items = scene.get("items", [])
    n = scene_index + 1

    # 收集使用的组件
    used_components = set()
    item_renders = []

    for item in items:
        template = item.get("template", "CENTER_FOCUS")
        param = item.get("param", {})
        order = item.get("order", 1)
        component = TEMPLATE_TO_COMPONENT.get(template, _COMPONENT_FALLBACK)
        used_components.add(component)

        total_frames = item.get("totalDurationFrames", 90)
        content = item.get("content", [])
        content_prop = f"content={{{json.dumps(content, ensure_ascii=False)}}}"
        duration_prop = f"totalDurationFrames={{{total_frames}}}"
        props_str = f"{content_prop} {duration_prop} {_param_to_jsx_props(param, name, scene_id, order)}".strip()

        item_renders.append({
            "component": component,
            "props_str": props_str,
            "duration": total_frames,
            "order": order,
        })

    # 计算场景总时长
    total_duration_expr = " + ".join([str(ir["duration"]) for ir in item_renders]) if item_renders else "90"

    # 构建导入列表
    components_import = ", ".join(sorted(used_components))

    # 构建 item 渲染代码
    renders = []
    frame_offset = 0
    for ir in item_renders:
        renders.append(
            f'            <Sequence from={{{frame_offset}}} durationInFrames={{{ir["duration"]}}}>\n'
            f'                <{ir["component"]} {ir["props_str"]} />\n'
            f'            </Sequence>'
        )
        frame_offset += ir["duration"]

    renders_str = "\n".join(renders)

    # 场景级别的音频
    scene_audio_src = scene.get("audioSrc", "")
    audio_line = ""
    if scene_audio_src:
        audio_line = f'            <Audio src={{staticFile("{scene_audio_src}")}} />'

    return f'''import React from "react";
import {{ AbsoluteFill, Sequence, Audio, staticFile }} from "remotion";
import {{ {components_import} }} from "../../../components";

// {scene_name}
const SCENE_DURATION = {total_duration_expr};

export const calculateScene{n}Duration = (): number => {{
    return SCENE_DURATION;
}};

export const Scene{n}: React.FC = () => {{
    return (
        <AbsoluteFill>
{renders_str}
{audio_line}
        </AbsoluteFill>
    );
}};
'''


def _build_scene_configs_lines(scenes: list) -> str:
    def _clean_label(t):
        return t.replace('"', '\\"') if t else ""

    return ",\n    ".join([
        (
            f'{{ name: "scene{i+1}", duration: calculateScene{i+1}Duration() + SCENE_END_PADDING, '
            f'component: Scene{i+1}, label: "{_clean_label(scene.get("sceneName", f"Scene {i+1}"))}" }}'
        )
        for i, scene in enumerate(scenes)
    ])


def _theme_accent_soft(theme: str) -> str:
    if isinstance(theme, str) and theme.startswith("#") and len(theme) == 7:
        return theme + "D9"
    return "rgba(37, 99, 235, 0.85)"


def _vertical_headline_meta(
    cover: dict | None,
    cover_still: dict | None,
    pascal: str,
    config: dict,
) -> tuple[str, str, str, str, str]:
    """竖屏顶栏固定标题：与封面 cover.title 一致；勿用首场景 sceneName（会与进度条第一段混淆）。"""
    headline = ""
    if cover and isinstance(cover.get("title"), str):
        headline = cover["title"].strip()
    if not headline and cover_still and isinstance(cover_still.get("title"), str):
        headline = cover_still["title"].strip()
    if not headline:
        vt = config.get("vertical_top_title")
        if isinstance(vt, str) and vt.strip():
            headline = vt.strip()
    if not headline:
        headline = pascal

    sub = ""
    if cover and isinstance(cover.get("seriesLabel"), str) and cover["seriesLabel"].strip():
        sub = cover["seriesLabel"].strip()
    if not sub and cover_still and isinstance(cover_still.get("seriesLabel"), str):
        sub = cover_still["seriesLabel"].strip()
    if not sub:
        sub = str(config.get("cover_series_label") or "系列")

    sub_en = ""
    if cover and isinstance(cover.get("seriesLabelEn"), str) and cover["seriesLabelEn"].strip():
        sub_en = cover["seriesLabelEn"].strip()
    if not sub_en and cover_still and isinstance(cover_still.get("seriesLabelEn"), str):
        sub_en = cover_still["seriesLabelEn"].strip()
    if not sub_en:
        sub_en = str(config.get("cover_series_label_en") or "SERIES")

    theme = ""
    if cover and isinstance(cover.get("themeColor"), str) and cover["themeColor"].strip():
        theme = cover["themeColor"].strip()
    if not theme and cover_still and isinstance(cover_still.get("themeColor"), str):
        theme = cover_still["themeColor"].strip()
    if not theme:
        theme = str(config.get("cover_theme_color") or "#2563EB")

    soft = _theme_accent_soft(theme)
    return headline, sub, sub_en, theme, soft


def generate_constants_tsx(
    name: str, pascal: str, scenes: list, config: dict, cover: dict | None
) -> str:
    transition = config.get("transition_duration_frames", 15)
    scene_end_padding = config.get("scene_end_padding_frames", 20)
    cover_dur = int(cover["durationFrames"]) if cover else 0
    main_duration_id = f"MAIN_DURATION_{name.upper()}"
    total_duration_token = f"TOTAL_DURATION_{name.upper()}"

    scene_imports = "\n".join([
        f'import {{ Scene{i+1}, calculateScene{i+1}Duration }} from "./scenes/Scene{i+1}";'
        for i in range(len(scenes))
    ])
    scene_configs = _build_scene_configs_lines(scenes)

    return f'''import {{ z }} from "zod";
{scene_imports}

export const {pascal}Schema = z.object({{}});

export const TRANSITION_DURATION = {transition};
export const SCENE_END_PADDING = {scene_end_padding};
export const COVER_DURATION_FRAMES = {cover_dur};

export const sceneConfigs = [
    {scene_configs},
];

export const {main_duration_id} =
    sceneConfigs.reduce((total, c) => total + c.duration, 0) -
    (sceneConfigs.length - 1) * TRANSITION_DURATION;

export const {total_duration_token} =
    COVER_DURATION_FRAMES + {main_duration_id};

/** 版心：与 BW_LAYOUT_*、横屏主片一致 1920×1080 */
export const DESIGN_W = 1920;
export const DESIGN_H = 1080;

export const LANDSCAPE_W = 1920;
export const LANDSCAPE_H = 1080;
export const LANDSCAPE_CONTAIN_SCALE = Math.min(LANDSCAPE_W / DESIGN_W, LANDSCAPE_H / DESIGN_H);

export const VERTICAL_CANVAS_W = 1080;
export const VERTICAL_CANVAS_H = 1920;
export const VERTICAL_PLAY_W = VERTICAL_CANVAS_W;
export const VERTICAL_PLAY_H = Math.round((VERTICAL_CANVAS_W * 9) / 16);
export const VERTICAL_PLAY_TOP = Math.round((VERTICAL_CANVAS_H - VERTICAL_PLAY_H) / 2);
export const VERTICAL_PLAY_PROGRESS_GAP = 4;
export const VERTICAL_CONTENT_SCALE = VERTICAL_PLAY_H / DESIGN_H;
/** 竖屏底部品牌栏距画布底边的偏移 */
export const VERTICAL_BOTTOM_BRAND_OFFSET = 400;
'''


def generate_main_body_tsx(
    name: str, pascal: str, cover: dict | None
) -> str:
    main_duration_id = f"MAIN_DURATION_{name.upper()}"
    const_import = f'''import {{
    COVER_DURATION_FRAMES,
    {main_duration_id},
    sceneConfigs,
    TRANSITION_DURATION,
}} from "./{pascal}Constants";'''

    transition_series = f'''                <TransitionSeries>
                    {{sceneConfigs.map((config, index) => {{
                        const SceneComp = config.component;
                        const isLast = index === sceneConfigs.length - 1;
                        return (
                            <React.Fragment key={{config.name}}>
                                <TransitionSeries.Sequence durationInFrames={{config.duration}}>
                                    <SceneComp />
                                </TransitionSeries.Sequence>
                                {{!isLast && (
                                    <TransitionSeries.Transition
                                        timing={{linearTiming({{ durationInFrames: TRANSITION_DURATION }})}}
                                        presentation={{fade()}}
                                    />
                                )}}
                            </React.Fragment>
                        );
                    }})}}
                </TransitionSeries>'''

    if cover:
        cover_props = static_cover_props_jsx(cover)
        return f'''import React from "react";
import {{ AbsoluteFill, Sequence }} from "remotion";
import {{ linearTiming, TransitionSeries }} from "@remotion/transitions";
import {{ fade }} from "@remotion/transitions/fade";
import {{ LandscapeCoverPoster }} from "../../components";
{const_import}

/** 横竖屏共用正文：封面 + 场景过渡（无全局 BGM、无外层 scale/壳） */
export const {pascal}MainBody: React.FC = () => (
    <>
        <Sequence durationInFrames={{COVER_DURATION_FRAMES}}>
            <LandscapeCoverPoster
                {cover_props}
            />
        </Sequence>
        <Sequence from={{COVER_DURATION_FRAMES}} durationInFrames={{{main_duration_id}}}>
            <AbsoluteFill>
{transition_series}
            </AbsoluteFill>
        </Sequence>
    </>
);
'''

    return f'''import React from "react";
import {{ AbsoluteFill }} from "remotion";
import {{ linearTiming, TransitionSeries }} from "@remotion/transitions";
import {{ fade }} from "@remotion/transitions/fade";
{const_import}

/** 横竖屏共用正文（无封面、无全局 BGM） */
export const {pascal}MainBody: React.FC = () => (
    <AbsoluteFill>
{transition_series}
    </AbsoluteFill>
);
'''


def generate_landscape_tsx(pascal: str, mute_audio: bool) -> str:
    if not mute_audio:
        audio_block = """            <Audio
                src={staticFile("audio/effects/Seven_Measured_Breaths.mp3")}
                loop
                volume={0.22}
                name="Background music"
            />
"""
        remotion_import = "AbsoluteFill, Audio, interpolate, staticFile, useCurrentFrame"
    else:
        audio_block = ""
        remotion_import = "AbsoluteFill, interpolate, staticFile, useCurrentFrame"

    return f'''import React from "react";
import {{ {remotion_import} }} from "remotion";

import {{ RemotionLayoutMetricsProvider }} from "../../components";
import {{ {pascal}MainBody }} from "./{pascal}MainBody";
import {{ DESIGN_H, DESIGN_W, LANDSCAPE_CONTAIN_SCALE }} from "./{pascal}Constants";

/** 横屏主片 1920×1080：版心 contain，避免裁切字幕/锚点 */
export const {pascal}Landscape: React.FC = () => {{
    const frame = useCurrentFrame();
    const bgShiftX = interpolate(frame % 240, [0, 120, 240], [-4, 4, -4], {{
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    }});
    const bgShiftY = interpolate(frame % 180, [0, 90, 180], [-3, 3, -3], {{
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    }});
    const bgBreathOpacity = interpolate(frame % 150, [0, 75, 150], [0.22, 0.34, 0.22], {{
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    }});

    return (
        <AbsoluteFill style={{{{ background: "#0f172a" }}}}>
{audio_block}            <div
                style={{{{


                    height: "100%",
                    width: "100%",
                    background: "linear-gradient(135deg, #f8fafc 0%, #eff6ff 50%, #e2e8f0 100%)",
                }}}}
            />
            <div
                style={{{{


                    position: "absolute",
                    inset: "-6%",
                    pointerEvents: "none",
                    opacity: bgBreathOpacity,
                    transform: `translate(${{bgShiftX}}px, ${{bgShiftY}}px)`,
                    background:
                        "radial-gradient(circle at 20% 30%, rgba(37, 99, 235, 0.08), transparent 40%), radial-gradient(circle at 80% 60%, rgba(56, 189, 248, 0.12), transparent 45%), radial-gradient(circle at 40% 80%, rgba(148, 163, 184, 0.15), transparent 50%)",
                }}}}
            />
            <RemotionLayoutMetricsProvider value={{{{ width: DESIGN_W, height: DESIGN_H }}}}>
                <AbsoluteFill
                    style={{{{


                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        overflow: "hidden",
                    }}}}
                >
                    <div
                        style={{{{


                            width: DESIGN_W,
                            height: DESIGN_H,
                            flexShrink: 0,
                            transform: `scale(${{LANDSCAPE_CONTAIN_SCALE}})`,
                            transformOrigin: "center center",
                        }}}}
                    >
                        <{pascal}MainBody />
                    </div>
                </AbsoluteFill>
            </RemotionLayoutMetricsProvider>
        </AbsoluteFill>
    );
}};
'''


def generate_vertical_tsx(pascal: str, mute_audio: bool) -> str:
    if not mute_audio:
        audio_block = """            <Audio
                src={staticFile("audio/effects/Seven_Measured_Breaths.mp3")}
                loop
                volume={0.22}
                name="Background music"
            />
"""
        remotion_import = "AbsoluteFill, Audio, interpolate, staticFile, useCurrentFrame"
    else:
        audio_block = ""
        remotion_import = "AbsoluteFill, interpolate, staticFile, useCurrentFrame"

    return f'''import React from "react";
import {{ {remotion_import} }} from "remotion";

import {{ RemotionLayoutMetricsProvider, VERTICAL_SHELL_BG, VerticalBottomBrandBar }} from "../../components";
import {{ {pascal}MainBody }} from "./{pascal}MainBody";
import {{ {pascal}ProgressBar, {pascal}TopStaticHeadline }} from "./{pascal}VerticalChrome";
import {{
    DESIGN_H,
    DESIGN_W,
    VERTICAL_BOTTOM_BRAND_OFFSET,
    VERTICAL_CANVAS_W,
    VERTICAL_CONTENT_SCALE,
    VERTICAL_PLAY_H,
    VERTICAL_PLAY_PROGRESS_GAP,
    VERTICAL_PLAY_TOP,
    VERTICAL_PLAY_W,
}} from "./{pascal}Constants";

/** 竖屏 1080×1920：顶栏 + 中间 16:9 视口 + 进度条 */
export const {pascal}Vertical: React.FC = () => {{
    const frame = useCurrentFrame();
    const bgShiftX = interpolate(frame % 240, [0, 120, 240], [-4, 4, -4], {{
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    }});
    const bgShiftY = interpolate(frame % 180, [0, 90, 180], [-3, 3, -3], {{
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    }});
    const bgBreathOpacity = interpolate(frame % 150, [0, 75, 150], [0.22, 0.34, 0.22], {{
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    }});

    return (
        <AbsoluteFill style={{{{ background: VERTICAL_SHELL_BG }}}}>
{audio_block}            <{pascal}TopStaticHeadline canvasW={{VERTICAL_CANVAS_W}} topBandH={{VERTICAL_PLAY_TOP}} />
            <div
                style={{{{


                    position: "absolute",
                    left: 0,
                    top: VERTICAL_PLAY_TOP,
                    width: VERTICAL_PLAY_W,
                    height: VERTICAL_PLAY_H,
                    overflow: "hidden",
                }}}}
            >
                <div
                    style={{{{


                        height: "100%",
                        width: "100%",
                    background: "linear-gradient(135deg, #f8fafc 0%, #eff6ff 50%, #e2e8f0 100%)",
                }}}}
            />
            <div
                style={{{{


                    position: "absolute",
                    inset: "-6%",
                    pointerEvents: "none",
                    opacity: bgBreathOpacity,
                    transform: `translate(${{bgShiftX}}px, ${{bgShiftY}}px)`,
                    background:
                        "radial-gradient(circle at 20% 30%, rgba(37, 99, 235, 0.08), transparent 40%), radial-gradient(circle at 80% 60%, rgba(56, 189, 248, 0.12), transparent 45%), radial-gradient(circle at 40% 80%, rgba(148, 163, 184, 0.15), transparent 50%)",
                }}}}
                />
                <div
                    style={{{{


                        position: "absolute",
                        left: 0,
                        right: 0,
                        top: 0,
                        height: VERTICAL_PLAY_H,
                        overflow: "hidden",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "flex-start",
                    }}}}
                >
                    <RemotionLayoutMetricsProvider value={{{{ width: DESIGN_W, height: DESIGN_H }}}}>
                        <div
                            style={{{{


                                width: DESIGN_W,
                                height: DESIGN_H,
                                flexShrink: 0,
                                transform: `scale(${{VERTICAL_CONTENT_SCALE}})`,
                                transformOrigin: "top center",
                            }}}}
                        >
                            <{pascal}MainBody />
                        </div>
                    </RemotionLayoutMetricsProvider>
                </div>
            </div>
            <div
                style={{{{
                    position: "absolute",
                    left: 0,
                    top: VERTICAL_PLAY_TOP,
                    width: VERTICAL_PLAY_W,
                    height: VERTICAL_PLAY_H,
                    border: "1px solid rgba(255, 255, 255, 0.07)",
                    boxSizing: "border-box",
                    pointerEvents: "none",
                    zIndex: 20,
                }}}}
            />
            <div
                style={{{{
                    position: "absolute",
                    left: 0,
                    top: VERTICAL_PLAY_TOP + VERTICAL_PLAY_H + VERTICAL_PLAY_PROGRESS_GAP,
                    width: VERTICAL_CANVAS_W,
                    boxSizing: "border-box",
                    pointerEvents: "none",
                }}}}
            >
                <{pascal}ProgressBar />
            </div>
            <div
                style={{{{ 
                    position: "absolute",
                    left: 0,
                    bottom: VERTICAL_BOTTOM_BRAND_OFFSET,
                    width: VERTICAL_CANVAS_W,
                    boxSizing: "border-box",
                    pointerEvents: "none",
                    zIndex: 18,
                }}}}
            >
                <VerticalBottomBrandBar canvasW={{VERTICAL_CANVAS_W}} />
            </div>
        </AbsoluteFill>
    );
}};
'''


def generate_vertical_chrome_tsx(
    pascal: str,
    cover: dict | None,
    cover_still: dict | None,
    config: dict,
) -> str:
    h, sub, sub_en, theme, theme_soft = _vertical_headline_meta(
        cover, cover_still, pascal, config
    )
    head = (
        'import React from "react";\n'
        'import { useCurrentFrame } from "remotion";\n\n'
        'import { VerticalSegmentedProgressBar } from "../../components";\n'
        f'import {{ COVER_DURATION_FRAMES, sceneConfigs, TRANSITION_DURATION }} '
        f'from "./{pascal}Constants";\n\n'
        'const FONT_STACK =\n'
        '    \'"PingFang SC", "Microsoft YaHei", "Noto Sans SC", "Source Han Sans SC", sans-serif\';\n\n'
        f"const STATIC_HEADLINE = {json.dumps(h, ensure_ascii=False)};\n"
        f"const STATIC_HEADLINE_SUB = {json.dumps(sub, ensure_ascii=False)};\n"
        f"const STATIC_HEADLINE_SUB_EN = {json.dumps(sub_en, ensure_ascii=False)};\n"
        f"const THEME_ACCENT = {json.dumps(theme, ensure_ascii=False)};\n"
        f"const THEME_ACCENT_SOFT = {json.dumps(theme_soft, ensure_ascii=False)};\n\n"
        "type TopStaticHeadlineProps = {\n"
        "    canvasW: number;\n"
        "    topBandH: number;\n"
        "};\n\n"
        f"export const {pascal}TopStaticHeadline: React.FC<TopStaticHeadlineProps> = "
        "({ canvasW, topBandH }) => (\n"
        "    <div\n"
        "        style={{\n"
        "            position: \"absolute\",\n"
        "            left: 0,\n"
        "            top: 0,\n"
        "            width: canvasW,\n"
        "            height: topBandH,\n"
        "            overflow: \"hidden\",\n"
        "            boxSizing: \"border-box\",\n"
        "            pointerEvents: \"none\",\n"
        "        }}\n"
        "    >\n"
        "        <div\n"
        "            style={{\n"
        "                position: \"absolute\",\n"
        "                inset: 0,\n"
        "                background:\n"
        "                    \"radial-gradient(ellipse 72% 85% at 50% 48%, rgba(37, 99, 235, 0.14) 0%, "
        "transparent 58%), radial-gradient(ellipse 50% 40% at 50% 100%, rgba(56, 189, 248, 0.08) 0%, "
        "transparent 50%)\",\n"
        "            }}\n"
        "        />\n"
        "        <div\n"
        "            style={{\n"
        "                position: \"absolute\",\n"
        "                left: \"12%\",\n"
        "                right: \"12%\",\n"
        "                bottom: 0,\n"
        "                height: 1,\n"
        "                background: \"linear-gradient(90deg, transparent 0%, rgba(226, 232, 240, 0.45) 45%, "
        "rgba(226, 232, 240, 0.45) 55%, transparent 100%)\",\n"
        "            }}\n"
        "        />\n"
        "        <div\n"
        "            style={{\n"
        "                position: \"absolute\",\n"
        "                left: 36,\n"
        "                top: 36,\n"
        "                width: 40,\n"
        "                height: 40,\n"
        "                borderLeft: \"2px solid rgba(248, 250, 252, 0.22)\",\n"
        "                borderTop: \"2px solid rgba(248, 250, 252, 0.22)\",\n"
        "                borderRadius: \"2px 0 0 0\",\n"
        "            }}\n"
        "        />\n"
        "        <div\n"
        "            style={{\n"
        "                position: \"absolute\",\n"
        "                right: 36,\n"
        "                top: 36,\n"
        "                width: 40,\n"
        "                height: 40,\n"
        "                borderRight: \"2px solid rgba(248, 250, 252, 0.22)\",\n"
        "                borderTop: \"2px solid rgba(248, 250, 252, 0.22)\",\n"
        "                borderRadius: \"0 2px 0 0\",\n"
        "            }}\n"
        "        />\n"
        "        <div\n"
        "            style={{\n"
        "                position: \"relative\",\n"
        "                zIndex: 1,\n"
        "                height: \"100%\",\n"
        "                display: \"flex\",\n"
        "                flexDirection: \"column\",\n"
        "                alignItems: \"center\",\n"
        "                justifyContent: \"center\",\n"
        "                padding: \"0 56px\",\n"
        "                boxSizing: \"border-box\",\n"
        "            }}\n"
        "        >\n"
        "            <div\n"
        "                style={{\n"
        "                    width: 56,\n"
        "                    height: 4,\n"
        "                    borderRadius: 999,\n"
        "                    background: `linear-gradient(90deg, ${THEME_ACCENT_SOFT}, rgba(56, 189, 248, 0.95))`,\n"
        "                    boxShadow: \"0 0 22px rgba(37, 99, 235, 0.45)\",\n"
        "                    marginBottom: 22,\n"
        "                }}\n"
        "            />\n"
        "            <div\n"
        "                style={{\n"
        "                    fontSize: 80,\n"
        "                    fontWeight: 800,\n"
        "                    fontFamily: FONT_STACK,\n"
        "                    color: \"#fafafa\",\n"
        "                    letterSpacing: \"0.14em\",\n"
        "                    textAlign: \"center\",\n"
        "                    lineHeight: 1.08,\n"
        "                    textShadow:\n"
        "                        \"0 1px 0 rgba(255,255,255,0.12), 0 4px 36px rgba(0,0,0,0.55), "
        "0 0 48px rgba(37, 99, 235, 0.25)\",\n"
        "                }}\n"
        "            >\n"
        "                {STATIC_HEADLINE}\n"
        "            </div>\n"
        "            <div\n"
        "                style={{\n"
        "                    marginTop: 10,\n"
        "                    fontSize: 15,\n"
        "                    fontWeight: 600,\n"
        "                    fontFamily: 'ui-sans-serif, \"Segoe UI\", sans-serif',\n"
        "                    color: \"rgba(148, 163, 184, 0.95)\",\n"
        "                    letterSpacing: \"0.42em\",\n"
        "                    textAlign: \"center\",\n"
        "                }}\n"
        "            >\n"
        "                {STATIC_HEADLINE_SUB_EN}\n"
        "            </div>\n"
        "            <div\n"
        "                style={{\n"
        "                    marginTop: 20,\n"
        "                    display: \"flex\",\n"
        "                    flexDirection: \"row\",\n"
        "                    alignItems: \"center\",\n"
        "                    justifyContent: \"center\",\n"
        "                    gap: 20,\n"
        "                    width: \"100%\",\n"
        "                    maxWidth: 520,\n"
        "                }}\n"
        "            >\n"
        "                <div\n"
        "                    style={{\n"
        "                        flex: 1,\n"
        "                        height: 1,\n"
        "                        background: \"linear-gradient(90deg, transparent, rgba(248, 250, 252, 0.38))\",\n"
        "                    }}\n"
        "                />\n"
        "                <div\n"
        "                    style={{\n"
        "                        width: 7,\n"
        "                        height: 7,\n"
        "                        transform: \"rotate(45deg)\",\n"
        "                        background: `linear-gradient(135deg, ${THEME_ACCENT}, rgba(56, 189, 248, 0.9))`,\n"
        "                        boxShadow: \"0 0 12px rgba(37, 99, 235, 0.5)\",\n"
        "                        flexShrink: 0,\n"
        "                    }}\n"
        "                />\n"
        "                <div\n"
        "                    style={{\n"
        "                        fontSize: 26,\n"
        "                        fontWeight: 600,\n"
        "                        fontFamily: FONT_STACK,\n"
        "                        color: \"rgba(248, 250, 252, 0.88)\",\n"
        "                        letterSpacing: \"0.42em\",\n"
        "                        textAlign: \"center\",\n"
        "                        flexShrink: 0,\n"
        "                    }}\n"
        "                >\n"
        "                    {STATIC_HEADLINE_SUB}\n"
        "                </div>\n"
        "                <div\n"
        "                    style={{\n"
        "                        width: 7,\n"
        "                        height: 7,\n"
        "                        transform: \"rotate(45deg)\",\n"
        "                        background: `linear-gradient(135deg, ${THEME_ACCENT}, rgba(56, 189, 248, 0.9))`,\n"
        "                        boxShadow: \"0 0 12px rgba(37, 99, 235, 0.5)\",\n"
        "                        flexShrink: 0,\n"
        "                    }}\n"
        "                />\n"
        "                <div\n"
        "                    style={{\n"
        "                        flex: 1,\n"
        "                        height: 1,\n"
        "                        background: \"linear-gradient(270deg, transparent, rgba(248, 250, 252, 0.38))\",\n"
        "                    }}\n"
        "                />\n"
        "            </div>\n"
        "        </div>\n"
        "    </div>\n"
        ");\n\n"
    )
    prog = (
        f"export const {pascal}ProgressBar: React.FC = () => {{\n"
        "    const frame = useCurrentFrame();\n"
        "    return (\n"
        "        <VerticalSegmentedProgressBar\n"
        "            frame={frame}\n"
        "            coverDurationFrames={COVER_DURATION_FRAMES}\n"
        "            sceneConfigs={sceneConfigs}\n"
        "            transitionDuration={TRANSITION_DURATION}\n"
        "            fontStack={FONT_STACK}\n"
        "        />\n"
        "    );\n"
        "};\n"
    )
    return head + prog


def generate_entry_tsx(name: str, pascal: str) -> str:
    td = f"TOTAL_DURATION_{name.upper()}"
    main_d = f"MAIN_DURATION_{name.upper()}"
    return f'''/**
 * 横屏主片 + 竖屏黑边壳双入口，共享 {pascal}MainBody。
 * 参见 docs/横竖屏双导出与字幕改造指南.md
 */
export {{
    {pascal}Schema,
    COVER_DURATION_FRAMES,
    DESIGN_H,
    DESIGN_W,
    LANDSCAPE_CONTAIN_SCALE,
    LANDSCAPE_H,
    LANDSCAPE_W,
    {main_d},
    sceneConfigs,
    {td},
    TRANSITION_DURATION,
    VERTICAL_BOTTOM_BRAND_OFFSET,
    VERTICAL_CANVAS_H,
    VERTICAL_CANVAS_W,
    VERTICAL_CONTENT_SCALE,
    VERTICAL_PLAY_H,
    VERTICAL_PLAY_PROGRESS_GAP,
    VERTICAL_PLAY_TOP,
    VERTICAL_PLAY_W,
}} from "./{pascal}Constants";
export {{ {pascal}Landscape as {pascal} }} from "./{pascal}Landscape";
export {{ {pascal}Vertical as {pascal}竖屏 }} from "./{pascal}Vertical";
'''


def update_root_tsx(
    root_path: Path, name: str, pascal: str, config: dict, cover_still: dict | None
):
    """在 Root.tsx 注册横屏 + 竖屏 Composition；cover_still 有值时追加横/竖封面 still 与 import。"""
    fps = config.get("fps", 30)
    duration_token = f"TOTAL_DURATION_{name.upper()}"
    vert_id = f"{pascal}竖屏"
    cover_land_id = f"{pascal}封面横屏"
    cover_vert_id = f"{pascal}封面竖屏"

    with open(root_path, "r", encoding="utf-8") as f:
        content = f.read()

    for comp_id in (cover_land_id, cover_vert_id):
        pattern = (
            r"\n\s*(?:\{/\*[^\n]*\*/\}\s*\n)?\s*<Composition\b"
            r"(?:(?!<Composition)[\s\S])*?\bid=\""
            + re.escape(comp_id)
            + r"\"[\s\S]*?/>"
        )
        content = re.sub(pattern, "\n", content, count=1)

    cover_imp_line_re = re.compile(
        r"^\s*import\s*\{[^}]+\}\s*from\s*[\"']\./remotions/"
        + re.escape(name)
        + "/"
        + re.escape(pascal)
        + r"CoverStills[\"'];\s*\n?",
        re.MULTILINE,
    )
    content = cover_imp_line_re.sub("", content)

    # 只删除「单个」Composition：从 <Composition 到目标 id 之间不能跨过另一个 <Composition，
    # 否则会从文件里第一个 <Composition（如 TemplateShowcase）一直吞到目标 id，误删中间所有条目。
    for comp_id in (pascal, vert_id):
        pattern = (
            r"\n\s*(?:\{/\*[^\n]*\*/\}\s*\n)?\s*<Composition\b"
            r"(?:(?!<Composition)[\s\S])*?\bid=\""
            + re.escape(comp_id)
            + r"\"[\s\S]*?/>"
        )
        content = re.sub(pattern, "\n", content, count=1)

    imp_line_re = re.compile(
        r"^\s*import\s*\{[^}]+\}\s*from\s*[\"']\./remotions/"
        + re.escape(name)
        + "/"
        + re.escape(pascal)
        + r"[\"'];\s*\n?",
        re.MULTILINE,
    )
    content = imp_line_re.sub("", content)

    import_line = (
        f'import {{ {pascal}, {vert_id}, {pascal}Schema, {duration_token} }} '
        f'from "./remotions/{name}/{pascal}";'
    )
    cover_import_line = ""
    if cover_still:
        cover_import_line = (
            f'import {{ {cover_land_id}, {cover_vert_id} }} '
            f'from "./remotions/{name}/{pascal}CoverStills";'
        )

    cover_comp_block = ""
    if cover_still:
        cover_comp_block = f"""
      {{/* {cover_land_id} - 横屏封面 still 1920×1080 */}}
      <Composition
        id="{cover_land_id}"
        component={{{cover_land_id}}}
        durationInFrames={{1}}
        fps={{{fps}}}
        width={{1920}}
        height={{1080}}
        defaultProps={{{{}}}}
      />

      {{/* {cover_vert_id} - 3:4 封面 still 1080×1440 */}}
      <Composition
        id="{cover_vert_id}"
        component={{{cover_vert_id}}}
        durationInFrames={{1}}
        fps={{{fps}}}
        width={{1080}}
        height={{1440}}
        defaultProps={{{{}}}}
      />"""

    composition_block = f"""
      {{/* {pascal} - 横屏 1920×1080（自动生成） */}}
      <Composition
        id="{pascal}"
        component={{{pascal}}}
        durationInFrames={{{duration_token}}}
        fps={{{fps}}}
        width={{1920}}
        height={{1080}}
        schema={{{pascal}Schema}}
        defaultProps={{{{}}}}
      />

      {{/* {vert_id} - 竖屏 1080×1920（自动生成） */}}
      <Composition
        id="{vert_id}"
        component={{{vert_id}}}
        durationInFrames={{{duration_token}}}
        fps={{{fps}}}
        width={{1080}}
        height={{1920}}
        schema={{{pascal}Schema}}
        defaultProps={{{{}}}}
      />{cover_comp_block}"""

    lines = content.split("\n")
    insert_at = None
    for i, line in enumerate(lines):
        if line.strip().startswith("import ") and "./remotions/" in line:
            insert_at = i + 1
    if insert_at is not None:
        lines.insert(insert_at, import_line)
        if cover_import_line:
            lines.insert(insert_at + 1, cover_import_line)
        content = "\n".join(lines)
    else:
        last_import = content.rfind("import ")
        if last_import >= 0:
            end_of_line = content.index("\n", last_import)
            extra = import_line + ("\n" + cover_import_line if cover_import_line else "")
            content = content[: end_of_line + 1] + extra + "\n" + content[end_of_line + 1 :]

    close_frag = content.rfind("\n    </>")
    if close_frag >= 0:
        content = content[:close_frag] + composition_block + content[close_frag:]

    with open(root_path, "w", encoding="utf-8") as f:
        f.write(content)

    root_msg = "  ✅ Root.tsx 已更新（横屏 + 竖屏双 Composition"
    if cover_still:
        root_msg += " + 横/竖封面 still"
    root_msg += "）"
    print(root_msg)


def generate_scenes_index(scene_count: int) -> str:
    exports = "\n".join([
        f'export {{ Scene{i+1} }} from "./Scene{i+1}";'
        for i in range(scene_count)
    ])
    return exports


def main():
    parser = argparse.ArgumentParser(description="Step 4: Remotion 代码生成（模板驱动版）")
    parser.add_argument("--input", "-i", required=True, help="scene-scripts.json 路径")
    parser.add_argument("--name", "-n", help="视频名称")
    parser.add_argument("--skip-root", action="store_true", help="不更新 Root.tsx")
    parser.add_argument(
        "--preview-image",
        help="预览模式固定图片路径（例如 images/placeholder.png），会覆盖已有图片字段",
    )
    parser.add_argument(
        "--mute-audio",
        action="store_true",
        help="预览模式：忽略场景音频（不渲染 Audio）",
    )
    args = parser.parse_args()

    script_dir = Path(__file__).parent
    config = load_config(script_dir)
    project_root = Path(config.get("project_root", script_dir.parent))

    name = args.name or config.get("package_name", "my_video")
    pascal = to_pascal_case(name)

    input_path = Path(args.input)
    if not input_path.exists():
        print(f"❌ 文件不存在: {input_path}")
        return False

    with open(input_path, "r", encoding="utf-8") as f:
        scripts_data = json.load(f)

    scenes = scripts_data.get("scenes", [])
    if not scenes:
        print("❌ 无场景数据")
        return False

    if needs_text_length_timings_from_scripts(scripts_data):
        inject_text_length_content_timings(
            scripts_data, int(config.get("fps", 30)), config
        )
        print(
            "⏱️ 未检测到 Step3 音频时间轴（首条 content 缺少 startFrame/durationFrames），"
            "已按文案长度在内存中注入预览帧（不写回 scene-scripts.json）"
        )

    cover = normalize_cover(scripts_data)
    if cover:
        print(
            f"📌 片头封面: {cover['durationFrames']} 帧 — "
            f"{cover['title'][:20]}{'…' if len(cover['title']) > 20 else ''}"
        )

    cover_still = normalize_cover_still(scripts_data)
    if cover_still:
        print("📎 封面 still：已检测到 cover 文案，将生成 CoverProps / CoverStills 并注册 Root")

    if args.preview_image or args.mute_audio:
        _apply_preview_overrides(
            scenes=scenes,
            preview_image=args.preview_image,
            mute_audio=args.mute_audio,
        )
        print(
            "🧪 预览覆盖已启用："
            f"固定图片={'是' if args.preview_image else '否'}，"
            f"静音音频={'是' if args.mute_audio else '否'}"
        )

    remotion_dir = project_root / "src" / "remotions" / name
    scenes_dir = remotion_dir / "scenes"
    scenes_dir.mkdir(parents=True, exist_ok=True)

    # 复制 scene-scripts.json 到 scenes 目录
    scripts_dest = scenes_dir / "scene-scripts.json"
    if input_path.resolve() != scripts_dest.resolve():
        shutil.copy2(input_path, scripts_dest)
        print(f"📄 复制 scene-scripts.json → {scripts_dest}")

    # 生成场景文件
    print(f"\n🎬 生成场景代码 ({len(scenes)} 个场景)...")
    for i, scene in enumerate(scenes):
        scene_code = generate_scene_tsx(i, scene, name, config)
        scene_path = scenes_dir / f"Scene{i+1}.tsx"
        with open(scene_path, "w", encoding="utf-8") as f:
            f.write(scene_code)
        print(f"  ✅ Scene{i+1}.tsx ({scene.get('sceneName', '')})")

    # 生成 index.ts
    index_code = generate_scenes_index(len(scenes))
    with open(scenes_dir / "index.ts", "w", encoding="utf-8") as f:
        f.write(index_code)
    print("  ✅ index.ts")

    # 横竖双入口：Constants / MainBody / Landscape / Vertical / Chrome / 入口 re-export
    const_code = generate_constants_tsx(name, pascal, scenes, config, cover)
    with open(remotion_dir / f"{pascal}Constants.ts", "w", encoding="utf-8") as f:
        f.write(const_code)
    print(f"  ✅ {pascal}Constants.ts")

    main_body = generate_main_body_tsx(name, pascal, cover)
    with open(remotion_dir / f"{pascal}MainBody.tsx", "w", encoding="utf-8") as f:
        f.write(main_body)
    print(f"  ✅ {pascal}MainBody.tsx")

    land = generate_landscape_tsx(pascal, mute_audio=args.mute_audio)
    with open(remotion_dir / f"{pascal}Landscape.tsx", "w", encoding="utf-8") as f:
        f.write(land)
    print(f"  ✅ {pascal}Landscape.tsx")

    vert = generate_vertical_tsx(pascal, mute_audio=args.mute_audio)
    with open(remotion_dir / f"{pascal}Vertical.tsx", "w", encoding="utf-8") as f:
        f.write(vert)
    print(f"  ✅ {pascal}Vertical.tsx")

    chrome = generate_vertical_chrome_tsx(pascal, cover, cover_still, config)
    with open(remotion_dir / f"{pascal}VerticalChrome.tsx", "w", encoding="utf-8") as f:
        f.write(chrome)
    print(f"  ✅ {pascal}VerticalChrome.tsx")

    entry = generate_entry_tsx(name, pascal)
    with open(remotion_dir / f"{pascal}.tsx", "w", encoding="utf-8") as f:
        f.write(entry)
    print(f"  ✅ {pascal}.tsx（双 export）")

    cover_props_path = remotion_dir / f"{pascal}CoverProps.ts"
    cover_stills_path = remotion_dir / f"{pascal}CoverStills.tsx"
    if cover_still:
        with open(cover_props_path, "w", encoding="utf-8") as f:
            f.write(generate_cover_props_tsx(pascal, cover_still))
        print(f"  ✅ {pascal}CoverProps.ts")
        with open(cover_stills_path, "w", encoding="utf-8") as f:
            f.write(generate_cover_stills_tsx(pascal))
        print(f"  ✅ {pascal}CoverStills.tsx")
    else:
        if cover_props_path.exists():
            cover_props_path.unlink()
            print(f"  🗑️ 已删除 {pascal}CoverProps.ts（cover 无有效 title/subtitle）")
        if cover_stills_path.exists():
            cover_stills_path.unlink()
            print(f"  🗑️ 已删除 {pascal}CoverStills.tsx")

    # 更新 Root.tsx
    if not args.skip_root:
        root_path = project_root / "src" / "Root.tsx"
        if root_path.exists():
            update_root_tsx(root_path, name, pascal, config, cover_still)

    print("\n✅ Remotion 代码生成完成（横屏 + 竖屏双入口）!")
    print(f"   📂 {remotion_dir}")
    print(f"   Root：Composition「{pascal}」1920×1080、「{pascal}竖屏」1080×1920")
    if cover_still:
        print(
            f"   封面 still：「{pascal}封面横屏」「{pascal}封面竖屏」"
            " — `npx remotion still src/index.ts <id> out/cover.png --frame=0`"
        )
    print("   Studio 请分别预览上述两个 id；导出需各执行一次 remotion render")

    return True


if __name__ == "__main__":
    success = main()
    exit(0 if success else 1)
