---
name: scene-scripts-templates-reference__CONCEPT_CARD
description: "模板 CONCEPT_CARD 的 templateMeta（param_schema / example / 约束等）"
metadata:
  tags: remotion, scene-scripts, templateMeta, json
---
## CONCEPT_CARD

```json
{
  "name": "CONCEPT_CARD",
  "componentExport": "BWConceptCard",
  "description": "适用：对“专业术语、概念、产品名、品牌关键词、功能名等”新名词进行解释；用图标 + 大字把词钉在观众脑海里。\n差异：普通解释句、并不需要“闪卡式命名强调”时用 CENTER_FOCUS。\n参数：conceptName 与口播中的名词一致；imageSrc 为概念/名词的隐喻图标。",
  "psychology": "符号化锚定",
  "image_count": 1,
  "param_schema": {
    "type": "object",
    "properties": {
      "imageSrc": {
        "type": "string",
        "format": "image_prompt",
        "description": "概念图标描述"
      },
      "conceptName": {
        "type": "string",
        "description": "概念名称"
      }
    },
    "required": [
      "imageSrc",
      "conceptName"
    ]
  },
  "example": {
    "template": "CONCEPT_CARD",
    "param": {
      "imageSrc": "过滤器/筛网简笔画图标",
      "conceptName": "幸存者偏差"
    }
  }
}
```
