---
name: scene-scripts-templates-reference__TREE_DIAGRAM
description: "模板 TREE_DIAGRAM 的 templateMeta（param_schema / example / 约束等）"
metadata:
  tags: remotion, scene-scripts, templateMeta, json
---
## TREE_DIAGRAM

```json
{
  "name": "TREE_DIAGRAM",
  "componentExport": "BWTreeDiagram",
  "description": "适用：层次关系、分类体系、分叉决策树、组织结构等需要展示树状结构的场景。\n差异：线性链条用 CAUSE_CHAIN；并列清单用 PANEL_GRID；时间轴用 TIMELINE；因果传导用 CAUSE_CHAIN。\n参数：root 为根节点，含 label 和可选 children（1～4 个子节点），子节点可递归包含 children（建议 ≤ 3 层）。showFrom 为 content 数组下标（0-based），控制各节点随口播逐层展开。",
  "psychology": "层次可视化",
  "image_count": 0,
  "content_min_items": 2,
  "content_max_items": 8,
  "param_schema": {
    "type": "object",
    "properties": {
      "root": {
        "type": "object",
        "required": ["label"],
        "description": "根节点",
        "properties": {
          "label": { "type": "string", "description": "节点文本，建议 2～12 字" },
          "showFrom": {
            "type": "integer",
            "format": "content_index",
            "description": "content 数组下标（0-based），控制该节点出现时机"
          },
          "children": {
            "type": "array",
            "minItems": 1,
            "maxItems": 4,
            "description": "子节点列表",
            "items": { "$ref": "#/$defs/treeNode" }
          }
        }
      }
    },
    "required": ["root"],
    "$defs": {
      "treeNode": {
        "type": "object",
        "required": ["label"],
        "properties": {
          "label": { "type": "string", "description": "节点文本" },
          "showFrom": {
            "type": "integer",
            "format": "content_index",
            "description": "content 数组下标（0-based）"
          },
          "children": {
            "type": "array",
            "minItems": 1,
            "maxItems": 4,
            "items": { "$ref": "#/$defs/treeNode" }
          }
        }
      }
    }
  },
  "example": {
    "template": "TREE_DIAGRAM",
    "param": {
      "root": {
        "label": "西方抵制华为",
        "showFrom": 0,
        "children": [
          {
            "label": "被制裁",
            "showFrom": 1,
            "children": [
              { "label": "惩罚性制裁", "showFrom": 2 },
              { "label": "制约性制裁", "showFrom": 3 }
            ]
          },
          {
            "label": "被去华为化",
            "showFrom": 4,
            "children": [
              { "label": "技术原因", "showFrom": 5 },
              { "label": "法理原因", "showFrom": 6 }
            ]
          }
        ]
      }
    }
  }
}
```
