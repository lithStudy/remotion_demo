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
