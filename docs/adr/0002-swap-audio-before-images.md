# 管线 Step2/Step3 对调：先语音后配图

编排顺序改为 Step2 语音合成（写时间轴），Step3 再配图。能力域仍为 `audio` / `images`，仅对外步骤号与模块文件名（`audio.step2`、`images.step3`）随编排调整。先前 ADR-0001 中「images≈Step2、audio≈Step3」的对应关系以此为准作废。

**Status:** accepted
