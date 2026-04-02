---
name: scene-scripts-templates-reference__PROGRESS_RING
description: "模板 PROGRESS_RING 的 templateMeta（param_schema / example / 约束等）"
metadata:
  tags: remotion, scene-scripts, templateMeta, json
---
## PROGRESS_RING

```json
{
  "name": "PROGRESS_RING",
  "componentExport": "BWProgressRing",
  "description": "适用：完成度、达成率、占比、进度结论；环形动效强化「走到哪一步」。\n差异：单数字大字报用 KPI_HERO；两项对比用 STAT_COMPARE。\n参数：percent 为 0–100；label 为主文案；subLabel 可写口径说明。",
  "psychology": "目标梯度",
  "image_count": 0,
  "param_schema": {
    "type": "object",
    "properties": {
      "percent": {
        "type": "integer",
        "description": "进度百分比 0–100"
      },
      "label": {
        "type": "string",
        "description": "主标题（如「年度目标达成」）"
      },
      "subLabel": {
        "type": "string",
        "description": "副标题或口径说明"
      }
    },
    "required": [
      "percent",
      "label"
    ]
  },
  "example": {
    "template": "PROGRESS_RING",
    "param": {
      "percent": 78,
      "label": "项目完成度",
      "subLabel": "截至本季度"
    }
  }
}
```
