#!/usr/bin/env python3
"""
Step 3: Azure TTS 语音生成（模板驱动版）
从 scene-scripts.json 读取 item.content，生成 TTS 音频，
将 content 就地升级为含时间戳的对象数组，
并注入 scene.audioSrc、scene.totalDurationFrames 与各 item.totalDurationFrames。

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

from utils import extract_content_text, load_config, load_env


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


def extract_texts_from_content(content: list) -> list:
    """从 content 数组提取纯文本列表。"""
    return [extract_content_text(item) for item in content]


# ─────────────────────────────────────────────────────────────
# TTS 合成
# ─────────────────────────────────────────────────────────────

def synthesize_speech(text_parts: list, output_path: str, speech_key: str,
                      region: str, voice_name: str,
                      speech_rate: str = "+0%") -> tuple:
    """
    将多段文本合并为一个音频文件。
    通过 SSML bookmark 事件获取每段文本在音频中的起止时间。

    Returns: (success, sentence_boundaries, total_duration_s)
      sentence_boundaries: [{"startMs": float, "endMs": float}, ...]
    """
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

    # SSML with bookmarks
    ssml_parts = [
        f"<speak version='1.0' xml:lang='zh-CN'>",
        f"<voice name='{voice_name}'>",
        f"<prosody rate='{speech_rate}'>",
    ]
    for i, text in enumerate(text_parts):
        ssml_parts.append(f"<bookmark mark='s{i}'/>")
        ssml_parts.append(text)
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
    n = len(text_parts)
    if n == 1:
        return [{"startMs": 0, "endMs": round(total_duration_ms, 1)}]

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


# ─────────────────────────────────────────────────────────────
# 将 content 就地升级为对象数组
# ─────────────────────────────────────────────────────────────

def upgrade_content_with_timing(
    content: list,
    boundaries: list,
    fps: int,
    base_ms: float = 0,
) -> list:
    """
    将 content 数组（字符串或对象）就地升级为
    完整的对象数组，注入 startFrame / durationFrames。
    startFrame 是相对于该 item 自身起点（而非整段场景音频起点）。
    """
    upgraded = []
    for i, item in enumerate(content):
        boundary = boundaries[i] if i < len(boundaries) else {"startMs": 0, "endMs": 0}
        start_ms = boundary["startMs"] - base_ms  # item-relative
        end_ms = boundary["endMs"] - base_ms
        duration_ms = end_ms - start_ms
        start_frame = max(0, math.floor(start_ms / 1000 * fps))
        duration_frames = max(1, math.ceil(duration_ms / 1000 * fps))

        if isinstance(item, str):
            upgraded.append({
                "text": item,
                "startFrame": start_frame,
                "durationFrames": duration_frames,
            })
        elif isinstance(item, dict):
            upgraded.append({
                "text": item.get("text", ""),
                "startFrame": start_frame,
                "durationFrames": duration_frames,
            })

    return upgraded


def main():
    parser = argparse.ArgumentParser(description="Step 3: Azure TTS 语音生成（模板驱动版）")
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

    print(f"🎤 开始生成 TTS 音频（模板驱动版）...")
    print(f"   🔊 语音: {voice_name}")
    print(f"   🚀 语速: {speech_rate}")

    success, fail = 0, 0

    for scene in scripts_data.get("scenes", []):
        scene_id = scene["sceneId"]
        scene_id_str = str(scene_id)
        if args.scene and scene_id_str != str(args.scene):
            continue

        print(f"\n📁 场景: {scene.get('sceneName', scene_id)} ({scene_id})")
        scene_dir = output_dir / scene_id_str
        scene_dir.mkdir(exist_ok=True)

        # 收集该场景所有 item 的文案
        all_texts = []
        item_ranges = []  # (item_index, start_idx, count)

        for item_idx, item in enumerate(scene.get("items", [])):
            content = item.get("content", [])
            texts = extract_texts_from_content(content)

            if not texts:
                print(f"  ⏭️ 跳过 item #{item.get('order', '?')}: 无文案")
                continue

            start_idx = len(all_texts)
            all_texts.extend(texts)
            item_ranges.append((item_idx, start_idx, len(texts)))

        if not all_texts:
            print(f"  ⚠️ 场景无可读文案，跳过")
            continue

        # 补全尾部标点
        tts_texts = _ensure_trailing_punctuation(all_texts)

        filename = f"{scene_id_str}.mp3"
        filepath = scene_dir / filename
        rel_path = f"/audio/{animation_name}/{scene_id_str}/{filename}"

        full_preview = "".join(tts_texts)
        print(f"  🎵 整段合成 ({len(tts_texts)}句): {full_preview[:80]}...")

        ok, boundaries, total_dur = synthesize_speech(
            tts_texts, str(filepath), speech_key, region, voice_name, speech_rate
        )

        if ok:
            print(f"  ✅ {filename} ({total_dur:.2f}s, {len(all_texts)}句)")

            # 音频路径存到 scene 级别，不存到 item 级别
            scene["audioSrc"] = rel_path
            scene["totalDurationFrames"] = math.ceil(total_dur * fps)

            # 为每个 item 注入时间戳
            for item_idx, start_idx, count in item_ranges:
                item = scene["items"][item_idx]
                content = item.get("content", [])

                # 提取该 item 对应的 boundaries
                item_boundaries = boundaries[start_idx: start_idx + count]

                # 该 item 的基准时间（第一条 content 的起始毫秒）
                base_ms = item_boundaries[0]["startMs"] if item_boundaries else 0

                item["content"] = upgrade_content_with_timing(
                    content, item_boundaries, fps, base_ms
                )

                if item_boundaries:
                    first_start_ms = item_boundaries[0]["startMs"]
                    last_end_ms = item_boundaries[-1]["endMs"]
                    total_frames = math.ceil((last_end_ms - first_start_ms) / 1000 * fps)
                    item["totalDurationFrames"] = total_frames

                for ci, c in enumerate(item["content"]):
                    text_preview = c.get("text", "")[:20]
                    sf = c.get("startFrame", 0)
                    df = c.get("durationFrames", 0)
                    print(f"       句{start_idx + ci}: F{sf}~F{sf+df} ({df}帧) {text_preview}")

            success += 1
        else:
            fail += 1

    # 回写 scene-scripts.json
    with open(input_path, "w", encoding="utf-8") as f:
        json.dump(scripts_data, f, ensure_ascii=False, indent=2)
    print(f"\n📄 已更新 {input_path}")

    print(f"\n{'='*40}")
    print(f"✅ 成功: {success} 场景 | ❌ 失败: {fail} 场景")
    return fail == 0


if __name__ == "__main__":
    success = main()
    exit(0 if success else 1)
