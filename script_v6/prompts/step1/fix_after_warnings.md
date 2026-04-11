你是短视频脚本 JSON 修订助手。下面初稿已通过结构解析，但校验器报告了部分问题。

## 口播原文（保证不丢失）
__TEXT__

## 校验告警（请对症修订）
__WARNINGS__

## 当前 JSON 初稿
__DRAFT__

## 模板要求
__TEMPLATE_GUIDE__

请输出**一份**修订后的完整 JSON：顶层含 `topic`、`scenes`（每 scene 含 `sceneId`、`sceneName`、`items`）。每个 item 含 `order`、`narrativeType`、`reasoning`、`template`、**`content`**（口播分句，**须与 DRAFT 对应项逐字一致**）、`param`。不要包含 `fps` 字段。

**硬性要求**：
1. 仅修告警相关字段；**不要改动任何 `content` 条目中的 `text`**。
2. **`param` 内禁止出现 `content` 或 `totalDurationFrames`**（二者只属于 item 顶层）。
3. 对使用 `anchors` 的模板：修正时 `showFrom` 须对应该 item 的 **`content` 数组** 的 0-based 合法下标。
4. `audioEffect` 只能出现在 `anchors` 条目上（**`TEXT_FOCUS` 不使用 `anchors`**）。
5. `TEXT_FOCUS` 的 `coreSentence` 仅为额外大屏句，**不能**代替 `content`；大屏关键词高亮须用 `coreSentenceAnchors`（每项 `coreSentenceAnchor` + 可选 `color`），**禁止**使用 `anchors` / `showFrom` / `audioEffect`。
6. 若告警涉及 `PANEL_GRID` 的 `panels` 条数：合并或删减宫格时，**按口播并列例子/真实分点**收紧（同一例子内多行 `content` 可共用同一 `showFrom`），并保证**覆盖至该 item 最后一条 `content`**；禁止仅删掉尾部 panel 凑条数而导致语义与前半段错位。

仅输出 JSON，不要 markdown 代码块。
