#!/usr/bin/env python3
"""Generate TTS audio for the SourceEvaluation composition using edge-tts."""

import asyncio
import json
import os
from mutagen.mp3 import MP3

VOICE = "zh-CN-YunxiNeural"
OUTPUT_BASE = os.path.join(os.path.dirname(__file__), "..", "public", "audio", "sourceEvaluation")

SCENES = [
    {
        "sceneId": "scene1",
        "sceneName": "开场：信息源评估",
        "items": [
            {"order": 1, "type": "主标题", "text": "批判性思维01：信息源评估"},
            {"order": 2, "type": "副标题", "text": "谁在说话比说了什么更重要"},
            {"order": 3, "type": "正文", "text": "典型陷阱：据网友爆料、有人说、震惊！专家称"},
        ],
    },
    {
        "sceneId": "scene2",
        "sceneName": "总策略：信源三问法",
        "items": [
            {"order": 1, "type": "标题", "text": "总策略：信源三问法"},
            {"order": 2, "type": "策略内容", "text": "第一问：作者是谁？有什么专业背景？"},
            {"order": 3, "type": "策略内容", "text": "第二问：平台是什么？有编辑审核吗？"},
            {"order": 4, "type": "策略内容", "text": "第三问：利益关系？他从这条信息中获利吗？"},
            {"order": 5, "type": "名言", "text": "万能金句：匿名信息、自媒体、有利益关系的说法，三重警惕。"},
        ],
    },
    {
        "sceneId": "scene3",
        "sceneName": "案例一：伪科学传播",
        "items": [
            {"order": 1, "type": "标题", "text": "案例一：伪科学传播"},
            {"order": 2, "type": "正文", "text": "剖析：某某养生堂是什么？作者是医生吗？"},
            {"order": 3, "type": "策略内容", "text": "识别：我先去查查这个专家是否真的存在。"},
        ],
    },
    {
        "sceneId": "scene4",
        "sceneName": "案例二：利益冲突",
        "items": [
            {"order": 1, "type": "标题", "text": "案例二：利益冲突"},
            {"order": 2, "type": "正文", "text": "剖析：推荐者自己持有该股票。"},
            {"order": 3, "type": "策略内容", "text": "识别：他的收益和我的行为有关系吗？"},
        ],
    },
    {
        "sceneId": "scene5",
        "sceneName": "案例三：平台差异",
        "items": [
            {"order": 1, "type": "标题", "text": "案例三：平台差异"},
            {"order": 2, "type": "正文", "text": "剖析：正规媒体有法律责任；自媒体零门槛。"},
            {"order": 3, "type": "策略内容", "text": "识别：这条信息来自哪里？"},
        ],
    },
    {
        "sceneId": "scene6",
        "sceneName": "本期总结",
        "items": [
            {"order": 1, "type": "标题", "text": "本期总结"},
            {"order": 2, "type": "结语", "text": "在相信之前，先问谁在说话。"},
            {"order": 3, "type": "结语", "text": "检查作者资质、平台审核、利益关系。"},
            {"order": 4, "type": "结语", "text": "匿名爆料要打折扣。"},
        ],
    },
]


async def generate_audio(text: str, output_path: str, voice: str = VOICE):
    """Generate TTS audio for a single text."""
    import edge_tts
    communicate = edge_tts.Communicate(text, voice)
    await communicate.save(output_path)


async def main():
    audio_map = {}
    scene_scripts = {
        "$schema": "http://json-schema.org/draft-07/schema#",
        "topic": "批判性思维01 - 信息源评估",
        "generatedAt": "2026-02-25T00:00:00Z",
        "fps": 30,
        "scenes": [],
    }

    for scene in SCENES:
        scene_id = scene["sceneId"]
        scene_dir = os.path.join(OUTPUT_BASE, scene_id)
        os.makedirs(scene_dir, exist_ok=True)

        scene_script_items = []

        for item in scene["items"]:
            order = item["order"]
            item_type = item["type"]
            text = item["text"]

            filename = f"{order:02d}_{item_type}.mp3"
            filepath = os.path.join(scene_dir, filename)
            rel_path = f"/audio/sourceEvaluation/{scene_id}/{filename}"

            print(f"Generating: {rel_path} - {text}")
            await generate_audio(text, filepath)

            audio = MP3(filepath)
            duration = audio.info.length

            audio_id = f"{scene_id}_{order}"
            audio_map[audio_id] = {
                "duration": round(duration, 3),
                "file": rel_path,
                "sceneId": scene_id,
                "order": order,
                "type": item_type,
                "text": text,
            }

            scene_script_items.append({
                "order": order,
                "type": item_type,
                "text": text,
                "audioDuration": round(duration, 3),
                "durationInFrames": int(round(duration * 30)),
                "audioFile": rel_path,
            })

        scene_scripts["scenes"].append({
            "sceneId": scene_id,
            "sceneName": scene["sceneName"],
            "items": scene_script_items,
        })

    scenes_dir = os.path.join(os.path.dirname(__file__), "..", "src", "remotions", "sourceEvaluation", "scenes")
    os.makedirs(scenes_dir, exist_ok=True)

    audio_map_path = os.path.join(scenes_dir, "audio-map.json")
    with open(audio_map_path, "w", encoding="utf-8") as f:
        json.dump(audio_map, f, ensure_ascii=False, indent=2)
    print(f"\nWrote audio-map.json: {audio_map_path}")

    scene_scripts_path = os.path.join(scenes_dir, "scene-scripts.json")
    with open(scene_scripts_path, "w", encoding="utf-8") as f:
        json.dump(scene_scripts, f, ensure_ascii=False, indent=2)
    print(f"Wrote scene-scripts.json: {scene_scripts_path}")


if __name__ == "__main__":
    asyncio.run(main())
