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
  "description": "适用：任何“引用/摘录/证言/背书”体裁（名言、著作、研究结论、媒体引用、用户评价、客户证言、公告摘录等）。\n提示：版心引用正文的打字底稿默认由 content 拼接；若需与画外/字幕 content 不同的展示文案，请传 quoteDisplayText。\n差异：非引用类普通叙述用 CENTER_FOCUS。\n参数：quoteSource 写清出处（来源/角色/机构）；quoteDisplayText 可选，覆盖版心打字内容。",
  "psychology": "社会认同背书",
  "image_count": 0,
  "param_schema": {
    "type": "object",
    "properties": {
      "quoteSource": {
        "type": "string",
        "description": "引言来源"
      },
      "quoteDisplayText": {
        "type": "string",
        "description": "版心引用正文（打字机效果）；不传则使用 content 拼接结果"
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
