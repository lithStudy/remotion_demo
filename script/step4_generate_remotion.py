#!/usr/bin/env python3
"""
Step 4: Remotion 动画代码生成
根据 scene-scripts.json（含音频时长）生成 Remotion 动画 TSX 代码。
生成数据驱动的组合，使用 NarratorScene 通用组件渲染。

用法：
  python step4_generate_remotion.py --input scene-scripts.json --name video_name
"""

import argparse
import json
import re
from pathlib import Path

def load_config(script_dir: Path) -> dict:
    config_path = script_dir / "config.json"
    with open(config_path, "r", encoding="utf-8") as f:
        return json.load(f)

def to_pascal_case(name: str) -> str:
    """video_name → VideoName"""
    return "".join(word.capitalize() for word in re.split(r'[_\-\s]+', name))

def generate_composition_tsx(name: str, scenes: list, config: dict) -> str:
    """生成主 Composition 文件"""
    pascal = to_pascal_case(name)
    fps = config.get("fps", 30)
    width = config.get("width", 960)
    height = config.get("height", 1280)
    transition = config.get("transition_duration_frames", 15)

    scene_imports = "\n".join([
        f'import {{ Scene{i+1}, calculateScene{i+1}Duration }} from "./scenes/Scene{i+1}";'
        for i in range(len(scenes))
    ])

    scene_configs = ",\n    ".join([
        f'{{ name: "scene{i+1}", duration: calculateScene{i+1}Duration(), component: Scene{i+1} }}'
        for i in range(len(scenes))
    ])

    return f'''import React from "react";
import {{ AbsoluteFill }} from "remotion";
import {{ z }} from "zod";
import {{ linearTiming, TransitionSeries }} from "@remotion/transitions";
import {{ fade }} from "@remotion/transitions/fade";

{scene_imports}

export const {pascal}Schema = z.object({{}});

const sceneConfigs = [
    {scene_configs},
];

const TRANSITION_DURATION = {transition};

export const TOTAL_DURATION_{name.upper()} =
    sceneConfigs.reduce((total, c) => total + c.duration, 0) -
    (sceneConfigs.length - 1) * TRANSITION_DURATION;

export const {pascal}: React.FC<z.infer<typeof {pascal}Schema>> = () => {{
    return (
        <AbsoluteFill>
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
    );
}};
'''

def generate_scene_tsx(scene_index: int, scene: dict, name: str, config: dict) -> str:
    """生成单个场景文件"""
    scene_id = scene["sceneId"]
    scene_name = scene.get("sceneName", f"Scene {scene_index + 1}")
    items = scene.get("items", [])
    fps = config.get("fps", 30)
    n = scene_index + 1

    # 过滤可读条目
    readable = [it for it in items if "不读" not in it.get("note", "")]

    # 生成 baseConfigs
    config_entries = []
    for idx, item in enumerate(readable):
        pre = "null" if idx == 0 else f'"{scene_id}_{readable[idx-1]["order"]}"'
        delay_before = 8 if idx == 0 else 3
        delay_after = 20 if idx == len(readable) - 1 else 0
        config_entries.append(
            f'    {{ name: "{scene_id}_{item["order"]}", delayBefore: {delay_before}, '
            f'delayAfter: {delay_after}, durationInFrames: 60, '
            f'preName: {pre}, audioId: "{scene_id}_{item["order"]}" }}'
        )

    configs_str = ",\n".join(config_entries)

    # 生成文本渲染代码
    text_renders = []
    for item in readable:
        key = f'{scene_id}_{item["order"]}'
        style = _get_text_style(item["type"])
        text_renders.append(f'''
            {{/* [{item["order"]}] {item["type"]} */}}
            <Sequence from={{timings["{key}"].startTime}} durationInFrames={{timings["{key}"].durationInFrames + 30}}>
                <FadeInText delay={{0}}>
                    <div style={{{style}}}>{_escape_jsx(item["text"])}</div>
                </FadeInText>
            </Sequence>''')

    text_renders_str = "\n".join(text_renders)

    # 生成音频渲染代码
    audio_renders = []
    for item in readable:
        key = f'{scene_id}_{item["order"]}'
        audio_renders.append(f'''
            {{audioMap["{key}"] && (
                <Sequence from={{timings["{key}"].startTime}} durationInFrames={{timings["{key}"].durationInFrames}}>
                    <Audio src={{staticFile(audioMap["{key}"].file)}} />
                </Sequence>
            )}}''')

    audio_renders_str = "\n".join(audio_renders)
    # 生成配图渲染代码
    image_renders = []
    for item in readable:
        key = f'{scene_id}_{item["order"]}'
        file_path = f"images/{name}/{scene_id}_{item['order']}.png"
        image_renders.append(f'''
            {{/* 配图 [{item["order"]}] */}}
            <Sequence from={{timings["{key}"].startTime}}>
                <Img
                    src={{staticFile("{file_path}")}}
                    style={{{{
                        position: "absolute",
                        width: "100%", height: "100%", objectFit: "cover",
                        opacity: interpolate(frame, [timings["{key}"].startTime, timings["{key}"].startTime + 15], [0, 1], {{ extrapolateRight: "clamp", extrapolateLeft: "clamp" }}),
                    }}}}
                />
            </Sequence>''')

    image_renders_str = "\n".join(image_renders)
    bg = _get_background(scene_index)

    return f'''import React, {{ useMemo }} from "react";
import {{ AbsoluteFill, Sequence, Audio, staticFile, Img, useCurrentFrame, interpolate }} from "remotion";
import {{ FadeInText }} from "../../../components";
import {{
    AnimationConfig,
    calculateAnimationTimings,
    calculateSceneDuration,
    applyAudioDurations,
    type AudioMap,
}} from "../../../utils";
import audioMapData from "./audio-map.json";

const audioMap = audioMapData as AudioMap;

// {scene_name}
const baseConfigs: AnimationConfig[] = [
{configs_str},
];

export const calculateScene{n}Duration = (): number => {{
    return calculateSceneDuration(baseConfigs, audioMapData as AudioMap, {fps});
}};

export const Scene{n}: React.FC = () => {{
    const frame = useCurrentFrame();
    const animConfigs = useMemo(() => applyAudioDurations(baseConfigs, audioMap, {fps}), []);
    const timings = useMemo(() => calculateAnimationTimings(animConfigs), [animConfigs]);

    return (
        <AbsoluteFill style={{{{ background: "{bg}" }}}}>
            {{/* 场景配图 (全屏轮播) */}}
{image_renders_str}

            {{/* 底部暗色渐变，保证字幕可读 */}}
            <div style={{{{
                position: "absolute", bottom: 0, left: 0, right: 0, height: "45%",
                background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 100%)",
                pointerEvents: "none",
            }}}} />

            {{/* 字幕文本区域 */}}
            <div style={{{{
                position: "absolute", bottom: 80, left: 40, right: 40,
            }}}}>
{text_renders_str}
            </div>

            {{/* 音频 */}}
{audio_renders_str}
        </AbsoluteFill>
    );
}};
'''

def _escape_jsx(text: str) -> str:
    return text.replace("{", "{{").replace("}", "}}").replace('"', '\\"')

def _get_text_style(item_type: str) -> str:
    styles = {
        "主标题": '{ fontSize: 64, fontWeight: 900, color: "#fff", textAlign: "center" as const, '
                  'lineHeight: 1.3, textShadow: "0 4px 20px rgba(0,0,0,0.5)" }',
        "副标题": '{ fontSize: 38, fontWeight: 500, color: "rgba(255,255,255,0.9)", '
                  'textAlign: "center" as const, lineHeight: 1.4 }',
        "标题":   '{ fontSize: 52, fontWeight: 800, color: "#fff", textAlign: "center" as const, lineHeight: 1.3 }',
        "名言":   '{ fontSize: 36, fontWeight: 500, fontStyle: "italic" as const, color: "#FFD700", '
                  'textAlign: "center" as const, lineHeight: 1.5 }',
        "结语":   '{ fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", '
                  'textAlign: "center" as const, lineHeight: 1.4 }',
    }
    return styles.get(item_type,
        '{ fontSize: 36, fontWeight: 400, color: "rgba(255,255,255,0.92)", '
        'textAlign: "center" as const, lineHeight: 1.6 }')

def _get_background(index: int) -> str:
    bgs = [
        "linear-gradient(180deg, #0f172a 0%, #1e293b 100%)",
        "linear-gradient(180deg, #1a1a2e 0%, #16213e 100%)",
        "linear-gradient(180deg, #0d1b2a 0%, #1b2838 100%)",
        "linear-gradient(180deg, #1f1147 0%, #120a2e 100%)",
        "linear-gradient(180deg, #0c1821 0%, #1b3a4b 100%)",
        "linear-gradient(180deg, #2d1b69 0%, #1a0a3e 100%)",
        "linear-gradient(180deg, #0b1d3a 0%, #162447 100%)",
        "linear-gradient(180deg, #1a0000 0%, #2d1f1f 100%)",
    ]
    return bgs[index % len(bgs)]

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

    # 在最后一个 import 后添加导入
    last_import = content.rfind("import ")
    if last_import >= 0:
        end_of_line = content.index("\n", last_import)
        content = content[:end_of_line + 1] + import_line + "\n" + content[end_of_line + 1:]

    # 在 </> 前添加 Composition
    close_tag = content.rfind("</>")
    if close_tag >= 0:
        content = content[:close_tag] + composition_block + "\n    " + content[close_tag:]

    with open(root_path, "w", encoding="utf-8") as f:
        f.write(content)

    print(f"  ✅ Root.tsx 已更新")

def main():
    parser = argparse.ArgumentParser(description="Step 4: Remotion 代码生成")
    parser.add_argument("--input", "-i", required=True, help="scene-scripts.json 路径")
    parser.add_argument("--name", "-n", required=True, help="视频名称（英文，用作目录名）")
    parser.add_argument("--skip-root", action="store_true", help="不更新 Root.tsx")
    args = parser.parse_args()

    script_dir = Path(__file__).parent
    config = load_config(script_dir)
    project_root = Path(config.get("project_root", script_dir.parent))
    pascal = to_pascal_case(args.name)

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

    # 创建输出目录
    remotion_dir = project_root / "src" / "remotions" / args.name
    scenes_dir = remotion_dir / "scenes"
    scenes_dir.mkdir(parents=True, exist_ok=True)

    # 复制数据文件到 scenes 目录
    import shutil
    audio_map_src = input_path.parent / "audio-map.json"

    scripts_dest = scenes_dir / "scene-scripts.json"
    if input_path.resolve() != scripts_dest.resolve():
        shutil.copy2(input_path, scripts_dest)
        print(f"📄 复制 scene-scripts.json → {scripts_dest}")

    if audio_map_src.exists():
        audio_map_dest = scenes_dir / "audio-map.json"
        if audio_map_src.resolve() != audio_map_dest.resolve():
            shutil.copy2(audio_map_src, audio_map_dest)
            print(f"📄 复制 audio-map.json → {audio_map_dest}")

    # 生成场景文件
    print(f"\n🎬 生成场景代码 ({len(scenes)} 个场景)...")
    for i, scene in enumerate(scenes):
        scene_code = generate_scene_tsx(i, scene, args.name, config)
        scene_path = scenes_dir / f"Scene{i+1}.tsx"
        with open(scene_path, "w", encoding="utf-8") as f:
            f.write(scene_code)
        print(f"  ✅ Scene{i+1}.tsx ({scene['sceneName']})")

    # 生成 index.ts
    index_code = generate_scenes_index(len(scenes))
    with open(scenes_dir / "index.ts", "w", encoding="utf-8") as f:
        f.write(index_code)
    print(f"  ✅ index.ts")

    # 生成主 Composition 文件
    comp_code = generate_composition_tsx(args.name, scenes, config)
    comp_path = remotion_dir / f"{pascal}.tsx"
    with open(comp_path, "w", encoding="utf-8") as f:
        f.write(comp_code)
    print(f"  ✅ {pascal}.tsx")

    # 更新 Root.tsx
    if not args.skip_root:
        root_path = project_root / "src" / "Root.tsx"
        if root_path.exists():
            update_root_tsx(root_path, args.name, pascal, config)

    print(f"\n✅ Remotion 代码生成完成!")
    print(f"   📂 {remotion_dir}")
    print(f"   🚀 运行 npm run dev 预览")

    return True

if __name__ == "__main__":
    success = main()
    exit(0 if success else 1)
