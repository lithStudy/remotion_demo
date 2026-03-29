#!/usr/bin/env python3
"""
Step 4: Remotion 动画代码生成（模板驱动版）
根据 scene-scripts.json（含音频时长）生成 Remotion 动画 TSX 代码。
每个 item 的 param 直接传递给对应模板组件。

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

from template_registry import TEMPLATE_REGISTRY, get_template_to_component_map, get_image_fields
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

def _get_image_field_sets(template_name: str) -> tuple[set[str], dict[str, str]]:
    """
    根据 registry 的 image_paths 解析出：
      - top_fields: 直接在 param 顶层的图片字段名集合，如 {"imageSrc", "leftSrc"}
      - array_fields: 数组图片字段 {array_key: field_suffix}
        e.g. {"images": "src", "stages": "imageSrc", "groups": "image.src"}
    """
    top_fields: set[str] = set()
    array_fields: dict[str, str] = {}
    for path in get_image_fields(template_name):
        if "[]" in path:
            # 格式：array_key[].suffix  e.g. "stages[].imageSrc"、"groups[].image.src"
            parts = path.split("[].", 1)
            array_key = parts[0]
            suffix = parts[1] if len(parts) > 1 else ""
            array_fields[array_key] = suffix
        else:
            top_fields.add(path)
    return top_fields, array_fields


def _escape_jsx(text: str) -> str:
    return text.replace("{", "{{").replace("}", "}}").replace('"', '\\"')


def _dict_to_jsx_obj(d: dict, image_suffix_keys: set[str] | None = None) -> str:
    """
    将一个普通 Python dict 序列化为 JSX 对象字面量字符串（内部键值对格式）。
    image_suffix_keys: 其中哪些 key 的字符串值需要用 staticFile() 包装。
    """
    parts = []
    for k, v in d.items():
        if image_suffix_keys and k in image_suffix_keys and isinstance(v, str):
            parts.append(f'{k}: staticFile("{_escape_jsx(v)}")')
        elif k == "startFrame" and isinstance(v, (int, float)):
            parts.append(f'{k}: {v}')
        elif isinstance(v, str):
            parts.append(f'{k}: "{_escape_jsx(v)}"')
        elif isinstance(v, bool):
            parts.append(f'{k}: {str(v).lower()}')
        elif isinstance(v, (int, float)):
            parts.append(f'{k}: {v}')
        elif isinstance(v, dict):
            parts.append(f'{k}: {_dict_to_jsx_obj(v, image_suffix_keys)}')
        else:
            parts.append(f'{k}: {json.dumps(v, ensure_ascii=False)}')
    return "{ " + ", ".join(parts) + " }"


def _set_nested_image(obj: dict, suffix_path: str, wrap: bool = True) -> dict:
    """
    返回 obj 的副本，将 suffix_path 指向的字段加上 staticFile()。
    suffix_path 支持点号分隔，如 "image.src" → obj["image"]["src"]。
    wrap=False 时替换为占位符（用于 preview 模式）。
    """
    result = dict(obj)
    keys = suffix_path.split(".")
    if len(keys) == 1:
        v = result.get(keys[0], "")
        result[keys[0]] = f'__STATIC_FILE__({v})' if wrap else v
        return result
    # 递归处理嵌套
    sub = result.get(keys[0])
    if isinstance(sub, dict):
        result[keys[0]] = _set_nested_image(sub, ".".join(keys[1:]), wrap)
    return result


def _array_to_jsx(arr: list, suffix: str) -> str:
    """
    将含图片字段的数组序列化为 JSX。
    suffix：数组每项内需要 staticFile() 包装的字段路径（如 "src"、"imageSrc"、"image.src"）。
    """
    item_parts = []
    for item in arr:
        if not isinstance(item, dict):
            item_parts.append(json.dumps(item, ensure_ascii=False))
            continue
        # 判断 suffix 是否含嵌套路径
        if "." in suffix:
            top_key = suffix.split(".")[0]
            sub_suffix = suffix.split(".", 1)[1]
            new_item = dict(item)
            sub = new_item.get(top_key)
            if isinstance(sub, dict):
                new_item[top_key] = _set_nested_image(sub, sub_suffix)
            # 将整个 item 中的嵌套对象序列化
            item_parts.append(_dict_to_jsx_obj(new_item))
        else:
            item_parts.append(_dict_to_jsx_obj(item, image_suffix_keys={suffix}))
    return "[" + ", ".join(item_parts) + "]"


def _param_to_jsx_props(param: dict, name: str, scene_id: str, order: int, template_name: str = "") -> str:
    """
    将 param 对象转换为 JSX props 字符串。
    通过 registry 的 image_paths 动态识别哪些字段需要 staticFile() 包装。
    """
    top_fields, array_fields = _get_image_field_sets(template_name) if template_name else (set(), {})

    props = []
    for key, value in param.items():
        if key == "content":
            props.append(f'content={{{json.dumps(value, ensure_ascii=False)}}}')
        elif key == "audioSrc":
            continue
        elif key == "totalDurationFrames":
            props.append(f'totalDurationFrames={{{value}}}')
        elif key in array_fields and isinstance(value, list):
            suffix = array_fields[key]
            jsx_arr = _array_to_jsx(value, suffix)
            props.append(f'{key}={{{jsx_arr}}}')
        elif key in top_fields:
            if isinstance(value, str):
                props.append(f'{key}={{staticFile("{_escape_jsx(value)}")}}')
            else:
                props.append(f'{key}={{{json.dumps(value, ensure_ascii=False)}}}')
        elif key == "tiltDirection" and isinstance(value, str):
            props.append(f'{key}="{value}"')
        elif key == "enterEffect" and isinstance(value, str):
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


def _apply_nested_preview(obj: dict, suffix_path: str, preview_image: str) -> None:
    """递归将 obj 内 suffix_path 指向的字段替换为 preview_image。"""
    keys = suffix_path.split(".", 1)
    if len(keys) == 1:
        if keys[0] in obj and isinstance(obj[keys[0]], str):
            obj[keys[0]] = preview_image
    else:
        sub = obj.get(keys[0])
        if isinstance(sub, dict):
            _apply_nested_preview(sub, keys[1], preview_image)


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
                template_name = item.get("template", "")
                top_fields, array_fields = _get_image_field_sets(template_name)

                for field in top_fields:
                    if field in param and isinstance(param[field], str):
                        param[field] = preview_image

                for array_key, suffix in array_fields.items():
                    arr = param.get(array_key)
                    if isinstance(arr, list):
                        for elem in arr:
                            if isinstance(elem, dict):
                                _apply_nested_preview(elem, suffix, preview_image)

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

        # 计算 totalDurationFrames
        total_frames = param.get("totalDurationFrames", 90)

        # 生成 props
        props_str = _param_to_jsx_props(param, name, scene_id, order, template_name=template)

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


def generate_composition_tsx(name: str, scenes: list, config: dict) -> str:
    """生成主 Composition 文件"""
    pascal = to_pascal_case(name)
    transition = config.get("transition_duration_frames", 15)
    scene_end_padding = config.get("scene_end_padding_frames", 20)

    scene_imports = "\n".join([
        f'import {{ Scene{i+1}, calculateScene{i+1}Duration }} from "./scenes/Scene{i+1}";'
        for i in range(len(scenes))
    ])

    def _clean_label(t): return t.replace('"', '\\"') if t else ""
    scene_configs = ",\n    ".join([
        f'{{ name: "scene{i+1}", duration: calculateScene{i+1}Duration() + SCENE_END_PADDING, component: Scene{i+1}, label: "{_clean_label(scene.get("sceneName", f"Scene {i+1}"))}" }}'
        for i, scene in enumerate(scenes)
    ])

    return f'''import React from "react";
import {{ AbsoluteFill, interpolate, useCurrentFrame }} from "remotion";
import {{ z }} from "zod";
import {{ linearTiming, TransitionSeries }} from "@remotion/transitions";
import {{ fade }} from "@remotion/transitions/fade";

{scene_imports}

export const {pascal}Schema = z.object({{}});

const TRANSITION_DURATION = {transition};
const SCENE_END_PADDING = {scene_end_padding};

const sceneConfigs = [
    {scene_configs},
];

export const TOTAL_DURATION_{name.upper()} =
    sceneConfigs.reduce((total, c) => total + c.duration, 0) -
    (sceneConfigs.length - 1) * TRANSITION_DURATION;

const ProgressBar: React.FC = () => {{
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
}};

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
            <div
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
    comp_code = generate_composition_tsx(name, scenes, config)
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
