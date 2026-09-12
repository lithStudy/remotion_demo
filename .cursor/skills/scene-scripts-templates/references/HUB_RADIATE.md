---
name: scene-scripts-templates-reference__HUB_RADIATE
description: "模板 HUB_RADIATE 的 templateMeta（param_schema / example / 约束等）"
metadata:
  tags: remotion, scene-scripts, templateMeta, json
---
## HUB_RADIATE

```json
{
  "name": "HUB_RADIATE",
  "componentExport": "BWHubRadiate",
  "description": "适用：「当/在…时，既不会…也不会…」「面对…，第一反应不是…也不是…」等——先立一个情境核，再并列展开 2～4 个结果/反应；视觉上中心核先出，连线向外生长到各支点图。\n差异：纯并列无中心核用 PANEL_GRID；多前提最后归纳收束用 PEER_INDUCT（本模板为其镜像）；文字层次树用 TREE_DIAGRAM。\n口播条为 item 外层 content[]；hub.showFrom 默认 0；rays[i].showFrom 可省略（默认与下标对齐）。\n参数：hub（必填 imageSrc、可选 enterEffect/showFrom）；rays（2～4 项，每项 imageSrc、可选 enterEffect/showFrom）。",
  "chinese_name": "一核发散",
  "image_count": "3-5",
  "param_schema": {
    "type": "object",
    "properties": {
      "hub": {
        "type": "object",
        "required": [
          "imageSrc"
        ],
        "description": "情境核：居中主图，先于射线出现",
        "properties": {
          "imageSrc": {
            "type": "string",
            "format": "image_prompt",
            "description": "情境核配图"
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
            "description": "从该条口播起显示核图；省略为 0"
          }
        }
      },
      "rays": {
        "type": "array",
        "minItems": 2,
        "maxItems": 4,
        "description": "发散支点：横排在核下方；每项 imageSrc、可选 enterEffect、可选 showFrom（content 0-based）",
        "items": {
          "type": "object",
          "required": [
            "imageSrc"
          ],
          "properties": {
            "imageSrc": {
              "type": "string",
              "format": "image_prompt",
              "description": "射线支点配图"
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
            },
            "showFrom": {
              "type": "content_index",
              "minimum": 0,
              "description": "从该条口播起显示本图与到核的连线；省略则与 rays 下标对齐"
            }
          }
        }
      }
    },
    "required": [
      "hub",
      "rays"
    ]
  },
  "example": {
    "template": "HUB_RADIATE",
    "param": {
      "hub": {
        "imageSrc": "面对巨大落差却别过脸去的人群简笔画",
        "enterEffect": "zoomIn",
        "showFrom": 0
      },
      "rays": [
        {
          "imageSrc": "脑边打结线团拨不开迷雾的简笔画",
          "showFrom": 2,
          "enterEffect": "fadeIn"
        },
        {
          "imageSrc": "背对裂缝、脚边倒着工具箱的简笔画",
          "showFrom": 3,
          "enterEffect": "slideLeft"
        }
      ]
    }
  },
  "content_min_items": 3,
  "content_max_items": 6
}
```
