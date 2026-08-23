---
name: scene-scripts-templates-reference__QA_REVEAL
description: "模板 QA_REVEAL 的 templateMeta（param_schema / example / 约束等）"
metadata:
  tags: remotion, scene-scripts, templateMeta, json
---
## QA_REVEAL

```json
{
  "name": "QA_REVEAL",
  "componentExport": "BWQaReveal",
  "description": "适用：针对本课/本主题的一个疑点，讲师正式解答；口播结构为「一句问 + 多句答」。问区顶栏常驻（内置问号图标），答区从 content[1] 起逐条累积显现并保留；首条答句左侧带「答」标记。\n不适用：模拟网友/他人对话（如「有人说…」「网友：…」）→ CHAT_BUBBLE；一问一驳一锤情绪递进且需多图换场 → BEAT_SEQUENCE；纠偏型「不是…而是…」对句 → COGNITIVE_SHIFT；纯概念命名无问句 → CONCEPT_CARD；可执行步骤清单 → STEP_LIST；收束行动清单打勾 → CHECKLIST_REVEAL；单句平铺无 Q&A 结构 → CENTER_FOCUS。\n参数：param 零必填；content[0] 为问句，content[1..] 为答句；可选 highlights 在对应 content 行内联标色（text 须为该行子串，showFrom 为 content 下标，color 省略时默认红色）。",
  "chinese_name": "问答揭示",
  "image_count": "0",
  "content_min_items": 2,
  "content_max_items": 6,
  "param_schema": {
    "type": "object",
    "properties": {
      "highlights": {
        "type": "array",
        "description": "可选；在对应 content 行正文内联标色。showFrom 为 content 下标（0-based），text 须为该条 content.text 的子串；color 省略时默认 #E53E3E。",
        "items": {
          "type": "object",
          "required": [
            "text",
            "showFrom"
          ],
          "properties": {
            "text": {
              "type": "string",
              "description": "要高亮的子串，须出现在 content[showFrom].text 内"
            },
            "showFrom": {
              "type": "integer",
              "format": "content_index",
              "description": "content 下标（0-based），非帧数"
            },
            "color": {
              "type": "string",
              "description": "高亮颜色，省略时默认红色 #E53E3E"
            }
          }
        }
      }
    },
    "required": []
  },
  "example": {
    "template": "QA_REVEAL",
    "param": {
      "highlights": [
        {
          "text": "不是",
          "showFrom": 1
        },
        {
          "text": "源码可获取",
          "showFrom": 2
        },
        {
          "text": "仍可能收费",
          "showFrom": 3
        }
      ]
    },
    "content": [
      {
        "text": "开源就等于免费吗？"
      },
      {
        "text": "不是。"
      },
      {
        "text": "开源指的是源码可获取、可修改。"
      },
      {
        "text": "商业支持和服务仍可能收费。"
      }
    ]
  }
}
```
