---
name: scene-scripts-templates-reference__PANEL_GRID
description: "模板 PANEL_GRID 的 templateMeta（param_schema / example / 约束等）"
metadata:
  tags: remotion, scene-scripts, templateMeta, json
---
## PANEL_GRID

```json
{
  "name": "PANEL_GRID",
  "componentExport": "BWPanelGrid",
  "description": "适用：同一镜头内并列 2～4 个主题块（如三个误区、四个检查项），每块一图，随对应口播条显现。\n差异：时间演进用 TIMELINE；节拍换图用 BEAT_SEQUENCE。\n参数：panels 2～4 项，结构与 TIMELINE 的 images 类似：src（image_prompt）、showFrom（content 下标）、可选 enterEffect、position（布局弱提示，可省略）。",
  "psychology": "结构并列",
  "image_count": "2-4",
  "content_min_items": 2,
  "content_max_items": 8,
  "param_schema": {
    "type": "object",
    "properties": {
      "panels": {
        "type": "array",
        "minItems": 2,
        "maxItems": 4,
        "description": "宫格配图；showFrom 为 content 下标（0-based），在该条 startFrame 显现",
        "items": {
          "type": "object",
          "required": [
            "src",
            "showFrom"
          ],
          "properties": {
            "src": {
              "type": "string",
              "format": "image_prompt",
              "description": "该宫格配图提示词"
            },
            "showFrom": {
              "type": "integer",
              "format": "content_index",
              "description": "content 下标（0-based），非帧数"
            },
            "position": {
              "type": "string",
              "enum": [
                "center",
                "left",
                "right",
                "top",
                "bottom"
              ],
              "description": "可选；弱提示，布局以宫格为准"
            },
            "enterEffect": {
              "type": "string",
              "enum": [
                "breathe",
                "slideLeft",
                "slideBottom",
                "zoomIn",
                "fadeIn"
              ],
              "default": "fadeIn"
            }
          }
        }
      }
    },
    "required": [
      "panels"
    ]
  },
  "example": {
    "template": "PANEL_GRID",
    "param": {
      "panels": [
        {
          "src": "问号堵住去路的简笔画",
          "showFrom": 0,
          "enterEffect": "zoomIn"
        },
        {
          "src": "放大镜只看一角的简笔画",
          "showFrom": 1
        },
        {
          "src": "两人各执一词的简笔画",
          "showFrom": 2
        }
      ]
    }
  }
}
```
