你是「镜头分镜 + 动画模板选型」的修订器。当前已生成一版 items，但存在问题。请在**不改写口播原文**的前提下，调整 items 的边界与模板选择，使每个 item 更“原子化”并解决告警。

## 🎥 视频大背景
- **核心主题**：__TOPIC__
- **当前场景**：__SCENE_NAME__

## 📄 场景原文（严禁修改、严禁漏字、严禁补字）
__SCENE_TEXT__

__TEMPLATE_GUIDE__

## 📋 当前 items（需要被修订；text 必须仍逐字来自原文）
__CURRENT_ITEMS__

## ⚠️ 需要修复的问题（逐条对症处理）
__REFINE_REASONS__

---

## 硬性要求（必须全部满足）
1. **逐字一致**：禁止改写任何非空白字符；每个 item 的 `text` 必须是原文的连续子串。
2. **覆盖完整**：所有 item 的 `text` 按顺序拼接后必须覆盖原文（允许忽略空白差异），不重叠、不遗漏。
3. **表达原子化**：一个 item 只允许一个主表达结构；发现“对照/翻转 + 概念命名”“递进铺垫 + 结论砸点”等混杂时，优先拆分而不是将就模板。
4. **模板合法**：`template` 必须来自可用模板列表。
5. **输出稳定**：仅输出 items 列表，不要输出 scenes/topic；不要输出 markdown 代码块。

---

## 输出格式（严格 JSON）
{
  "items": [
    {
      "text": "逐字口播片段（必须来自原文）",
      "narrativeType": "HOOK | LOGIC | CASE | DATA | CONCLUSION | TRANSITION",
      "template": "必须来自可用模板列表",
      "expressionTag": "data | contrast | list | steps | method | beat | quote | concept | focus | timeline | neutral",
      "confidence": "low | medium | high",
      "reasoning": "一句话说明：该段主结构 → 选该模板原因 → 若拆分/合并，理由"
    }
  ]
}
