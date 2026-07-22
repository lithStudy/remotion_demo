# 口播视频管线（Narrator Pipeline）

将口播文案转化为 Remotion 动画视频的自动化管线：分析脚本、生成配图与语音、再生成 Composition 代码。

## Language

**口播文案（Narration）**：
作为管线输入的源文本内容资产（通常为 `.txt`），不是管线实现代码。
_Avoid_: 脚本（单独使用时易与 scene-scripts 混淆）, 文案文件（过泛）

**口播文案库（narrations/）**：
仓库根下存放口播文案的约定目录；管线通过输入路径读取，不把文案视为包内模块。
_Avoid_: 把口播稿放在管线包根目录

**口播视频管线（Narrator Pipeline）**：
从口播文案到 Remotion 工程产物的端到端自动化系统；代码落在稳定目录 `narrator_pipeline/`。
_Avoid_: script_v6（历史目录名）, script_vN

**步骤（Step）**：
对外编排与运维的阶段门面（Step0–4），可用 `--start` / `--only` 选择；不是对内模块切分的主轴。
_Avoid_: 用 Step 目录名替代能力域

**能力域（Capability）**：
管线对内的代码边界：`analysis`、`images`、`audio`、`codegen`、`contracts`，以及 `cli` 与顶层编排。
_Avoid_: 仅按 step0–step4 文件夹堆实现

**场景拆分草稿（Scene Split Draft）**：
Step0 产出的中间稿，供 Step1 继续分析（如 `scene-split-draft.json`）。
_Avoid_: 与 scene-scripts 混称「脚本」

**分镜脚本（Scene Scripts）**：
串联各步骤的核心契约文档（`scene-scripts.json`）：场景、item、模板与 param 等。
_Avoid_: layout 脚本（旧称）, 分镜 JSON（过泛）

**分析域（analysis）**：
从口播文案 / 场景拆分草稿生成并完善分镜脚本的能力（对应 Step0–1）。
_Avoid_: step1_analysis（历史包名，可映射但不再作对外用语）

**配图域（images）**：
按分镜脚本中的图像字段生成并落盘图片资产的能力（对应 Step3）。
_Avoid_: media（若未再聚合时）

**语音域（audio）**：
按分镜脚本合成并落盘语音、写回时间轴相关字段的能力（对应 Step2）。
_Avoid_: TTS 模块（实现细节用语）

**代码生成域（codegen）**：
由分镜脚本生成 Remotion Composition / Scene 代码的能力（对应 Step4）。
_Avoid_: remotion 生成器（过泛）

**契约域（contracts）**：
分镜脚本与草稿的校验、规范化，以及模板注册表等契约侧适配；不改变对外字段语义本身。
_Avoid_: utils（过泛）, validation 脚本（片面）
