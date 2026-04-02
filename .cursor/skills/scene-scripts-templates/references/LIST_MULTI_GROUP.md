---
name: scene-scripts-templates-reference__LIST_MULTI_GROUP
description: "模板 LIST_MULTI_GROUP 的 templateMeta（param_schema / example / 约束等）"
metadata:
  tags: remotion, scene-scripts, templateMeta, json
---
## LIST_MULTI_GROUP

```json
{
  "name": "LIST_MULTI_GROUP",
  "componentExport": "BWMultiImage",
  "description": "适用：当前 item 原文本身就明确包含 2～5 个并列分点/并列例子时使用，图文同时呈现。\n差异：有时间先后/演进线用 TIMELINE；有序可执行步骤（第一步…）用 STEP_LIST；若只是总起句/引导句（如“给你两个方法：”）而具体分点已拆到后续 item，禁止用本模板。\n参数：仅使用 groups；组数=叙事并列主体数（非 content 行数）。每组 textIndex 为该主体在 content 中的起始下标；同一体内多行 content 共用同一 textIndex；各组须分段覆盖至最后一条 content。\n动画：首组图文居中并放大入场；每新增一组时，已出现组与新组一起平滑重排为纵向均分布局，图片与文字同步动态缩放、并保持同轴左图右文展示。",
  "psychology": "多巴胺刺激",
  "image_count": "2-5",
  "param_schema": {
    "type": "object",
    "properties": {
      "groups": {
        "type": "array",
        "minItems": 2,
        "maxItems": 5,
        "description": "唯一合法结构：每项含 textIndex、image、可选 anchor；组数 2～5，须与口播并列分点/并列例子一致（分点或例子的概括）。textIndex 为该并列主体在 content 中的起始下标（0-based，非帧数），合法范围 0～(content 条数-1)；同一体内多行共用起始 textIndex；各组 textIndex 升序须分段覆盖至最后一条 content。勿使用顶层 anchors。image.src 为配图提示词；无高价值短语则省略 anchor",
        "items": {
          "type": "object",
          "required": [
            "textIndex",
            "image"
          ],
          "properties": {
            "textIndex": {
              "type": "integer",
              "format": "content_index",
              "description": "该组绑定的 content 下标（0-based），非帧数；须在 0～(content 条数-1) 内"
            },
            "image": {
              "type": "object",
              "required": [
                "src"
              ],
              "properties": {
                "src": {
                  "type": "string",
                  "format": "image_prompt",
                  "description": "该组配图提示词"
                },
                "position": {
                  "type": "string",
                  "enum": [
                    "center",
                    "left",
                    "right",
                    "top",
                    "bottom"
                  ],
                  "description": "可选，布局已弱化该字段"
                },
                "enterEffect": {
                  "type": "string",
                  "enum": [
                    "breathe",
                    "slideLeft",
                    "slideBottom",
                    "zoomIn",
                    "fadeIn"
                  ],
                  "default": "breathe"
                }
              }
            },
            "anchor": {
              "type": "object",
              "required": [
                "text"
              ],
              "properties": {
                "text": {
                  "type": "string",
                  "description": "该组高价值短语"
                },
                "color": {
                  "type": "string"
                },
                "anim": {
                  "type": "string",
                  "enum": [
                    "spring",
                    "slideUp",
                    "popIn",
                    "highlight"
                  ]
                },
                "audioEffect": {
                  "type": "string",
                  "enum": [
                    "impact_thud",
                    "ping",
                    "woosh"
                  ]
                }
              }
            }
          }
        }
      }
    },
    "required": [
      "groups"
    ]
  },
  "example": {
    "template": "LIST_MULTI_GROUP",
    "content": [
      "成功是有前提的",
      "成功的核心是自律",
      "成功的核心是资源",
      "只有两者搭配才能获得成功"
    ],
    "param": {
      "groups": [
        {
          "textIndex": 1,
          "image": {
            "src": "齿轮简笔画图标"
          },
          "anchor": {
            "text": "核心是自律",
            "audioEffect": "ping"
          }
        },
        {
          "textIndex": 2,
          "image": {
            "src": "钞票简笔画图标"
          },
          "anchor": {
            "text": "核心是资源",
            "audioEffect": "impact_thud"
          }
        }
      ]
    }
  }
}
```
