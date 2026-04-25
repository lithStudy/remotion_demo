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
  "description": "适用：明确「别这样做 vs 应该这样做」的避坑/规范/注意事项（可用于教程、产品使用、运营话术、设计规范、职场建议等）；左右对错叙事。\n差异：两种中立方案并列、无对错标签用 SPLIT_COMPARE；若是纯数据的双指标对比用 STAT_COMPARE。\n参数：`left` / `right` 各含 `label`、`src`、可选 `showFrom`。`showFrom` 语义：当本 item 的 `content` 带时间信息（startFrame 或 durationFrames）且 `showFrom` 为 **0～(content 条数−1)** 时，表示 **content 下标**，该侧从对应条的 `startFrame` 起做滑入；否则表示 **相对本 item 起点的帧号**。省略时：左侧对齐第 0 条；右侧若至少两条口播则对齐第 1 条，否则在左侧起点后再延迟 10 帧。",
  "psychology": "损失厌恶",
  "image_count": 2,
  "param_schema": {
    "type": "object",
    "properties": {
      "left": {
        "type": "object",
        "properties": {
          "label": {
            "type": "string",
            "description": "该侧标题（左：如 ❌ 别这样；右：如 ✅ 正确做法），极简短语"
          },
          "src": {
            "type": "string",
            "format": "image_prompt",
            "description": "该侧配图（左：错误/误区示意；右：正确做法示意）"
          },
          "showFrom": {
            "type": "integer",
            "description": "有 content 时间轴且值落在 [0, content.length) 时为 content 下标（取该条 startFrame）；否则为相对 item 起点的帧号。省略：左 0；右为第 1 条或左起点+10 帧"
          }
        },
        "required": [
          "label",
          "src"
        ]
      },
      "right": {
        "type": "object",
        "properties": {
          "label": {
            "type": "string",
            "description": "该侧标题（左：如 ❌ 别这样；右：如 ✅ 正确做法），极简短语"
          },
          "src": {
            "type": "string",
            "format": "image_prompt",
            "description": "该侧配图（左：错误/误区示意；右：正确做法示意）"
          },
          "showFrom": {
            "type": "integer",
            "description": "有 content 时间轴且值落在 [0, content.length) 时为 content 下标（取该条 startFrame）；否则为相对 item 起点的帧号。省略：左 0；右为第 1 条或左起点+10 帧"
          }
        },
        "required": [
          "label",
          "src"
        ]
      }
    },
    "required": [
      "left",
      "right"
    ]
  },
  "example": {
    "template": "DOS_AND_DONTS",
    "param": {
      "left": {
        "label": "❌ 别这样",
        "src": "盲目跟风的人简笔画图标",
        "showFrom": 0
      },
      "right": {
        "label": "✅ 正确做法",
        "src": "理性分析图表的人简笔画图标",
        "showFrom": 1
      }
    }
  }
}
```
