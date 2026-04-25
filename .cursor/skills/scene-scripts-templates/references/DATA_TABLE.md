---
name: scene-scripts-templates-reference__DATA_TABLE
description: "模板 DATA_TABLE 的 templateMeta（param_schema / example / 约束等）"
metadata:
  tags: remotion, scene-scripts, templateMeta, json
---
## DATA_TABLE

```json
{
  "name": "DATA_TABLE",
  "componentExport": "BWDataTable",
  "description": "适用：规格对照、多维度参数、版本差异、价目/档位并列等需要「行列结构」一目了然的段落。\n差异：纯两项整数对比用 STAT_COMPARE；无表格结构的要点清单用 CHECKLIST_REVEAL 或 STEP_LIST。\n参数：columns 为表头（2～5 列短文案）；rows 每项 cells 长度应与列数一致（不足补空、超出截断），showFrom 为 content 下标，从该条 startFrame 起该行入场。",
  "psychology": "结构化对比与可信度",
  "image_count": "0",
  "content_min_items": 2,
  "content_max_items": 12,
  "param_schema": {
    "type": "object",
    "properties": {
      "title": {
        "type": "string",
        "description": "可选；表上方标题，建议 4～18 字"
      },
      "columns": {
        "type": "array",
        "minItems": 2,
        "maxItems": 5,
        "description": "表头文案，从左到右",
        "items": {
          "type": "string",
          "description": "列标题，建议 2～8 字"
        }
      },
      "rows": {
        "type": "array",
        "minItems": 2,
        "maxItems": 8,
        "description": "数据行；cells 为单元格文案（顺序与 columns 一致）；showFrom 为 content 下标（0-based）",
        "items": {
          "type": "object",
          "required": [
            "cells",
            "showFrom"
          ],
          "properties": {
            "cells": {
              "type": "array",
              "minItems": 1,
              "maxItems": 5,
              "items": {
                "type": "string",
                "description": "单元格短文案"
              }
            },
            "showFrom": {
              "type": "integer",
              "format": "content_index",
              "description": "该行出现时机：content 数组下标，取该条 startFrame"
            }
          }
        }
      }
    },
    "required": [
      "columns",
      "rows"
    ]
  },
  "example": {
    "template": "DATA_TABLE",
    "param": {
      "title": "三档对比",
      "columns": [
        "档位",
        "续航",
        "价格"
      ],
      "rows": [
        {
          "cells": [
            "标准",
            "一天",
            "1999"
          ],
          "showFrom": 0
        },
        {
          "cells": [
            "Pro",
            "一天半",
            "2699"
          ],
          "showFrom": 1
        },
        {
          "cells": [
            "Ultra",
            "两天",
            "3999"
          ],
          "showFrom": 2
        }
      ]
    }
  }
}
```
