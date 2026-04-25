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
  "description": "适用：显式对话/弹幕/评论体/群聊体/角色化吐槽（如“我：…你：…”、“网友：…”、“评论：…”、“有人说：…”）的口吻表达，适合做共鸣痛点、用户反馈、反对意见、现场对话等。\n不适用：仅“你是不是也…”这类单句发问但整体仍是平铺叙述时（此时优先 CENTER_FOCUS）。\n差异：纯金句大字无对话感用 TEXT_FOCUS；需配图但非气泡口径用 CENTER_FOCUS。\n视觉：左右说话者头像为模板内置矢量 SVG（align=left 与 align=right 各一套），不加载外部图片。可选 bubbleText 覆盖气泡内文案；可选 showFrom 绑定 content 下标（0-based）。多对话：传 bubbles（数组），每项可含 bubbleText、showFrom、align；气泡在对应 content 条目的 startFrame 入场并保留。imageSrc 为可选遗留字段，仅占位/兼容旧脚本，不参与渲染。",
  "psychology": "社会投射",
  "image_count": "0",
  "param_schema": {
    "type": "object",
    "properties": {
      "imageSrc": {
        "type": "string",
        "description": "可选；兼容旧 scene-scripts，不参与渲染。头像固定为内置 SVG。"
      },
      "bubbleText": {
        "type": "string",
        "description": "可选；仅用于“气泡里显示的文本”。若传入，将覆盖气泡内默认显示的 content 当前条目文本；但不影响 content 用于时序/字幕渲染。"
      },
      "showFrom": {
        "type": "integer",
        "format": "content_index",
        "description": "可选；指定气泡展示的 content 下标（0-based，非帧数）。合法范围 0～(content 条数-1)，超出会被忽略并回退为按时间轴自动切换。"
      },
      "bubbles": {
        "type": "array",
        "description": "可选；多行对话。存在且非空时按多气泡纵向排列；每项可含 bubbleText、showFrom、align。",
        "items": {
          "type": "object",
          "properties": {
            "bubbleText": {
              "type": "string"
            },
            "showFrom": {
              "type": "integer",
              "format": "content_index"
            },
            "align": {
              "type": "string",
              "enum": [
                "left",
                "right"
              ]
            }
          }
        }
      }
    },
    "required": []
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
