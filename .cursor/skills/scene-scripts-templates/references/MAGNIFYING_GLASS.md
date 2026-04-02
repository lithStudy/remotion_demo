---
name: scene-scripts-templates-reference__MAGNIFYING_GLASS
description: "模板 MAGNIFYING_GLASS 的 templateMeta（param_schema / example / 约束等）"
metadata:
  tags: remotion, scene-scripts, templateMeta, json
---
## MAGNIFYING_GLASS

```json
{
  "name": "MAGNIFYING_GLASS",
  "componentExport": "BWMagnifyingGlass",
  "description": "适用：需要把观众注意力“锁定到一个关键词/短语/关键细节/核心发现”上（可用于揭秘、关键洞察、核心卖点、重要结论的聚焦强调），且口播中存在明确的落点句（如“关键在于…”“核心是…”“结论是…”）。\n差异：本模板要求 param.anchors 非空，且通过 showFrom 关联 content；没有清晰落点/锚点就不要用；不要用它打包多个机制+多个例子+多个结论。\n参数：anchors.text 对准要聚焦的关键词（建议 1～2 个高价值锚点）。",
  "psychology": "好奇心缺口",
  "image_count": 0,
  "param_schema": {
    "type": "object",
    "properties": {
      "anchors": {
        "type": "array",
        "minItems": 1,
        "maxItems": 3,
        "description": "必填且非空（建议 1～2 个高价值锚点）；每项通过 showFrom 对齐 content 分句。锚点应落在“揭示性落点句”或其核心关键词上，不要把整段说明塞满锚点",
        "items": {
          "type": "object",
          "required": [
            "text",
            "showFrom"
          ],
          "properties": {
            "text": {
              "type": "string",
              "description": "要聚焦的关键词/短语"
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
      "anchors"
    ]
  },
  "content_anchor_required": true,
  "example": {
    "template": "MAGNIFYING_GLASS",
    "param": {
      "anchors": [
        {
          "text": "忽略了基础",
          "showFrom": 0,
          "color": "#111111",
          "anim": "popIn",
          "audioEffect": "ping"
        }
      ]
    }
  }
}
```
