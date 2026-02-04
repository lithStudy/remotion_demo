#!/usr/bin/env python3
"""
TTS语音生成脚本（增强版）
从 scene-scripts.json 读取脚本数据，生成所有场景的TTS语音

使用方法：
python generate_audio.py --input <scene-scripts.json路径> --output <音频输出目录>

依赖安装：
pip install edge-tts mutagen
"""

import asyncio
import argparse
import json
import os
from pathlib import Path
from datetime import datetime

try:
    import edge_tts
    from mutagen.mp3 import MP3
except ImportError:
    print("❌ 请先安装依赖：pip install edge-tts mutagen")
    exit(1)

# 默认配置
DEFAULT_VOICE = "zh-CN-XiaoxiaoNeural"  # 中文女声
DEFAULT_RATE = "+0%"  # 语速
DEFAULT_FPS = 30
BUFFER_SECONDS = 0.3  # 缓冲时间（秒）


async def generate_audio(text: str, output_path: str, voice: str, rate: str):
    """生成单个音频文件"""
    communicate = edge_tts.Communicate(text, voice, rate=rate)
    await communicate.save(output_path)


async def process_scene(scene: dict, output_dir: Path, animation_name: str, voice: str, rate: str, audio_map: dict):
    """处理单个场景的所有条目
    
    Args:
        scene: 场景数据
        output_dir: 音频输出目录
        animation_name: 动画名称（用于生成正确的相对路径）
        voice: TTS语音
        rate: 语速
        audio_map: 音频映射字典
    """
    scene_id = scene["sceneId"]
    scene_name = scene["sceneName"]
    
    print(f"\n📁 处理场景: {scene_name} ({scene_id})")
    
    scene_dir = output_dir / scene_id
    scene_dir.mkdir(exist_ok=True)
    
    for item in scene["items"]:
        # 跳过标记为不读的条目
        note = item.get("note", "")
        if "不读" in note:
            print(f"  ⏭️  跳过 [{item['order']}] {item['type']}: {item['text'][:20]}...")
            continue
        
        # 生成文件名（安全处理特殊字符）
        sanitized_type = (
            item["type"]
            .replace("/", "_")
            .replace("\\", "_")
            .replace(":", "_")
            .replace("+", "_")
        )
        filename = f"{str(item['order']).zfill(2)}_{sanitized_type}.mp3"
        filepath = scene_dir / filename
        # 正确生成相对路径，包含动画名称目录
        relative_file_path = f"/audio/{animation_name}/{scene_id}/{filename}"
        
        print(f"  🎵 生成 [{item['order']}] {item['type']}: {item['text'][:30]}...")
        
        try:
            # 生成音频
            await generate_audio(item["text"], str(filepath), voice, rate)
            
            # 测量时长
            audio = MP3(str(filepath))
            duration = audio.info.length
            
            print(f"  ✅ 已生成: {filename} ({duration:.2f}s)")
            
            # 添加到映射
            key = f"{scene_id}_{item['order']}"
            audio_map[key] = {
                "duration": round(duration, 3),
                "file": relative_file_path,
                "sceneId": scene_id,
                "order": item["order"],
                "type": item["type"],
                "text": item["text"]
            }
        except Exception as e:
            print(f"  ❌ 生成失败: {filename} - {e}")


async def main():
    parser = argparse.ArgumentParser(description="从脚本生成TTS语音")
    parser.add_argument(
        "--input", "-i",
        required=True,
        help="scene-scripts.json 文件路径"
    )
    parser.add_argument(
        "--output", "-o",
        required=True,
        help="音频输出目录（通常是 public/audio/{动画名称}）"
    )
    parser.add_argument(
        "--voice", "-v",
        default=DEFAULT_VOICE,
        help=f"TTS语音（默认: {DEFAULT_VOICE}）"
    )
    parser.add_argument(
        "--rate", "-r",
        default=DEFAULT_RATE,
        help=f"语速（默认: {DEFAULT_RATE}）"
    )
    parser.add_argument(
        "--audio-map", "-m",
        help="audio-map.json 输出路径（默认: 与input同目录）"
    )
    parser.add_argument(
        "--scene", "-s",
        help="只生成指定场景的音频，例如: scene1"
    )
    parser.add_argument(
        "--item", "-n",
        type=int,
        help="只生成指定条目的音频（需配合 --scene 使用），例如: 1"
    )
    
    args = parser.parse_args()
    
    # 验证输入文件
    input_path = Path(args.input)
    if not input_path.exists():
        print(f"❌ 文件不存在: {input_path}")
        return
    
    # 读取脚本数据
    with open(input_path, "r", encoding="utf-8") as f:
        scripts_data = json.load(f)
    
    print(f"🎤 开始生成 TTS 音频...")
    print(f"📄 脚本主题: {scripts_data.get('topic', '未知')}")
    print(f"🔊 使用语音: {args.voice}")
    print(f"⚡ 语速: {args.rate}")
    
    # 确保输出目录存在
    output_dir = Path(args.output)
    output_dir.mkdir(parents=True, exist_ok=True)
    
    # 从输出目录路径中提取动画名称（最后一级目录名）
    animation_name = output_dir.name
    print(f"🎬 动画名称: {animation_name}")
    
    # 确定 audio-map.json 路径
    if args.audio_map:
        audio_map_path = Path(args.audio_map)
    else:
        audio_map_path = input_path.parent / "audio-map.json"
    
    # 如果是单条模式，先加载现有的 audio-map
    audio_map = {}
    single_mode = args.scene is not None
    
    if single_mode and audio_map_path.exists():
        with open(audio_map_path, "r", encoding="utf-8") as f:
            audio_map = json.load(f)
        print(f"📂 已加载现有音频映射: {len(audio_map)} 条记录")
    
    # 处理场景
    if single_mode:
        # 单条模式：只处理指定场景/条目
        target_scene = args.scene
        target_item = args.item
        
        print(f"\n🎯 单条模式: 场景={target_scene}, 条目={target_item or '全部'}")
        
        # 找到目标场景
        target_scene_data = None
        for scene in scripts_data.get("scenes", []):
            if scene["sceneId"] == target_scene:
                target_scene_data = scene
                break
        
        if not target_scene_data:
            print(f"❌ 未找到场景: {target_scene}")
            return
        
        # 如果指定了具体条目，只处理该条目
        if target_item is not None:
            original_items = target_scene_data["items"]
            target_scene_data["items"] = [
                item for item in original_items if item["order"] == target_item
            ]
            if not target_scene_data["items"]:
                print(f"❌ 未找到条目: {target_scene}_{target_item}")
                return
        
        await process_scene(target_scene_data, output_dir, animation_name, args.voice, args.rate, audio_map)
    else:
        # 全量模式：处理所有场景
        for scene in scripts_data.get("scenes", []):
            await process_scene(scene, output_dir, animation_name, args.voice, args.rate, audio_map)
    
    # 保存音频映射
    with open(audio_map_path, "w", encoding="utf-8") as f:
        json.dump(audio_map, f, ensure_ascii=False, indent=2)
    
    if single_mode:
        print(f"\n✅ 音频映射已更新: {audio_map_path}")
    else:
        print(f"\n✅ 音频映射已保存到: {audio_map_path}")
    print(f"📊 当前共 {len(audio_map)} 个音频记录")


if __name__ == "__main__":
    asyncio.run(main())
