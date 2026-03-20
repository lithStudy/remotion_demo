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

    def _clean_label(t): return t.replace('"', '\\"') if t else ""
    scene_configs = ",\n    ".join([
        f'{{ name: "scene{i+1}", duration: calculateScene{i+1}Duration(), component: Scene{i+1}, label: "{_clean_label(scene.get("sceneName", f"Scene {i+1}"))}" }}'
        for i, scene in enumerate(scenes)
    ])

    return f'''import React from "react";
import {{ AbsoluteFill, useCurrentFrame }} from "remotion";
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
                    return (
                        <div key={{i}} style={{{{
                            flex: 1, backgroundColor: "rgba(255, 255, 255, 0.3)", borderRadius: 4, overflow: "hidden"
                        }}}}>
                            <div style={{{{
                                width: `${{progress * 100}}%`, height: "100%", backgroundColor: "rgba(255, 255, 255, 0.9)"
                            }}}} />
                        </div>
                    );
                }})}}
            </div>
            
            <div style={{{{
                fontSize: 32,
                fontWeight: 700,
                color: "rgba(255, 255, 255, 0.95)",
                textAlign: "left",
                textShadow: "0 2px 8px rgba(0,0,0,0.8)",
                padding: "4px 12px",
                backgroundColor: "rgba(0, 0, 0, 0.4)",
                borderRadius: 8,
                alignSelf: "flex-start",
                backdropFilter: "blur(4px)"
            }}}}>
                {{activeLabel}}
            </div>
        </div>
    );
}};

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
            <ProgressBar />
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

    config_entries = []
    last_key = "null"

    for idx, item in enumerate(readable):
        texts = item.get("text", [])
        if isinstance(texts, str):
            texts = [texts]
        for sub_idx, _ in enumerate(texts):
            key = f'{scene_id}_{item["order"]}_{sub_idx}'
            
            pre = last_key
            if idx == 0 and sub_idx == 0:
                delay_before = 8
            else:
                delay_before = 0
            delay_after = 20 if (idx == len(readable) - 1 and sub_idx == len(texts) - 1) else 0

            config_entries.append(
                f'    {{ name: "{key}", delayBefore: {delay_before}, '
                f'delayAfter: {delay_after}, durationInFrames: 60, '
                f'preName: {pre}, audioId: "{key}" }}'
            )
            
            last_key = f'"{key}"'

    configs_str = ",\n".join(config_entries)

    layout_renders = []
    subtitle_renders = []
    anchor_renders = []
    effect_renders = []
    tts_audio_renders = []

    for idx, item in enumerate(readable):
        texts = item.get("text", [])
        if isinstance(texts, str):
            texts = [texts]
        anchors = item.get("anchor")
        if anchors is None:
            anchors = [None] * len(texts)
        elif not isinstance(anchors, list):
            anchors = [anchors] if len(texts) else []
        while len(anchors) < len(texts):
            anchors.append(None)
        anchors = anchors[: len(texts)]
        audio_effects = item.get("audio_effect")
        if audio_effects is None:
            audio_effects = [None] * len(texts)
        elif not isinstance(audio_effects, list):
            audio_effects = [audio_effects] if len(texts) else []
        while len(audio_effects) < len(texts):
            audio_effects.append(None)
        audio_effects = audio_effects[: len(texts)]

        layout = item.get("layout", "CENTER_FOCUS") or "CENTER_FOCUS"
        image_effect = item.get("image_effect", "breathe") or "breathe"
        first_key = f'{scene_id}_{item["order"]}_0'
        last_key_item = f'{scene_id}_{item["order"]}_{len(texts) - 1}'
        file_path = f"images/{name}/{scene_id}_{item['order']}.png"
        left_path = f"images/{name}/{scene_id}_{item['order']}_left.png"
        right_path = f"images/{name}/{scene_id}_{item['order']}_right.png"
        item_dur = f'timings["{last_key_item}"].startTime + timings["{last_key_item}"].durationInFrames - timings["{first_key}"].startTime'
        left_label_esc = json.dumps(item.get("leftLabel") or "", ensure_ascii=False)
        right_label_esc = json.dumps(item.get("rightLabel") or "", ensure_ascii=False)

        # 读取锚点颜色和动画数组，补齐到与 texts 等长
        anchor_colors = item.get("anchor_color") or []
        if not isinstance(anchor_colors, list):
            anchor_colors = [anchor_colors]
        while len(anchor_colors) < len(texts):
            anchor_colors.append(None)
        anchor_colors = anchor_colors[: len(texts)]

        anchor_anims = item.get("anchor_anim") or []
        if not isinstance(anchor_anims, list):
            anchor_anims = [anchor_anims]
        while len(anchor_anims) < len(texts):
            anchor_anims.append(None)
        anchor_anims = anchor_anims[: len(texts)]

        if layout == "ALERT_STYLE":
            layout_renders.append(f'            <Sequence from={{timings["{first_key}"].startTime}} durationInFrames={{{item_dur}}}>\n                <BWAlertStyle imageSrc={{staticFile("{file_path}")}} enterEffect="{image_effect}" />\n            </Sequence>')
        elif layout == "SPLIT_COMPARE":
            layout_renders.append(
                f'            <Sequence from={{timings["{first_key}"].startTime}} durationInFrames={{{item_dur}}}>\n'
                f'                <BWSplitCompare leftSrc={{staticFile("{left_path}")}} rightSrc={{staticFile("{right_path}")}} leftLabel={{{left_label_esc}}} rightLabel={{{right_label_esc}}} />\n'
                f'            </Sequence>'
            )
        elif layout == "STEP_LIST":
            steps_esc = json.dumps(texts, ensure_ascii=False)
            layout_renders.append(f'            <Sequence from={{timings["{first_key}"].startTime}} durationInFrames={{{item_dur}}}>\n                <BWStepList steps={{{steps_esc}}} startFrame={{0}} />\n            </Sequence>')
        else:
            layout_renders.append(f'            <Sequence from={{timings["{first_key}"].startTime}} durationInFrames={{{item_dur}}}>\n                <BWCenterFocus imageSrc={{staticFile("{file_path}")}} enterEffect="{image_effect}" />\n            </Sequence>')

        for sub_idx, sub_text in enumerate(texts):
            key = f'{scene_id}_{item["order"]}_{sub_idx}'
            subtitle_renders.append(f'            <Sequence from={{timings["{key}"].startTime}} durationInFrames={{timings["{key}"].durationInFrames}}>\n                <BWSubtitle text={{{json.dumps(sub_text, ensure_ascii=False)}}} startFrame={{0}} />\n            </Sequence>')

        for sub_idx, anchor in enumerate(anchors):
            if anchor is None or anchor == "":
                continue
            key = f'{scene_id}_{item["order"]}_{sub_idx}'
            nk = f'{scene_id}_{item["order"]}_{sub_idx + 1}' if sub_idx + 1 < len(texts) else None
            dur = f'timings["{nk}"].startTime - timings["{key}"].startTime' if nk else f'timings["{last_key_item}"].startTime + timings["{last_key_item}"].durationInFrames - timings["{key}"].startTime'
            anchor_color = anchor_colors[sub_idx] or "#111111"
            anchor_anim = anchor_anims[sub_idx] or "spring"
            parsed = parse_numeric_anchor(str(anchor))
            if parsed:
                pfx, val, sfx = parsed
                anchor_renders.append(f'            <Sequence from={{timings["{key}"].startTime}} durationInFrames={{{dur}}}>\n                <BWCountUpAnchor prefix={{{json.dumps(pfx, ensure_ascii=False)}}} value={{{val}}} suffix={{{json.dumps(sfx, ensure_ascii=False)}}} enterFrame={{0}} countDuration={{25}} color="{anchor_color}" />\n            </Sequence>')
            else:
                anchor_renders.append(f'            <Sequence from={{timings["{key}"].startTime}} durationInFrames={{{dur}}}>\n                <BWAnchorWord anchor="{_escape_jsx(str(anchor))}" delay={{0}} color="{anchor_color}" animStyle="{anchor_anim}" />\n            </Sequence>')

        for sub_idx, eff in enumerate(audio_effects):
            if eff is None or eff == "":
                continue
            key = f'{scene_id}_{item["order"]}_{sub_idx}'
            effect_renders.append(f'            <Sequence from={{timings["{key}"].startTime}}>\n                <Audio src={{staticFile("audio/effects/{eff}.mp3")}} volume={{0.6}} />\n            </Sequence>')

        for sub_idx in range(len(texts)):
            key = f'{scene_id}_{item["order"]}_{sub_idx}'
            tts_audio_renders.append(f'            {{audioMap["{key}"]?.isFirstInItem && (\n                <Sequence from={{timings["{key}"].startTime}}>\n                    <Audio src={{staticFile(audioMap["{key}"].file)}} />\n                </Sequence>\n            )}}')

    layout_str = "\n".join(layout_renders)
    subtitle_str = "\n".join(subtitle_renders)
    anchor_str = "\n".join(anchor_renders)
    effect_str = "\n".join(effect_renders)
    tts_str = "\n".join(tts_audio_renders)

    # 按实际使用情况构建组件导入列表
    used_components = ["BWSubtitle"]
    layout_content = "\n".join(layout_renders)
    anchor_content = "\n".join(anchor_renders)
    if "BWCenterFocus" in layout_content:
        used_components.append("BWCenterFocus")
    if "BWAlertStyle" in layout_content:
        used_components.append("BWAlertStyle")
    if "BWSplitCompare" in layout_content:
        used_components.append("BWSplitCompare")
    if "BWStepList" in layout_content:
        used_components.append("BWStepList")
    if "BWAnchorWord" in anchor_content:
        used_components.append("BWAnchorWord")
    if "BWCountUpAnchor" in anchor_content:
        used_components.append("BWCountUpAnchor")
    components_import = ", ".join(used_components)

    return f'''import React, {{ useMemo }} from "react";
import {{ AbsoluteFill, Sequence, Audio, staticFile }} from "remotion";
import {{
    AnimationConfig,
    calculateAnimationTimings,
    calculateSceneDuration,
    applyAudioDurations,
    type AudioMap,
}} from "../../../utils";
import {{ {components_import} }} from "../../../components";
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
    const animConfigs = useMemo(() => applyAudioDurations(baseConfigs, audioMap, {fps}), []);
    const timings = useMemo(() => calculateAnimationTimings(animConfigs), [animConfigs]);

    return (
        <AbsoluteFill style={{{{ background: "#ffffff" }}}}>
            {{/* 布局层 */}}
{layout_str}

            {{/* 字幕层 */}}
{subtitle_str}

            {{/* 锚点词层 */}}
{anchor_str}

            {{/* 音效层 */}}
{effect_str}

            {{/* TTS 旁白 */}}
{tts_str}
        </AbsoluteFill>
    );
}};
'''

def _escape_jsx(text: str) -> str:
    return text.replace("{", "{{").replace("}", "}}").replace('"', '\\"')


def parse_numeric_anchor(anchor: str):
    """检测 anchor 是否含数字，返回 (prefix, value, suffix) 或 None"""
    if not anchor:
        return None
    m = re.search(r"(\d+(?:\.\d+)?)", anchor)
    if not m:
        return None
    return (anchor[: m.start()], float(m.group(1)), anchor[m.end() :])


def _get_text_style(item_type: str) -> str:
    styles = {
        "主标题": '{ width: "100%", fontSize: 64, fontWeight: 900, color: "#fff", textAlign: "center" as const, '
                  'lineHeight: 1.3, textShadow: "0 4px 20px rgba(0,0,0,0.5)" }',
        "副标题": '{ width: "100%", fontSize: 38, fontWeight: 500, color: "rgba(255,255,255,0.9)", '
                  'textAlign: "center" as const, lineHeight: 1.4 }',
        "标题":   '{ width: "100%", fontSize: 52, fontWeight: 800, color: "#fff", textAlign: "center" as const, lineHeight: 1.3 }',
        "名言":   '{ width: "100%", fontSize: 36, fontWeight: 500, fontStyle: "italic" as const, color: "#FFD700", '
                  'textAlign: "center" as const, lineHeight: 1.5 }',
        "正文":   '{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", '
                  'textAlign: "center" as const, lineHeight: 1.4 }',
    }
    return styles.get(item_type,
        '{ width: "100%", fontSize: 36, fontWeight: 400, color: "rgba(255,255,255,0.92)", '
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
    parser.add_argument("--name", "-n", help="视频名称（英文，用作目录名，不填则读取 config.json）")
    parser.add_argument("--skip-root", action="store_true", help="不更新 Root.tsx")
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

    # 创建输出目录
    remotion_dir = project_root / "src" / "remotions" / name
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
        scene_code = generate_scene_tsx(i, scene, name, config)
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

    print(f"\n✅ Remotion 代码生成完成!")
    print(f"   📂 {remotion_dir}")
    print(f"   🚀 运行 npm run dev 预览")

    return True

if __name__ == "__main__":
    success = main()
    exit(0 if success else 1)
