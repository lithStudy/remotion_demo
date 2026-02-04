#!/usr/bin/env python3
"""
时长同步脚本
将 audio-map.json 中的音频时长回填到 scene-scripts.json

使用方法：
python sync_durations.py --script <scene-scripts.json> --audio-map <audio-map.json>

功能：
1. 读取 audio-map.json 中的时长数据
2. 计算 durationInFrames = ceil((duration + buffer) * fps)
3. 更新 scene-scripts.json，添加时长和音频路径信息
"""

import argparse
import json
import math
from pathlib import Path


def sync_durations(
    script_path: str,
    audio_map_path: str,
    fps: int = 30,
    buffer_seconds: float = 0.3,
    dry_run: bool = False
):
    """同步音频时长到脚本数据"""
    
    # 读取脚本数据
    with open(script_path, "r", encoding="utf-8") as f:
        scripts_data = json.load(f)
    
    # 读取音频映射
    with open(audio_map_path, "r", encoding="utf-8") as f:
        audio_map = json.load(f)
    
    print(f"🔄 开始同步时长...")
    print(f"📄 脚本: {script_path}")
    print(f"🎵 音频映射: {audio_map_path}")
    print(f"🎬 帧率: {fps} fps")
    print(f"⏱️  缓冲: {buffer_seconds}s")
    
    updated_count = 0
    
    # 遍历所有场景和条目
    for scene in scripts_data.get("scenes", []):
        scene_id = scene["sceneId"]
        
        for item in scene["items"]:
            key = f"{scene_id}_{item['order']}"
            
            if key in audio_map:
                audio_info = audio_map[key]
                duration = audio_info["duration"]
                
                # 计算帧数：(时长 + 缓冲) * 帧率，向上取整
                duration_in_frames = math.ceil((duration + buffer_seconds) * fps)
                
                # 更新条目
                item["audioDuration"] = duration
                item["durationInFrames"] = duration_in_frames
                item["audioFile"] = audio_info["file"]
                
                print(f"  ✅ {key}: {duration:.2f}s → {duration_in_frames} frames")
                updated_count += 1
    
    if not dry_run:
        # 更新 fps 字段
        scripts_data["fps"] = fps
        
        # 保存更新后的脚本
        with open(script_path, "w", encoding="utf-8") as f:
            json.dump(scripts_data, f, ensure_ascii=False, indent=2)
        
        print(f"\n✅ 已更新 {updated_count} 个条目")
        print(f"📄 脚本已保存: {script_path}")
    else:
        print(f"\n🔍 [Dry Run] 将更新 {updated_count} 个条目（未实际保存）")
    
    return updated_count


def main():
    parser = argparse.ArgumentParser(description="同步音频时长到脚本数据")
    parser.add_argument(
        "--script", "-s",
        required=True,
        help="scene-scripts.json 文件路径"
    )
    parser.add_argument(
        "--audio-map", "-a",
        required=True,
        help="audio-map.json 文件路径"
    )
    parser.add_argument(
        "--fps", "-f",
        type=int,
        default=30,
        help="帧率（默认: 30）"
    )
    parser.add_argument(
        "--buffer", "-b",
        type=float,
        default=0.3,
        help="缓冲时间秒数（默认: 0.3）"
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="仅预览更改，不实际保存"
    )
    parser.add_argument(
        "--verify",
        action="store_true",
        help="验证脚本中是否已有时长信息"
    )
    
    args = parser.parse_args()
    
    # 验证文件存在
    if not Path(args.script).exists():
        print(f"❌ 脚本文件不存在: {args.script}")
        return
    
    if not Path(args.audio_map).exists():
        print(f"❌ 音频映射文件不存在: {args.audio_map}")
        return
    
    if args.verify:
        # 验证模式：检查脚本中的时长信息
        with open(args.script, "r", encoding="utf-8") as f:
            scripts_data = json.load(f)
        
        total = 0
        with_duration = 0
        
        for scene in scripts_data.get("scenes", []):
            for item in scene["items"]:
                total += 1
                if "durationInFrames" in item:
                    with_duration += 1
        
        print(f"📊 验证结果:")
        print(f"   总条目数: {total}")
        print(f"   已有时长: {with_duration}")
        print(f"   缺少时长: {total - with_duration}")
        return
    
    sync_durations(
        args.script,
        args.audio_map,
        fps=args.fps,
        buffer_seconds=args.buffer,
        dry_run=args.dry_run
    )


if __name__ == "__main__":
    main()
