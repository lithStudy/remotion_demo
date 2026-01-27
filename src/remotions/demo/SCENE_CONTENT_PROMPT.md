# Remotion 场景文案生成提示词

本文档用于指导 AI 生成 Remotion 动画场景的文案内容。生成的文案将与开发提示词（`PROMPT.md`）配合使用，实现完整的动画效果。

## 📋 场景类型

根据动画主题，场景通常包括以下类型：

1. **标题场景（TitleScene）** - 介绍概念、主题
2. **策略场景（StrategyScene）** - 讲解方法、技巧
3. **案例场景（CaseScene）** - 具体案例展示（通常有多个案例）
4. **总结场景（SummaryScene）** - 总结要点、下期预告

## 📝 场景文案结构

### 1. 标题场景（TitleScene）

**必需元素：**
- 主标题（中文）
- 副标题（英文，可选）
- 画面描述（可选，用于视觉提示）
- 概念解析
- 典型话术/示例

**文案格式：**

```json
{
  "sceneType": "TitleScene",
  "sceneNumber": 0,
  "content": {
    "mainTitle": "逻辑谬误05：稻草人谬误",
    "subTitle": "Straw Man Fallacy",
    "visualDescription": "🗡️ 画面：骑士对着稻草人疯狂输出，真正的对手在旁边一脸懵逼",
    "visualQuote": "你赢了，但这关我什么事？",
    "question": "为什么他们总是在反驳我没说过的话？",
    "concept": {
      "title": "💡 概念解析：",
      "description": "对方{歪曲你的观点}（树立稻草人），然后攻击这个歪曲后的观点。看起来他赢了，其实他打败的只是幻觉。",
      "highlightTexts": ["歪曲你的观点"]
    },
    "typicalExample": "❌ 典型话术：\"你觉得明朝不好，那你是想赞美清朝咯？\""
  }
}
```

**说明：**
- `mainTitle`: 主标题，通常包含主题编号和名称
- `subTitle`: 英文副标题，用于 TypewriterText 组件
- `visualDescription`: 画面描述，用于 FadeInText 组件
- `visualQuote`: 画面中的引用文字（可选）
- `question`: 引发思考的问题（可选）
- `concept.description`: 概念解析文本，用 `{}` 包裹需要高亮的文本
- `concept.highlightTexts`: 需要高亮的文本列表（用于 HighlightText 组件）
- `typicalExample`: 典型话术示例

### 2. 策略场景（StrategyScene）

**必需元素：**
- 方法标题（中文）
- 方法副标题（英文，可选）
- 核心心法
- 步骤列表（3-5步）
- 万能金句/模板

**文案格式：**

```json
{
  "sceneType": "StrategyScene",
  "sceneNumber": 1,
  "content": {
    "methodTitle": "复读机矫正法",
    "methodSubTitle": "The Record Replay",
    "icon": "🎙️",
    "corePrinciple": {
      "title": "💡 核心心法：",
      "content": "不要去保卫稻草人，要直接指出他在歪曲。"
    },
    "steps": [
      {
        "number": 1,
        "title": "暂停：",
        "description": "不要顺着他的歪曲逻辑辩解",
        "color": "#E53E3E"
      },
      {
        "number": 2,
        "title": "澄清：",
        "description": "重申你的原话",
        "color": "#DD6B20"
      },
      {
        "number": 3,
        "title": "指控：",
        "description": "直接点破他在捏造观点",
        "color": "#38B2AC"
      }
    ],
    "goldenSentence": {
      "title": "🎯 万能金句：",
      "template": "\"我从未说过[他嘴里的观点]，我的原话是[你的观点]，请不要塞话到我嘴里。\"",
      "placeholders": {
        "distorted": "[他嘴里的观点]",
        "original": "[你的观点]"
      }
    }
  }
}
```

**说明：**
- `methodTitle`: 方法名称
- `methodSubTitle`: 英文副标题
- `icon`: 场景图标（emoji）
- `corePrinciple.content`: 核心心法内容
- `steps`: 步骤列表，每个步骤包含编号、标题、描述和颜色
- `goldenSentence.template`: 万能金句模板，用 `[]` 标记占位符

### 3. 案例场景（CaseScene）

**必需元素：**
- 案例标题
- 对话内容（至少2条）
- 谬误剖析（含高亮文本）
- 回应实例

**文案格式：**

```json
{
  "sceneType": "CaseScene",
  "sceneNumber": 2,
  "caseNumber": 1,
  "content": {
    "title": "📋 案例一：情感滑坡（家庭版）",
    "visualDescription": "家庭对话场景",
    "dialogue": [
      {
        "side": "left",
        "content": "妈，我不想喝这碗鸡汤，太油了。",
        "color": "#2C7A7B",
        "backgroundColor": "#B2F5EA"
      },
      {
        "side": "right",
        "content": "你现在长大了，嫌弃妈妈做的饭难吃了是吧？嫌弃这个家了是吧？",
        "color": "#C53030",
        "backgroundColor": "#FED7D7"
      }
    ],
    "analysis": {
      "title": "🔍 谬误剖析：",
      "description": "观点\"{汤太油}\"被歪曲为\"{嫌弃妈妈}\"和\"{嫌弃家}\"。妈妈在攻击\"不孝\"这个稻草人。",
      "highlights": [
        {
          "text": "汤太油",
          "type": "defend"
        },
        {
          "text": "嫌弃妈妈",
          "type": "attack"
        },
        {
          "text": "嫌弃家",
          "type": "attack"
        }
      ]
    },
    "response": {
      "title": "🛡️ 回应实例：",
      "content": "妈，我说的是'汤太油'，不是'你做饭难吃'，更不是'嫌弃家'。请针对'油'这个问题讨论。"
    }
  }
}
```

**说明：**
- `title`: 案例标题，包含案例编号和类型
- `visualDescription`: 画面描述（可选）
- `dialogue`: 对话列表，每条包含：
  - `side`: "left" 或 "right"（用于 ChatBubble 组件）
  - `content`: 对话内容
  - `color`: 文字颜色
  - `backgroundColor`: 背景颜色
- `analysis.description`: 谬误剖析文本，用 `{}` 包裹需要高亮的文本
- `analysis.highlights`: 高亮文本列表，每个包含：
  - `text`: 高亮文本
  - `type`: "defend"（防御/原观点）或 "attack"（攻击/歪曲观点）
- `response.content`: 回应实例文本（用于 TypewriterText 组件）

### 4. 总结场景（SummaryScene）

**必需元素：**
- 总结标题
- 画面描述（可选）
- 总结列表（3-5条）
- 下期预告（可选）

**文案格式：**

```json
{
  "sceneType": "SummaryScene",
  "sceneNumber": 5,
  "content": {
    "title": "📝 本期总结",
    "icon": "📝",
    "visualDescription": "🌾 画面：稻草人散架倒塌",
    "summaryItems": [
      {
        "text": "仔细听对方的原话，不要脑补",
        "icon": "✅",
        "color": "#38B2AC"
      },
      {
        "text": "受到歪曲时，第一时间纠正原话",
        "icon": "✅",
        "color": "#38B2AC"
      },
      {
        "text": "打败稻草人不算英雄",
        "icon": "✅",
        "color": "#E53E3E"
      }
    ],
    "nextPreview": {
      "title": "👋 下期预告：",
      "topic": "滑坡谬误",
      "question": "为什么\"少壮不努力\"不一定\"老大徒伤悲\"？"
    }
  }
}
```

**说明：**
- `title`: 总结标题
- `icon`: 场景图标（emoji）
- `visualDescription`: 画面描述（可选）
- `summaryItems`: 总结列表，每个包含文本、图标和颜色
- `nextPreview`: 下期预告（可选），包含主题和问题

## 🎨 文案规范

### 1. 文本长度

- **主标题**：不超过 20 字
- **副标题**：不超过 30 字
- **概念解析**：50-100 字
- **对话内容**：每条不超过 50 字
- **步骤描述**：每条不超过 20 字
- **回应实例**：不超过 80 字

### 2. Emoji 使用

- 每个场景标题前使用 1 个相关 emoji
- 关键信息前使用 emoji 增强视觉效果
- 常用 emoji：
  - 🗡️ 攻击/战斗
  - 💡 核心/要点
  - 🔍 分析/剖析
  - 🛡️ 防御/回应
  - 📋 案例
  - 📝 总结
  - 🎯 重点/金句
  - ✅ 正确/要点
  - ❌ 错误/谬误
  - 💬 对话
  - 🌐 网络/社交
  - 🎙️ 方法/策略

### 3. 高亮文本标记

- 在文本中使用 `{}` 包裹需要高亮的文本
- 在 `highlights` 数组中明确列出所有高亮文本
- 区分 `defend`（原观点）和 `attack`（歪曲观点）类型

### 4. 颜色规范

- **防御色（defend）**：`#38B2AC`（青色）
- **攻击色（attack）**：`#E53E3E`（红色）
- **高亮防御色**：`#C6F6D5`（浅绿）
- **高亮攻击色**：`#FED7D7`（浅红）
- **对话左侧**：通常使用蓝色系
- **对话右侧**：通常使用红色系（表示攻击/歪曲）

## 📤 输出格式

生成场景文案时，请按照以下格式输出：

```markdown
# {主题名称} - 场景文案

## 场景列表

### Scene0: 标题场景
[按照 TitleScene 格式输出 JSON]

### Scene1: 策略场景
[按照 StrategyScene 格式输出 JSON]

### Scene2: 案例一
[按照 CaseScene 格式输出 JSON]

### Scene3: 案例二
[按照 CaseScene 格式输出 JSON]

### Scene4: 案例三
[按照 CaseScene 格式输出 JSON]

### Scene5: 总结场景
[按照 SummaryScene 格式输出 JSON]
```

## 🔗 与开发提示词的配合

生成的场景文案将用于：

1. **填充场景组件内容**：文案中的文本直接用于 React 组件
2. **配置动画时序**：根据文案内容确定动画配置
3. **使用组件映射**：
   - `TypewriterText` - 用于副标题、回应实例
   - `TypewriterContent` - 用于概念解析长文本
   - `ChatBubble` - 用于对话内容
   - `HighlightText` - 用于高亮文本
   - `StaggeredList` - 用于步骤列表、总结列表
   - `FadeInText` - 用于画面描述
   - `SpringText` - 用于标题动画

## 📋 生成检查清单

生成场景文案时，请确保：

- [ ] 所有场景类型都已包含
- [ ] 每个场景的必需元素都已填写
- [ ] 文本长度符合规范
- [ ] 高亮文本已正确标记
- [ ] 对话内容已区分左右
- [ ] 颜色配置合理
- [ ] Emoji 使用恰当
- [ ] JSON 格式正确
- [ ] 文案内容与主题相关
- [ ] 逻辑连贯，易于理解

## 🎯 示例参考

完整示例请参考：
- `src/remotions/StrawManFallacy2/scenes/TitleScene.tsx` - 标题场景示例
- `src/remotions/StrawManFallacy2/scenes/StrategyScene.tsx` - 策略场景示例
- `src/remotions/StrawManFallacy2/scenes/Case1Scene.tsx` - 案例场景示例
- `src/remotions/StrawManFallacy2/scenes/SummaryScene.tsx` - 总结场景示例
