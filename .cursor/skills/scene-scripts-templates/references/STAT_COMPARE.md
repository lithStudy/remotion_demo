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
  "description": "适用：2～6 项 KPI 并列对比；条形高度反映相对大小；bars 每条必填 showFrom（content 下标），从对应口播句的 startFrame 起显示该柱，已出现的柱体作为一组始终画布水平居中。\n差异：左右场景图对比用 SPLIT_COMPARE；单数字强调用 KPI_HERO。\n参数：bars（2～6 条：label、value、showFrom）；可选 anchors（与 bars.showFrom 同为 content 下标）；兼容旧版 leftValue/rightValue/leftLabel/rightLabel（两柱同帧入场）。",
  "psychology": "对比效应",
  "image_count": "0",
  "param_schema": {
    "type": "object",
    "properties": {
      "bars": {
        "type": "array",
        "minItems": 2,
        "maxItems": 6,
        "description": "多条柱状对比；每项须含 label、value（非负整数）、showFrom（content 下标），从该条 startFrame 起显示本柱",
        "items": {
          "type": "object",
          "required": [
            "label",
            "value",
            "showFrom"
          ],
          "properties": {
            "label": {
              "type": "string",
              "description": "短标签"
            },
            "value": {
              "type": "integer",
              "description": "数值（非负整数）"
            },
            "showFrom": {
              "type": "integer",
              "format": "content_index",
              "description": "该柱出现时机：content 数组下标（0-based），取该条 startFrame 作为入场起点"
            }
          }
        }
      },
      "leftValue": {
        "type": "integer",
        "description": "左侧数值（非负整数），旧版两柱模式"
      },
      "rightValue": {
        "type": "integer",
        "description": "右侧数值（非负整数），旧版两柱模式"
      },
      "leftLabel": {
        "type": "string",
        "description": "左侧标签"
      },
      "rightLabel": {
        "type": "string",
        "description": "右侧标签"
      },
      "anchors": {
        "type": "array",
        "description": "可选；顶部锚点词列表，showFrom 为 content 下标（取该条 startFrame），与 KPI_HERO / DATA_TABLE 一致",
        "items": {
          "type": "object",
          "required": [
            "text",
            "showFrom"
          ],
          "properties": {
            "text": {
              "type": "string",
              "description": "锚点词文案"
            },
            "showFrom": {
              "type": "integer",
              "format": "content_index",
              "description": "content 下标（0-based），非帧数"
            },
            "color": {
              "type": "string"
            },
            "anim": {
              "type": "string",
              "enum": [
                "spring",
                "slideUp",
                "popIn",
                "highlight"
              ]
            },
            "audioEffect": {
              "type": "string",
              "enum": [
                "impact_thud",
                "ping",
                "woosh"
              ]
            }
          }
        }
      }
    },
    "required": []
  },
  "example": {
    "template": "STAT_COMPARE",
    "param": {
      "bars": [
        {
          "label": "去年",
          "value": 32,
          "showFrom": 0
        },
        {
          "label": "今年",
          "value": 68,
          "showFrom": 1
        }
      ]
    }
  }
}
```
