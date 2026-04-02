---
name: scene-scripts-templates-reference__CHAT_BUBBLE
description: "模板 CHAT_BUBBLE 的 templateMeta（param_schema / example / 约束等）"
metadata:
  tags: remotion, scene-scripts, templateMeta, json
---
## CHAT_BUBBLE

```json
{
  "name": "CHAT_BUBBLE",
  "componentExport": "BWChatBubble",
  "description": "适用：显式对话/弹幕/评论体/群聊体/角色化吐槽（如“我：…你：…”、“网友：…”、“评论：…”、“有人说：…”）的口吻表达，适合做共鸣痛点、用户反馈、反对意见、现场对话等。\n不适用：仅“你是不是也…”这类单句发问但整体仍是平铺叙述时（此时优先 CENTER_FOCUS）。\n差异：纯金句大字无对话感用 TEXT_FOCUS；需配图但非气泡口径用 CENTER_FOCUS。\n参数：imageSrc 为人物/侧脸简笔图标；可选 bubbleText 用于覆盖气泡显示文本；可选 showFrom 用于指定气泡展示哪一条 content（0-based）。",
  "psychology": "社会投射",
  "image_count": 1,
  "param_schema": {
    "type": "object",
    "properties": {
      "imageSrc": {
        "type": "string",
        "format": "image_prompt",
        "description": "人物图标描述（用于承载对话/弹幕的“说话者”形象）"
      },
      "bubbleText": {
        "type": "string",
        "description": "可选；仅用于“气泡里显示的文本”。若传入，将覆盖气泡内默认显示的 content 当前条目文本；但不影响 content 用于时序/字幕渲染。"
      },
      "showFrom": {
        "type": "integer",
        "format": "content_index",
        "description": "可选；指定气泡展示的 content 下标（0-based，非帧数）。合法范围 0～(content 条数-1)，超出会被忽略并回退为按时间轴自动切换。"
      }
    },
    "required": [
      "imageSrc"
    ]
  },
  "example": {
    "template": "CHAT_BUBBLE",
    "param": {
      "imageSrc": "困惑的人简笔画图标",
      "bubbleText": "我真的快被这事逼疯了……",
      "showFrom": 0
    }
  }
}
```
