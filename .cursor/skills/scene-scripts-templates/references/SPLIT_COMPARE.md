---
name: scene-scripts-templates-reference__SPLIT_COMPARE
description: "模板 SPLIT_COMPARE 的 templateMeta（param_schema / example / 约束等）"
metadata:
  tags: remotion, scene-scripts, templateMeta, json
---
## SPLIT_COMPARE

```json
{
  "name": "SPLIT_COMPARE",
  "componentExport": "BWSplitCompare",
  "description": "适用：两种方案、两条路径、两方行为对照；口播里常见「你/我…他/对方…」对仗或分号（；）两侧对立叙述。\n差异：明确错/对避坑用 DOS_AND_DONTS；纯数据双指标对比用 STAT_COMPARE；多要素平铺列举用 PANEL_GRID。\n参数：leftLabel/rightLabel 为 2～6 字短语，与左右图语义一致；可选 leftShowFrom/rightShowFrom 为 content 下标（0-based），入场帧取对应条的 startFrame；任一侧省略或索引无效则该侧从 0 帧起。",
  "psychology": "认知失调",
  "image_count": 2,
  "param_schema": {
    "type": "object",
    "properties": {
      "leftSrc": {
        "type": "string",
        "format": "image_prompt",
        "description": "左侧图片描述"
      },
      "rightSrc": {
        "type": "string",
        "format": "image_prompt",
        "description": "右侧图片描述"
      },
      "leftLabel": {
        "type": "string",
        "description": "左侧标签（2～6 字为宜）"
      },
      "rightLabel": {
        "type": "string",
        "description": "右侧标签（2～6 字为宜）"
      },
      "leftShowFrom": {
        "type": "integer",
        "format": "content_index",
        "description": "左侧图与标签出现的时刻：取 content 数组下标（0-based），入场帧为该条的 startFrame；省略或越界则从 0 帧起"
      },
      "rightShowFrom": {
        "type": "integer",
        "format": "content_index",
        "description": "右侧图与标签出现的时刻：取 content 数组下标（0-based），入场帧为该条的 startFrame；省略或越界则从 0 帧起"
      }
    },
    "required": [
      "leftSrc",
      "rightSrc",
      "leftLabel",
      "rightLabel"
    ]
  },
  "example": {
    "template": "SPLIT_COMPARE",
    "param": {
      "leftSrc": "传统低效工作图标",
      "rightSrc": "高效数字工具图标",
      "leftLabel": "旧方法",
      "rightLabel": "新方法"
    }
  }
}
```
