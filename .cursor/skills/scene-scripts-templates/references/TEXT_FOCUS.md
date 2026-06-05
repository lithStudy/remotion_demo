---
name: scene-scripts-templates-reference__TEXT_FOCUS
description: "模板 TEXT_FOCUS 的 templateMeta（param_schema / example / 约束等）"
metadata:
  tags: remotion, scene-scripts, templateMeta, json
---
## TEXT_FOCUS

```json
{
  "name": "TEXT_FOCUS",
  "componentExport": "BWTextFocus",
  "description": "适用：全片最强金句、结论暴击；0 图纯大字。\n差异：需要配图锚定用 CENTER_FOCUS；模拟读者吐槽口吻用 CHAT_BUBBLE。\n慎用：content 建议不超过 3 条以保持冲击；若口播/字幕必须保留长 content，可填 coreSentence（string 或 { text, showFrom, endFrom? } 每行一条，showFrom/endFrom 均为 content 下标）作为大屏主文案。",
  "content_max_items": 3,
  "psychology": "信噪比极致化",
  "image_count": 0,
  "param_schema": {
    "type": "object",
    "properties": {
      "coreSentence": {
        "type": "array",
        "minItems": 1,
        "description": "大屏核心文案，每元素一行：可为 string，或 { text, showFrom, endFrom? }；showFrom/endFrom 为 content 下标（0-based），非帧数：在该条 startFrame 显现；可选 endFrom 表示在该条播完（startFrame+durationFrames）后起淡出。纯 string 等价于 showFrom=0、无 endFrom。锚点校验时各段 text 按顺序直接拼接（无分隔符）。",
        "items": {
          "oneOf": [
            {
              "type": "string"
            },
            {
              "type": "object",
              "required": [
                "text",
                "showFrom"
              ],
              "properties": {
                "text": {
                  "type": "string",
                  "description": "该行大屏文案"
                },
                "showFrom": {
                  "type": "integer",
                  "format": "content_index",
                  "description": "content 下标（0-based），非帧数"
                },
                "endFrom": {
                  "type": "integer",
                  "format": "content_index",
                  "description": "可选；content 下标（0-based），非帧数；该行在对应条字幕结束帧（startFrame+durationFrames）起淡出"
                }
              }
            }
          ]
        }
      },
      "coreSentenceAnchors": {
        "type": "array",
        "description": "可选；在 coreSentence 各段拼接后的全文内按顺序高亮子串。每项 coreSentenceAnchor 须为该拼接串的子串，否则会被校验丢弃",
        "items": {
          "type": "object",
          "required": [
            "coreSentenceAnchor"
          ],
          "properties": {
            "coreSentenceAnchor": {
              "type": "string",
              "description": "要高亮的子串，须出现在各 coreSentence 段拼接后的全文内"
            },
            "color": {
              "type": "string",
              "description": "高亮颜色，省略时默认强调色"
            }
          }
        }
      }
    },
    "required": [
      "coreSentence"
    ]
  },
  "example": {
    "template": "TEXT_FOCUS",
    "param": {
      "coreSentence": [
        {
          "text": "承认自己“可能错了”并不是一种软弱",
          "showFrom": 0,
          "endFrom": 0
        },
        {
          "text": "而是成长的开始",
          "showFrom": 1,
          "endFrom": 1
        }
      ],
      "coreSentenceAnchors": [
        {
          "coreSentenceAnchor": "可能错了",
          "color": "red"
        }
      ]
    }
  }
}
```
