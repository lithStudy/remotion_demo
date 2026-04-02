---
name: scene-scripts-templates-reference__QUOTE_CITATION
description: "模板 QUOTE_CITATION 的 templateMeta（param_schema / example / 约束等）"
metadata:
  tags: remotion, scene-scripts, templateMeta, json
---
## QUOTE_CITATION

```json
{
  "name": "QUOTE_CITATION",
  "componentExport": "BWQuoteCitation",
  "description": "适用：任何“引用/摘录/证言/背书”体裁（名言、著作、研究结论、媒体引用、用户评价、客户证言、公告摘录等）。\n提示：引文主体来自 content；本模板版心强调“引用正文 + 出处”，并带逐字打字机效果。\n差异：非引用类普通叙述用 CENTER_FOCUS。\n参数：quoteSource 写清出处（来源/角色/机构）。",
  "psychology": "社会认同背书",
  "image_count": 0,
  "param_schema": {
    "type": "object",
    "properties": {
      "quoteSource": {
        "type": "string",
        "description": "引言来源"
      }
    },
    "required": [
      "quoteSource"
    ]
  },
  "example": {
    "template": "QUOTE_CITATION",
    "param": {
      "quoteSource": "《思考，快与慢》"
    }
  }
}
```
