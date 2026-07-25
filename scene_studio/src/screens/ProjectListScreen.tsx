import { useState } from "react";
import type { ProjectInfo } from "../api";
import { api } from "../api";
import { AppShell } from "../components/AppShell";

type Props = {
  projects: ProjectInfo[];
  createName: string;
  createText: string;
  pauseAfterStep0: boolean;
  setCreateName: (v: string) => void;
  setCreateText: (v: string) => void;
  setPauseAfterStep0: (v: boolean) => void;
  onRefresh: () => Promise<void>;
  onOpenProject: (name: string) => void;
  onLogout: () => void;
  onError: (e: string | null) => void;
  error: string | null;
};

export function ProjectListScreen(props: Props) {
  const [creating, setCreating] = useState(false);

  return (
    <AppShell
      title="Scene Studio"
      subtitle="工程"
      error={props.error}
      actions={
        <>
          <button type="button" onClick={() => props.onRefresh()}>
            刷新
          </button>
          <button type="button" onClick={props.onLogout}>
            退出
          </button>
        </>
      }
    >
      <div className="stack-gap">
        <div className="row between">
          <h2 className="section-title">工程列表</h2>
          <button
            type="button"
            className="primary"
            onClick={() => setCreating((v) => !v)}
          >
            {creating ? "收起新建" : "新建工程"}
          </button>
        </div>

        {creating ? (
          <section className="panel">
            <h3 className="panel-title">新建</h3>
            <div className="field">
              <label className="field-label">工程名</label>
              <input
                placeholder="name"
                value={props.createName}
                onChange={(e) => props.setCreateName(e.target.value)}
              />
            </div>
            <div className="field">
              <label className="field-label">口播文案</label>
              <textarea
                rows={7}
                placeholder="粘贴口播文案"
                value={props.createText}
                onChange={(e) => props.setCreateText(e.target.value)}
              />
            </div>
            <label className="check">
              <input
                type="checkbox"
                checked={props.pauseAfterStep0}
                onChange={(e) => props.setPauseAfterStep0(e.target.checked)}
              />
              生成时 Step0 后暂停审阅草稿
            </label>
            <div className="row sticky-actions">
              <button
                type="button"
                className="primary btn-block"
                onClick={async () => {
                  try {
                    props.onError(null);
                    await api.createProject(props.createName, props.createText);
                    const name = props.createName.trim();
                    props.setCreateName("");
                    props.setCreateText("");
                    setCreating(false);
                    await props.onRefresh();
                    if (name) props.onOpenProject(name);
                  } catch (e) {
                    props.onError(String(e));
                  }
                }}
              >
                创建并打开
              </button>
            </div>
            <label className="file-import">
              <span>或导入 ZIP</span>
              <input
                type="file"
                accept=".zip"
                onChange={async (e) => {
                  const f = e.target.files?.[0];
                  if (!f) return;
                  try {
                    props.onError(null);
                    await api.importProject(f);
                    await props.onRefresh();
                  } catch (err) {
                    props.onError(String(err));
                  } finally {
                    e.target.value = "";
                  }
                }}
              />
            </label>
          </section>
        ) : null}

        <section className="project-list">
          {props.projects.length === 0 ? (
            <p className="muted empty-hint">暂无工程，点右上角新建</p>
          ) : null}
          {props.projects.map((p) => (
            <button
              type="button"
              className="project-card"
              key={p.name}
              onClick={() => props.onOpenProject(p.name)}
            >
              <div className="project-card-head">
                <strong>{p.name}</strong>
                <span className="chevron">›</span>
              </div>
              <div className="muted project-meta">
                {p.topic || "无 topic"}
              </div>
              <div className="status-chips">
                <span className={p.hasNarration ? "chip ok" : "chip"}>口播</span>
                <span className={p.hasDraft ? "chip ok" : "chip"}>草稿</span>
                <span className={p.hasScripts ? "chip ok" : "chip"}>脚本</span>
              </div>
            </button>
          ))}
        </section>
      </div>
    </AppShell>
  );
}
