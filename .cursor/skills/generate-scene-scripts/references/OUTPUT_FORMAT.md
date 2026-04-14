# 最终 JSON 输出格式

## 顶层结构

```json
{
  "topic": "封面钩子文案（12～28 字）",
  "scenes": [ ... ],
  "fps": 30,
  "cover": { ... }
}
```

| 字段 | 类型 | 说明 |
|------|------|------|
| `topic` | string | 阶段 1 生成的封面钩子 |
| `scenes` | array | 场景数组 |
| `fps` | number | 帧率，从 `script_v6/config.json` 读取（当前 30） |
| `cover` | object | 封面信息，后处理注入 |

## Scene 结构

```json
{
  "sceneId": "scene_1",
  "sceneName": "引入·主题词",
  "items": [ ... ]
}
```

| 字段 | 类型 | 说明 |
|------|------|------|
| `sceneId` | string | `scene_1`, `scene_2` ... 递增 |
| `sceneName` | string | 功能前缀 + 主题词（6～14 字） |
| `items` | array | 该场景的分镜条目 |

**注意**：最终输出中 scene 上**不保留** `text` 字段（阶段 1 的中间产物，后处理时删除）。

## Item 结构

```json
{
  "order": 1,
  "narrativeType": "HOOK",
  "template": "QUOTE_CITATION",
  "reasoning": "金句引用，适合用名言模板。",
  "content": [
    { "text": "永远不要和傻子争论，" },
    { "text": "因为他真的不知道自己是个傻子。" }
  ],
  "param": {
    "quoteSource": "谚语",
    "anchors": []
  }
}
```

| 字段 | 类型 | 说明 |
|------|------|------|
| `order` | number | scene 内从 1 递增 |
| `narrativeType` | string | `HOOK` / `LOGIC` / `CASE` / `DATA` / `CONCLUSION` / `TRANSITION` |
| `template` | string | 合法模板名 |
| `reasoning` | string | 模板选择理由（一句话） |
| `content` | array | 口播分句，每条 `{ "text": "..." }`。Step1 阶段仅含 text |
| `param` | object | 模板参数，按 param_schema 填充 |

**禁止在 item 上出现**：`text`（中间产物，后处理删除）
**禁止在 param 中出现**：`content`、`totalDurationFrames`（这两者只属于 item 顶层，由后续 Step3 写入）

## Cover 结构

cover 对象根据 `script_v6/config.json` 中的配置注入。

```json
{
  "cover": {
    "durationFrames": 5,
    "title": "视频名称",
    "subtitle": "topic 内容",
    "themeColor": "#2563EB",
    "badge": "认识自我 · 理性思考",
    "seriesLabel": "认知心理学",
    "seriesLabelEn": "COGNITIVE PSYCHOLOGY",
    "methodologySteps": ["觉察", "归因", "调整"],
    "methodologyStepsEn": "OBSERVE · ATTRIBUTE · ADJUST"
  }
}
```

字段来源映射（从 `script_v6/config.json` 读取）：

| cover 字段 | config.json 字段 | 说明 |
|-----------|-----------------|------|
| `durationFrames` | `cover_duration_frames` | 封面持续帧数 |
| `title` | 用户提供的视频名称 `name` | 若为空则用 topic 截断 |
| `subtitle` | 使用阶段 1 生成的 `topic` | |
| `themeColor` | `cover_theme_color` | |
| `badge` | `cover_badge` | |
| `seriesLabel` | `cover_series_label` | |
| `seriesLabelEn` | `cover_series_label_en` | |
| `methodologySteps` | `cover_methodology_steps` | string[] |
| `methodologyStepsEn` | `cover_methodology_steps_en` | |

若 `cover_duration_frames` ≤ 0 或未配置，则不写入 cover。

## 精简完整示例

以下是一个包含两个 scene 的精简示例（展示不同模板的 param 结构）：

```json
{
  "topic": "为什么越无知的人，越自信？",
  "scenes": [
    {
      "sceneId": "scene_1",
      "sceneName": "引入·达克效应",
      "items": [
        {
          "order": 1,
          "narrativeType": "HOOK",
          "template": "QUOTE_CITATION",
          "reasoning": "金句引用，适合名言模板。",
          "content": [
            { "text": "永远不要和傻子争论，" },
            { "text": "因为他真的不知道自己是个傻子。" }
          ],
          "param": {
            "quoteSource": "谚语",
            "anchors": []
          }
        },
        {
          "order": 2,
          "narrativeType": "LOGIC",
          "template": "COGNITIVE_SHIFT",
          "reasoning": ""不是...而是..."句式，属于认知转变。",
          "content": [
            { "text": "这真不是为了骂人，" },
            { "text": "而是一个严肃的心理学结论。" }
          ],
          "param": {
            "notText": "为了骂人",
            "butText": "心理学结论",
            "butSrc": "Academic research scene with books and papers",
            "notContentIndex": 0,
            "butContentIndex": 1,
            "anchors": []
          }
        },
        {
          "order": 3,
          "narrativeType": "CASE",
          "template": "CENTER_FOCUS",
          "reasoning": "平缓叙述案例背景，单图即可。",
          "content": [
            { "text": "1995年，美国有个叫惠勒的男人，" },
            { "text": "大白天持枪抢了两家银行。" },
            { "text": "神奇的是，" },
            { "text": "他竟然没带面罩。" }
          ],
          "param": {
            "imageSrc": "Bank robbery scene in 1990s America",
            "enterEffect": "slideLeft",
            "anchors": [
              {
                "text": "没带面罩",
                "showFrom": 3,
                "color": "#EF4444",
                "anim": "popIn",
                "audioEffect": "woosh"
              }
            ]
          }
        }
      ]
    },
    {
      "sceneId": "scene_2",
      "sceneName": "剖析·元认知缺陷",
      "items": [
        {
          "order": 1,
          "narrativeType": "LOGIC",
          "template": "CONCEPT_CARD",
          "reasoning": "引入"元认知"概念，适合概念卡片。",
          "content": [
            { "text": "这种评估能力叫"元认知"。" }
          ],
          "param": {
            "imageSrc": "Brain icon with magnifying glass",
            "conceptName": "元认知",
            "anchors": []
          }
        },
        {
          "order": 2,
          "narrativeType": "CONCLUSION",
          "template": "TEXT_FOCUS",
          "reasoning": "全片级强结论，用TEXT_FOCUS。",
          "content": [
            { "text": "从今天起，" },
            { "text": "把生命浪费在美好的事物上。" }
          ],
          "param": {
            "coreSentence": [
              "从今天起，",
              "把生命浪费在美好的事物上。"
            ],
            "coreSentenceAnchors": [
              {
                "coreSentenceAnchor": "美好的事物",
                "color": "#EF4444"
              }
            ]
          }
        }
      ]
    }
  ],
  "fps": 30,
  "cover": {
    "durationFrames": 5,
    "title": "认知偏见_达克效应",
    "subtitle": "为什么越无知的人，越自信？",
    "themeColor": "#2563EB",
    "badge": "认识自我 · 理性思考",
    "seriesLabel": "认知心理学",
    "seriesLabelEn": "COGNITIVE PSYCHOLOGY",
    "methodologySteps": ["觉察", "归因", "调整"],
    "methodologyStepsEn": "OBSERVE · ATTRIBUTE · ADJUST"
  }
}
```
