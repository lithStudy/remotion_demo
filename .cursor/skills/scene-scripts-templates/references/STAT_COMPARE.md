---
name: scene-scripts-templates-reference__STAT_COMPARE
description: "模板 STAT_COMPARE 的 templateMeta（param_schema / example / 约束等）"
metadata:
  tags: remotion, scene-scripts, templateMeta, json
---
## STAT_COMPARE

```json
{
  "name": "STAT_COMPARE",
  "componentExport": "BWStatCompare",
  "description": "适用：两项 KPI 并列对比（前后、A/B、涨跌）；条形高度反映相对大小。\n差异：左右场景图对比用 SPLIT_COMPARE；单数字强调用 KPI_HERO；若强调完成度/进度闭环感用 PROGRESS_RING。\n参数：leftValue/rightValue 为非负整数；标签宜短。",
  "psychology": "对比效应",
  "image_count": "0-2",
  "param_schema": {
    "type": "object",
    "properties": {
      "leftValue": {
        "type": "integer",
        "description": "左侧数值（非负整数）"
      },
      "rightValue": {
        "type": "integer",
        "description": "右侧数值（非负整数）"
      },
      "leftLabel": {
        "type": "string",
        "description": "左侧标签"
      },
      "rightLabel": {
        "type": "string",
        "description": "右侧标签"
      },
      "leftSrc": {
        "type": "string",
        "format": "image_prompt",
        "description": "左侧小图标"
      },
      "rightSrc": {
        "type": "string",
        "format": "image_prompt",
        "description": "右侧小图标"
      }
    },
    "required": [
      "leftValue",
      "rightValue",
      "leftLabel",
      "rightLabel"
    ]
  },
  "example": {
    "template": "STAT_COMPARE",
    "param": {
      "leftValue": 32,
      "rightValue": 68,
      "leftLabel": "去年",
      "rightLabel": "今年"
    }
  }
}
```
