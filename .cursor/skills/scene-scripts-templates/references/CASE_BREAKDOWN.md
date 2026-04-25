---
name: scene-scripts-templates-reference__CASE_BREAKDOWN
description: "模板 CASE_BREAKDOWN 的 templateMeta（param_schema / example / 约束等）"
metadata:
  tags: remotion, scene-scripts, templateMeta, json
---
## CASE_BREAKDOWN

```json
{
  "name": "CASE_BREAKDOWN",
  "componentExport": "BWCaseBreakdown",
  "description": "适用：同一镜头内讲透一个小案例/子话题，口播 4～8 句呈「个案现象→推论/误判→纠偏→收束」叙事弧；单张主图贯穿，右侧 2～4 个 phaseLabel 通过 showFrom 对齐到任意 content 下标（不必连续）。\n布局：固定左侧主图、右侧自上而下的竖向阶段列表（不随横竖屏切换版式）。\n差异：单标题+方法要点堆叠仍用 METHOD_STACK；多图随节拍换、强情绪递进用 BEAT_SEQUENCE；每环一图的机制传导用 CAUSE_CHAIN。\n参数：title 为案例短标题；imageSrc 为单主图；phases 为 2～4 项，每项 phaseLabel（宜短）与 showFrom（content 下标 0-based，非帧号）。",
  "psychology": "案例叙事",
  "image_count": 1,
  "param_schema": {
    "type": "object",
    "properties": {
      "title": {
        "type": "string",
        "description": "案例短标题，建议 4～12 字"
      },
      "imageSrc": {
        "type": "string",
        "format": "image_prompt",
        "description": "单张主图描述，贯穿本案例讲解"
      },
      "phases": {
        "type": "array",
        "minItems": 2,
        "maxItems": 4,
        "description": "叙事阶段；每项含 phaseLabel 与 showFrom；showFrom 为 content 下标（0-based，非帧数），须在 0～(content 条数-1) 内",
        "items": {
          "type": "object",
          "required": [
            "phaseLabel",
            "showFrom"
          ],
          "properties": {
            "phaseLabel": {
              "type": "string",
              "description": "阶段名，如表面个案、误判、真相、收束"
            },
            "showFrom": {
              "type": "integer",
              "format": "content_index",
              "description": "content 数组下标（0-based），非帧数；合法范围 0～(content 条数-1)，超出会被校验丢弃"
            }
          }
        }
      }
    },
    "required": [
      "title",
      "imageSrc",
      "phases"
    ]
  },
  "example": {
    "template": "CASE_BREAKDOWN",
    "param": {
      "title": "长寿悖论",
      "imageSrc": "一位面带微笑的百岁老人正在抽烟，旁边放着一杯酒",
      "phases": [
        {
          "phaseLabel": "表面个案",
          "showFrom": 0
        },
        {
          "phaseLabel": "常见推论",
          "showFrom": 1
        },
        {
          "phaseLabel": "真相",
          "showFrom": 2
        },
        {
          "phaseLabel": "收束",
          "showFrom": 3
        }
      ]
    }
  },
  "content_min_items": 4,
  "content_max_items": 8
}
```
