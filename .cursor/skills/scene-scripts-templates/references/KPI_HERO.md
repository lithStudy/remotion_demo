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
  "description": "适用：单指标或多指标（最多 4 列）大字报：占比、排名、研发费用等；主视觉在画布垂直水平居中。\n单指标：传 value（整数或小数）+ prefix/suffix/useGrouping，可选 label、decimalPlaces（缺省按 value 推断小数位）。\n多指标：传 blocks（1～4 项），每项 value、showFrom，可选 decimalPlaces；列数变化时已有块 left/width 弹簧过渡。\n差异：柱状对比用 STAT_COMPARE；环形进度用 PROGRESS_RING。\n参数：countDuration 为每块数字滚动 spring 时长（帧）。",
  "psychology": "锚定效应",
  "image_count": "0",
  "param_schema": {
    "type": "object",
    "properties": {
      "value": {
        "type": "number",
        "description": "单指标模式：滚动终值（整数或小数）；若提供 blocks 则可省略"
      },
      "prefix": {
        "type": "string",
        "description": "单指标：数字左侧"
      },
      "suffix": {
        "type": "string",
        "description": "单指标：数字右侧单位"
      },
      "label": {
        "type": "string",
        "description": "单指标：数字上方标签（与 blocks[].label 同视觉层级）"
      },
      "useGrouping": {
        "type": "boolean",
        "description": "单指标：千分位（小数时作用于整数部分）"
      },
      "decimalPlaces": {
        "type": "integer",
        "description": "单指标：小数位数，缺省按 value 自动推断"
      },
      "blocks": {
        "type": "array",
        "minItems": 1,
        "maxItems": 4,
        "description": "多指标：每项 value、showFrom（content 下标）；可选 prefix、suffix、label、useGrouping",
        "items": {
          "type": "object",
          "required": [
            "value",
            "showFrom"
          ],
          "properties": {
            "value": {
              "type": "number",
              "description": "终值，整数或小数（如 2.5 万人）"
            },
            "decimalPlaces": {
              "type": "integer",
              "description": "小数位数，缺省按 value 自动推断（如 2.5→1）"
            },
            "showFrom": {
              "type": "integer",
              "format": "content_index",
              "description": "该块出现时机：content 下标，取该条 startFrame"
            },
            "prefix": {
              "type": "string"
            },
            "suffix": {
              "type": "string"
            },
            "label": {
              "type": "string",
              "description": "数字上方标签（多列时字号已加大）"
            },
            "useGrouping": {
              "type": "boolean"
            }
          }
        }
      },
      "countDuration": {
        "type": "integer",
        "description": "数字从 0 滚到目标值的 spring 时长（帧），默认 28"
      }
    },
    "required": []
  },
  "example": {
    "template": "KPI_HERO",
    "param": {
      "blocks": [
        {
          "value": 87,
          "suffix": "%",
          "label": "满意度",
          "showFrom": 0
        },
        {
          "value": 62,
          "suffix": "%",
          "label": "留存",
          "showFrom": 1
        }
      ]
    }
  }
}
```
