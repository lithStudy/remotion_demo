---
name: scene-scripts-templates-reference__PUNCH_CAPTION
description: "模板 PUNCH_CAPTION 的 templateMeta（param_schema / example / 约束等）"
metadata:
  tags: remotion, scene-scripts, templateMeta, json
---
## PUNCH_CAPTION

```json
{
  "name": "PUNCH_CAPTION",
  "componentExport": "BWPunchCaption",
  "description": "适用：2~6 条短促反问/反驳/情绪连击；居中纯黑大字逐句弹入，保留底部小字幕。\n差异：单句金句暴击用 TEXT_FOCUS；多图节拍递进用 BEAT_SEQUENCE；本模板 0 图、一句一帧一冲击。\n参数：punches 必填，每项 text（大屏文案）+ showFrom（content 下标）必填；可选 enterEffect（snap|popIn|slideUp|shake）、tone（calm|alert）。省略 tone 时首条 calm、其余 alert。",
  "psychology": "连击质问",
  "image_count": 0,
  "param_schema": {
    "type": "object",
    "properties": {
      "punches": {
        "type": "array",
        "minItems": 2,
        "maxItems": 6,
        "description": "暴击大字序列；每项 text 为居中主文案，showFrom 为 content 下标（0-based）；enterEffect、tone 可选",
        "items": {
          "type": "object",
          "required": [
            "text",
            "showFrom"
          ],
          "properties": {
            "text": {
              "type": "string",
              "description": "居中暴击大字；可与 content 口播措辞不同，宜更短"
            },
            "showFrom": {
              "type": "content_index",
              "minimum": 0,
              "description": "镜头 item 外层 content 数组（与 param 同级）的 0-based 下标；从该条 startFrame 起显示本句"
            },
            "enterEffect": {
              "type": "string",
              "enum": [
                "snap",
                "popIn",
                "slideUp",
                "shake"
              ],
              "default": "snap",
              "description": "入场效果"
            },
            "tone": {
              "type": "string",
              "enum": [
                "calm",
                "alert"
              ],
              "description": "首条可 calm，其余默认可 alert"
            }
          }
        }
      }
    },
    "required": [
      "punches"
    ]
  },
  "example": {
    "template": "PUNCH_CAPTION",
    "param": {
      "punches": [
        {
          "text": "什么？",
          "showFrom": 0,
          "enterEffect": "popIn",
          "tone": "calm"
        },
        {
          "text": "你说我瞎说？",
          "showFrom": 1,
          "enterEffect": "snap",
          "tone": "alert"
        },
        {
          "text": "不信科技力量？",
          "showFrom": 2,
          "enterEffect": "shake",
          "tone": "alert"
        }
      ]
    }
  },
  "content_min_items": 2,
  "content_max_items": 6
}
```
