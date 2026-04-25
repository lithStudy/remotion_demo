---
name: scene-scripts-templates-reference__PEER_INDUCT
description: "模板 PEER_INDUCT 的 templateMeta（param_schema / example / 约束等）"
metadata:
  tags: remotion, scene-scripts, templateMeta, json
---
## PEER_INDUCT

```json
{
  "name": "PEER_INDUCT",
  "componentExport": "BWPeerInduct",
  "description": "适用：先并列铺陈 2～3 个同级要点（各配一图、随口播依次出现），最后用单独一行口播+一图做归纳收束；视觉上前提横排在上，归纳在下方居中，连线表示「共同指向结论」。\n差异：纯节拍情绪递进、无「并列→归纳」结构用 BEAT_SEQUENCE；并列块无总归纳行用 PANEL_GRID。\n口播条为 item 外层 content[]；premises[i].showFrom 对齐前提第 i 条（可省略则等于 i）；conclusion.showFrom 默认最后一条 content。\n参数：premises（2～3 项，每项 imageSrc、可选 enterEffect、可选 showFrom）；conclusion（必填 imageSrc、可选 enterEffect、showFrom、tone）。",
  "psychology": "并列前提 → 归纳收束",
  "image_count": "3-4",
  "param_schema": {
    "type": "object",
    "properties": {
      "premises": {
        "type": "array",
        "minItems": 2,
        "maxItems": 3,
        "description": "前提配图：横排并列；每项 imageSrc、可选 enterEffect、可选 showFrom（content 0-based）",
        "items": {
          "type": "object",
          "required": [
            "imageSrc"
          ],
          "properties": {
            "imageSrc": {
              "type": "string",
              "format": "image_prompt",
              "description": "前提配图"
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
              "default": "breathe"
            },
            "showFrom": {
              "type": "content_index",
              "minimum": 0,
              "description": "从该条口播起显示本图；省略则与 premises 下标 i 对齐"
            }
          }
        }
      },
      "conclusion": {
        "type": "object",
        "required": [
          "imageSrc"
        ],
        "description": "归纳行：单独一图，默认对齐末条 content",
        "properties": {
          "imageSrc": {
            "type": "string",
            "format": "image_prompt",
            "description": "归纳配图"
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
            "default": "zoomIn"
          },
          "showFrom": {
            "type": "content_index",
            "minimum": 0,
            "description": "从该条口播起显示归纳图与连线；省略为末条下标"
          },
          "tone": {
            "type": "string",
            "enum": [
              "calm",
              "alert"
            ],
            "description": "归纳出现后画面整体情绪；默认 alert"
          }
        }
      }
    },
    "required": [
      "premises",
      "conclusion"
    ]
  },
  "example": {
    "template": "PEER_INDUCT",
    "param": {
      "premises": [
        {
          "imageSrc": "前提甲简笔画",
          "enterEffect": "fadeIn"
        },
        {
          "imageSrc": "前提乙简笔画",
          "enterEffect": "fadeIn"
        },
        {
          "imageSrc": "前提丙简笔画",
          "enterEffect": "breathe"
        }
      ],
      "conclusion": {
        "imageSrc": "归纳收束主视觉",
        "enterEffect": "zoomIn",
        "tone": "alert"
      }
    }
  },
  "content_min_items": 3,
  "content_max_items": 6
}
```
