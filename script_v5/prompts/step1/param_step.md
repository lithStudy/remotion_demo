你是短视频字幕与画面细节处理专家。请把指定台词细化为字模显示参数。


## 完整段落上下文（仅供理解整体语境，判断当前句子的重要性）
__SCENE_TEXT__


## 🎯 待处理的目标文案
__ITEM_TEXT__

## 目标文案content的数组结构
生成模板参数时，format为content_index的字段依据此数组选择匹配的索引，用于决定相应内容出现在动画中的时机

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



## 输出格式（严格 JSON，不要 markdown 代码块）
补全当前模板的param,非数组：
{ "param": { ... } }
