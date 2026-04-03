#!/usr/bin/env python3
"""
Step 4: Remotion 动画代码生成（模板驱动版）
根据 scene-scripts.json（含音频时长）生成 Remotion 动画 TSX 代码。
每个 item 的 `content`、`totalDurationFrames` 与 `param`（模板字段）共同传给对应组件。

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


def static_cover_props_jsx(cover: dict) -> str:
    """StaticCover 的 JSX 属性行（多行缩进与 Scene 内一致）。"""
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


def generate_composition_tsx(
    name: str,
    scenes: list,
    config: dict,
    *,
    mute_audio: bool = False,
    cover: dict | None = None,
) -> str:
    """生成主 Composition 文件。若 scripts_data.cover 有效，则片头插入 StaticCover 并拉长总时长。"""
    pascal = to_pascal_case(name)
    transition = config.get("transition_duration_frames", 15)
    scene_end_padding = config.get("scene_end_padding_frames", 20)
    main_duration_id = f"MAIN_DURATION_{name.upper()}"

    scene_imports = "\n".join([
        f'import {{ Scene{i+1}, calculateScene{i+1}Duration }} from "./scenes/Scene{i+1}";'
        for i in range(len(scenes))
    ])

    def _clean_label(t): return t.replace('"', '\\"') if t else ""
    scene_configs = ",\n    ".join([
        f'{{ name: "scene{i+1}", duration: calculateScene{i+1}Duration() + SCENE_END_PADDING, component: Scene{i+1}, label: "{_clean_label(scene.get("sceneName", f"Scene {i+1}"))}" }}'
        for i, scene in enumerate(scenes)
    ])

    bgm_block = ""
    if not mute_audio:
        bgm_block = """            <Audio
                src={staticFile("audio/effects/Seven_Measured_Breaths.mp3")}
                loop
                volume={0.22}
                name="Background music"
            />
"""

    if cover:
        remotion_named = (
            "AbsoluteFill, Audio, interpolate, staticFile, Sequence, useCurrentFrame"
            if not mute_audio
            else "AbsoluteFill, interpolate, Sequence, useCurrentFrame"
        )
        static_import = 'import { StaticCover } from "../../components";\n'
        cover_dur = cover["durationFrames"]
        cover_props = static_cover_props_jsx(cover)
        duration_block = f"""const COVER_DURATION_FRAMES = {cover_dur};

const sceneConfigs = [
    {scene_configs},
];

const {main_duration_id} =
    sceneConfigs.reduce((total, c) => total + c.duration, 0) -
    (sceneConfigs.length - 1) * TRANSITION_DURATION;

export const TOTAL_DURATION_{name.upper()} =
    COVER_DURATION_FRAMES + {main_duration_id};"""
        progress_bar = f"""const ProgressBar: React.FC = () => {{
    const frame = useCurrentFrame();
    if (frame < COVER_DURATION_FRAMES) {{
        return null;
    }}
    const contentFrame = frame - COVER_DURATION_FRAMES;

    let currentStart = 0;
    const segments = sceneConfigs.map((c, i) => {{
        const isLast = i === sceneConfigs.length - 1;
        const segmentDuration = isLast ? c.duration : c.duration - TRANSITION_DURATION;

        const segment = {{ start: currentStart, duration: segmentDuration }};
        currentStart += segmentDuration;
        return segment;
    }});

    const activeIndex = segments.findIndex(seg => contentFrame >= seg.start && contentFrame < seg.start + seg.duration);
    const validActiveIndex = activeIndex !== -1 ? activeIndex : segments.length - 1;
    const activeLabel = sceneConfigs[validActiveIndex]?.label || "";

    return (
        <div style={{{{
            position: "absolute", top: 40, left: 40, right: 40,
            display: "flex", flexDirection: "column", gap: 16, zIndex: 100
        }}}}>
            <div style={{{{ display: "flex", gap: 8, height: 8 }}}}>
                {{segments.map((seg, i) => {{
                    const progress = Math.max(0, Math.min(1, (contentFrame - seg.start) / seg.duration));
                    const isActive = i === validActiveIndex;
                    return (
                        <div key={{i}} style={{{{
                            flex: 1,
                            backgroundColor: isActive ? "rgba(34, 43, 69, 0.18)" : "rgba(34, 43, 69, 0.1)",
                            borderRadius: 999,
                            overflow: "hidden",
                            border: isActive ? "1px solid rgba(34, 43, 69, 0.32)" : "1px solid rgba(34, 43, 69, 0.2)",
                            boxShadow: isActive
                                ? "0 3px 10px rgba(31, 41, 55, 0.12)"
                                : "0 1px 4px rgba(31, 41, 55, 0.08)",
                        }}}}>
                            <div style={{{{
                                width: `${{progress * 100}}%`,
                                height: "100%",
                                background: isActive
                                    ? "linear-gradient(90deg, rgba(29, 78, 216, 0.95), rgba(56, 189, 248, 0.92))"
                                    : "rgba(30, 41, 59, 0.72)",
                                boxShadow: isActive ? "0 0 12px rgba(37, 99, 235, 0.35)" : "none",
                            }}}} />
                        </div>
                    );
                }})}}
            </div>

            <div style={{{{
                fontSize: 30,
                fontWeight: 700,
                fontFamily: '"PingFang SC", "Microsoft YaHei", "Noto Sans SC", "Source Han Sans SC", sans-serif',
                letterSpacing: 0.4,
                color: "rgba(17, 24, 39, 0.95)",
                textAlign: "left",
                textShadow: "0 1px 2px rgba(255,255,255,0.45)",
                padding: "6px 14px",
                backgroundColor: "rgba(255, 255, 255, 0.58)",
                border: "1px solid rgba(17, 24, 39, 0.12)",
                borderRadius: 10,
                alignSelf: "flex-start",
                backdropFilter: "blur(6px)",
                boxShadow: "0 6px 20px rgba(15, 23, 42, 0.12)",
            }}}}>
                {{activeLabel}}
            </div>
        </div>
    );
}};"""
        timeline_block = f"""            <Sequence durationInFrames={{COVER_DURATION_FRAMES}}>
                <StaticCover
                    {cover_props}
                />
            </Sequence>
            <Sequence from={{COVER_DURATION_FRAMES}} durationInFrames={{{main_duration_id}}}>
                <AbsoluteFill>
                    <div
                        style={{{{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: "10%",
                            minHeight: 48,
                            backgroundColor: "rgba(0,0,0,0.5)",
                        }}}}
                    />
                    <TransitionSeries>
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
                    </TransitionSeries>
                </AbsoluteFill>
            </Sequence>"""
    else:
        remotion_named = (
            "AbsoluteFill, Audio, interpolate, staticFile, useCurrentFrame"
            if not mute_audio
            else "AbsoluteFill, interpolate, useCurrentFrame"
        )
        static_import = ""
        duration_block = f"""const sceneConfigs = [
    {scene_configs},
];

export const TOTAL_DURATION_{name.upper()} =
    sceneConfigs.reduce((total, c) => total + c.duration, 0) -
    (sceneConfigs.length - 1) * TRANSITION_DURATION;"""
        progress_bar = f"""const ProgressBar: React.FC = () => {{
    const frame = useCurrentFrame();

    let currentStart = 0;
    const segments = sceneConfigs.map((c, i) => {{
        const isLast = i === sceneConfigs.length - 1;
        const segmentDuration = isLast ? c.duration : c.duration - TRANSITION_DURATION;

        const segment = {{ start: currentStart, duration: segmentDuration }};
        currentStart += segmentDuration;
        return segment;
    }});

    const activeIndex = segments.findIndex(seg => frame >= seg.start && frame < seg.start + seg.duration);
    const validActiveIndex = activeIndex !== -1 ? activeIndex : segments.length - 1;
    const activeLabel = sceneConfigs[validActiveIndex]?.label || "";

    return (
        <div style={{{{
            position: "absolute", top: 40, left: 40, right: 40,
            display: "flex", flexDirection: "column", gap: 16, zIndex: 100
        }}}}>
            <div style={{{{ display: "flex", gap: 8, height: 8 }}}}>
                {{segments.map((seg, i) => {{
                    const progress = Math.max(0, Math.min(1, (frame - seg.start) / seg.duration));
                    const isActive = i === validActiveIndex;
                    return (
                        <div key={{i}} style={{{{
                            flex: 1,
                            backgroundColor: isActive ? "rgba(34, 43, 69, 0.18)" : "rgba(34, 43, 69, 0.1)",
                            borderRadius: 999,
                            overflow: "hidden",
                            border: isActive ? "1px solid rgba(34, 43, 69, 0.32)" : "1px solid rgba(34, 43, 69, 0.2)",
                            boxShadow: isActive
                                ? "0 3px 10px rgba(31, 41, 55, 0.12)"
                                : "0 1px 4px rgba(31, 41, 55, 0.08)",
                        }}}}>
                            <div style={{{{
                                width: `${{progress * 100}}%`,
                                height: "100%",
                                background: isActive
                                    ? "linear-gradient(90deg, rgba(29, 78, 216, 0.95), rgba(56, 189, 248, 0.92))"
                                    : "rgba(30, 41, 59, 0.72)",
                                boxShadow: isActive ? "0 0 12px rgba(37, 99, 235, 0.35)" : "none",
                            }}}} />
                        </div>
                    );
                }})}}
            </div>

            <div style={{{{
                fontSize: 30,
                fontWeight: 700,
                fontFamily: '"PingFang SC", "Microsoft YaHei", "Noto Sans SC", "Source Han Sans SC", sans-serif',
                letterSpacing: 0.4,
                color: "rgba(17, 24, 39, 0.95)",
                textAlign: "left",
                textShadow: "0 1px 2px rgba(255,255,255,0.45)",
                padding: "6px 14px",
                backgroundColor: "rgba(255, 255, 255, 0.58)",
                border: "1px solid rgba(17, 24, 39, 0.12)",
                borderRadius: 10,
                alignSelf: "flex-start",
                backdropFilter: "blur(6px)",
                boxShadow: "0 6px 20px rgba(15, 23, 42, 0.12)",
            }}}}>
                {{activeLabel}}
            </div>
        </div>
    );
}};"""
        timeline_block = """            <div
                style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "10%",
                    minHeight: 48,
                    backgroundColor: "rgba(0,0,0,0.5)",
                }}
            />
            <TransitionSeries>
                {sceneConfigs.map((config, index) => {
                    const SceneComp = config.component;
                    const isLast = index === sceneConfigs.length - 1;
                    return (
                        <React.Fragment key={config.name}>
                            <TransitionSeries.Sequence durationInFrames={config.duration}>
                                <SceneComp />
                            </TransitionSeries.Sequence>
                            {!isLast && (
                                <TransitionSeries.Transition
                                    timing={linearTiming({ durationInFrames: TRANSITION_DURATION })}
                                    presentation={fade()}
                                />
                            )}
                        </React.Fragment>
                    );
                })}
            </TransitionSeries>"""

    return f'''import React from "react";
import {{ {remotion_named} }} from "remotion";
import {{ z }} from "zod";
import {{ linearTiming, TransitionSeries }} from "@remotion/transitions";
import {{ fade }} from "@remotion/transitions/fade";

{static_import}{scene_imports}

export const {pascal}Schema = z.object({{}});

const TRANSITION_DURATION = {transition};
const SCENE_END_PADDING = {scene_end_padding};

{duration_block}

{progress_bar}

export const {pascal}: React.FC<z.infer<typeof {pascal}Schema>> = () => {{
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
        <AbsoluteFill>
{bgm_block}            <div
                style={{{{
                    height: "100%",
                    width: "100%",
                    background: "linear-gradient(135deg, #fffdf7 0%, #f7fbff 52%, #f6fff8 100%)",
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
                        "radial-gradient(circle at 20% 30%, rgba(255, 225, 170, 0.42), transparent 36%), radial-gradient(circle at 78% 64%, rgba(174, 222, 255, 0.35), transparent 40%), radial-gradient(circle at 52% 80%, rgba(191, 255, 208, 0.26), transparent 42%)",
                }}}}
            />
{timeline_block}
            <ProgressBar />
        </AbsoluteFill>
    );
}};
'''


def generate_scenes_index(scene_count: int) -> str:
    exports = "\n".join([
        f'export {{ Scene{i+1} }} from "./Scene{i+1}";'
        for i in range(scene_count)
    ])
    return exports


def update_root_tsx(root_path: Path, name: str, pascal: str, config: dict):
    """更新 Root.tsx，添加新的 Composition"""
    width = config.get("width", 960)
    height = config.get("height", 1280)

    with open(root_path, "r", encoding="utf-8") as f:
        content = f.read()

    import_line = (
        f'import {{ {pascal}, {pascal}Schema, TOTAL_DURATION_{name.upper()} }} '
        f'from "./remotions/{name}/{pascal}";'
    )
    composition_block = f'''
      {{/* {pascal} - 自动生成 */}}
      <Composition
        id="{pascal}"
        component={{{pascal}}}
        durationInFrames={{TOTAL_DURATION_{name.upper()}}}
        fps={{{config.get("fps", 30)}}}
        width={{{width}}}
        height={{{height}}}
        schema={{{pascal}Schema}}
        defaultProps={{{{}}}}
      />'''

    if import_line in content:
        print(f"  ℹ️ Root.tsx 已包含 {pascal} 的导入，跳过")
        return

    last_import = content.rfind("import ")
    if last_import >= 0:
        end_of_line = content.index("\n", last_import)
        content = content[:end_of_line + 1] + import_line + "\n" + content[end_of_line + 1:]

    close_tag = content.rfind("</>")
    if close_tag >= 0:
        content = content[:close_tag] + composition_block + "\n    " + content[close_tag:]

    with open(root_path, "w", encoding="utf-8") as f:
        f.write(content)

    print("  ✅ Root.tsx 已更新")


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

    cover = normalize_cover(scripts_data)
    if cover:
        print(
            f"📌 片头封面: {cover['durationFrames']} 帧 — "
            f"{cover['title'][:20]}{'…' if len(cover['title']) > 20 else ''}"
        )

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

    # 生成主 Composition 文件
    comp_code = generate_composition_tsx(
        name, scenes, config, mute_audio=args.mute_audio, cover=cover
    )
    comp_path = remotion_dir / f"{pascal}.tsx"
    with open(comp_path, "w", encoding="utf-8") as f:
        f.write(comp_code)
    print(f"  ✅ {pascal}.tsx")

    # 更新 Root.tsx
    if not args.skip_root:
        root_path = project_root / "src" / "Root.tsx"
        if root_path.exists():
            update_root_tsx(root_path, name, pascal, config)

    print("\n✅ Remotion 代码生成完成!")
    print(f"   📂 {remotion_dir}")
    print("   🚀 运行 npm run dev 预览")

    return True


if __name__ == "__main__":
    success = main()
    exit(0 if success else 1)
