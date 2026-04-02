---
name: scene-scripts-templates-reference__TIMELINE
description: "模板 TIMELINE 的 templateMeta（param_schema / example / 约束等）"
metadata:
  tags: remotion, scene-scripts, templateMeta, json
---
## TIMELINE

```json
{
  "name": "TIMELINE",
  "componentExport": "BWTimeline",
  "description": "适用：历史演进、时间顺序、前后对比带明确时间轴。\n差异：无时间线的并列要点用 LIST_MULTI_GROUP；操作步骤用 STEP_LIST。\n参数：images 2～3 项，position 常 left/right 以配合轴线。",
  "psychology": "叙事连贯性",
  "image_count": "2-3",
  "param_schema": {
    "type": "object",
    "properties": {
      "images": {
        "type": "array",
        "minItems": 2,
        "maxItems": 3,
        "description": "时间轴图片数组；position 常用 left/right 配合轴线",
        "items": {
          "type": "object",
          "required": [
            "src"
          ],
          "properties": {
            "src": {
              "type": "string",
              "format": "image_prompt",
              "description": "该节点配图提示词"
            },
            "position": {
              "type": "string",
              "enum": [
                "center",
                "left",
                "right",
                "top",
                "bottom"
              ]
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
            "textIndex": {
              "type": "integer",
              "format": "content_index"
            },
            "startFrame": {
              "type": "integer"
            }
          }
        }
      }
    },
    "required": [
      "images"
    ]
  },
  "example": {
    "template": "TIMELINE",
    "param": {
      "images": [
        {
          "src": "1990年代电脑图标",
          "position": "left",
          "enterEffect": "slideLeft"
        },
        {
          "src": "2020年代手机图标",
          "position": "right",
          "enterEffect": "slideLeft"
        }
      ]
    }
  }
}
```
