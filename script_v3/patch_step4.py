# Patch step4_generate_remotion.py: fix background and remove gradient div, add layout/subtitle/anchor/effect/tts builders
path = "step4_generate_remotion.py"
with open(path, "r", encoding="utf-8") as f:
    content = f.read()

# 1) Fix background
content = content.replace('background: "{bg}"', 'background: "#ffffff"')

# 2) Remove gradient block and simplify subtitle wrapper - from "底部暗色" through "{anchor_str}" (keep anchor_str)
# We need to remove: the comment, the gradient div, the 字幕文本区域 div wrapper (but keep subtitle_str), and the 音频 comment
import re
# Pattern: from {{/* 底部... */}} to the line before {{/* 音效层 */}}, replace with just 字幕层 + subtitle_str + 锚点词层 + anchor_str
pattern = r"(\{layout_str\})\s+\{\{/\* 底部暗色渐变[^}]+\}\}\}[^\n]*\n[^\n]*\n[^\n]*\n[^\n]*\n[^\n]*\n[^\n]*\n[^\n]*\s+\{\{/\* 字幕文本区域[^}]+\}\}\}[^\n]*\n[^\n]*\n(\{subtitle_str\})\s+[^\n]*\n[^\n]*\n\s+\{\{/\* 音频[^}]+\}\}\}\s*\n(\{anchor_str\})"
replacement = r"\1\n\n            {{/* 字幕层 */}}\n\2\n\n            {{/* 锚点词层 */}}\n\3"
content = re.sub(pattern, replacement, content)

with open(path, "w", encoding="utf-8") as f:
    f.write(content)
print("Patched background and block")
