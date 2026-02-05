#!/usr/bin/env python3
"""
Azure TTS 语音生成脚本
从 scene-scripts.json 读取脚本数据，使用 Azure Cognitive Services 生成 TTS 语音

使用方法：
python generate_audio_azure.py --input <scene-scripts.json路径> --output <音频输出目录>

配置文件：
脚本同目录下必须存在 tts_config.json，包含以下字段：
{
  "speech_key": "YOUR_KEY",
  "service_region": "eastasia",
  "voice_name": "zh-CN-XiaochenNeural" //可选语音：https://learn.microsoft.com/zh-cn/azure/ai-services/speech-service/language-support?tabs=tts
}

依赖安装：
pip install requests mutagen


"""

import asyncio
import argparse
import json
import os
import time
from pathlib import Path
try:
    import requests
    from mutagen.mp3 import MP3
except ImportError:
    print("❌ 请先安装依赖：pip install requests mutagen")
    exit(1)

# 全局配置
CONFIG_FILE = "tts_config.json"

def load_config():
    """读取配置文件"""
    config_path = Path(__file__).parent / CONFIG_FILE
    if not config_path.exists():
        print(f"❌ 配置文件不存在: {config_path}")
        print("请创建 tts_config.json 并包含 speech_key, service_region, voice_name")
        exit(1)
    
    with open(config_path, "r", encoding="utf-8") as f:
        config = json.load(f)
    
    # 尝试读取 .env 文件
    env_path = Path(__file__).parent / ".env"
    if env_path.exists():
        with open(env_path, "r", encoding="utf-8") as f:
            for line in f:
                line = line.strip()
                if line and not line.startswith("#") and "=" in line:
                    key, value = line.split("=", 1)
                    os.environ[key.strip()] = value.strip()
    
    # 优先从环境变量获取 key
    if "SPEECH_KEY" in os.environ:
        config["speech_key"] = os.environ["SPEECH_KEY"]
        
    return config

def get_token(subscription_key, region):
    """获取 Azure Access Token"""
    fetch_token_url = f"https://{region}.api.cognitive.microsoft.com/sts/v1.0/issueToken"
    headers = {
        'Ocp-Apim-Subscription-Key': subscription_key
    }
    response = requests.post(fetch_token_url, headers=headers)
    if response.status_code == 200:
        return response.text
    else:
        print(f"❌ 获取 Token 失败: {response.status_code} - {response.text}")
        return None

def generate_audio_azure(text, output_path, token, region, voice_name, speech_rate="0%"):
    """使用 Azure REST API 生成音频"""
    url = f"https://{region}.tts.speech.microsoft.com/cognitiveservices/v1"
    headers = {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/ssml+xml',
        'X-Microsoft-OutputFormat': 'audio-16khz-128kbitrate-mono-mp3',
        'User-Agent': 'RemotionScriptGenerator'
    }
    
    # 构造 SSML
    # 根据需求可以添加更多 prosody 调节
    ssml = f"""
    <speak version='1.0' xml:lang='zh-CN'>
        <voice xml:lang='zh-CN' xml:gender='Female' name='{voice_name}'>
            <prosody rate='{speech_rate}'>
                {text}
            </prosody>
        </voice>
    </speak>
    """
    
    response = requests.post(url, headers=headers, data=ssml.encode('utf-8'))
    
    if response.status_code == 200:
        with open(output_path, 'wb') as audio:
            audio.write(response.content)
        return True
    else:
        print(f"❌ TTS 请求失败: {response.status_code} - {response.text}")
        return False

async def process_scene(scene: dict, output_dir: Path, animation_name: str, token: str, region: str, voice_name: str, audio_map: dict, speech_rate: str):
    """处理单个场景的所有条目"""
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
        
        # 生成文件名
        sanitized_type = (
            item["type"]
            .replace("/", "_")
            .replace("\\", "_")
            .replace(":", "_")
            .replace("+", "_")
        )
        filename = f"{str(item['order']).zfill(2)}_{sanitized_type}.mp3"
        filepath = scene_dir / filename
        relative_file_path = f"/audio/{animation_name}/{scene_id}/{filename}"
        
        print(f"  🎵 生成 [{item['order']}] {item['type']}: {item['text'][:30]}...")
        
        try:
            # 检查 Token 是否过期（简单起见，如果批量很大可能需要刷新，这里假设一次执行都在有效期10分钟内，或者每次都检查）
            # Azure Token 有效期 10 分钟。如果脚本运行时间很长，需要重新获取。
            # 为简单起见，这里复用传入的 token。如果经常失败可以改进。
            
            success = generate_audio_azure(item["text"], str(filepath), token, region, voice_name, speech_rate)
            
            if success:
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
            else:
                print(f"  ❌ 生成失败: {filename}")
                
        except Exception as e:
            print(f"  ❌ 异常: {filename} - {e}")

async def main():
    parser = argparse.ArgumentParser(description="从脚本生成Azure TTS语音")
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
        
    # 读取配置
    config = load_config()
    speech_key = config.get("speech_key")
    region = config.get("service_region")
    voice_name = config.get("voice_name")
    speech_rate = config.get("speech_rate", "+0%")
    
    if not all([speech_key, region, voice_name]):
        print("❌ 配置不完整，请检查 tts_config.json")
        return

    # 获取 Token
    print(f"🔑 正在获取 Azure Access Token...")
    token = get_token(speech_key, region)
    if not token:
        return
    
    # 读取脚本数据
    with open(input_path, "r", encoding="utf-8") as f:
        scripts_data = json.load(f)
    
    print(f"🎤 开始生成 Azure TTS 音频...")
    print(f"📄 脚本主题: {scripts_data.get('topic', '未知')}")
    print(f"🔊 使用语音: {voice_name}")
    print(f"🚀 语速设置: {speech_rate}")
    
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
        try:
            with open(audio_map_path, "r", encoding="utf-8") as f:
                audio_map = json.load(f)
            print(f"📂 已加载现有音频映射: {len(audio_map)} 条记录")
        except json.JSONDecodeError:
             print(f"⚠️ audio-map.json 格式错误，将重新创建")

    # 处理逻辑
    if single_mode:
        target_scene = args.scene
        target_item = args.item
        print(f"\n🎯 单条模式: 场景={target_scene}, 条目={target_item or '全部'}")
        
        target_scene_data = None
        for scene in scripts_data.get("scenes", []):
            if scene["sceneId"] == target_scene:
                target_scene_data = scene
                break
        
        if not target_scene_data:
            print(f"❌ 未找到场景: {target_scene}")
            return
            
        if target_item is not None:
             original_items = target_scene_data["items"]
             target_scene_data["items"] = [
                 item for item in original_items if item["order"] == target_item
             ]
             if not target_scene_data["items"]:
                 print(f"❌ 未找到条目: {target_scene}_{target_item}")
                 return

        await process_scene(target_scene_data, output_dir, animation_name, token, region, voice_name, audio_map, speech_rate)

    else:
        # 全量模式
         for scene in scripts_data.get("scenes", []):
            await process_scene(scene, output_dir, animation_name, token, region, voice_name, audio_map, speech_rate)
            
    # 保存音频映射
    with open(audio_map_path, "w", encoding="utf-8") as f:
        json.dump(audio_map, f, ensure_ascii=False, indent=2)
        
    if single_mode:
        print(f"\n✅ 音频映射已更新: {audio_map_path}")
    else:
        print(f"\n✅ 音频映射已保存到: {audio_map_path}")

if __name__ == "__main__":
    asyncio.run(main())
