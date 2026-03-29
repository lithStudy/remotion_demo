"""
script_v5 公共工具函数

提供各步骤脚本共用的基础工具：环境加载、配置读取、content 文本提取、AI 日志管理。
Gemini 相关工具见同包 `gemini_utils`。
"""

import json
import os
from datetime import datetime
from pathlib import Path


def load_env(script_dir: Path) -> None:
    """加载 script_dir/.env 文件中的环境变量。"""
    env_path = script_dir / ".env"
    if env_path.exists():
        with open(env_path, "r", encoding="utf-8") as f:
            for line in f:
                line = line.strip()
                if line and not line.startswith("#") and "=" in line:
                    key, value = line.split("=", 1)
                    os.environ[key.strip()] = value.strip()


def load_config(script_dir: Path) -> dict:
    """从 script_dir/config.json 加载并返回配置字典。"""
    config_path = script_dir / "config.json"
    with open(config_path, "r", encoding="utf-8") as f:
        return json.load(f)


def extract_content_text(content_item) -> str:
    """
    从单条 content 条目中提取纯文本。
    条目可以是字符串、{text: ...} 对象或其他任意类型。
    """
    if isinstance(content_item, str):
        return content_item
    if isinstance(content_item, dict):
        return str(content_item.get("text", ""))
    return str(content_item)


def split_text_to_content(text: str) -> list[dict]:
    """
    按标点拆分文本，保留标点在片段末尾。
    每个片段长度不超过 20。如果超过，则按字数强制截断。
    保证所有片段拼合后等于原文本。
    """
    if not text:
        return []

    punctuations = set("，,。！？!?;；…、")

    segments = []
    current_segment = ""

    for char in text:
        current_segment += char
        if char in punctuations:
            segments.append(current_segment)
            current_segment = ""

    if current_segment:
        segments.append(current_segment)

    # 处理超长截断（>20个字符）
    max_len = 20
    final_segments = []

    for seg in segments:
        while len(seg) > max_len:
            final_segments.append(seg[:max_len])
            seg = seg[max_len:]
        if seg:
            final_segments.append(seg)

    # 组装为 [{"text": "..."}] 格式
    content = [{"text": s} for s in final_segments if s]

    # 零丢失验证
    reconstructed = "".join(s["text"] for s in content)
    if reconstructed != text:
        print(f"Warning: Content split mismatch. Original: {text}, Reconstructed: {reconstructed}")

    return content


class AiLogger:
    """
    AI 请求日志管理器。
    初始化时创建带时间戳的日志文件，通过 append() 追加写入。
    """

    def __init__(self, output_dir: Path, video_name: str) -> None:
        log_dir = output_dir / "logs"
        log_dir.mkdir(parents=True, exist_ok=True)
        ts = datetime.now().strftime("%Y%m%d_%H%M%S")
        self.path: Path = log_dir / f"{video_name}_step1_ai_{ts}.log"

    def append(self, block: str) -> None:
        """追加一段日志文本到文件。"""
        self.path.parent.mkdir(parents=True, exist_ok=True)
        with open(self.path, "a", encoding="utf-8") as f:
            f.write(block)
            if not block.endswith("\n"):
                f.write("\n")
