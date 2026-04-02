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
  "description": "适用：可执行步骤、操作流程、短分点清单（第一步/第二步…），无配图，每个分点必须限制在10个字符以内。\n差异：若每条方法后还跟较长解释、追问或补充句，优先用 METHOD_STACK；无步骤感的并列要点用 LIST_MULTI_GROUP 或 CENTER_FOCUS。\n参数：可直接传 steps（字符串数组）；若不传 steps，则从 content 提取文本作为步骤，建议保持短句清单感。",
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
          "type": "string"
        },
        "minItems": 2,
        "maxItems": 6,
        "description": "步骤文本数组（可选）。不传则从 content 中提取。每条不超过 10 个字符。"
      }
    },
    "required": []
  },
  "example": {
    "template": "STEP_LIST",
    "param": {
      "steps": [
        "第一步",
        "第二步",
        "第三步"
      ]
    }
  }
}
```
