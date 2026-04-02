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
  "description": "适用：全片最强金句、结论暴击；0 图纯大字。\n差异：需要配图锚定用 CENTER_FOCUS；模拟读者吐槽口吻用 CHAT_BUBBLE。\n慎用：content 建议不超过 3 条以保持冲击；若口播/字幕必须保留长 content，可填 coreSentence 仅用于大屏一句展示。",
  "content_max_items": 3,
  "psychology": "信噪比极致化",
  "image_count": 0,
  "param_schema": {
    "type": "object",
    "properties": {
      "coreSentence": {
        "type": "string",
        "description": "精炼核心句，不超过25个字"
      },
      "coreSentenceAnchors": {
        "type": "array",
        "description": "可选；在 coreSentence 内按顺序高亮子串。每项 coreSentenceAnchor 须为 coreSentence 的子串，否则会被校验丢弃",
        "items": {
          "type": "object",
          "required": [
            "coreSentenceAnchor"
          ],
          "properties": {
            "coreSentenceAnchor": {
              "type": "string",
              "description": "要高亮的子串，须出现在 coreSentence 内"
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
      "coreSentence": "承认自己“可能错了”并不是一种软弱",
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
