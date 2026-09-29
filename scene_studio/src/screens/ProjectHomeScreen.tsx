import { useState } from "react";
import type { JobStatus, ProjectInfo } from "../api";
import { api } from "../api";
import { AppShell } from "../components/AppShell";

type Props = {
  project: ProjectInfo;
  pauseAfterStep0: boolean;
  setPauseAfterStep0: (v: boolean) => void;
  activeJob?: JobStatus | null;
  onBack: () => void;
  onGenerate: () => Promise<void>;
  onGenerateFromScratch: () => Promise<void>;
  onOpenDraft: () => Promise<void>;
  onOpenScripts: () => Promise<void>;
  onOpenJob?: () => void;
  onRunSteps: (startStep: 2 | 3 | 4, only: boolean) => Promise<void>;
  generationBusy: boolean;
  previewStarting: boolean;
  previewReady: boolean;
  onOpenPreview: (compositionId: string) => void;
  onOpenReadyPreview: () => void;
  onDeleted: () => Promise<void>;
  onError: (e: string | null) => void;
  error: string | null;
};

export function ProjectHomeScreen(props: Props) {
  const p = props.project;
  const [startStep, setStartStep] = useState<2 | 3 | 4>(4);
  const [onlyStep, setOnlyStep] = useState(true);
  const [previewKind, setPreviewKind] = useState<
    "横屏" | "竖屏" | "封面横屏" | "封面竖屏"
  >("横屏");
  const stepsBusy = props.generationBusy;
  return (
    <AppShell
      title={p.name}
      subtitle={p.topic || "工程工作台"}
      onBack={props.onBack}
      backLabel="工程列表"
      error={props.error}
    >
      <div className="stack-gap">
        <section className="panel">
          <h3 className="panel-title">状态</h3>
          <div className="status-chips large">
            <span className={p.hasNarration ? "chip ok" : "chip"}>
              口播 {p.hasNarration ? "已有" : "缺失"}
            </span>
            <span className={p.hasDraft ? "chip ok" : "chip"}>
              草稿 {p.hasDraft ? "已有" : "无"}
            </span>
            <span className={p.hasScripts ? "chip ok" : "chip"}>
              脚本 {p.hasScripts ? "已有" : "无"}
            </span>
          </div>
        </section>

        <section className="panel">
          <h3 className="panel-title">生成</h3>
          {props.activeJob ? (
            <p className="muted" style={{ marginBottom: 8 }}>
              进行中：{props.activeJob.phase}
              {props.onOpenJob ? (
                <>
                  {" · "}
                  <button
                    type="button"
                    onClick={props.onOpenJob}
                    style={{
                      background: "none",
                      border: "none",
                      padding: 0,
                      color: "inherit",
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    查看任务
                  </button>
                </>
              ) : null}
            </p>
          ) : null}
          <label className="check">
            <input
              type="checkbox"
              checked={props.pauseAfterStep0}
              onChange={(e) => props.setPauseAfterStep0(e.target.checked)}
            />
            Step0 后暂停审阅草稿
          </label>
          <button
            type="button"
            className="primary btn-block"
            disabled={!p.hasNarration}
            onClick={() => props.onGenerate().catch((e) => props.onError(String(e)))}
          >
            {p.hasStep1Checkpoint
              ? "续跑 Step1"
              : props.activeJob
                ? "重新生成分镜"
                : "生成分镜"}
          </button>
          {p.hasStep1Checkpoint ? (
            <button
              type="button"
              className="btn-block"
              style={{ marginTop: 8 }}
              disabled={!p.hasNarration}
              onClick={() =>
                props.onGenerateFromScratch().catch((e) => props.onError(String(e)))
              }
            >
              从头生成分镜
            </button>
          ) : null}
          {p.hasStep1Checkpoint ? (
            <p className="muted" style={{ marginTop: 8 }}>
              已检测到 Step1 断点；续跑不会重跑场景拆分。
            </p>
          ) : null}
        </section>

        <section className="panel">
          <h3 className="panel-title">成片步骤</h3>
          <select
            value={startStep}
            disabled={!p.hasScripts || stepsBusy}
            onChange={(e) =>
              setStartStep(Number(e.target.value) as 2 | 3 | 4)
            }
          >
            <option value={2}>Step 2 语音合成</option>
            <option value={3}>Step 3 配图生成</option>
            <option value={4}>Step 4 代码生成</option>
          </select>
          <label className="check">
            <input
              type="checkbox"
              checked={onlyStep}
              disabled={!p.hasScripts || stepsBusy}
              onChange={(e) => setOnlyStep(e.target.checked)}
            />
            只跑这一步
          </label>
          <button
            type="button"
            className="primary btn-block"
            disabled={!p.hasScripts || stepsBusy}
            onClick={() =>
              props
                .onRunSteps(startStep, onlyStep)
                .catch((e) => props.onError(String(e)))
            }
          >
            {onlyStep ? `只跑 Step ${startStep}` : `从 Step ${startStep} 跑到 Step 4`}
          </button>
          <select
            value={previewKind}
            disabled={props.previewStarting}
            onChange={(e) =>
              setPreviewKind(
                e.target.value as "横屏" | "竖屏" | "封面横屏" | "封面竖屏",
              )
            }
            style={{ marginTop: 8 }}
          >
            <option value="横屏">横屏</option>
            <option value="竖屏">竖屏</option>
            <option value="封面横屏">封面横屏</option>
            <option value="封面竖屏">封面竖屏</option>
          </select>
          <button
            type="button"
            className="btn-block"
            style={{ marginTop: 8 }}
            disabled={props.previewStarting}
            onClick={() => props.onOpenPreview(`${p.name}${previewKind}`)}
          >
            {props.previewStarting ? "正在启动预览…" : "打开预览"}
          </button>
          {props.previewReady ? (
            <button
              type="button"
              className="primary btn-block"
              style={{ marginTop: 8 }}
              onClick={props.onOpenReadyPreview}
            >
              预览已就绪，打开
            </button>
          ) : null}
          <p className="muted" style={{ marginTop: 8 }}>
            默认只跑选中的这一步。取消勾选后，会从选中的步骤跑到 Step 4。打开预览会在 Studio 未运行时先启动它，已经在跑则不重启。
          </p>
        </section>

        <section className="action-grid">
          <button
            type="button"
            className="action-tile"
            disabled={!p.hasDraft}
            onClick={() => props.onOpenDraft().catch((e) => props.onError(String(e)))}
          >
            <strong>审阅草稿</strong>
            <span className="muted">Step0 场景拆分</span>
          </button>
          <button
            type="button"
            className="action-tile primary-tile"
            disabled={!p.hasScripts}
            onClick={() => props.onOpenScripts().catch((e) => props.onError(String(e)))}
          >
            <strong>编辑脚本</strong>
            <span className="muted">模板与口播表</span>
          </button>
          <button
            type="button"
            className="action-tile"
            onClick={() =>
              api.exportProject(p.name).catch((e) => props.onError(String(e)))
            }
          >
            <strong>导出 ZIP</strong>
            <span className="muted">拉回本机仓库</span>
          </button>
          <button
            type="button"
            className="action-tile danger-tile"
            onClick={async () => {
              if (!confirm(`删除工程 ${p.name}？`)) return;
              try {
                await api.deleteProject(p.name);
                await props.onDeleted();
              } catch (e) {
                props.onError(String(e));
              }
            }}
          >
            <strong>删除工程</strong>
            <span className="muted">不可恢复</span>
          </button>
        </section>
      </div>
    </AppShell>
  );
}
