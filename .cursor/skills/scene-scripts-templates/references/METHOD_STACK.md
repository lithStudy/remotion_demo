---
name: scene-scripts-templates-reference__METHOD_STACK
description: "模板 METHOD_STACK 的 templateMeta（param_schema / example / 约束等）"
metadata:
  tags: remotion, scene-scripts, templateMeta, json
---
## METHOD_STACK

```json
{
  "name": "METHOD_STACK",
  "componentExport": "BWMethodStack",
  "description": "适用：单个 item 内是「一个标题式核心 + 解释展开」，例如：一个方法/建议/观点/卖点/亮点/推荐理由，后面紧跟 2～4 句说明。\n差异：多个独立步骤/并列分点用 STEP_LIST 或 PANEL_GRID；多条不同方法/不同卖点不要为了套模板强行合并到同一 item。\n参数：title 为视觉标题，imageSrc 为单张主图，notes 为按讲解顺序出现的解释短语。",
  "psychology": "聚焦解释",
  "image_count": 1,
  "param_schema": {
    "type": "object",
    "properties": {
      "title": {
        "type": "string",
        "description": "该 item 的方法名/提醒标题/观点标题，建议 4~12 个字"
      },
      "imageSrc": {
        "type": "string",
        "format": "image_prompt",
        "description": "单张主图描述，用于承接这个方法或观点"
      },
      "notes": {
        "type": "array",
        "description": "可选；解释短语数组。每项含 text 与 showFrom；showFrom 为 content 下标（0-based，非帧数），须在 0～(content 条数-1) 内",
        "items": {
          "type": "object",
          "required": [
            "text",
            "showFrom"
          ],
          "properties": {
            "text": {
              "type": "string",
              "description": "解释短语"
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
      "imageSrc"
    ]
  },
  "example": {
    "template": "METHOD_STACK",
    "param": {
      "title": "警惕情绪画面",
      "imageSrc": "被耸动新闻画面包围、神情紧张的人物简笔画",
      "notes": [
        {
          "text": "先识别这是情绪刺激",
          "showFrom": 1
        },
        {
          "text": "再追问它是否只是离奇个案",
          "showFrom": 3
        }
      ]
    }
  },
  "content_min_items": 2,
  "content_max_items": 5
}
```
