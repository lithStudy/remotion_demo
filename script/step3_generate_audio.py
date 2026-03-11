#!/usr/bin/env python3
"""
Step 3: Azure TTS 语音生成
复用现有 Azure TTS 逻辑，从 scene-scripts.json 生成语音并同步时长。

用法：
  python step3_generate_audio.py --input scene-scripts.json --output public/audio/video_name
"""

import argparse
import json
import math
import os
from pathlib import Path

try:
    import requests
    from mutagen.mp3 import MP3
except ImportError:
    print("❌ 请先安装依赖: pip install requests mutagen")
    exit(1)

def load_env(script_dir: Path):
    env_path = script_dir / ".env"
    if env_path.exists():
        with open(env_path, "r", encoding="utf-8") as f:
            for line in f:
                line = line.strip()
                if line and not line.startswith("#") and "=" in line:
                    key, value = line.split("=", 1)
                    os.environ[key.strip()] = value.strip()

def load_config(script_dir: Path) -> dict:
    config_path = script_dir / "config.json"
    with open(config_path, "r", encoding="utf-8") as f:
        return json.load(f)

def get_azure_token(speech_key: str, region: str) -> str:
    url = f"https://{region}.api.cognitive.microsoft.com/sts/v1.0/issueToken"
    response = requests.post(url, headers={"Ocp-Apim-Subscription-Key": speech_key})
    if response.status_code == 200:
        return response.text
    raise Exception(f"获取Token失败: {response.status_code} - {response.text}")

def synthesize_speech(text: str, output_path: str, token: str, region: str,
                      voice_name: str, speech_rate: str = "+0%") -> bool:
    url = f"https://{region}.tts.speech.microsoft.com/cognitiveservices/v1"
    ssml = f"""
    <speak version='1.0' xml:lang='zh-CN'>
        <voice xml:lang='zh-CN' xml:gender='Female' name='{voice_name}'>
            <prosody rate='{speech_rate}'>{text}</prosody>
        </voice>
    </speak>"""

    response = requests.post(url, headers={
        "Authorization": f"Bearer {token}",
        "Content-Type": "application/ssml+xml",
        "X-Microsoft-OutputFormat": "audio-16khz-128kbitrate-mono-mp3",
        "User-Agent": "NarratorPipeline",
    }, data=ssml.encode("utf-8"))

    if response.status_code == 200:
        with open(output_path, "wb") as f:
            f.write(response.content)
        return True
    print(f"  ❌ TTS失败: {response.status_code} - {response.text}")
    return False

def sync_durations(script_path: Path, audio_map: dict, fps: int = 30, buffer: float = 0.3):
    """将音频时长回写到 scene-scripts.json"""
    with open(script_path, "r", encoding="utf-8") as f:
        scripts = json.load(f)

    for scene in scripts.get("scenes", []):
        for item in scene["items"]:
            key = f"{scene['sceneId']}_{item['order']}"
            if isinstance(item.get("text"), list):
                durations, frames, files = [], [], []
                for idx, _ in enumerate(item["text"]):
                    part_key = f"{key}_{idx}"
                    if part_key in audio_map:
                        info = audio_map[part_key]
                        durations.append(info["duration"])
                        frames.append(math.ceil((info["duration"] + buffer) * fps))
                        files.append(info["file"])
                if durations:
                    item["audioDuration"] = durations
                    item["durationInFrames"] = frames
                    item["audioFile"] = files
            else:
                if key in audio_map:
                    info = audio_map[key]
                    item["audioDuration"] = info["duration"]
                    item["durationInFrames"] = math.ceil((info["duration"] + buffer) * fps)
                    item["audioFile"] = info["file"]

    scripts["fps"] = fps
    with open(script_path, "w", encoding="utf-8") as f:
        json.dump(scripts, f, ensure_ascii=False, indent=2)

def main():
    parser = argparse.ArgumentParser(description="Step 3: Azure TTS 语音生成")
    parser.add_argument("--input", "-i", required=True, help="scene-scripts.json 路径")
    parser.add_argument("--output", "-o", required=True, help="音频输出目录")
    parser.add_argument("--scene", "-s", help="只生成指定场景")
    args = parser.parse_args()

    script_dir = Path(__file__).parent
    load_env(script_dir)
    config = load_config(script_dir)

    speech_key = os.environ.get("SPEECH_KEY", "")
    region = config.get("azure_service_region", "eastasia")
    voice_name = config.get("azure_voice_name", "zh-CN-XiaoxiaoNeural")
    speech_rate = config.get("speech_rate", "+0%")
    fps = config.get("fps", 30)

    if not speech_key:
        print("❌ 未设置 SPEECH_KEY")
        return False

    input_path = Path(args.input)
    if not input_path.exists():
        print(f"❌ 文件不存在: {input_path}")
        return False

    with open(input_path, "r", encoding="utf-8") as f:
        scripts_data = json.load(f)

    output_dir = Path(args.output)
    output_dir.mkdir(parents=True, exist_ok=True)
    animation_name = output_dir.name

    print(f"🔑 获取 Azure Access Token...")
    token = get_azure_token(speech_key, region)

    print(f"🎤 开始生成 TTS 音频...")
    print(f"   🔊 语音: {voice_name}")
    print(f"   🚀 语速: {speech_rate}")

    # 加载已有的 audio-map（用于增量更新）
    audio_map_path = input_path.parent / "audio-map.json"
    audio_map = {}
    if args.scene and audio_map_path.exists():
        with open(audio_map_path, "r", encoding="utf-8") as f:
            audio_map = json.load(f)

    success, fail = 0, 0

    for scene in scripts_data.get("scenes", []):
        scene_id = scene["sceneId"]
        if args.scene and scene_id != args.scene:
            continue

        print(f"\n📁 场景: {scene['sceneName']} ({scene_id})")
        scene_dir = output_dir / scene_id
        scene_dir.mkdir(exist_ok=True)

        for item in scene["items"]:
            note = item.get("note", "")
            texts = item.get("text", [])
            if isinstance(texts, str):
                texts = [texts]
                
            if "不读" in note:
                print(f"  ⏭️ 跳过 [{item['order']}]: {str(texts)[:20]}...")
                continue

            sanitized = item["type"].replace("/", "_").replace("\\", "_").replace(":", "_").replace("+", "_")
            
            for idx, text_content in enumerate(texts):
                filename = f"{str(item['order']).zfill(2)}_{sanitized}_{idx}.mp3"
                filepath = scene_dir / filename
                rel_path = f"/audio/{animation_name}/{scene_id}/{filename}"

                print(f"  🎵 [{item['order']}-{idx}] {item['type']}: {text_content[:30]}...")

                if synthesize_speech(text_content, str(filepath), token, region, voice_name, speech_rate):
                    audio = MP3(str(filepath))
                    duration = audio.info.length
                    print(f"  ✅ {filename} ({duration:.2f}s)")

                    audio_map[f"{scene_id}_{item['order']}_{idx}"] = {
                        "duration": round(duration, 3),
                        "file": rel_path,
                        "sceneId": scene_id,
                        "order": item["order"],
                        "subOrder": idx,
                        "type": item["type"],
                        "text": text_content,
                    }
                    success += 1
                else:
                    fail += 1

    # 保存 audio-map
    with open(audio_map_path, "w", encoding="utf-8") as f:
        json.dump(audio_map, f, ensure_ascii=False, indent=2)
    print(f"\n📄 音频映射已保存: {audio_map_path}")

    # 同步时长到 scene-scripts.json
    print(f"🔄 同步音频时长...")
    sync_durations(input_path, audio_map, fps)
    print(f"✅ 时长同步完成")

    print(f"\n{'='*40}")
    print(f"✅ 成功: {success} | ❌ 失败: {fail}")
    return fail == 0

if __name__ == "__main__":
    success = main()
    exit(0 if success else 1)
