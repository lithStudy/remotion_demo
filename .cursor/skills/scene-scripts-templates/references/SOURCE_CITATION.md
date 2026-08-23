---
name: scene-scripts-templates-reference__SOURCE_CITATION
description: "模板 SOURCE_CITATION 的 templateMeta（param_schema / example / 约束等）"
metadata:
  tags: remotion, scene-scripts, templateMeta, json
---
## SOURCE_CITATION

```json
{
  "name": "SOURCE_CITATION",
  "componentExport": "BWSourceCitation",
  "description": "适用：片尾独立 scene，展示支撑全文论点的证据来源列表（类似论文 References），纯视觉无口播。\n差异：正片引述原话/证言用 QUOTE_CITATION；本模板为文献脚注列表，非引号大字。\n位置：建议作为最后一个 scene（scene_references），无 audioSrc，content 为空。\n时长：按 references 条数自动计算，公式 30 + n×15 + 60 帧（@30fps）；超过可视条数时列表向上滚动。\n参数：sectionTitle 可选（默认「参考资料」）；references 必填 1～12 条，每项 title 必填（原文标题，便于检索），titleZh/publisherZh 可选（中文主显示），publisher/year 可选。",
  "chinese_name": "参考资料",
  "image_count": 0,
  "content_optional": true,
  "duration_formula": "30 + references.length * 15 + 60",
  "param_schema": {
    "type": "object",
    "properties": {
      "sectionTitle": {
        "type": "string",
        "description": "列表主标题，默认「参考资料」"
      },
      "references": {
        "type": "array",
        "minItems": 1,
        "maxItems": 12,
        "description": "参考文献条目；title 必填（原文），titleZh/publisherZh 可选（中文主显示）",
        "items": {
          "type": "object",
          "required": [
            "title"
          ],
          "properties": {
            "title": {
              "type": "string",
              "description": "文献原文标题（便于读者检索）"
            },
            "titleZh": {
              "type": "string",
              "description": "中文译名（可选，有则作为主标题显示）"
            },
            "publisher": {
              "type": "string",
              "description": "出版方/机构/作者原文（可选）"
            },
            "publisherZh": {
              "type": "string",
              "description": "出版方中文译名（可选，有则作为主显示）"
            },
            "year": {
              "type": "string",
              "description": "发布年份（可选）"
            }
          }
        }
      }
    },
    "required": [
      "references"
    ]
  },
  "example": {
    "template": "SOURCE_CITATION",
    "param": {
      "sectionTitle": "参考资料",
      "references": [
        {
          "title": "2021中国民营企业500强调研分析报告",
          "publisher": "全国工商联",
          "year": "2021"
        },
        {
          "title": "华为投资控股有限公司2020年年度报告",
          "publisher": "华为技术有限公司",
          "year": "2020"
        }
      ]
    }
  }
}
```
