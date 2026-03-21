import json
import os
import re
import math
import argparse
import base64
from pathlib import Path
from openai import OpenAI

def generate_mimo_tts(text: str, output_path: str):
    """
    使用 mimo-v2-tts 生成语音
    """
    print(f"🎙️ [mimo-v2-tts] 开始基于文本生成语音...")
    print(f"📄 文本前瞻: {text[:30]}...")
    
    # 优先从环境变量读取，如果未设置则使用默认配置中的 Key
    api_key = os.environ.get("MIMO_API_KEY", "sk-ctixljz89fzepqnr87jaq52b7w10p87093114a485filpu42")
    
    client = OpenAI(
        api_key=api_key,
        base_url="https://api.xiaomimimo.com/v1"
    )

    try:
        completion = client.chat.completions.create(
            model="mimo-v2-tts",
            messages=[
                {
                    "role": "assistant",
                    "content": text
                }
            ],
            audio={
                "format": "wav",
                "voice": "mimo_default"
            }
        )

        message = completion.choices[0].message
        audio_bytes = base64.b64decode(message.audio.data)
        
        # 确保输出目录存在
        os.makedirs(os.path.dirname(output_path), exist_ok=True)
        
        with open(output_path, "wb") as f:
            f.write(audio_bytes)
        print(f"✅ [mimo-v2-tts] 语音生成完成: {output_path}")
    except Exception as e:
        print(f"❌ [mimo-v2-tts] 语音生成失败: {str(e)}")

def parse_asr_to_timestamps(audio_path: str):
    """
    复用 asr.py 的逻辑解析为时间戳，并格式化为指定输出：
    [{'key': '1', 'text': '...', 'timestamp': [[...]]}, ...]
    """
    try:
        from funasr import AutoModel
    except ImportError:
        print("❌ 未安装 funasr，请运行: pip install funasr")
        return []
        
    print("⏳ 初始化 ASR 模型（依据 asr.py 的指引）...")
    model = AutoModel(
        model="iic/speech_paraformer-large-vad-punc_asr_nat-zh-cn-16k-common-vocab8404-pytorch",
        model_revision="v2.0.4",
        vad_model="iic/speech_fsmn_vad_zh-cn-16k-common-pytorch",
        punc_model="ct-punc",
        device="cuda:0" # 根据情况可以选 device="cpu"
    )
    
    print(f"🔍 正在解析音频时间戳: {audio_path}")
    res = model.generate(
        input=audio_path, 
        batch_size_s=300, 
        hotword='开源项目'
    )
    
    output_timestamps = []
    if res and len(res) > 0:
        res_data = res[0]
        sentences = res_data.get('sentence_info', [])
        
        # 组装为目标结果格式
        for idx, sent in enumerate(sentences):
            item = {
                'key': str(idx + 1),
                'text': sent.get('text', ''),
                'timestamp': sent.get('timestamp', [])
            }
            output_timestamps.append(item)
            
    return output_timestamps

def match_and_upgrade_scene_script(asr_timestamps, scene_script_path, output_scene_script_path, fps=30):
    """
    将 FunASR 生成的时间戳与 scene 脚本中的 content 匹配。
    由于 ASR 给出的是按角色停顿分句的信息，我们将所有的字（char）按级展平，
    并顺次对齐到 scene-scripts.json 中以获得各片段的 startTime 和 durationFrames。
    """
    print(f"🔗 开始将时间戳与 Scene 脚本匹配: {scene_script_path}")
    if not os.path.exists(scene_script_path):
        print(f"⚠️ 找不到指定的 scene 脚本 {scene_script_path}，跳过匹配。")
        return

    with open(scene_script_path, "r", encoding="utf-8") as f:
        data = json.load(f)

    # 1. 扁平化 ASR 解析出的字符与精准时间戳分布
    all_char_timestamps = []
    for sent in asr_timestamps:
        text = sent['text']
        times = sent['timestamp']
        # 清理标点，以便字与字之间通过长度严格对齐
        clean_text = re.sub(r'[，。！？、；：…—,\.\!\?\;\:\-"\'」）\)】》\s]', '', text)
        
        # 将无标点文本里的每个字跟 timestamp 单项映射
        for i in range(min(len(clean_text), len(times))):
            all_char_timestamps.append({
                'char': clean_text[i],
                'startMs': times[i][0],
                'endMs': times[i][1]
            })

    # 2. 从前往后遍历 scene 并配发 startFrames 和 durationFrames 
    char_idx = 0
    total_chars = len(all_char_timestamps)

    scenes = data.get("scenes", [])
    for scene in scenes:
        scene_start_ms = None
        scene_end_ms = 0
        
        for item in scene.get("items", []):
            param = item.get("param", {})
            content = param.get("content", [])
            if not content:
                continue

            item_boundaries = []
            item_start_ms = None
            
            for c_item in content:
                # 获取文字
                if isinstance(c_item, str):
                    c_text = c_item
                elif isinstance(c_item, dict):
                    c_text = c_item.get("text", "")
                else:
                    c_text = str(c_item)

                clean_c = re.sub(r'[^\w\u4e00-\u9fa5]', '', c_text)
                char_count = len(clean_c)

                # 计算起止范围
                c_start_ms, c_end_ms = 0, 0
                if char_idx < total_chars and char_count > 0:
                    c_start_ms = all_char_timestamps[char_idx]['startMs']
                    end_idx = min(char_idx + char_count - 1, total_chars - 1)
                    c_end_ms = all_char_timestamps[end_idx]['endMs']
                    char_idx += char_count
                
                item_boundaries.append({"startMs": c_start_ms, "endMs": c_end_ms})

                if item_start_ms is None and c_start_ms > 0:
                    item_start_ms = c_start_ms
                if scene_start_ms is None and c_start_ms > 0:
                    scene_start_ms = c_start_ms
                scene_end_ms = max(scene_end_ms, c_end_ms)

            # 让它变成相对于当前 Item 零秒起算的 startFrame
            item_start_ms = item_start_ms or 0
            upgraded = []
            for i, c_item in enumerate(content):
                start_ms = max(0, item_boundaries[i]["startMs"] - item_start_ms)
                end_ms = max(0, item_boundaries[i]["endMs"] - item_start_ms)
                duration_ms = max(0, end_ms - start_ms)
                
                start_frame = max(0, math.floor(start_ms / 1000 * fps))
                duration_frames = max(1, math.ceil(duration_ms / 1000 * fps))
                
                new_info = {
                    "startFrame": start_frame,
                    "durationFrames": duration_frames,
                    "anchor": None, "anchorColor": None, "audioEffect": None
                }
                if isinstance(c_item, str):
                    new_info["text"] = c_item
                elif isinstance(c_item, dict):
                    new_info.update(c_item) 

                upgraded.append(new_info)
            
            param["content"] = upgraded
            if item_boundaries:
                total_duration_ms = item_boundaries[-1]["endMs"] - item_boundaries[0]["startMs"]
                param["totalDurationFrames"] = max(1, math.ceil(total_duration_ms / 1000 * fps))

        # 为场景计算总时长，设置 audioSrc 的相对路径
        scene["totalDurationFrames"] = max(1, math.ceil((scene_end_ms - (scene_start_ms or 0)) / 1000 * fps))
        scene["audioSrc"] = "/audio/mimo_output.wav"  # 配置你的全量或片段音频路径

    with open(output_scene_script_path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print(f"✅ 匹配并更新完毕！写入至: {output_scene_script_path}")

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--wenan", default="文案.txt", help="要读取的文案文本文件路径")
    parser.add_argument("--audio_out", default="d:/code/study/remotion_test/public/audio/mimo_output.wav", help="TTS语音输出文件路径")
    parser.add_argument("--scene", default="scene-scripts.json", help="未标时间戳的scene脚本原文件")
    parser.add_argument("--scene_out", default="scene-scripts.json", help="带时间戳的输出文件(可覆写原文件)")
    args = parser.parse_args()

    # 1. 提取文本内容
    if not os.path.exists(args.wenan):
        print(f"❌ 找不到文案文件: {args.wenan}")
        return
    with open(args.wenan, "r", encoding="utf-8") as f:
        text_content = f.read().strip()

    # 2. 生成语音
    generate_mimo_tts(text_content, args.audio_out)

    if not os.path.exists(args.audio_out):
        print(f"❌ 缺少音频文件无法继续识别！请确保 {args.audio_out} 生成成功。")
        return

    # 3. 解析时间戳
    asr_results = parse_asr_to_timestamps(args.audio_out)
    
    print("\n--- 解析为时间戳的输出演示 (ASR Results) ---")
    print(json.dumps(asr_results[:2], ensure_ascii=False, indent=2)) # 对前两条做示例打印供查阅
    print("-------------------------------------------\n")

    # 4. 执行匹配
    match_and_upgrade_scene_script(asr_results, args.scene, args.scene_out)

if __name__ == "__main__":
    main()
