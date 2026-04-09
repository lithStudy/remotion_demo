---
name: scene-scripts-templates-reference__CAUSE_CHAIN
description: "模板 CAUSE_CHAIN 的 templateMeta（param_schema / example / 约束等）"
metadata:
  tags: remotion, scene-scripts, templateMeta, json
---
## CAUSE_CHAIN

```json
{
  "name": "CAUSE_CHAIN",
  "componentExport": "BWCauseChain",
  "description": "适用：同一镜头内讲清「因→果→再果」传导、机制链条；每段口播对应链上一环。\n差异：有时间刻度/年代演进用 TIMELINE；单标题+多句解释用 METHOD_STACK；左右对照用 SPLIT_COMPARE；情绪递进换图用 BEAT_SEQUENCE。\n参数：nodes 2～4 项，每项 label（短标签）、imageSrc、showFrom（content 下标 0-based，非帧数）；可选 layout 为 vertical（默认，适配竖屏）或 horizontal。",
  "psychology": "因果可视化",
  "image_count": "2-4",
  "content_min_items": 2,
  "content_max_items": 6,
  "param_schema": {
    "type": "object",
    "properties": {
      "layout": {
        "type": "string",
        "enum": [
          "vertical",
          "horizontal"
        ],
        "default": "vertical",
        "description": "链的排布方向，竖屏建议 vertical"
      },
      "nodes": {
        "type": "array",
        "minItems": 2,
        "maxItems": 4,
        "description": "因果节点；showFrom 为 content 数组下标（0-based），入场时刻取该条 startFrame",
        "items": {
          "type": "object",
          "required": [
            "label",
            "imageSrc",
            "showFrom"
          ],
          "properties": {
            "label": {
              "type": "string",
              "description": "节点短标签，建议 2～8 字"
            },
            "imageSrc": {
              "type": "string",
              "format": "image_prompt",
              "description": "该环节隐喻配图"
            },
            "showFrom": {
              "type": "integer",
              "format": "content_index",
              "description": "content 下标（0-based），非帧数"
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
      "nodes"
    ]
  },
  "example": {
    "template": "CAUSE_CHAIN",
    "param": {
      "layout": "vertical",
      "nodes": [
        {
          "label": "刺激",
          "imageSrc": "闪电击中大脑的简笔画",
          "showFrom": 0
        },
        {
          "label": "解读",
          "imageSrc": "放大镜看信息的简笔画",
          "showFrom": 1
        },
        {
          "label": "行动",
          "imageSrc": "按下按钮的简笔画",
          "showFrom": 2
        }
      ]
    }
  }
}
```
