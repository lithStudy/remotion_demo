---
name: scene-scripts-templates
description: "scene-scripts.json 模板参考：从各 TSX 的 templateMeta 汇总，含 param_schema、description、example、content 条数约束等。"
metadata:
  tags: remotion, scene-scripts, templateMeta, json
---
## 何时使用

在编辑或生成 `scene-scripts.json`（及同类场景脚本）时，用于核对：`template` 是否合法、`param` 是否符合该模板的 `param_schema`、`content` 条数是否满足模板的 `content_min_items` / `content_max_items`、图片类字段的语义等。

## scene-scripts 结构要点

- 顶层常见字段：`topic`、`fps`、`scenes`。
- `fps` 常与工程一致（当前配置为 **30**）。
- 每个 `scene` 含 `sceneId`、`items`。
- 每个 `item` 至少含：`order`、`template`、`param`、`content`。
- `content` 为数组；元素多为 `{"text": "..."}`。口播以 `content[].text` 为准。
- 未知或非法 `template` 时，管线可能回退到默认模板（当前配置为 **`CENTER_FOCUS`**）。
- `param` 内不应长期存放 `content` 或 `totalDurationFrames`（校验会剔除）；时长与分句权威在 `item` 上。
- **TEXT_FOCUS** 使用 `param.coreSentence` 与 `param.coreSentenceAnchors`（非普通 `anchors`）；锚点短语须为 `coreSentence` 的子串。
- 带 `anchors` 的模板：`showFrom` 为 **content 数组的 0-based 下标**，不是时间轴帧号。

## 图片类字段

- 工程 `config.json` 中的 `image_style`（供 image_prompt 类字段参考）：

  Minimalist black and white vector illustration, flat design, symbolic icon style, bold high-contrast lines, isolated on white background

## 修改范围
当用户目的是修改`scene-scripts.json`时，只操作这一个被指定的文件，不要额外修改scene等文件

## 可用模板名（共 17 个）

`template` 必须且仅能取下列之一（与 `src/components/templates/*.tsx` 中 `templateMeta.name` 一致）：

BEAT_SEQUENCE, CENTER_FOCUS, CHAT_BUBBLE, COGNITIVE_SHIFT, CONCEPT_CARD, DOS_AND_DONTS, KPI_HERO, LIST_MULTI_GROUP, MAGNIFYING_GLASS, METHOD_STACK, PROGRESS_RING, QUOTE_CITATION, SPLIT_COMPARE, STAT_COMPARE, STEP_LIST, TEXT_FOCUS, TIMELINE

## 各模板 templateMeta 全文

下列 JSON 由构建时注册表导出；修改 TSX 后请重新运行 `export_template_meta_skill.py` 更新本 Skill。

### BEAT_SEQUENCE
```json
{
  "name": "BEAT_SEQUENCE",
  "componentExport": "BWBeatSequence",
  "description": "适用：一问一驳一锤等同一镜头内情绪递进；多图按口播条切换，首段 calm、后续默认可 alert。\n差异：单段平缓叙述用 CENTER_FOCUS；单句结论暴击、无需配图时用 TEXT_FOCUS；本模板负责多段串联。\n慎用：stages 与 content 条数需一致；段落间若有空隙，画面保持上一张直至下一段切入（交叉淡化）。\n参数：stages[i].enterEffect / tone；tone 省略时首条 calm、其余 alert。",
  "psychology": "节拍递进",
  "image_count": "2-4",
  "param_schema": {
    "type": "object",
    "properties": {
      "stages": {
        "type": "array",
        "minItems": 2,
        "maxItems": 4,
        "description": "与 content 逐条对应：每节拍一条；imageSrc、enterEffect、可选 tone（calm|alert）",
        "items": {
          "type": "object",
          "required": [
            "imageSrc"
          ],
          "properties": {
            "imageSrc": {
              "type": "string",
              "format": "image_prompt",
              "description": "该节拍配图提示词"
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
              "default": "breathe",
              "description": "入场效果"
            },
            "tone": {
              "type": "string",
              "enum": [
                "calm",
                "alert"
              ],
              "description": "首条可 calm，其余默认可 alert"
            }
          }
        }
      }
    },
    "required": [
      "stages"
    ]
  },
  "example": {
    "template": "BEAT_SEQUENCE",
    "param": {
      "stages": [
        {
          "imageSrc": "问句配图简笔画",
          "enterEffect": "breathe"
        },
        {
          "imageSrc": "转折警示配图",
          "enterEffect": "slideBottom"
        },
        {
          "imageSrc": "结论冲击配图",
          "enterEffect": "slideBottom"
        }
      ]
    }
  },
  "content_min_items": 2,
  "content_max_items": 4
}
```

### CENTER_FOCUS
```json
{
  "name": "CENTER_FOCUS",
  "componentExport": "BWCenterFocus",
  "description": "适用：默认叙事底盘；平缓讲事实、下定义、引入话题；单图居中。\n差异：强情绪/震惊句用 TEXT_FOCUS；专业术语卡用 CONCEPT_CARD；多要素同时出现用 LIST_MULTI_GROUP。\n慎用：需要左右对比或步骤列表时请换 SPLIT_COMPARE / STEP_LIST 等。\n参数：enterEffect 默认 breathe；anchors 可选，showFrom 为 content 下标（非帧数），锚点词会按时间依次出现并保留为列表。",
  "psychology": "视觉中心稳定",
  "image_count": 1,
  "param_schema": {
    "type": "object",
    "properties": {
      "imageSrc": {
        "type": "string",
        "format": "image_prompt",
        "description": "主图描述"
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
        "default": "breathe",
        "description": "入场效果"
      },
      "anchors": {
        "type": "array",
        "description": "可选；用于锚点词展示（顶部依次出现并保留为列表），并绑定锚点出现时机的音效。showFrom 须落在当前 content 条数范围内。注意 **保持克制，尽量少设置锚点** 只提取整段里真正的高潮、反转或核心名词",
        "items": {
          "type": "object",
          "required": [
            "text",
            "showFrom"
          ],
          "properties": {
            "text": {
              "type": "string",
              "description": "要展示的锚点词"
            },
            "showFrom": {
              "type": "integer",
              "format": "content_index",
              "description": "content 数组下标（0-based），非帧数；合法范围 0～(content 条数-1)，超出会被校验丢弃"
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
    },
    "required": [
      "imageSrc"
    ]
  },
  "example": {
    "template": "CENTER_FOCUS",
    "param": {
      "imageSrc": "上班族坐在电脑前的简笔画图标",
      "enterEffect": "breathe",
      "anchors": [
        {
          "text": "可得性启发",
          "showFrom": 0,
          "color": "red"
        }
      ]
    }
  }
}
```

### CHAT_BUBBLE
```json
{
  "name": "CHAT_BUBBLE",
  "componentExport": "BWChatBubble",
  "description": "适用：显式对话/弹幕/评论体/群聊体/角色化吐槽（如“我：…你：…”、“网友：…”、“评论：…”、“有人说：…”）的口吻表达，适合做共鸣痛点、用户反馈、反对意见、现场对话等。\n不适用：仅“你是不是也…”这类单句发问但整体仍是平铺叙述时（此时优先 CENTER_FOCUS）。\n差异：纯金句大字无对话感用 TEXT_FOCUS；需配图但非气泡口径用 CENTER_FOCUS。\n参数：imageSrc 为人物/侧脸简笔图标；可选 anchors 用于高亮气泡内的关键词。",
  "psychology": "社会投射",
  "image_count": 1,
  "param_schema": {
    "type": "object",
    "properties": {
      "imageSrc": {
        "type": "string",
        "format": "image_prompt",
        "description": "人物图标描述（用于承载对话/弹幕的“说话者”形象）"
      },
      "anchors": {
        "type": "array",
        "description": "可选；用于高亮气泡内容子串。showFrom 须落在当前 content 条数范围内",
        "items": {
          "type": "object",
          "required": [
            "text",
            "showFrom"
          ],
          "properties": {
            "text": {
              "type": "string",
              "description": "要高亮的关键词/短语（必须是气泡内容的子串）"
            },
            "showFrom": {
              "type": "integer",
              "format": "content_index",
              "description": "content 数组下标（0-based），非帧数；合法范围 0～(content 条数-1)，超出会被校验丢弃"
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
    },
    "required": [
      "imageSrc"
    ]
  },
  "example": {
    "template": "CHAT_BUBBLE",
    "param": {
      "imageSrc": "困惑的人简笔画图标",
      "anchors": [
        {
          "text": "太危险",
          "showFrom": 0,
          "color": "#FF8C00",
          "anim": "popIn",
          "audioEffect": "ping"
        }
      ]
    }
  }
}
```

### COGNITIVE_SHIFT
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

### CONCEPT_CARD
```json
{
  "name": "CONCEPT_CARD",
  "componentExport": "BWConceptCard",
  "description": "适用：对“专业术语、概念、产品名、品牌关键词、功能名等”新名词进行解释；用图标 + 大字把词钉在观众脑海里。\n差异：普通解释句、并不需要“闪卡式命名强调”时用 CENTER_FOCUS。\n参数：conceptName 与口播中的名词一致；imageSrc 为概念/名词的隐喻图标。",
  "psychology": "符号化锚定",
  "image_count": 1,
  "param_schema": {
    "type": "object",
    "properties": {
      "imageSrc": {
        "type": "string",
        "format": "image_prompt",
        "description": "概念图标描述"
      },
      "conceptName": {
        "type": "string",
        "description": "概念名称"
      }
    },
    "required": [
      "imageSrc",
      "conceptName"
    ]
  },
  "example": {
    "template": "CONCEPT_CARD",
    "param": {
      "imageSrc": "过滤器/筛网简笔画图标",
      "conceptName": "幸存者偏差"
    }
  }
}
```

### DOS_AND_DONTS
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

### KPI_HERO
```json
{
  "name": "KPI_HERO",
  "componentExport": "BWKpiHero",
  "description": "适用：口播强调一个核心数字、增长率、占比、排名；单指标「大字报」。\n差异：两句并列指标对比用 STAT_COMPARE；完成度/进度感用 PROGRESS_RING；纯金句无数字用 TEXT_FOCUS。\n参数：value 为展示终值；prefix/suffix 宜短；headline 可一句标题；countDuration 控制数字滚动帧长。",
  "psychology": "锚定效应",
  "image_count": "0-1",
  "param_schema": {
    "type": "object",
    "properties": {
      "value": {
        "type": "integer",
        "description": "展示的目标数字（整数滚动到该值）"
      },
      "prefix": {
        "type": "string",
        "description": "数字前缀，如「¥」「+」"
      },
      "suffix": {
        "type": "string",
        "description": "数字后缀，如「%」「万」"
      },
      "headline": {
        "type": "string",
        "description": "顶部短标题"
      },
      "imageSrc": {
        "type": "string",
        "format": "image_prompt",
        "description": "可选配图（角落小图）"
      },
      "countDuration": {
        "type": "integer",
        "description": "数字从 0 滚到 value 的 spring 时长（帧），默认 28"
      }
    },
    "required": [
      "value"
    ]
  },
  "example": {
    "template": "KPI_HERO",
    "param": {
      "value": 87,
      "prefix": "",
      "suffix": "%",
      "headline": "用户满意度"
    }
  }
}
```

### LIST_MULTI_GROUP
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

### MAGNIFYING_GLASS
```json
{
  "name": "MAGNIFYING_GLASS",
  "componentExport": "BWMagnifyingGlass",
  "description": "适用：需要把观众注意力“锁定到一个关键词/短语/关键细节/核心发现”上（可用于揭秘、关键洞察、核心卖点、重要结论的聚焦强调），且口播中存在明确的落点句（如“关键在于…”“核心是…”“结论是…”）。\n差异：本模板要求 param.anchors 非空，且通过 showFrom 关联 content；没有清晰落点/锚点就不要用；不要用它打包多个机制+多个例子+多个结论。\n参数：anchors.text 对准要聚焦的关键词（建议 1～2 个高价值锚点）。",
  "psychology": "好奇心缺口",
  "image_count": 0,
  "param_schema": {
    "type": "object",
    "properties": {
      "anchors": {
        "type": "array",
        "minItems": 1,
        "maxItems": 3,
        "description": "必填且非空（建议 1～2 个高价值锚点）；每项通过 showFrom 对齐 content 分句。锚点应落在“揭示性落点句”或其核心关键词上，不要把整段说明塞满锚点",
        "items": {
          "type": "object",
          "required": [
            "text",
            "showFrom"
          ],
          "properties": {
            "text": {
              "type": "string",
              "description": "要聚焦的关键词/短语"
            },
            "showFrom": {
              "type": "integer",
              "format": "content_index",
              "description": "content 数组下标（0-based），非帧数；合法范围 0～(content 条数-1)，超出会被校验丢弃"
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
    },
    "required": [
      "anchors"
    ]
  },
  "content_anchor_required": true,
  "example": {
    "template": "MAGNIFYING_GLASS",
    "param": {
      "anchors": [
        {
          "text": "忽略了基础",
          "showFrom": 0,
          "color": "#111111",
          "anim": "popIn",
          "audioEffect": "ping"
        }
      ]
    }
  }
}
```

### METHOD_STACK
```json
{
  "name": "METHOD_STACK",
  "componentExport": "BWMethodStack",
  "description": "适用：单个 item 内是「一个标题式核心 + 解释展开」，例如：一个方法/建议/观点/卖点/亮点/推荐理由，后面紧跟 2～4 句说明。\n差异：多个独立步骤/并列分点用 STEP_LIST 或 LIST_MULTI_GROUP；多条不同方法/不同卖点不要为了套模板强行合并到同一 item。\n参数：title 为视觉标题，imageSrc 为单张主图，notes 为按讲解顺序出现的解释短语。",
  "psychology": "聚焦解释",
  "image_count": 1,
  "param_schema": {
    "type": "object",
    "properties": {
      "title": {
        "type": "string",
        "description": "该 item 的方法名/提醒标题/观点标题，建议 4~12 个字"
      },
      "imageSrc": {
        "type": "string",
        "format": "image_prompt",
        "description": "单张主图描述，用于承接这个方法或观点"
      },
      "notes": {
        "type": "array",
        "description": "可选；解释短语数组。每项含 text 与 showFrom；showFrom 为 content 下标（0-based，非帧数），须在 0～(content 条数-1) 内",
        "items": {
          "type": "object",
          "required": [
            "text",
            "showFrom"
          ],
          "properties": {
            "text": {
              "type": "string",
              "description": "解释短语"
            },
            "showFrom": {
              "type": "integer",
              "format": "content_index",
              "description": "content 数组下标（0-based），非帧数；合法范围 0～(content 条数-1)，超出会被校验丢弃"
            }
          }
        }
      }
    },
    "required": [
      "title",
      "imageSrc"
    ]
  },
  "example": {
    "template": "METHOD_STACK",
    "param": {
      "title": "警惕情绪画面",
      "imageSrc": "被耸动新闻画面包围、神情紧张的人物简笔画",
      "notes": [
        {
          "text": "先识别这是情绪刺激",
          "showFrom": 1
        },
        {
          "text": "再追问它是否只是离奇个案",
          "showFrom": 3
        }
      ]
    }
  },
  "content_min_items": 2,
  "content_max_items": 5
}
```

### PROGRESS_RING
```json
{
  "name": "PROGRESS_RING",
  "componentExport": "BWProgressRing",
  "description": "适用：完成度、达成率、占比、进度结论；环形动效强化「走到哪一步」。\n差异：单数字大字报用 KPI_HERO；两项对比用 STAT_COMPARE。\n参数：percent 为 0–100；label 为主文案；subLabel 可写口径说明。",
  "psychology": "目标梯度",
  "image_count": 0,
  "param_schema": {
    "type": "object",
    "properties": {
      "percent": {
        "type": "integer",
        "description": "进度百分比 0–100"
      },
      "label": {
        "type": "string",
        "description": "主标题（如「年度目标达成」）"
      },
      "subLabel": {
        "type": "string",
        "description": "副标题或口径说明"
      }
    },
    "required": [
      "percent",
      "label"
    ]
  },
  "example": {
    "template": "PROGRESS_RING",
    "param": {
      "percent": 78,
      "label": "项目完成度",
      "subLabel": "截至本季度"
    }
  }
}
```

### QUOTE_CITATION
```json
{
  "name": "QUOTE_CITATION",
  "componentExport": "BWQuoteCitation",
  "description": "适用：任何“引用/摘录/证言/背书”体裁（名言、著作、研究结论、媒体引用、用户评价、客户证言、公告摘录等）；可选一张配角图。\n提示：引文主体建议放在 content/字幕中，本模板版心更强调“引用体裁 + 出处”。\n差异：非引用类普通叙述用 CENTER_FOCUS。\n参数：quoteSource 写清出处（来源/角色/机构）；imageSrc 可省略。",
  "psychology": "社会认同背书",
  "image_count": "0-1",
  "param_schema": {
    "type": "object",
    "properties": {
      "imageSrc": {
        "type": "string",
        "format": "image_prompt",
        "description": "可选配图描述"
      },
      "quoteSource": {
        "type": "string",
        "description": "引言来源"
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

### SPLIT_COMPARE
```json
{
  "name": "SPLIT_COMPARE",
  "componentExport": "BWSplitCompare",
  "description": "适用：两种方案、两条路径、两方行为对照；口播里常见「你/我…他/对方…」对仗或分号（；）两侧对立叙述。\n差异：明确错/对避坑用 DOS_AND_DONTS；纯数据双指标对比用 STAT_COMPARE；多要素平铺列举用 LIST_MULTI_GROUP。\n参数：leftLabel/rightLabel 为 2～6 字短语，与左右图语义一致。",
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

### STAT_COMPARE
```json
{
  "name": "STAT_COMPARE",
  "componentExport": "BWStatCompare",
  "description": "适用：两项 KPI 并列对比（前后、A/B、涨跌）；条形高度反映相对大小。\n差异：左右场景图对比用 SPLIT_COMPARE；单数字强调用 KPI_HERO；若强调完成度/进度闭环感用 PROGRESS_RING。\n参数：leftValue/rightValue 为非负整数；标签宜短。",
  "psychology": "对比效应",
  "image_count": "0-2",
  "param_schema": {
    "type": "object",
    "properties": {
      "leftValue": {
        "type": "integer",
        "description": "左侧数值（非负整数）"
      },
      "rightValue": {
        "type": "integer",
        "description": "右侧数值（非负整数）"
      },
      "leftLabel": {
        "type": "string",
        "description": "左侧标签"
      },
      "rightLabel": {
        "type": "string",
        "description": "右侧标签"
      },
      "leftSrc": {
        "type": "string",
        "format": "image_prompt",
        "description": "左侧小图标"
      },
      "rightSrc": {
        "type": "string",
        "format": "image_prompt",
        "description": "右侧小图标"
      }
    },
    "required": [
      "leftValue",
      "rightValue",
      "leftLabel",
      "rightLabel"
    ]
  },
  "example": {
    "template": "STAT_COMPARE",
    "param": {
      "leftValue": 32,
      "rightValue": 68,
      "leftLabel": "去年",
      "rightLabel": "今年"
    }
  }
}
```

### STEP_LIST
```json
{
  "name": "STEP_LIST",
  "componentExport": "BWStepList",
  "description": "适用：可执行步骤、操作流程、短分点清单（第一步/第二步…），无配图，每个分点必须限制在10个字符以内。\n差异：若每条方法后还跟较长解释、追问或补充句，优先用 METHOD_STACK；无步骤感的并列要点用 LIST_MULTI_GROUP 或 CENTER_FOCUS。\n参数：可直接传 steps（字符串数组）；若不传 steps，则从 content 提取文本作为步骤，建议保持短句清单感。",
  "content_min_items": 2,
  "content_max_items": 6,
  "psychology": "降低认知负荷",
  "image_count": 0,
  "param_schema": {
    "type": "object",
    "properties": {
      "steps": {
        "type": "array",
        "items": {
          "type": "string"
        },
        "minItems": 2,
        "maxItems": 6,
        "description": "步骤文本数组（可选）。不传则从 content 中提取。每条不超过 10 个字符。"
      }
    },
    "required": []
  },
  "example": {
    "template": "STEP_LIST",
    "param": {
      "steps": [
        "第一步",
        "第二步",
        "第三步"
      ]
    }
  }
}
```

### TEXT_FOCUS
```json
{
  "name": "TEXT_FOCUS",
  "componentExport": "BWTextFocus",
  "description": "适用：全片最强金句、结论暴击；0 图纯大字。\n差异：需要配图锚定用 CENTER_FOCUS；模拟读者吐槽口吻用 CHAT_BUBBLE。\n慎用：content 建议不超过 3 条以保持冲击；若口播/字幕必须保留长 content，可填 coreSentence 仅用于大屏一句展示。",
  "content_max_items": 3,
  "psychology": "信噪比极致化",
  "image_count": 0,
  "param_schema": {
    "type": "object",
    "properties": {
      "coreSentence": {
        "type": "string",
        "description": "精炼核心句，不超过25个字"
      },
      "coreSentenceAnchors": {
        "type": "array",
        "description": "可选；在 coreSentence 内按顺序高亮子串。每项 coreSentenceAnchor 须为 coreSentence 的子串，否则会被校验丢弃",
        "items": {
          "type": "object",
          "required": [
            "coreSentenceAnchor"
          ],
          "properties": {
            "coreSentenceAnchor": {
              "type": "string",
              "description": "要高亮的子串，须出现在 coreSentence 内"
            },
            "color": {
              "type": "string",
              "description": "高亮颜色，省略时默认强调色"
            }
          }
        }
      }
    },
    "required": [
      "coreSentence"
    ]
  },
  "example": {
    "template": "TEXT_FOCUS",
    "param": {
      "coreSentence": "承认自己“可能错了”并不是一种软弱",
      "coreSentenceAnchors": [
        {
          "coreSentenceAnchor": "可能错了",
          "color": "red"
        }
      ]
    }
  }
}
```

### TIMELINE
```json
{
  "name": "TIMELINE",
  "componentExport": "BWTimeline",
  "description": "适用：历史演进、时间顺序、前后对比带明确时间轴。\n差异：无时间线的并列要点用 LIST_MULTI_GROUP；操作步骤用 STEP_LIST。\n参数：images 2～3 项，position 常 left/right 以配合轴线。",
  "psychology": "叙事连贯性",
  "image_count": "2-3",
  "param_schema": {
    "type": "object",
    "properties": {
      "images": {
        "type": "array",
        "minItems": 2,
        "maxItems": 3,
        "description": "时间轴图片数组；position 常用 left/right 配合轴线",
        "items": {
          "type": "object",
          "required": [
            "src"
          ],
          "properties": {
            "src": {
              "type": "string",
              "format": "image_prompt",
              "description": "该节点配图提示词"
            },
            "position": {
              "type": "string",
              "enum": [
                "center",
                "left",
                "right",
                "top",
                "bottom"
              ]
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
            },
            "textIndex": {
              "type": "integer",
              "format": "content_index"
            },
            "startFrame": {
              "type": "integer"
            }
          }
        }
      }
    },
    "required": [
      "images"
    ]
  },
  "example": {
    "template": "TIMELINE",
    "param": {
      "images": [
        {
          "src": "1990年代电脑图标",
          "position": "left",
          "enterEffect": "slideLeft"
        },
        {
          "src": "2020年代手机图标",
          "position": "right",
          "enterEffect": "slideLeft"
        }
      ]
    }
  }
}
```

---

*生成时间（UTC）：2026-04-01T06:16:08Z*
