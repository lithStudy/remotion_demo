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
  "description": "适用：同一镜头内讲清「因→果→再果」传导、机制链条；每段口播对应链上一环。\n差异：有时间刻度/年代演进用 TIMELINE；单标题+多句解释用 METHOD_STACK；左右对照用 SPLIT_COMPARE；情绪递进换图用 BEAT_SEQUENCE。\n参数：nodes 2～4 项，每项 label（短标签）、imageSrc、showFrom（content 下标 0-based，非帧数）；可选 layout 为 horizontal（默认，左→右链）或 vertical（竖向堆叠，适配竖屏）；anchors 可选，顶部依次展示关键词并绑定音效。",
  "chinese_name": "因果链条",
  "image_count": "2-4",
  "content_min_items": 2,
  "content_max_items": 6,
  "param_schema": {
    "type": "object",
    "properties": {
      "layout": {
        "type": "string",
        "enum": [
          "horizontal",
          "vertical"
        ],
        "default": "horizontal",
        "description": "链的排布方向；横屏/常规叙事默认 horizontal，竖屏可设 vertical"
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
      },
      "anchors": {
        "type": "array",
        "description": "可选；顶部依次展示锚点词并保留为列表，showFrom 为 content 下标（0-based，非帧数）；保持克制，只提取整段里真正的高潮、反转或核心名词",
        "items": {
          "type": "object",
          "required": [
            "text",
            "showFrom"
          ],
          "properties": {
            "text": {
              "type": "string",
              "description": "要展示的锚点词"
            },
            "showFrom": {
              "type": "integer",
              "format": "content_index",
              "description": "content 数组下标（0-based），非帧数；合法范围 0～(content 条数-1)，超出会被校验丢弃"
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
    "required": [
      "nodes"
    ]
  },
  "example": {
    "template": "CAUSE_CHAIN",
    "param": {
      "layout": "horizontal",
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
