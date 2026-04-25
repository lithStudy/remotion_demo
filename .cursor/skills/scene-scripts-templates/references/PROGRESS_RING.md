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
  "description": "适用：完成度、达成率、占比、进度结论；环形动效强化「走到哪一步」。\n单组：percent（0–100）+ label，可选 subLabel。\n多组：blocks（1～4 项），每项 percent、label、showFrom（content 下标），可选 subLabel、ringColor；列数变化时弹簧过渡与 KPI_HERO 一致。\n差异：单数字大字报用 KPI_HERO；两项柱状对比用 STAT_COMPARE。",
  "psychology": "目标梯度",
  "image_count": 0,
  "param_schema": {
    "type": "object",
    "properties": {
      "percent": {
        "type": "integer",
        "description": "单组模式：进度百分比 0–100；若提供 blocks 则可省略"
      },
      "label": {
        "type": "string",
        "description": "单组：主标题；多组请用 blocks[].label"
      },
      "subLabel": {
        "type": "string",
        "description": "单组：副标题或口径说明"
      },
      "blocks": {
        "type": "array",
        "minItems": 1,
        "maxItems": 4,
        "description": "多组：每项 percent、label、showFrom（content 下标）；可选 subLabel、ringColor",
        "items": {
          "type": "object",
          "required": [
            "percent",
            "label",
            "showFrom"
          ],
          "properties": {
            "percent": {
              "type": "integer",
              "description": "0–100"
            },
            "label": {
              "type": "string"
            },
            "subLabel": {
              "type": "string"
            },
            "ringColor": {
              "type": "string",
              "description": "环与进度弧颜色，默认 #2B6CB0"
            },
            "showFrom": {
              "type": "integer",
              "format": "content_index",
              "description": "该列出现时机：content 下标，取该条 startFrame"
            }
          }
        }
      }
    },
    "required": []
  },
  "example": {
    "template": "PROGRESS_RING",
    "param": {
      "blocks": [
        {
          "percent": 78,
          "label": "项目完成度",
          "subLabel": "Q1",
          "showFrom": 0
        },
        {
          "percent": 62,
          "label": "测试覆盖",
          "ringColor": "#059669",
          "showFrom": 1
        }
      ]
    }
  }
}
```
