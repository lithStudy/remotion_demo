# Scene Studio 口播文案生成 — 技术方案

**日期：** 2026-07-26  
**状态：** 设计草案（待审阅，未实施）  
**范围：** 在分镜工作台（Scene Studio）中增加「口播文案生成与迭代调整」能力，使其成为现有 Step0/Step1 之前的正式生产步骤。

---

## 1. 背景与问题

### 1.1 当前生产链路

```
[Cursor Agent + 人工经验写口播]
        ↓ 粘贴
narrations/{name}.txt
        ↓ Scene Studio / CLI
Step0 场景拆分草稿 → Step1 分镜脚本 → (后续 Step2–4)
```

Scene Studio 现状：

- 新建工程时用 textarea **粘贴**口播，落盘为 `narrations/{name}.txt`
- 工程首页以 `hasNarration` 作为「生成分镜」前置条件
- **没有**独立的口播读取/编辑/AI 生成入口
- 口播仅在「从 scripts 反推同步」时可能被回写

### 1.2 现状调研结论（skill / 资产）

| 资产 | 作用 | 与「写口播」关系 |
|------|------|------------------|
| `.cursor/skills/generate-scene-scripts` | 口播 → scene-scripts（三阶段） | **下游消费者**；硬性约束「原文零修改」 |
| `.cursor/skills/scene-scripts-templates` | 模板选型与 param 规范 | 间接约束口播切分粒度（镜头时长、对比句式等） |
| `narrator_pipeline/analysis/prompts/step1/*` | Step0/1 的 LLM prompt | 含 topic/钩子调性，**不负责成稿** |
| `docs/分镜指南.md` | 注意力/分镜节奏研究 | 可提炼为「写口播时要给分镜留呼吸点」的约束 |
| `narrations/*.txt`（约 30 篇） | 真实成稿语料 | 风格锚点：口语、钩子开场、空行分段、知识/立场解说 |
| **专用「生成口播文案」skill** | — | **仓库内不存在** |

历史工作流中，口播成稿主要依赖 Cursor 对话式改写（选题 → 成稿 → 审稿改口语化/完播），规则散落在对话经验与样例文案中，**尚未产品化为可复用的 prompt/skill 资产**。这是本方案必须先补齐的缺口。

### 1.3 目标

1. 在 Scene Studio 内完成：选题/素材输入 → AI 生成口播 → 人工/AI 迭代调整 → 确认落盘。
2. 确认后的口播继续走现有 Step0/1，契约不变。
3. 把「写口播」的规则从对话经验收敛为**单一真相源**（skill + 管线 prompt），Cursor Agent 与 Scene Studio 共用。

### 1.4 非目标（本期不做）

- Step2 TTS / Step3 生图 / Step4 代码生成进 Studio
- Remotion 实时预览
- 多用户协作、版本分支合并 UI
- 自动从口播直接跳过人工确认去跑 Step1（默认必须确认）

---

## 2. 产品定位与领域用语

建议在 `CONTEXT.md` 增补（实施时同步）：

- **口播生成（Narration Generation）**：由选题/brief（简报）产出 `narrations/{name}.txt` 的能力；位于分析域之前，不修改 scene-scripts 契约。
- **口播简报（Narration Brief）**：生成口播所需的结构化输入（主题、立场、素材要点、时长档位、语气等）。
- **口播修订（Narration Refine）**：在已有正文上按指令局部或全文改写，不改变工程名。

与现有用语边界：

- 「口播文案」仍是源文本资产；生成步骤只是它的生产入口。
- 「局部参数重生」只动 item.param；口播修订只动 `.txt`（及可选会话草稿），二者不得混用同一 API。

---

## 3. 推荐用户流程

```
工程列表
  ├─ 新建工程（可无口播 / 或仅填工程名）
  └─ 打开工程
        ↓
【口播工作台】← 新增主步骤
  1. 填写口播简报（或粘贴素材）
  2. 生成初稿（可多候选）
  3. 编辑正文 + 对话式修订指令
  4. 可选：结构/完播体检（只读建议，不自动改稿）
  5. 确认落盘 narrations/{name}.txt
        ↓
现有：生成分镜（Step0 → 可选草稿审阅 → Step1）
        ↓
现有：编辑脚本 / 导出 ZIP
```

入口建议：

- 工程首页「状态」中口播芯片可点入口播工作台
- 新建时可二选一：**粘贴成稿**（兼容旧路径）/ **AI 生成**（进入口播工作台）
- 已有 `hasScripts` 时改口播：必须显式提示「下游草稿/脚本将过期」，见 §7

---

## 4. 总体架构（推荐默认）

### 4.1 分层

```
scene_studio (SPA)
  └─ NarrationScreen（口播工作台）
         │ 全 POST *Param
         ▼
narrator_pipeline.web (FastAPI)
  ├─ narration CRUD（读/写 .txt）
  ├─ narration generate / refine（LLM）
  └─ 复用 jobs 单飞 或 同步短请求（见 §6）
         │
         ▼
narrator_pipeline.narration（新能力域，推荐）
  ├─ brief schema
  ├─ prompts/*.md          ← 与 skill references 同源或生成同步
  ├─ generate / refine 函数
  └─ 可选 critique（体检）只返回建议
         │
         ▼
narrations/{name}.txt      ← 唯一成稿契约（与 CLI/ZIP 一致）
```

### 4.2 为何新增能力域 `narration`，而不是塞进 `analysis`

- `analysis` 的硬约束是「原文零修改」；写口播是「允许改写」的创作域，混放易污染 prompt/校验心智。
- Step 门面编号可保持 Step0–4 不动；口播生成作为 **StepN / Pre-Step** 产品步骤，不必强行叫 Step−1 进 CLI（见 §6 方案）。

### 4.3 Skill 与 Prompt 同源策略（强烈建议先做）

在写任何 UI 之前，先沉淀：

```
.cursor/skills/generate-narration/
  SKILL.md
  references/
    BRIEF.md           # 简报字段与默认值
    VOICE_AND_STRUCTURE.md  # 口语、钩子、分段、时长、禁区
    REFINE.md          # 修订指令类型与输出格式
    CRITIQUE.md        # 可选体检维度
    EXAMPLES.md        # 从 narrations/ 精选 2–3 篇「好稿」特征说明（非整篇拷贝进 prompt）
```

管线侧：

```
narrator_pipeline/narration/prompts/
  generate.md
  refine.md
  critique.md   # 可选
```

**同步方式三选一（实施前定一种）：**

| 方案 | 做法 | 优点 | 缺点 |
|------|------|------|------|
| **A. Skill 为源，导出到 prompts**（推荐） | 类似 `export_template_meta_skill`，从 skill references 生成/校验 prompts | Cursor 与 Studio 一致；改规则一处生效 | 需维护导出脚本 |
| **B. prompts 为源，skill 只链到文件** | skill 正文写「读取 `narrator_pipeline/narration/prompts/...`」 | 管线改完即生效 | Cursor skill 可读性略差 |
| **C. 双份手写** | 两边各维护一份 | 无脚本 | 必漂移，不推荐 |

**默认推荐：A。**

成稿质量规则应吸收（摘要，细节落 skill）：

- 口语优先，忌「写稿腔」与廉价营销词（对齐现有 topic 禁区）
- 开头单钩子，避免开场信息过载
- 空行分段，对应后续 scene 级叙事转折（利于 Step0）
- 句长服务口播：兼顾 `generate-scene-scripts` 中「镜头 3–8 秒 / 约 12–40 字」的可切分性，但**成稿阶段不强制切 item**
- 情绪有起伏：抓 → 解释 → 落，避免全程高压
- 可选时长档：约 60s / 90s / 120s（按 4–5 字/秒换算字数目标）

---

## 5. 数据模型

### 5.1 成稿（不变）

- 路径：`{project_root}/narrations/{name}.txt`
- 编码：UTF-8；落盘时 `strip` + 末尾换行（与 `create_project` 一致）
- 正文即为 TTS/Step0 的唯一真相；**不在正文嵌入 JSON**

### 5.2 口播简报与会话态（需选型）

不确定「简报/历史是否落盘」。三方案：

| 方案 | 存储 | 适用 |
|------|------|------|
| **N1. 仅内存+成稿**（最简） | 前端持有 brief；只把最终正文写入 `.txt` | 第一期最快；刷新丢对话 |
| **N2. 工程侧会话文件**（推荐） | `src/remotions/{name}/scenes/narration-session.json` | 可恢复；随 ZIP 导出；不污染 `narrations/` |
| **N3. 独立会话库** | `WORKSPACE_ROOT/.scene-studio/narration-sessions/{name}.json` | 与成片目录解耦 | ZIP 默认不带会话，需另规则 |

**默认推荐：N2。**

建议 `narration-session.json` 最小字段：

```json
{
  "version": 1,
  "brief": {
    "topic": "群体动力学",
    "angle": "评论区站队是部落表演",
    "materials": ["事故视频无品牌仍被贴标", "内群体偏好", "勒庞"],
    "durationHint": "90s",
    "tone": "冷静犀利、非爹味",
    "mustInclude": [],
    "mustAvoid": []
  },
  "draftText": "……当前编辑器正文……",
  "confirmedTextHash": null,
  "history": [
    {
      "id": "…",
      "role": "user|assistant|system",
      "kind": "generate|refine|critique|note",
      "content": "…",
      "createdAt": "ISO-8601"
    }
  ],
  "candidates": [
    { "id": "…", "label": "A", "text": "…" }
  ]
}
```

说明：

- `draftText` 可与 `.txt` 不一致；**只有用户点「确认落盘」才写 `.txt`**
- `confirmedTextHash` 用于检测「已确认后又改草稿」
- `history` 是否截断：建议上限（如最近 50 条）防止文件膨胀

### 5.3 简报字段（Brief）— 可分档

| 字段 | 必填？ | 说明 |
|------|--------|------|
| `topic` | 是 | 主题/事件 |
| `angle` | 推荐 | 核心立场或反常识结论 |
| `materials` | 否 | 要点/素材列表 |
| `durationHint` | 否 | `60s` \| `90s` \| `120s` \| `custom` |
| `tone` | 否 | 语气 |
| `mustInclude` / `mustAvoid` | 否 | 硬约束短语 |
| `referenceUrls` / 粘贴长素材 | 否 | 见 §6.4 素材处理 |

第一期可只暴露：`topic` + `angle` + `materials`（多行）+ `durationHint`。

---

## 6. 后端与 API 设计

全局约束延续：全部 POST；参数包在 `*Param`；不用 Map；异常上抛框架层（与现有 web 一致）。

### 6.1 读写口播（无 LLM）

| 接口 | Param | 行为 |
|------|-------|------|
| `/api/narration/get` | `GetNarrationParam{ name }` | 返回 `{ text, session? }` |
| `/api/narration/save-draft` | `SaveNarrationDraftParam{ name, draftText, brief? }` | 只写 session，不写 `.txt` |
| `/api/narration/confirm` | `ConfirmNarrationParam{ name, text, brief? }` | 写 `.txt`；更新 session；若已有 draft/scripts 返回 `staleDownstream: true` |

兼容改造：

- `CreateProjectParam.narrationText` 改为可选；允许「只建名、后写口播」
- 或新增 `CreateProjectParam.mode: paste | empty | generate`

### 6.2 生成 / 修订调用形态（需选型）

| 方案 | 形态 | 优点 | 缺点 |
|------|------|------|------|
| **J1. 同步请求**（类似 `regen_param`） | 请求内调 LLM，直接返回正文 | 实现简单；适合 90s 级文案 | 超时风险；占 worker |
| **J2. 复用全局单飞 Job**（推荐默认） | `kind=narration_generate\|narration_refine`，复用 `jobs.py` | 与现有进度页一致；可日志 | 全局单飞，生成口播会堵住分镜生成 |
| **J3. 独立口播 Job 队列** | 与 generate 分锁 | 互不堵塞 | 复杂度高，第一期过重 |

**默认推荐：J2**；若实测耗时稳定 &lt; 60s，可对 refine 用 J1、对首次 generate 用 J2。

超时：现有 `JOB_TIMEOUT_SEC=600` 足够；口播可单独更短（如 180s）。

### 6.3 建议 API 清单

```
POST /api/narration/get
POST /api/narration/save-draft
POST /api/narration/confirm
POST /api/narration/generate/start   → { jobId } 或同步 { text, candidates }
POST /api/narration/refine/start     → 同上
POST /api/narration/critique         → { findings: [...] }  可选，同步
```

GenerateParam 示例字段：

```text
GenerateNarrationParam:
  name: str
  brief: NarrationBriefParam
  llmProvider?: str
  llmModel?: str
  candidateCount?: int   # 默认 1；方案见下
```

RefineParam 示例字段：

```text
RefineNarrationParam:
  name: str
  baseText: str          # 以客户端当前正文为准，避免脏读
  instruction: str       # 用户自然语言修订指令
  selection?: { start: int, end: int }  # 可选局部范围（字符下标）
  llmProvider?: str
  llmModel?: str
```

### 6.4 候选稿数量

| 方案 | 行为 |
|------|------|
| **C1. 单稿**（推荐第一期） | 一次生成一篇，进入编辑器 |
| **C2. 2–3 候选** | 一次返回多篇，UI 卡片挑选再进入编辑 |
| **C3. 先大纲后成稿** | 两阶段：outline JSON → 用户确认 → expand 正文 |

**默认推荐：C1 + 后续可加 C3。**  
C3 更贴近「Cursor 里先聊结构再写全文」，质量通常更好，但交互多一屏。

### 6.5 素材过长时的处理

| 方案 | 行为 |
|------|------|
| **M1. 硬限制** | brief/materials 超 N 字直接 400（符合「无兜底」） |
| **M2. 先摘要再写** | 额外 LLM 步 compress materials → 再 generate |
| **M3. 仅允许要点列表** | UI 限制为条目，不接长文 |

**默认推荐：M1（明确上限，如 materials 合计 4k 字）**；若业务常贴长文再上 M2。

### 6.6 CLI 是否暴露

| 方案 | 说明 |
|------|------|
| **L1. 仅 Web**（推荐第一期） | CLI 仍假设 `.txt` 已存在 |
| **L2. `python -m narrator_pipeline.narration --name …`** | 与 Studio 共用函数，便于回归 |

---

## 7. 与下游步骤的一致性

口播是 Step0/1 的源。改口播后的策略必须明确（勿静默兜底）：

| 方案 | 行为 |
|------|------|
| **D1. 确认时若存在 draft/scripts → 拒绝，要求先删** | 最硬；安全 |
| **D2. 确认时标记 stale，首页强提示「需重新生成分镜」**（推荐） | 不自动删产物；用户显式再点生成 |
| **D3. 确认时自动删除 draft/scripts** | 省事；易误伤 |

**默认推荐：D2。**  
`force` 重跑 Step0/1 仍走现有 generate 参数。

从 scripts 反推更新口播（已有 sync）与本功能关系：

- sync：scripts → narration（结构化回写）
- 本功能：brief/对话 → narration（创作）
- 二者都写 `.txt`；UI 上应避免同时打开两套编辑而不刷新

---

## 8. 前端方案

### 8.1 信息架构

新增 screen：`narration`（或 `NarrationScreen`）。

工程首页增加动作砖：「编辑/生成口播」。

口播工作台布局（单职责任）：

1. 左/上：Brief 表单  
2. 中：正文大编辑器（纯文本，保留空行）  
3. 下或侧：修订指令输入 + 历史  
4. 底栏：生成 / 修订 / 保存草稿 / 确认落盘 / 返回

不把口播编辑塞进 ScriptsShell（脚本编辑是另一阶段）。

### 8.2 交互模式（需选型）

| 方案 | 形态 | 优点 | 缺点 |
|------|------|------|------|
| **U1. 表单生成 + 指令修订**（推荐） | 非聊天气泡；历史为时间线 | 贴合 Studio「表单优先」ADR-0003 | 对话感弱于 Cursor |
| **U2. 完整 Chat** | 类 ChatGPT | 最接近现有 Cursor 习惯 | 与 Studio 视觉语言不一致；状态难控 |
| **U3. 双模** | 默认 U1，可切换 Chat | 灵活 | 两套状态，第一期过重 |

**默认推荐：U1。**  
修订指令用预设芯片降低输入成本，例如：`更口语` `缩短到90秒` `加强开头钩子` `降低攻击性` `结尾给可执行建议` `按空行分成3段叙事`。

### 8.3 体检（Critique）是否做

| 方案 | 说明 |
|------|------|
| **K1. 不做**（第一期可砍） | 只靠人眼 |
| **K2. 只读建议列表**（推荐二期） | 维度对齐历史审稿：开头钩子、口语度、情绪密度、结尾落地、过满判断、预估时长 |
| **K3. 一键按建议改** | 体验好，但易「兜底式乱改」；与项目「无擅自兜底」冲突，不建议默认自动应用 |

---

## 9. Prompt / LLM 行为设计

### 9.1 生成（generate）

输入：brief + 风格规则 +（可选）好稿特征摘要。  
输出：**纯口播正文**（可允许首行 `# 深度口播文案：xxx`，但需在 skill 中规定是否剥离后再进 Step0）。

关于标题行：

| 方案 | 说明 |
|------|------|
| **H1. 禁止标题行**（推荐） | 正文即口播，避免 Step0 把标题当解说 |
| **H2. 允许但 confirm 时剥离** | 兼容部分旧文案习惯 |
| **H3. 保留** | 与部分 `narrations/` 样例一致，但污染 TTS |

样例库中两者都有；**默认 H1**，旧文件不强制迁移。

### 9.2 修订（refine）

输入：`baseText` + `instruction` + 可选选区。  
输出：整篇修订后正文（局部修订也返回全文，避免前端拼接错误）。  
禁止模型「顺便」输出 markdown 解释；解释走 `history` 里单独 `note` 字段或第二通道。

输出协议建议：

```json
{ "text": "全文…", "summaryOfChanges": "一句话说明改了什么" }
```

若坚持「无兜底」，JSON 解析失败应直接报错，不尝试截取代码块容错——但现有管线已有 `parse_json_from_response`；**建议复用现有解析器**以与 Step0/1 一致，并在文档中写明。

### 9.3 模型与配置

复用 `create_llm_runtime` / `config.json` 的 `llm_provider` 与各 model 字段；请求可覆盖 `llmProvider` / `llmModel`（与 generate Step0/1 一致）。

温度：创作域可略高于分析域（具体数值实施时定，需可配置）。

---

## 10. 与 Cursor Skill 工作流的对齐

目标体验对应关系：

| Cursor 今天 | Studio 明天 |
|-------------|-------------|
| 用户描述选题 | Brief 表单 |
| Agent 读 skill/经验写全文 | `generate` + `generate-narration` skill/prompt |
| 用户说「更口语/缩短」 | Refine 指令 + 预设芯片 |
| 用户审稿挑问题 | Critique（二期）或人工 |
| 写入 `narrations/*.txt` | Confirm 落盘 |
| 再跑 generate-scene-scripts / Step0–1 | 现有「生成分镜」 |

实施顺序建议：

1. 沉淀 `generate-narration` skill（规则可跑通 Cursor）  
2. 导出 prompts + Python `narration` 域函数  
3. Web API + Job  
4. NarrationScreen  
5. 改造新建工程/首页入口  
6. （可选）Critique、多候选、大纲两阶段  

---

## 11. 推荐默认组合（汇总）

| 决策点 | 推荐 |
|--------|------|
| Skill/Prompt 同源 | A. Skill 为源并导出 |
| 会话存储 | N2. `narration-session.json` |
| LLM 调用 | J2. 复用单飞 Job（refine 可后期改同步） |
| 候选策略 | C1. 单稿；二期考虑 C3 大纲 |
| 素材过长 | M1. 硬限制报错 |
| 下游过期 | D2. 标记 stale + 强提示 |
| UI | U1. 表单 + 指令修订 |
| 标题行 | H1. 禁止写入成稿 |
| CLI | L1. 第一期仅 Web |
| Critique | K2 二期 |

若只做一个垂直切片（MVP）：

1. skill 最小集（VOICE_AND_STRUCTURE + BRIEF + REFINE）  
2. `confirm` / `get` / `generate` / `refine`  
3. NarrationScreen（U1 + C1 + N2）  
4. 首页入口 + 新建可选空口播  

---

## 12. 风险与验收

### 12.1 风险

- 规则未产品化 → 成稿质量不稳：必须先 skill 再接 UI  
- 改口播忘记重跑 Step0/1 → stale 提示必须醒目  
- 全局单飞 Job 被长生成占用 → 进度文案标明 kind  
- 模型输出夹带说明文字 → 严格输出协议 + 失败即报错  

### 12.2 MVP 验收

1. 新建工程（可无粘贴）→ 填 brief → 生成 → 编辑 → 确认后 `narrations/{name}.txt` 存在且内容一致  
2. refine「更口语」后正文变化，session history 可回看  
3. 确认后点「生成分镜」可跑通现有 Step0（pause 可选）  
4. 已有 scripts 时再 confirm，UI 出现 stale 提示，且不自动删脚本  
5. ZIP 导出含 `.txt`；若采用 N2，导出含 `narration-session.json`（或文档明确排除）  
6. Cursor 侧用同一 skill 仍可离线写稿，规则不冲突  

---

## 13. 文件影响预估（实施期）

**新增**

- `.cursor/skills/generate-narration/**`
- `narrator_pipeline/narration/**`
- `scene_studio/src/screens/NarrationScreen.tsx`（及少量组件）
- `docs/adr/0004-…`（可选，确认默认组合后）

**修改**

- `CONTEXT.md`（用语）
- `narrator_pipeline/web/{app,schemas,workspace,jobs}.py`
- `scene_studio/src/{App,api,types,ProjectHome,ProjectList}.tsx`
- 可能：`CreateProjectParam` 语义

**不修改（刻意）**

- Step1 AI 阶段语义、scene-scripts 契约、模板注册表  

---

## 14. Spec 自检记录

- 无 TBD 占位；不确定点均以「方案表 + 默认推荐」闭合  
- 与 ADR-0003「表单优先」一致（选 U1）  
- 与「原文零修改」边界清晰：仅在口播域允许改写；进入 analysis 后仍零修改  
- 范围可落为一个实施计划（MVP）+ 二期增强（Critique / 大纲 / 多候选）  

---

## 15. 下一步

审阅本设计并确认 §11 默认组合（或点名替换某决策点）后，再拆 implementation plan（实施计划）并开工。未确认前不改业务代码。
