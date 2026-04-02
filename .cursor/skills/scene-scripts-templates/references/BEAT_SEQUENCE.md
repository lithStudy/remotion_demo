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
  "description": "适用：一问一驳一锤等同一镜头内情绪递进；多图按口播条切换，首段 calm、后续默认可 alert。\n差异：单段平缓叙述用 CENTER_FOCUS；单句结论暴击、无需配图时用 TEXT_FOCUS；本模板负责多段串联。\n慎用：stages 与 content 条数需一致；段落间若有空隙，画面保持上一张直至下一段切入（交叉淡化）。\n参数：stages[i].enterEffect / tone / showFrom（content 0-based，省略则同 i）；tone 省略时首条 calm、其余 alert。",
  "psychology": "节拍递进",
  "image_count": "2-4",
  "param_schema": {
    "type": "object",
    "properties": {
      "stages": {
        "type": "array",
        "minItems": 2,
        "maxItems": 4,
        "description": "与 content 逐条对应：每节拍一条；imageSrc、enterEffect、可选 tone（calm|alert）、可选 showFrom",
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
              "description": "从 content 第几条（0-based）起显示该图；省略则与当前 stages 下标一致"
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
