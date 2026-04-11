---
name: scene-scripts-templates-reference__CHECKLIST_REVEAL
description: "模板 CHECKLIST_REVEAL 的 templateMeta（param_schema / example / 约束等）"
metadata:
  tags: remotion, scene-scripts, templateMeta, json
---
## CHECKLIST_REVEAL

```json
{
  "name": "CHECKLIST_REVEAL",
  "componentExport": "BWChecklistReveal",
  "description": "适用：收束段、行动清单、要点复诵；口播逐条对应清单行，行随 content 时间显现并打勾。\n差异：可执行「第一步/第二步」短步骤用 STEP_LIST；并列多组大图用 PANEL_GRID；纯叙述单图用 CENTER_FOCUS。\n参数：rows 2～6 项，每项 text（短标签）、showFrom（content 下标）；可选 title；可选 imageSrc 为角落装饰小图（非主叙事图时可省略）。",
  "psychology": "闭环与可执行感",
  "image_count": "0-1",
  "content_min_items": 2,
  "content_max_items": 8,
  "param_schema": {
    "type": "object",
    "properties": {
      "title": {
        "type": "string",
        "description": "可选；清单上方标题，建议 4～14 字"
      },
      "imageSrc": {
        "type": "string",
        "format": "image_prompt",
        "description": "可选；右上角小装饰图，不需要可省略"
      },
      "rows": {
        "type": "array",
        "minItems": 2,
        "maxItems": 6,
        "description": "清单行；showFrom 为 content 下标（0-based），在该条 startFrame 打勾显现",
        "items": {
          "type": "object",
          "required": [
            "text",
            "showFrom"
          ],
          "properties": {
            "text": {
              "type": "string",
              "description": "该行短文案，建议不超过 16 字"
            },
            "showFrom": {
              "type": "integer",
              "format": "content_index",
              "description": "content 下标（0-based），非帧数"
            }
          }
        }
      }
    },
    "required": [
      "rows"
    ]
  },
  "example": {
    "template": "CHECKLIST_REVEAL",
    "param": {
      "title": "今日心法",
      "rows": [
        {
          "text": "先写事实",
          "showFrom": 0
        },
        {
          "text": "再写推断",
          "showFrom": 1
        },
        {
          "text": "留痕备查",
          "showFrom": 2
        }
      ]
    }
  }
}
```
