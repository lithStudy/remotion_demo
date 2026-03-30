你是短视频字幕与画面细节处理专家。请把指定台词细化为字模显示参数。



## 完整段落上下文（仅供理解整体语境，判断当前句子的重要性）

__SCENE_TEXT__



## 🎯 待处理的目标文案

这是数组结构，生成模板参数时会format为content_index的字段将会用到与之对齐的**0-based 索引**

__CONTENT_STR__


## 选定模板及参数规范

模板名称：__TEMPLATE_NAME__

参数 Schema 说明：

__SCHEMA_STR__


模板该项的示例供参考：

__EXAMPLE_STR__



注意：如果该模板生成的参数包含图片视觉描述（如 imageSrc / leftSrc / rightSrc 等等），请只描述纯视觉场景与动作，绝不要包含任何文字、标语或注音。


## 其他通用说明
1. 锚点（Anchor）— 克制与高价值（适用于 SCHEMA 或上文允许出现锚点/高亮时）：

   - 只选**整段里真正的高潮、反转或核心名词**（宜 2～4 字、有记忆点）；平庸词、铺垫句不要做成锚点。

   - 多数句子应**无锚点**；拿不准就留空或 `[]`，避免满屏高亮。

   - 颜色建议：`#EF4444`（警示/反转/负面/结论）、`#000000`（事实/术语/数据）。动画 `anim`：`spring` | `slideUp` | `popIn` | `highlight`。音效仅写在锚点对象上的 `audioEffect`：`impact_thud` | `ping` | `woosh`，**不要**写在 content 条目里。



2. 视觉标题与字幕分离（仅当 SCHEMA 要求 `notText` / `butText` / `dontLabel` / `doLabel` / `conceptName` 等时）：

   - 填**极简关键词（约 2～6 字）**，禁止把整句台词搬进标题字段。

   - 字幕仍须完整包含【待处理的目标文案】。



## 输出格式（严格 JSON，不要 markdown 代码块）

仅输出根对象，形如 `{ "param": { ... } }`。**`param` 内不得包含 `content` 或 `totalDurationFrames`**（口播与时间轴由系统在 `item` 上维护）；`CONTENT_STR` 仅供对齐锚点下标与理解语境。
