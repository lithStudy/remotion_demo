---
name: scene-scripts-templates-reference__COGNITIVE_SHIFT
description: "模板 COGNITIVE_SHIFT 的 templateMeta（param_schema / example / 约束等）"
metadata:
  tags: remotion, scene-scripts, templateMeta, json
---
## COGNITIVE_SHIFT

```json
{
  "name": "COGNITIVE_SHIFT",
  "componentExport": "BWCognitiveShift",
  "description": "适用：强对立翻转「不是...而是...」；用于纠偏、立场重述、定位差异化、观点辩论等场景的核心对句。\n视觉：A 部分（旧说法/常见误解）淡入后变灰并划线；B 部分（新结论/主张）随后高亮弹出。\n参数：notText（被否定的部分）、butText（建立的部分）必须是极简的对比关键词（如：堆功能 vs 抓体验），严禁使用完整长句；可选 butSrc（仅「而是」侧配图）。",
  "psychology": "认知翻转",
  "image_count": "0-1",
  "param_schema": {
    "type": "object",
    "properties": {
      "notText": {
        "type": "string",
        "description": "被否认知（‘不是’后面的内容）的精炼短句，不超过12个字，"
      },
      "butText": {
        "type": "string",
        "description": "真实认知（‘而是’后面的内容）的精炼短句，不超过12个字"
      },
      "butSrc": {
        "type": "string",
        "format": "image_prompt",
        "description": "真实认知的配图"
      },
      "notContentIndex": {
        "type": "integer",
        "format": "content_index",
        "description": "触发「不是」动画的字幕段索引（默认 0）"
      },
      "butContentIndex": {
        "type": "integer",
        "format": "content_index",
        "description": "触发「而是」动画的字幕段索引（默认 1）"
      }
    },
    "required": [
      "notText",
      "butText"
    ]
  },
  "example": {
    "template": "COGNITIVE_SHIFT",
    "content": [
      "我们都不应该靠勤奋拼命",
      "我们都应该是靠认知和选择",
      "这样我才能成功"
    ],
    "param": {
      "notText": "靠勤奋拼命",
      "butText": "靠认知和选择",
      "butSrc": "站在高处看地图的思考者",
      "notContentIndex": 0,
      "butContentIndex": 1
    }
  }
}
```
