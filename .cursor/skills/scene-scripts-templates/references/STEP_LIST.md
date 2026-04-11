---
name: scene-scripts-templates-reference__STEP_LIST
description: "模板 STEP_LIST 的 templateMeta（param_schema / example / 约束等）"
metadata:
  tags: remotion, scene-scripts, templateMeta, json
---
## STEP_LIST

```json
{
  "name": "STEP_LIST",
  "componentExport": "BWStepList",
  "description": "适用：可执行步骤、操作流程、短分点清单（第一步/第二步…），无配图，每个分点必须限制在10个字符以内。\n差异：若每条方法后还跟较长解释、追问或补充句，优先用 METHOD_STACK；无步骤感的并列要点用 PANEL_GRID 或 CENTER_FOCUS。\n参数：steps 可为字符串数组，或 { text, showFrom? }；showFrom 为 content 数组的下标（0-based），与 anchors 一致，入场时刻取该条 content 的 startFrame；不传 steps 则从 content 提取；未写 showFrom 时按 staggerDelay 与序号交错。",
  "content_min_items": 2,
  "content_max_items": 6,
  "psychology": "降低认知负荷",
  "image_count": 0,
  "param_schema": {
    "type": "object",
    "properties": {
      "steps": {
        "type": "array",
        "items": {
          "oneOf": [
            {
              "type": "string"
            },
            {
              "type": "object",
              "properties": {
                "text": {
                  "type": "string"
                },
                "showFrom": {
                  "type": "integer",
                  "minimum": 0,
                  "description": "对应 content 数组的下标（0-based）；该步在 content[showFrom].startFrame 帧开始入场。不传则按 staggerDelay 与序号顺延。"
                }
              },
              "required": [
                "text"
              ]
            }
          ]
        },
        "minItems": 2,
        "maxItems": 6,
        "description": "步骤（可选）。可为字符串，或 { text, showFrom? }（showFrom=content 下标）；不传则从 content 提取。每条 text 建议不超过 10 字。"
      }
    },
    "required": []
  },
  "example": {
    "template": "STEP_LIST",
    "param": {
      "steps": [
        {
          "text": "第一步",
          "showFrom": 0
        },
        {
          "text": "第二步",
          "showFrom": 1
        },
        {
          "text": "第三步",
          "showFrom": 2
        }
      ]
    }
  }
}
```
