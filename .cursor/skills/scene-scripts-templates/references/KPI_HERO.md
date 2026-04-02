---
name: scene-scripts-templates-reference__KPI_HERO
description: "模板 KPI_HERO 的 templateMeta（param_schema / example / 约束等）"
metadata:
  tags: remotion, scene-scripts, templateMeta, json
---
## KPI_HERO

```json
{
  "name": "KPI_HERO",
  "componentExport": "BWKpiHero",
  "description": "适用：口播强调一个核心数字、增长率、占比、排名；单指标「大字报」。\n差异：两句并列指标对比用 STAT_COMPARE；完成度/进度感用 PROGRESS_RING；纯金句无数字用 TEXT_FOCUS。\n参数：value 为展示终值；prefix/suffix 宜短；headline 可一句标题；countDuration 控制数字滚动帧长。",
  "psychology": "锚定效应",
  "image_count": "0-1",
  "param_schema": {
    "type": "object",
    "properties": {
      "value": {
        "type": "integer",
        "description": "展示的目标数字（整数滚动到该值）"
      },
      "prefix": {
        "type": "string",
        "description": "数字前缀，如「¥」「+」"
      },
      "suffix": {
        "type": "string",
        "description": "数字后缀，如「%」「万」"
      },
      "headline": {
        "type": "string",
        "description": "顶部短标题"
      },
      "imageSrc": {
        "type": "string",
        "format": "image_prompt",
        "description": "可选配图（角落小图）"
      },
      "countDuration": {
        "type": "integer",
        "description": "数字从 0 滚到 value 的 spring 时长（帧），默认 28"
      }
    },
    "required": [
      "value"
    ]
  },
  "example": {
    "template": "KPI_HERO",
    "param": {
      "value": 87,
      "prefix": "",
      "suffix": "%",
      "headline": "用户满意度"
    }
  }
}
```
