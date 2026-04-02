---
name: scene-scripts-templates-reference__DOS_AND_DONTS
description: "模板 DOS_AND_DONTS 的 templateMeta（param_schema / example / 约束等）"
metadata:
  tags: remotion, scene-scripts, templateMeta, json
---
## DOS_AND_DONTS

```json
{
  "name": "DOS_AND_DONTS",
  "componentExport": "BWDosAndDonts",
  "description": "适用：明确「别这样做 vs 应该这样做」的避坑/规范/注意事项（可用于教程、产品使用、运营话术、设计规范、职场建议等）；左右对错叙事。\n差异：两种中立方案并列、无对错标签用 SPLIT_COMPARE；若是纯数据的双指标对比用 STAT_COMPARE。\n参数：dontLabel/doLabel 是极简的对错标签（如：❌ 别这样 vs ✅ 正确做法），严禁使用长句说明；与 leftSrc/rightSrc 语义一致。",
  "psychology": "损失厌恶",
  "image_count": 2,
  "param_schema": {
    "type": "object",
    "properties": {
      "leftSrc": {
        "type": "string",
        "format": "image_prompt",
        "description": "错误做法图片描述"
      },
      "rightSrc": {
        "type": "string",
        "format": "image_prompt",
        "description": "正确做法图片描述"
      },
      "dontLabel": {
        "type": "string",
        "description": "错误标签（如 ❌ 别这样）"
      },
      "doLabel": {
        "type": "string",
        "description": "正确标签（如 ✅ 正确做法）"
      }
    },
    "required": [
      "leftSrc",
      "rightSrc",
      "dontLabel",
      "doLabel"
    ]
  },
  "example": {
    "template": "DOS_AND_DONTS",
    "param": {
      "leftSrc": "盲目跟风的人简笔画图标",
      "rightSrc": "理性分析图表的人简笔画图标",
      "dontLabel": "❌ 别这样",
      "doLabel": "✅ 正确做法"
    }
  }
}
```
