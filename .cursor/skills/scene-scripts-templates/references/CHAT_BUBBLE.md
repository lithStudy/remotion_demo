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
  "description": "适用：显式对话/弹幕/评论体/群聊体/角色化吐槽（如“我：…你：…”、“网友：…”、“评论：…”、“有人说：…”）的口吻表达，适合做共鸣痛点、用户反馈、反对意见、现场对话等。\n不适用：仅“你是不是也…”这类单句发问但整体仍是平铺叙述时（此时优先 CENTER_FOCUS）。\n差异：纯金句大字无对话感用 TEXT_FOCUS；需配图但非气泡口径用 CENTER_FOCUS。\n视觉：左右说话者头像为模板内置矢量 SVG（align=left 与 align=right 各一套），不加载外部图片。气泡一律用 bubbles（数组）：单气泡传 1 项，多气泡传多项；每项可含 bubbleText、showFrom、align；气泡在对应 content 条目的 startFrame 入场并保留。",
  "chinese_name": "对话气泡",
  "image_count": "0",
  "param_schema": {
    "type": "object",
    "properties": {
      "bubbles": {
        "type": "array",
        "description": "对话气泡列表；单气泡传 1 项，多气泡传多项。每项可含 bubbleText、showFrom、align。",
        "items": {
          "type": "object",
          "properties": {
            "bubbleText": {
              "type": "string",
              "description": "可选；气泡内显示文本。若传入则覆盖对应 content 条目文本；不影响 content 用于时序/字幕。"
            },
            "showFrom": {
              "type": "integer",
              "format": "content_index",
              "description": "可选；绑定 content 下标（0-based）。缺省为该行在 bubbles 中的下标。"
            },
            "align": {
              "type": "string",
              "enum": [
                "left",
                "right"
              ],
              "description": "可选；left 头像在左，right 头像在右。"
            }
          }
        }
      }
    },
    "required": [
      "bubbles"
    ]
  },
  "example": {
    "template": "CHAT_BUBBLE",
    "param": {
      "bubbles": [
        {
          "bubbleText": "我真的快被这事逼疯了……",
          "showFrom": 0,
          "align": "left"
        },
        {
          "bubbleText": "别急，先把事实捋清。",
          "showFrom": 1,
          "align": "right"
        }
      ]
    }
  }
}
```
