#!/usr/bin/env python3
"""
使用 Python 的 edge-tts 生成音频文件
使用方法：
1. 安装依赖：pip install edge-tts mutagen
2. 运行：python scripts/generate_audio.py
"""

import asyncio
import edge_tts
import os
import json
from pathlib import Path
from mutagen.mp3 import MP3

# 配置
VOICE = "zh-CN-XiaoxiaoNeural"  # 中文女声
RATE = "+0%"  # 语速
OUTPUT_DIR = Path(__file__).parent.parent / "public" / "audio"
SCRIPTS_PATH = Path(__file__).parent.parent / "src" / "remotions" / "crowd" / "scenes" / "scene-scripts.ts"
AUDIO_MAP_PATH = Path(__file__).parent.parent / "src" / "remotions" / "crowd" / "scenes" / "audio-map.json"

# 从 TypeScript 文件解析场景脚本（简化版，假设格式规范）
def parse_scene_scripts():
    """
    解析 scene-scripts.ts 文件
    注意：这是一个简化版解析器，假设文件格式规范
    """
    # 这里我们直接使用硬编码的数据，因为解析 TS 文件比较复杂
    # 实际使用时，建议将 scene-scripts.ts 导出为 JSON 格式
    scripts = [
        {
            "sceneId": "scene1",
            "sceneName": "开场",
            "items": [
                {"order": 1, "type": "主标题", "text": "为什么一合群，智商就归零？"},
                {"order": 2, "type": "副标题", "text": "读透《乌合之众》，看清99%的无脑跟风。"},
            ]
        },
        # 添加更多场景...
    ]
    return scripts

async def generate_audio(text, output_path):
    """生成单个音频文件"""
    communicate = edge_tts.Communicate(text, VOICE, rate=RATE)
    await communicate.save(output_path)

async def main():
    print("🎤 开始生成 TTS 音频...\n")
    
    # 确保输出目录存在
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    
    audio_map = {}
    scripts = parse_scene_scripts()
    
    for scene in scripts:
        print(f"\n📁 处理场景: {scene['sceneName']} ({scene['sceneId']})")
        
        scene_dir = OUTPUT_DIR / scene["sceneId"]
        scene_dir.mkdir(exist_ok=True)
        
        for item in scene["items"]:
            # 跳过不需要读的条目
            if item.get("note") and ("不读" in item["note"] or "可按需读或不读" in item["note"]):
                print(f"  ⏭️  跳过 [{item['order']}] {item['type']}: {item['text'][:20]}...")
                continue
            
            # 生成文件名
            sanitized_type = item["type"].replace("/", "_").replace("\\", "_").replace(":", "_")
            filename = f"{str(item['order']).zfill(2)}_{sanitized_type}.mp3"
            filepath = scene_dir / filename
            relative_file_path = f"/audio/{scene['sceneId']}/{filename}"
            
            print(f"  🎵 生成 [{item['order']}] {item['type']}: {item['text'][:30]}...")
            
            try:
                # 生成音频
                await generate_audio(item["text"], str(filepath))
                
                # 测量时长
                audio = MP3(str(filepath))
                duration = audio.info.length
                
                print(f"  ✅ 已生成: {filename} ({duration:.2f}s)")
                
                # 添加到映射
                key = f"{scene['sceneId']}_{item['order']}"
                audio_map[key] = {
                    "duration": duration,
                    "file": relative_file_path,
                    "sceneId": scene["sceneId"],
                    "order": item["order"],
                    "type": item["type"],
                    "text": item["text"]
                }
            except Exception as e:
                print(f"  ❌ 生成失败: {filename} - {e}")
    
    # 保存音频映射
    with open(AUDIO_MAP_PATH, 'w', encoding='utf-8') as f:
        json.dump(audio_map, f, ensure_ascii=False, indent=2)
    
    print(f"\n✅ 音频映射已保存到: {AUDIO_MAP_PATH}")
    print(f"\n📊 总计生成 {len(audio_map)} 个音频文件")

if __name__ == "__main__":
    asyncio.run(main())
