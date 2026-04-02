---
name: scene-scripts-templates-reference__BEAT_SEQUENCE
description: "模板 BEAT_SEQUENCE 的 templateMeta（param_schema / example / 约束等）"
metadata:
  tags: remotion, scene-scripts, templateMeta, json
---
## BEAT_SEQUENCE

```json
{
  "name": "BEAT_SEQUENCE",
  "componentExport": "BWBeatSequence",
  "description": "适用：一问一驳一锤等同一镜头内情绪递进；多图按口播时间线换图，首段 calm、后续默认可 alert。\n差异：单段平缓叙述用 CENTER_FOCUS；单句结论暴击、无需配图时用 TEXT_FOCUS；本模板负责多段串联。\n口播条为镜头 item 外层与 param 同级的 content[]（含 text、startFrame 等）；showFrom 必须按该数组的 0-based 下标对齐，而非 stages 下标。stages 可少于口播条数，此时用 showFrom 指定从第几条口播起显示该图。\n段落间若有空隙，画面保持上一张直至下一条口播切入。\n参数：stages[i].enterEffect / tone / showFrom；省略 showFrom 时默认与 stages 下标 i 同列口播对齐。tone 省略时首条 calm、其余 alert。",
  "psychology": "节拍递进",
  "image_count": "2-4",
  "param_schema": {
    "type": "object",
    "properties": {
      "stages": {
        "type": "array",
        "minItems": 2,
        "maxItems": 4,
        "description": "配图序列：每条 stage 一张图；imageSrc、enterEffect、可选 tone（calm|alert）、可选 showFrom（对齐镜头外层 content[] 下标）",
        "items": {
          "type": "object",
          "required": [
            "imageSrc"
          ],
          "properties": {
            "imageSrc": {
              "type": "string",
              "format": "image_prompt",
              "description": "该节拍配图提示词"
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
              "default": "breathe",
              "description": "入场效果"
            },
            "tone": {
              "type": "string",
              "enum": [
                "calm",
                "alert"
              ],
              "description": "首条可 calm，其余默认可 alert"
            },
            "showFrom": {
              "type": "content_index",
              "minimum": 0,
              "description": "镜头 item 外层 content 数组（与 param 同级）的 0-based 下标；从该条 startFrame 起显示本图。省略则等于当前 stages 下标 i（与第 i 条口播同步）"
            }
          }
        }
      }
    },
    "required": [
      "stages"
    ]
  },
  "example": {
    "template": "BEAT_SEQUENCE",
    "param": {
      "stages": [
        {
          "imageSrc": "问句配图简笔画",
          "enterEffect": "breathe"
        },
        {
          "imageSrc": "转折警示配图",
          "enterEffect": "slideBottom"
        },
        {
          "imageSrc": "结论冲击配图",
          "enterEffect": "slideBottom"
        }
      ]
    }
  },
  "content_min_items": 2,
  "content_max_items": 4
}
```
