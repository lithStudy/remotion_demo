#!/usr/bin/env python3
"""
Step 3: Azure TTS 语音生成（段落级生成 + 词级时间戳）
从 scene-scripts.json 为每个 item 生成一个完整音频文件，
通过 Azure Speech SDK 词级时间戳精确定位每句话的起止时间。

用法：
  python step3_generate_audio.py --input scene-scripts.json --output public/audio/video_name
"""

import argparse
import json
import math
import os
import re
from pathlib import Path

try:
    import azure.cognitiveservices.speech as speechsdk
except ImportError:
    print("❌ 请先安装依赖: pip install azure-cognitiveservices-speech")
    exit(1)

try:
    from mutagen.mp3 import MP3
except ImportError:
    MP3 = None


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


_PUNCT_TAIL = re.compile(r'[，。！？、；：…—,\.\!\?\;\:\-"\'」）\)】》]$')


def _ensure_trailing_punctuation(text_parts: list) -> list:
    """补全尾部标点，确保 TTS 在句间停顿。仅影响合成文本，不修改原始列表。"""
    result = []
    n = len(text_parts)
    for i, t in enumerate(text_parts):
        if t and not _PUNCT_TAIL.search(t):
            t += "。" if i == n - 1 else "，"
        result.append(t)
    return result


def _get_mp3_duration_s(filepath: str) -> float:
    """通过 mutagen 获取 MP3 时长（秒），失败则用文件大小估算"""
    if MP3 is not None:
        try:
            return MP3(filepath).info.length
        except Exception:
            pass
    file_size = os.path.getsize(filepath)
    return file_size * 8 / 128_000


def synthesize_speech(text_parts: list, output_path: str, speech_key: str,
                      region: str, voice_name: str,
                      speech_rate: str = "+0%") -> tuple:
    """
    将多段文本合并为一个音频文件。
    通过 SSML bookmark 事件获取每段文本在音频中的起止时间。

    时间戳获取策略（按优先级）：
      1. bookmark_reached 事件（在每段前插入 <bookmark/>）
      2. synthesis_word_boundary 事件
      3. 按字符比例 + 总时长均分

    Returns: (success, sentence_boundaries, total_duration_s)
      sentence_boundaries: [{"startMs": float, "endMs": float}, ...]
      total_duration_s: 音频总时长（秒）
    """
    full_text = "".join(text_parts)

    speech_config = speechsdk.SpeechConfig(subscription=speech_key, region=region)
    speech_config.set_speech_synthesis_output_format(
        speechsdk.SpeechSynthesisOutputFormat.Audio16Khz128KBitRateMonoMp3
    )

    synthesizer = speechsdk.SpeechSynthesizer(
        speech_config=speech_config, audio_config=None
    )

    bookmark_offsets = {}
    word_boundaries = []

    def on_bookmark(evt):
        try:
            bookmark_offsets[evt.text] = evt.audio_offset / 10_000
        except Exception as e:
            print(f"  ⚠️ bookmark 事件异常: {e}")

    def on_word_boundary(evt):
        try:
            offset_ms = evt.audio_offset / 10_000
            if isinstance(evt.duration, int):
                dur_ms = evt.duration / 10_000
            else:
                dur_ms = evt.duration.total_seconds() * 1000
            word_boundaries.append({
                "audio_offset_ms": offset_ms,
                "duration_ms": dur_ms,
                "text_offset": evt.text_offset,
            })
        except Exception:
            pass

    synthesizer.bookmark_reached.connect(on_bookmark)
    synthesizer.synthesis_word_boundary.connect(on_word_boundary)

    # 在每句前插入 <bookmark mark='s0'/> ... <bookmark mark='end'/>
    ssml_parts = [
        f"<speak version='1.0' xml:lang='zh-CN'>",
        f"<voice name='{voice_name}'>",
        f"<prosody rate='{speech_rate}'>",
    ]
    for i, text in enumerate(text_parts):
        ssml_parts.append(f"<bookmark mark='s{i}'/>")
        ssml_parts.append(text)
    # ssml_parts.append("<bookmark mark='end'/>")
    ssml_parts.append("</prosody></voice></speak>")
    ssml = "".join(ssml_parts)

    result = synthesizer.speak_ssml_async(ssml).get()

    if result.reason == speechsdk.ResultReason.SynthesizingAudioCompleted:
        with open(output_path, "wb") as f:
            f.write(result.audio_data)

        total_duration_s = _get_mp3_duration_s(output_path)
        total_duration_ms = total_duration_s * 1000

        strategy = "none"
        if bookmark_offsets:
            boundaries = _map_from_bookmarks(text_parts, bookmark_offsets, total_duration_ms)
            strategy = f"bookmark({len(bookmark_offsets)})"
        elif word_boundaries:
            boundaries = _map_from_word_boundaries(text_parts, word_boundaries, ssml, total_duration_ms)
            strategy = f"word_boundary({len(word_boundaries)})"
        else:
            boundaries = _map_by_char_ratio(text_parts, total_duration_ms)
            strategy = "char_ratio"

        print(f"       [时间戳策略: {strategy}, 总时长: {total_duration_s:.2f}s]")
        return True, boundaries, round(total_duration_s, 3)

    details = result.cancellation_details
    print(f"  ❌ TTS失败: {details.reason}")
    if details.error_details:
        print(f"     {details.error_details}")
    return False, [], 0


def _map_from_bookmarks(text_parts, bookmark_offsets, total_duration_ms):
    """通过 bookmark 事件的 audio_offset 直接映射句子边界"""
    n = len(text_parts)
    results = []
    for i in range(n):
        start_ms = bookmark_offsets.get(f"s{i}", 0)
        if i < n - 1:
            end_ms = bookmark_offsets.get(f"s{i+1}", total_duration_ms)
        else:
            end_ms = bookmark_offsets.get("end", total_duration_ms)
        results.append({"startMs": round(start_ms, 1), "endMs": round(end_ms, 1)})
    return results


def _map_from_word_boundaries(text_parts, word_boundaries, ssml, total_duration_ms):
    """通过词级时间戳映射句子边界（SSML 中含 bookmark 标签）"""
    n = len(text_parts)
    if n == 1:
        return [{"startMs": 0, "endMs": round(total_duration_ms, 1)}]

    # 计算每个句子在 SSML 中的字符区间 [start, end)
    sentence_ssml_ranges = []
    for i, part in enumerate(text_parts):
        part_start = ssml.find(part, sentence_ssml_ranges[-1][1] if sentence_ssml_ranges else 0)
        if part_start == -1:
            part_start = 0
        sentence_ssml_ranges.append((part_start, part_start + len(part)))

    sentence_first_offset = [None] * n

    for wb in word_boundaries:
        text_off = wb["text_offset"]
        si = n - 1
        for i, (s, e) in enumerate(sentence_ssml_ranges):
            if s <= text_off < e:
                si = i
                break
        if sentence_first_offset[si] is None:
            sentence_first_offset[si] = wb["audio_offset_ms"]

    for i in range(n):
        if sentence_first_offset[i] is None:
            sentence_first_offset[i] = sentence_first_offset[i - 1] if i > 0 else 0

    results = []
    for i in range(n):
        start_ms = sentence_first_offset[i]
        end_ms = sentence_first_offset[i + 1] if i < n - 1 else total_duration_ms
        results.append({"startMs": round(start_ms, 1), "endMs": round(end_ms, 1)})
    return results


def _map_by_char_ratio(text_parts, total_duration_ms):
    """按字符数比例分配时长（兜底方案）"""
    n = len(text_parts)
    if n == 0:
        return []
    total_chars = sum(len(t) for t in text_parts)
    if total_chars == 0:
        avg = total_duration_ms / n
        return [{"startMs": round(i * avg, 1), "endMs": round((i + 1) * avg, 1)}
                for i in range(n)]

    results = []
    cursor_ms = 0.0
    for t in text_parts:
        ratio = len(t) / total_chars
        dur = total_duration_ms * ratio
        results.append({"startMs": round(cursor_ms, 1), "endMs": round(cursor_ms + dur, 1)})
        cursor_ms += dur
    return results


def _item_seg_count(item: dict) -> int:
    """返回 item 的 segment 数量，兼容新旧格式。"""
    segs = item.get("segments")
    if segs and isinstance(segs, list):
        return len(segs)
    texts = item.get("text", [])
    if isinstance(texts, str):
        return 1 if texts else 0
    return len(texts)


def sync_durations(script_path: Path, audio_map: dict, fps: int = 30):
    """将音频时长回写到 scene-scripts.json（无 buffer，时间戳驱动精确时长）"""
    with open(script_path, "r", encoding="utf-8") as f:
        scripts = json.load(f)

    for scene in scripts.get("scenes", []):
        for item in scene["items"]:
            key = f"{scene['sceneId']}_{item['order']}"
            seg_count = _item_seg_count(item)
            if seg_count > 0:
                durations, frames, files = [], [], []
                for idx in range(seg_count):
                    part_key = f"{key}_{idx}"
                    if part_key in audio_map:
                        info = audio_map[part_key]
                        durations.append(info["duration"])
                        frames.append(math.ceil(info["duration"] * fps))
                        files.append(info["file"])
                if durations:
                    item["audioDuration"] = durations
                    item["durationInFrames"] = frames
                    item["audioFile"] = files
            else:
                if key in audio_map:
                    info = audio_map[key]
                    item["audioDuration"] = info["duration"]
                    item["durationInFrames"] = math.ceil(info["duration"] * fps)
                    item["audioFile"] = info["file"]

    scripts["fps"] = fps
    with open(script_path, "w", encoding="utf-8") as f:
        json.dump(scripts, f, ensure_ascii=False, indent=2)


def main():
    parser = argparse.ArgumentParser(description="Step 3: Azure TTS 语音生成（段落级 + 时间戳）")
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

    print(f"🎤 开始生成 TTS 音频（段落级 + 词级时间戳）...")
    print(f"   🔊 语音: {voice_name}")
    print(f"   🚀 语速: {speech_rate}")

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

        # 收集该场景所有可读文案，扁平化为句子列表
        # 兼容新格式（segments 对象数组）和旧格式（text 字符串数组）
        all_texts = []
        text_meta = []
        for item in scene["items"]:
            note = item.get("note", "")
            segs = item.get("segments")
            if segs and isinstance(segs, list):
                texts = [s.get("text", "") for s in segs]
            else:
                texts = item.get("text", [])
                if isinstance(texts, str):
                    texts = [texts]
            if "不读" in note:
                print(f"  ⏭️ 跳过 [{item['order']}]: {str(texts)[:20]}...")
                continue
            for sub_idx, text_content in enumerate(texts):
                all_texts.append(text_content)
                text_meta.append({"item": item, "sub_idx": sub_idx})

        if not all_texts:
            print(f"  ⚠️ 场景无可读文案，跳过")
            continue

        # 补全尾部标点，确保 TTS 在句间自然停顿
        tts_texts = _ensure_trailing_punctuation(all_texts)

        filename = f"{scene_id}.mp3"
        filepath = scene_dir / filename
        rel_path = f"/audio/{animation_name}/{scene_id}/{filename}"

        full_preview = "".join(tts_texts)
        print(f"  🎵 整段合成 ({len(tts_texts)}句): {full_preview[:80]}...")

        ok, boundaries, total_dur = synthesize_speech(
            tts_texts, str(filepath), speech_key, region, voice_name, speech_rate
        )

        if ok:
            print(f"  ✅ {filename} ({total_dur:.2f}s, {len(all_texts)}句)")
            for i, (meta, boundary) in enumerate(zip(text_meta, boundaries)):
                item = meta["item"]
                sub_idx = meta["sub_idx"]
                text_content = all_texts[i]
                start_ms = boundary["startMs"]
                end_ms = boundary["endMs"]
                duration = round((end_ms - start_ms) / 1000, 3)

                map_key = f"{scene_id}_{item['order']}_{sub_idx}"
                audio_map[map_key] = {
                    "duration": duration,
                    "file": rel_path,
                    "sceneId": scene_id,
                    "order": item["order"],
                    "subOrder": sub_idx,
                    "type": item["type"],
                    "text": text_content,
                    "startMs": start_ms,
                    "endMs": end_ms,
                    "isFirstInItem": sub_idx == 0,
                }
                print(f"       句{i}: {start_ms:.0f}ms ~ {end_ms:.0f}ms ({duration:.3f}s) [{item['order']}-{sub_idx}] {text_content[:20]}")
            success += 1
        else:
            fail += 1

    with open(audio_map_path, "w", encoding="utf-8") as f:
        json.dump(audio_map, f, ensure_ascii=False, indent=2)
    print(f"\n📄 音频映射已保存: {audio_map_path}")

    print(f"🔄 同步音频时长...")
    sync_durations(input_path, audio_map, fps)
    print(f"✅ 时长同步完成")

    print(f"\n{'='*40}")
    print(f"✅ 成功: {success} | ❌ 失败: {fail}")
    return fail == 0


if __name__ == "__main__":
    success = main()
    exit(0 if success else 1)
