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
  "description": "适用：历史演进、时间顺序、前后对比带明确时间轴。\n差异：无时间线的并列要点用 PANEL_GRID；操作步骤用 STEP_LIST。\n参数：images 3～5 项，按数组顺序从左到右沿轴线均分。",
  "psychology": "叙事连贯性",
  "image_count": "3-5",
  "param_schema": {
    "type": "object",
    "properties": {
      "images": {
        "type": "array",
        "minItems": 3,
        "maxItems": 5,
        "description": "时间轴节点配图（3～5 项）；顺序即时间先后，横向从左到右均分",
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
          "enterEffect": "slideLeft"
        },
        {
          "src": "2010年代笔记本图标",
          "enterEffect": "fadeIn"
        },
        {
          "src": "2020年代手机图标",
          "enterEffect": "slideLeft"
        }
      ]
    }
  }
}
```
