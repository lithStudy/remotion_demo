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
  onOpenDraft: () => Promise<void>;
  onOpenScripts: () => Promise<void>;
  onOpenJob?: () => void;
  onDeleted: () => Promise<void>;
  onError: (e: string | null) => void;
  error: string | null;
};

export function ProjectHomeScreen(props: Props) {
  const p = props.project;
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
            {props.activeJob ? "重新生成分镜" : "生成分镜"}
          </button>
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
