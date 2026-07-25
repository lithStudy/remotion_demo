import { useCallback, useEffect, useMemo, useState } from "react";
import {
  api,
  getToken,
  setToken,
  type JobStatus,
  type ProjectInfo,
  type TemplateInfo,
} from "./api";
import { ParamForm, syncParamArrayToContentLength, templateMap } from "./ParamForm";
import "./index.css";

type Page = "list" | "draft" | "scripts" | "job";

type ContentPiece = {
  text?: string;
  startFrame?: number;
  durationFrames?: number;
};

type Scene = {
  sceneId?: string;
  sceneName?: string;
  text?: string;
  items?: Item[];
};

type Item = {
  order?: number;
  template?: string;
  narrativeType?: string;
  reasoning?: string;
  content?: ContentPiece[];
  param?: Record<string, unknown>;
  totalDurationFrames?: number;
  groupKey?: string;
};

/** scenes → 场景扁平文案表 → param 页 */
type DrillLevel = "scenes" | "script" | "param";

function useIsNarrow(maxWidth = 900) {
  const [narrow, setNarrow] = useState(
    () => typeof window !== "undefined" && window.matchMedia(`(max-width: ${maxWidth}px)`).matches,
  );
  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${maxWidth}px)`);
    const onChange = () => setNarrow(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [maxWidth]);
  return narrow;
}

function reorderItemOrders(items: Item[]): Item[] {
  return items.map((it, i) => ({ ...it, order: i + 1 }));
}

function itemHasContent(it: Item): boolean {
  return (it.content || []).length > 0;
}

function sceneHasScriptContent(sc: Scene): boolean {
  return (sc.items || []).some(itemHasContent);
}

function syncItemsParamArrays(
  items: Item[],
  tmap: Map<string, TemplateInfo>,
): Item[] {
  return items.map((it) => {
    const t = it.template ? tmap.get(it.template) : undefined;
    const key = t?.paramArraySyncContent;
    if (!key) return it;
    return {
      ...it,
      param: syncParamArrayToContentLength(
        it.param || {},
        key,
        it.content?.length || 0,
        (t?.paramSchema as Record<string, unknown>) || {},
      ),
    };
  });
}

function moveContentAcrossItems(
  scenes: Scene[],
  sceneIdx: number,
  fromItemIdx: number,
  contentIdx: number,
  direction: -1 | 1,
): { scenes: Scene[]; itemIdx: number } | null {
  const scene = scenes[sceneIdx];
  if (!scene?.items) return null;
  const toItemIdx = fromItemIdx + direction;
  if (toItemIdx < 0 || toItemIdx >= scene.items.length) return null;

  const items = scene.items.map((it) => ({
    ...it,
    content: [...(it.content || [])],
    param: { ...(it.param || {}) },
  }));
  const fromItem = items[fromItemIdx];
  const toItem = items[toItemIdx];
  if (contentIdx < 0 || contentIdx >= (fromItem.content?.length || 0)) return null;

  const [piece] = fromItem.content!.splice(contentIdx, 1);
  if (direction === -1) {
    toItem.content!.push(piece);
  } else {
    toItem.content!.unshift(piece);
  }

  let selectItemIdx = toItemIdx;
  if (fromItem.content!.length === 0) {
    items.splice(fromItemIdx, 1);
    if (toItemIdx > fromItemIdx) selectItemIdx = toItemIdx - 1;
  }

  const nextScenes = [...scenes];
  nextScenes[sceneIdx] = { ...scene, items: reorderItemOrders(items) };
  return { scenes: nextScenes, itemIdx: selectItemIdx };
}

/** 在 contentIdx 处切开：该下标起（含）成为新 item */
function splitItemAt(
  scenes: Scene[],
  sceneIdx: number,
  itemIdx: number,
  contentIdx: number,
): Scene[] | null {
  const scene = scenes[sceneIdx];
  const item = scene?.items?.[itemIdx];
  if (!item) return null;
  const content = item.content || [];
  if (contentIdx <= 0 || contentIdx >= content.length) return null;
  const items = [...(scene.items || [])];
  items[itemIdx] = { ...item, content: content.slice(0, contentIdx) };
  items.splice(itemIdx + 1, 0, {
    order: 0,
    template: "TEXT_FOCUS",
    narrativeType: "LOGIC",
    content: content.slice(contentIdx),
    param: {},
  });
  const nextScenes = [...scenes];
  nextScenes[sceneIdx] = { ...scene, items: reorderItemOrders(items) };
  return nextScenes;
}
export default function App() {
  const [authed, setAuthed] = useState(Boolean(getToken()));
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [projects, setProjects] = useState<ProjectInfo[]>([]);
  const [templates, setTemplates] = useState<TemplateInfo[]>([]);
  const [page, setPage] = useState<Page>("list");
  const [current, setCurrent] = useState<string | null>(null);
  const [draft, setDraft] = useState<Record<string, unknown> | null>(null);
  const [scripts, setScripts] = useState<Record<string, unknown> | null>(null);
  const [selected, setSelected] = useState<{ sceneIdx: number; itemIdx: number | null }>({
    sceneIdx: 0,
    itemIdx: null,
  });
  const [job, setJob] = useState<JobStatus | null>(null);
  const [warnings, setWarnings] = useState<string[]>([]);
  const [pauseAfterStep0, setPauseAfterStep0] = useState(false);
  const [createName, setCreateName] = useState("");
  const [createText, setCreateText] = useState("");
  const [syncOpen, setSyncOpen] = useState(false);
  const [syncPreview, setSyncPreview] = useState<{
    draft: Record<string, unknown>;
    narrationText: string;
  } | null>(null);
  const [updateNarration, setUpdateNarration] = useState(true);

  const tmap = useMemo(() => templateMap(templates), [templates]);

  const refreshProjects = useCallback(async () => {
    const res = await api.listProjects();
    setProjects(res.projects);
  }, []);

  useEffect(() => {
    if (!authed) return;
    (async () => {
      try {
        const [p, t] = await Promise.all([api.listProjects(), api.listTemplates()]);
        setProjects(p.projects);
        setTemplates(t.templates);
      } catch (e) {
        setError(String(e));
        if (String(e).includes("401") || String(e).includes("token")) {
          setToken(null);
          setAuthed(false);
        }
      }
    })();
  }, [authed]);

  useEffect(() => {
    if (!job || job.status === "succeeded" || job.status === "failed") return;
    const id = window.setInterval(async () => {
      try {
        const st = await api.jobStatus(job.jobId);
        setJob(st);
        if (st.status === "succeeded") {
          await refreshProjects();
          if (st.phase === "awaiting_draft_review") {
            const d = await api.getDraft(st.name);
            setDraft(d.draft);
            setCurrent(st.name);
            setPage("draft");
          } else if (st.phase === "done") {
            const s = await api.getScripts(st.name);
            setScripts(s.scripts);
            setCurrent(st.name);
            setPage("scripts");
          }
        }
      } catch (e) {
        setError(String(e));
      }
    }, 1500);
    return () => window.clearInterval(id);
  }, [job, refreshProjects]);

  async function onLogin(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    try {
      const res = await api.login(password);
      setToken(res.token);
      setAuthed(true);
    } catch (err) {
      setError(String(err));
    }
  }

  async function openScripts(name: string) {
    setError(null);
    setCurrent(name);
    const s = await api.getScripts(name);
    setScripts(s.scripts);
    setSelected({ sceneIdx: 0, itemIdx: null });
    setPage("scripts");
  }

  async function openDraft(name: string) {
    setError(null);
    setCurrent(name);
    const d = await api.getDraft(name);
    setDraft(d.draft);
    setPage("draft");
  }

  async function startGen(name: string) {
    setError(null);
    const res = await api.startGenerate(name, pauseAfterStep0);
    setJob({
      jobId: res.jobId,
      name,
      kind: "generate",
      status: res.status,
      phase: res.phase,
      logs: [],
      error: null,
      createdAt: new Date().toISOString(),
      finishedAt: null,
    });
    setPage("job");
  }

  if (!authed) {
    return (
      <div className="app-shell">
        <div className="brand">
          <h1>Scene Studio</h1>
          <span>分镜脚本远程工作台</span>
        </div>
        <form className="card login-box" onSubmit={onLogin}>
          <p className="muted">输入服务口令登录</p>
          <div className="field">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="SCENE_STUDIO_PASSWORD"
              autoFocus
            />
          </div>
          {error ? <p className="error">{error}</p> : null}
          <button className="primary" type="submit">
            登录
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="app-shell">
      <div className="brand">
        <h1>Scene Studio</h1>
        <span>Step0 / Step1 · 模板感知编辑</span>
        <div style={{ marginLeft: "auto" }} className="row">
          <button
            type="button"
            onClick={() => {
              setPage("list");
              setCurrent(null);
            }}
          >
            工程列表
          </button>
          <button
            type="button"
            onClick={() => {
              setToken(null);
              setAuthed(false);
            }}
          >
            退出
          </button>
        </div>
      </div>

      {error ? (
        <div className="card error">{error}</div>
      ) : null}

      {page === "list" ? (
        <ListPage
          projects={projects}
          createName={createName}
          createText={createText}
          pauseAfterStep0={pauseAfterStep0}
          setCreateName={setCreateName}
          setCreateText={setCreateText}
          setPauseAfterStep0={setPauseAfterStep0}
          onRefresh={refreshProjects}
          onOpenScripts={openScripts}
          onOpenDraft={openDraft}
          onGenerate={startGen}
          onError={setError}
        />
      ) : null}

      {page === "job" && job ? (
        <div className="card">
          <h2>生成任务</h2>
          <p>
            {job.name} · <strong>{job.status}</strong> · {job.phase}
          </p>
          {job.error ? <pre className="error">{job.error}</pre> : null}
          <div className="logs">{job.logs.join("\n")}</div>
          {job.status === "succeeded" && job.phase === "awaiting_draft_review" ? (
            <div className="row" style={{ marginTop: "0.4rem" }}>
              <button type="button" onClick={() => openDraft(job.name)}>
                审阅草稿
              </button>
            </div>
          ) : null}
        </div>
      ) : null}

      {page === "draft" && draft && current ? (
        <DraftEditor
          name={current}
          draft={draft}
          setDraft={setDraft}
          onError={setError}
          onContinue={async () => {
            const res = await api.continueStep1(current);
            setJob({
              jobId: res.jobId,
              name: current,
              kind: "step1",
              status: "running",
              phase: "step1",
              logs: [],
              error: null,
              createdAt: new Date().toISOString(),
              finishedAt: null,
            });
            setPage("job");
          }}
        />
      ) : null}

      {page === "scripts" && scripts && current ? (
        <ScriptsEditor
          name={current}
          scripts={scripts}
          setScripts={setScripts}
          selected={selected}
          setSelected={setSelected}
          tmap={tmap}
          templates={templates}
          warnings={warnings}
          setWarnings={setWarnings}
          onError={setError}
          onOpenSync={async () => {
            const prev = await api.syncPreview(current, scripts, updateNarration);
            setSyncPreview({ draft: prev.draft, narrationText: prev.narrationText });
            setUpdateNarration(true);
            setSyncOpen(true);
          }}
          onRegenAllScripts={async () => {
            const res = await api.continueStep1(current);
            setJob({
              jobId: res.jobId,
              name: current,
              kind: "step1",
              status: "running",
              phase: "step1",
              logs: [],
              error: null,
              createdAt: new Date().toISOString(),
              finishedAt: null,
            });
            setPage("job");
          }}
        />
      ) : null}

      {syncOpen && syncPreview && current && scripts ? (
        <div className="modal-backdrop">
          <div className="modal">
            <h3>从脚本反推草稿（预览）</h3>
            <label className="check">
              <input
                type="checkbox"
                checked={updateNarration}
                onChange={(e) => setUpdateNarration(e.target.checked)}
              />
              同时更新口播稿 narrations/{current}.txt（默认勾选）
            </label>
            <h4>草稿</h4>
            <pre className="logs">{JSON.stringify(syncPreview.draft, null, 2)}</pre>
            <h4>口播拼接预览</h4>
            <pre className="logs">{syncPreview.narrationText}</pre>
            <div className="row">
              <button type="button" onClick={() => setSyncOpen(false)}>
                取消
              </button>
              <button
                type="button"
                className="primary"
                onClick={async () => {
                  try {
                    const res = await api.syncConfirm(current, scripts, updateNarration);
                    setScripts(res.scripts as Record<string, unknown>);
                    setDraft(res.draft as Record<string, unknown>);
                    setWarnings((res.warnings as string[]) || []);
                    setSyncOpen(false);
                    setError(null);
                  } catch (e) {
                    setError(String(e));
                  }
                }}
              >
                确认写入
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function ListPage(props: {
  projects: ProjectInfo[];
  createName: string;
  createText: string;
  pauseAfterStep0: boolean;
  setCreateName: (v: string) => void;
  setCreateText: (v: string) => void;
  setPauseAfterStep0: (v: boolean) => void;
  onRefresh: () => Promise<void>;
  onOpenScripts: (name: string) => Promise<void>;
  onOpenDraft: (name: string) => Promise<void>;
  onGenerate: (name: string) => Promise<void>;
  onError: (e: string | null) => void;
}) {
  return (
    <>
      <div className="card">
        <h2>新建工程</h2>
        <div className="field">
          <input
            placeholder="工程名 name"
            value={props.createName}
            onChange={(e) => props.setCreateName(e.target.value)}
          />
        </div>
        <div className="field">
          <textarea
            rows={6}
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
          生成时 Step0 后暂停审阅草稿（默认连跑 Step1）
        </label>
        <div className="row" style={{ marginTop: "0.4rem" }}>
          <button
            type="button"
            className="primary"
            onClick={async () => {
              try {
                props.onError(null);
                await api.createProject(props.createName, props.createText);
                props.setCreateName("");
                props.setCreateText("");
                await props.onRefresh();
              } catch (e) {
                props.onError(String(e));
              }
            }}
          >
            创建
          </button>
          <label className="row">
            <span className="muted">导入 ZIP</span>
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
        </div>
      </div>

      <div className="card">
        <div className="row" style={{ justifyContent: "space-between" }}>
          <h2 style={{ margin: 0 }}>工程列表</h2>
          <button type="button" onClick={() => props.onRefresh()}>
            刷新
          </button>
        </div>
        <div className="project-list" style={{ marginTop: "0.4rem" }}>
          {props.projects.length === 0 ? (
            <p className="muted">暂无工程</p>
          ) : null}
          {props.projects.map((p) => (
            <div className="project-item" key={p.name}>
              <div>
                <strong>{p.name}</strong>
                <div className="muted">
                  {p.topic || "无 topic"} · 口播
                  {p.hasNarration ? "✓" : "×"} · 草稿{p.hasDraft ? "✓" : "×"} · 脚本
                  {p.hasScripts ? "✓" : "×"}
                </div>
              </div>
              <div className="row">
                <button
                  type="button"
                  className="primary"
                  disabled={!p.hasNarration}
                  onClick={() => props.onGenerate(p.name).catch((e) => props.onError(String(e)))}
                >
                  生成
                </button>
                <button
                  type="button"
                  disabled={!p.hasDraft}
                  onClick={() => props.onOpenDraft(p.name).catch((e) => props.onError(String(e)))}
                >
                  草稿
                </button>
                <button
                  type="button"
                  disabled={!p.hasScripts}
                  onClick={() => props.onOpenScripts(p.name).catch((e) => props.onError(String(e)))}
                >
                  编辑脚本
                </button>
                <button
                  type="button"
                  onClick={() =>
                    api.exportProject(p.name).catch((e) => props.onError(String(e)))
                  }
                >
                  导出
                </button>
                <button
                  type="button"
                  className="danger"
                  onClick={async () => {
                    if (!confirm(`删除工程 ${p.name}？`)) return;
                    try {
                      await api.deleteProject(p.name);
                      await props.onRefresh();
                    } catch (e) {
                      props.onError(String(e));
                    }
                  }}
                >
                  删除
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function DraftEditor(props: {
  name: string;
  draft: Record<string, unknown>;
  setDraft: (d: Record<string, unknown>) => void;
  onError: (e: string | null) => void;
  onContinue: () => Promise<void>;
}) {
  const scenes = (props.draft.scenes as Scene[]) || [];
  return (
    <div className="card">
      <h2>草稿审阅 · {props.name}</h2>
      <div className="field">
        <label className="field-label">topic</label>
        <input
          value={String(props.draft.topic || "")}
          onChange={(e) => props.setDraft({ ...props.draft, topic: e.target.value })}
        />
      </div>
      {scenes.map((scene, idx) => (
        <div key={scene.sceneId || idx} className="card" style={{ background: "var(--panel-2)" }}>
          <div className="row">
            <input
              style={{ maxWidth: 180 }}
              value={scene.sceneId || ""}
              onChange={(e) => {
                const next = [...scenes];
                next[idx] = { ...scene, sceneId: e.target.value };
                props.setDraft({ ...props.draft, scenes: next });
              }}
            />
            <input
              placeholder="sceneName"
              value={scene.sceneName || ""}
              onChange={(e) => {
                const next = [...scenes];
                next[idx] = { ...scene, sceneName: e.target.value };
                props.setDraft({ ...props.draft, scenes: next });
              }}
            />
            <button
              type="button"
              className="danger"
              disabled={Boolean(scene.text?.trim())}
              title={
                scene.text?.trim() ? "场景中有文案时不允许删除" : undefined
              }
              onClick={() => {
                if (scene.text?.trim()) return;
                const next = scenes.filter((_, i) => i !== idx);
                props.setDraft({ ...props.draft, scenes: next });
              }}
            >
              删除场景
            </button>
          </div>
          <textarea
            rows={4}
            value={scene.text || ""}
            onChange={(e) => {
              const next = [...scenes];
              next[idx] = { ...scene, text: e.target.value };
              props.setDraft({ ...props.draft, scenes: next });
            }}
          />
        </div>
      ))}
      <div className="row">
        <button
          type="button"
          onClick={() => {
            const next = [
              ...scenes,
              {
                sceneId: `scene_${scenes.length + 1}`,
                sceneName: "新场景",
                text: "",
              },
            ];
            props.setDraft({ ...props.draft, scenes: next });
          }}
        >
          新增场景
        </button>
        <button
          type="button"
          className="primary"
          onClick={async () => {
            try {
              props.onError(null);
              const res = await api.saveDraft(props.name, props.draft);
              props.setDraft(res.draft);
            } catch (e) {
              props.onError(String(e));
            }
          }}
        >
          保存草稿
        </button>
        <button
          type="button"
          className="primary"
          onClick={() => props.onContinue().catch((e) => props.onError(String(e)))}
        >
          继续 Step1
        </button>
      </div>
    </div>
  );
}

function ScriptsEditor(props: {
  name: string;
  scripts: Record<string, unknown>;
  setScripts: (s: Record<string, unknown>) => void;
  selected: { sceneIdx: number; itemIdx: number | null };
  setSelected: (s: { sceneIdx: number; itemIdx: number | null }) => void;
  tmap: Map<string, TemplateInfo>;
  templates: TemplateInfo[];
  warnings: string[];
  setWarnings: (w: string[]) => void;
  onError: (e: string | null) => void;
  onOpenSync: () => Promise<void>;
  onRegenAllScripts: () => Promise<void>;
}) {
  const narrow = useIsNarrow();
  const [drill, setDrill] = useState<DrillLevel>("scenes");
  const [regenBusy, setRegenBusy] = useState(false);
  const [regenAllBusy, setRegenAllBusy] = useState(false);
  const [editingKey, setEditingKey] = useState<string | null>(null);

  const scenes = (props.scripts.scenes as Scene[]) || [];
  const sceneIdx = props.selected.sceneIdx;
  const scene = scenes[sceneIdx];
  const items = scene?.items || [];
  const paramItemIdx = props.selected.itemIdx;
  const paramItem =
    paramItemIdx == null ? null : items[paramItemIdx] || null;
  const tmpl = paramItem?.template
    ? props.tmap.get(paramItem.template)
    : undefined;

  function setScenes(nextScenes: Scene[]) {
    props.setScripts({ ...props.scripts, scenes: nextScenes });
  }

  function patchSceneItems(nextItems: Item[]) {
    if (!scene) return;
    const synced = syncItemsParamArrays(nextItems, props.tmap);
    const nextScenes = [...scenes];
    nextScenes[sceneIdx] = { ...scene, items: synced };
    setScenes(nextScenes);
  }

  function updateItemAt(itemIdx: number, patch: Partial<Item>) {
    const nextItems = [...items];
    nextItems[itemIdx] = { ...nextItems[itemIdx], ...patch };
    patchSceneItems(nextItems);
  }

  function selectScene(si: number) {
    props.setSelected({ sceneIdx: si, itemIdx: null });
    setEditingKey(null);
    setDrill("script");
  }

  function openParam(itemIdx: number) {
    setEditingKey(null);
    if (narrow) {
      props.setSelected({ sceneIdx, itemIdx });
      setDrill("param");
      return;
    }
    props.setSelected({
      sceneIdx,
      itemIdx: props.selected.itemIdx === itemIdx ? null : itemIdx,
    });
  }

  function backFromParam() {
    props.setSelected({ sceneIdx, itemIdx: null });
    setDrill("script");
  }

  function addScene() {
    const next = [
      ...scenes,
      {
        sceneId: `scene_${scenes.length + 1}`,
        sceneName: "新场景",
        items: [],
      },
    ];
    setScenes(next);
    selectScene(next.length - 1);
  }

  function addItem() {
    patchSceneItems([
      ...items,
      {
        order: items.length + 1,
        template: "TEXT_FOCUS",
        narrativeType: "LOGIC",
        content: [{ text: "" }],
        param: {},
      },
    ]);
  }

  async function onRegenParam() {
    if (paramItemIdx == null) return;
    const scriptsSnapshot = props.scripts;
    setRegenBusy(true);
    props.onError(null);
    try {
      const res = await api.regenParam(
        props.name,
        scriptsSnapshot,
        sceneIdx,
        paramItemIdx,
      );
      const nextScenes = [...((scriptsSnapshot.scenes as Scene[]) || [])];
      const sc = nextScenes[sceneIdx];
      if (!sc?.items?.[paramItemIdx]) return;
      const nextItems = [...sc.items];
      nextItems[paramItemIdx] = {
        ...nextItems[paramItemIdx],
        param: res.param,
      };
      nextScenes[sceneIdx] = { ...sc, items: nextItems };
      props.setScripts({ ...scriptsSnapshot, scenes: nextScenes });
    } catch (e) {
      props.onError(String(e));
    } finally {
      setRegenBusy(false);
    }
  }

  /** 仅窄屏才钻取独立参数页；桌面在列表内展开 */
  const showParamPage = narrow && drill === "param" && paramItem != null;
  /** 标题/topic/保存等仅场景列表（及桌面）展示，脚本与参数钻取页不占空间 */
  const showListChrome = !narrow || drill === "scenes";
  const showSceneNav = showListChrome && (!narrow || drill === "scenes");
  const showScript = (!narrow || drill === "script") && !showParamPage;

  async function saveScripts() {
    props.onError(null);
    const res = await api.saveScripts(props.name, props.scripts);
    props.setScripts(res.scripts);
    props.setWarnings(res.warnings || []);
  }

  return (
    <div className="card">
      {showListChrome ? (
        <>
          <div className="row" style={{ justifyContent: "space-between" }}>
            <h2 style={{ margin: 0 }}>脚本编辑 · {props.name}</h2>
            <div className="row">
              <button
                type="button"
                disabled={regenAllBusy}
                onClick={async () => {
                  if (
                    !window.confirm(
                      "将根据当前场景拆分草稿全量重新生成分镜脚本，覆盖现有脚本（含未保存编辑）。是否继续？",
                    )
                  ) {
                    return;
                  }
                  setRegenAllBusy(true);
                  props.onError(null);
                  try {
                    await props.onRegenAllScripts();
                  } catch (e) {
                    props.onError(String(e));
                    setRegenAllBusy(false);
                  }
                }}
              >
                {regenAllBusy ? "重新生成中…" : "全量重新生成脚本"}
              </button>
              <button
                type="button"
                onClick={() =>
                  props.onOpenSync().catch((e) => props.onError(String(e)))
                }
              >
                反推草稿…
              </button>
              <button
                type="button"
                className="primary"
                onClick={() => saveScripts().catch((e) => props.onError(String(e)))}
              >
                保存
              </button>
            </div>
          </div>

          <div className="field" style={{ marginTop: "0.4rem" }}>
            <label className="field-label">topic</label>
            <input
              value={String(props.scripts.topic || "")}
              onChange={(e) =>
                props.setScripts({ ...props.scripts, topic: e.target.value })
              }
            />
          </div>

          {props.warnings.length ? (
            <div className="card" style={{ background: "#2a2418" }}>
              <strong>warnings</strong>
              <pre className="logs">{props.warnings.join("\n")}</pre>
            </div>
          ) : null}
        </>
      ) : null}

      <div className={`layout-editor ${narrow ? "is-narrow" : ""}`}>
        {showSceneNav ? (
          <div className="tree">
            {scenes.map((sc, si) => (
              <button
                key={sc.sceneId || si}
                type="button"
                className={`tree-btn ${sceneIdx === si ? "active" : ""}`}
                onClick={() => selectScene(si)}
              >
                {sc.sceneId} · {sc.sceneName || "场景"}
                <span className="muted"> · {(sc.items || []).length}</span>
              </button>
            ))}
            <button
              type="button"
              className="tree-btn"
              style={{ color: "var(--accent)" }}
              onClick={addScene}
            >
              + scene
            </button>
          </div>
        ) : null}

        {showScript && scene ? (
          <div className={narrow ? "editor-pane" : undefined}>
            {narrow ? (
              <button
                type="button"
                className="back-btn"
                onClick={() => setDrill("scenes")}
              >
                ← 场景列表
              </button>
            ) : null}

            <div className="scene-meta row">
              <input
                style={{ maxWidth: 140 }}
                value={scene.sceneId || ""}
                onChange={(e) => {
                  const next = [...scenes];
                  next[sceneIdx] = { ...scene, sceneId: e.target.value };
                  setScenes(next);
                }}
                placeholder="sceneId"
              />
              <input
                style={{ flex: 1, minWidth: 120 }}
                value={scene.sceneName || ""}
                onChange={(e) => {
                  const next = [...scenes];
                  next[sceneIdx] = { ...scene, sceneName: e.target.value };
                  setScenes(next);
                }}
                placeholder="sceneName"
              />
              <button
                type="button"
                className="danger"
                disabled={sceneHasScriptContent(scene)}
                title={
                  sceneHasScriptContent(scene)
                    ? "场景中有口播内容时不允许删除"
                    : undefined
                }
                onClick={() => {
                  if (sceneHasScriptContent(scene)) return;
                  const next = scenes.filter((_, i) => i !== sceneIdx);
                  setScenes(next);
                  props.setSelected({ sceneIdx: 0, itemIdx: null });
                  if (narrow) setDrill("scenes");
                }}
              >
                删除场景
              </button>
            </div>

            <div className="flat-script">
              {items.map((it, ii) => (
                <div className="item-group" key={ii}>
                  <div className="item-group-head">
                    <span className="item-order">#{it.order ?? ii + 1}</span>
                    <select
                      className="template-select"
                      value={it.template || ""}
                      onChange={(e) =>
                        updateItemAt(ii, {
                          template: e.target.value,
                          param: {},
                        })
                      }
                    >
                      {props.templates.map((t) => (
                        <option key={t.name} value={t.name}>
                          {t.label || t.name}
                        </option>
                      ))}
                    </select>
                    <button
                      type="button"
                      className="primary"
                      onClick={() => openParam(ii)}
                    >
                      {!narrow && paramItemIdx === ii ? "收起参数" : "编辑参数"}
                    </button>
                    <button
                      type="button"
                      className="danger"
                      disabled={itemHasContent(it)}
                      title={
                        itemHasContent(it)
                          ? "item 中有口播内容时不允许删除"
                          : undefined
                      }
                      onClick={() => {
                        if (itemHasContent(it)) return;
                        patchSceneItems(
                          reorderItemOrders(items.filter((_, i) => i !== ii)),
                        );
                        setEditingKey(null);
                      }}
                    >
                      删 item
                    </button>
                  </div>

                  {!narrow && paramItemIdx === ii ? (
                    <div className="inline-param">
                      <div className="param-toolbar">
                        <button
                          type="button"
                          disabled={regenBusy}
                          onClick={() => onRegenParam()}
                        >
                          {regenBusy ? "重生中…" : "局部参数重生"}
                        </button>
                      </div>
                      <ParamForm
                        schema={
                          (props.tmap.get(it.template || "")?.paramSchema as
                            | Record<string, unknown>
                            | undefined) || {}
                        }
                        value={it.param || {}}
                        syncArrayKey={
                          props.tmap.get(it.template || "")
                            ?.paramArraySyncContent || null
                        }
                        contentLength={it.content?.length ?? 0}
                        onChange={(param) => updateItemAt(ii, { param })}
                      />
                    </div>
                  ) : null}

                  {(it.content || []).map((ci, ciIdx) => {
                    const key = `${ii}-${ciIdx}`;
                    const editing = editingKey === key;
                    return (
                      <div key={key}>
                        {ciIdx > 0 ? (
                          <button
                            type="button"
                            className="split-btn"
                            title="在此拆成新 item"
                            onClick={() => {
                              const next = splitItemAt(
                                scenes,
                                sceneIdx,
                                ii,
                                ciIdx,
                              );
                              if (!next) return;
                              const synced = next.map((sc, sIdx) =>
                                sIdx === sceneIdx
                                  ? {
                                      ...sc,
                                      items: syncItemsParamArrays(
                                        sc.items || [],
                                        props.tmap,
                                      ),
                                    }
                                  : sc,
                              );
                              setScenes(synced);
                              setEditingKey(null);
                            }}
                          >
                            ✂ 拆分
                          </button>
                        ) : null}
                        <div className="content-row">
                          {editing ? (
                            <textarea
                              autoFocus
                              rows={2}
                              value={ci.text || ""}
                              onChange={(e) => {
                                const nextContent = [...(it.content || [])];
                                nextContent[ciIdx] = {
                                  ...ci,
                                  text: e.target.value,
                                };
                                updateItemAt(ii, { content: nextContent });
                              }}
                              onBlur={() => setEditingKey(null)}
                            />
                          ) : (
                            <button
                              type="button"
                              className="content-text"
                              onClick={() => setEditingKey(key)}
                            >
                              {ci.text?.trim() ? ci.text : (
                                <span className="muted">（空，点按编辑）</span>
                              )}
                            </button>
                          )}
                          <div className="row content-actions">
                            <button
                              type="button"
                              disabled={ciIdx === 0 && ii === 0}
                              title={
                                ciIdx === 0 && ii > 0
                                  ? "上移到上一 item"
                                  : undefined
                              }
                              onClick={() => {
                                if (ciIdx > 0) {
                                  const next = [...(it.content || [])];
                                  const tmp = next[ciIdx - 1];
                                  next[ciIdx - 1] = next[ciIdx];
                                  next[ciIdx] = tmp;
                                  updateItemAt(ii, { content: next });
                                  return;
                                }
                                if (ii === 0) return;
                                const moved = moveContentAcrossItems(
                                  scenes,
                                  sceneIdx,
                                  ii,
                                  ciIdx,
                                  -1,
                                );
                                if (!moved) return;
                                const synced = moved.scenes.map((sc, sIdx) =>
                                  sIdx === sceneIdx
                                    ? {
                                        ...sc,
                                        items: syncItemsParamArrays(
                                          sc.items || [],
                                          props.tmap,
                                        ),
                                      }
                                    : sc,
                                );
                                setScenes(synced);
                                setEditingKey(null);
                              }}
                            >
                              ↑
                            </button>
                            <button
                              type="button"
                              disabled={
                                ciIdx >= (it.content?.length || 0) - 1 &&
                                ii >= items.length - 1
                              }
                              title={
                                ciIdx >= (it.content?.length || 0) - 1 &&
                                ii < items.length - 1
                                  ? "下移到下一 item"
                                  : undefined
                              }
                              onClick={() => {
                                const last =
                                  ciIdx >= (it.content?.length || 0) - 1;
                                if (!last) {
                                  const next = [...(it.content || [])];
                                  const tmp = next[ciIdx + 1];
                                  next[ciIdx + 1] = next[ciIdx];
                                  next[ciIdx] = tmp;
                                  updateItemAt(ii, { content: next });
                                  return;
                                }
                                if (ii >= items.length - 1) return;
                                const moved = moveContentAcrossItems(
                                  scenes,
                                  sceneIdx,
                                  ii,
                                  ciIdx,
                                  1,
                                );
                                if (!moved) return;
                                const synced = moved.scenes.map((sc, sIdx) =>
                                  sIdx === sceneIdx
                                    ? {
                                        ...sc,
                                        items: syncItemsParamArrays(
                                          sc.items || [],
                                          props.tmap,
                                        ),
                                      }
                                    : sc,
                                );
                                setScenes(synced);
                                setEditingKey(null);
                              }}
                            >
                              ↓
                            </button>
                            <button
                              type="button"
                              className="danger"
                              onClick={() => {
                                const next = (it.content || []).filter(
                                  (_, i) => i !== ciIdx,
                                );
                                if (next.length === 0) {
                                  patchSceneItems(
                                    reorderItemOrders(
                                      items.filter((_, i) => i !== ii),
                                    ),
                                  );
                                } else {
                                  updateItemAt(ii, { content: next });
                                }
                                setEditingKey(null);
                              }}
                            >
                              删
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  <button
                    type="button"
                    className="add-content-btn"
                    onClick={() =>
                      updateItemAt(ii, {
                        content: [...(it.content || []), { text: "" }],
                      })
                    }
                  >
                    + 口播句
                  </button>
                </div>
              ))}

              <button type="button" onClick={addItem}>
                + item
              </button>
            </div>
          </div>
        ) : null}

        {showScript && !scene ? (
          <div className={narrow ? "editor-pane" : undefined}>
            <p className="muted">请选择场景</p>
          </div>
        ) : null}

        {showParamPage && paramItem && paramItemIdx != null ? (
          <div className="editor-pane">
            <button type="button" className="back-btn" onClick={backFromParam}>
              ← 返回文案表
            </button>
            <h3>
              参数 · #{paramItem.order} ·{" "}
              {tmpl?.label || paramItem.template}
            </h3>
            <p className="content-summary muted">
              {(() => {
                const summary = (paramItem.content || [])
                  .map((c) => c.text || "")
                  .join(" ");
                if (!summary.trim()) return "（无口播）";
                return summary.length > 120
                  ? `${summary.slice(0, 120)}…`
                  : summary;
              })()}
            </p>
            <div className="param-toolbar">
              <button
                type="button"
                disabled={regenBusy}
                onClick={() => onRegenParam()}
              >
                {regenBusy ? "重生中…" : "局部参数重生"}
              </button>
              <button
                type="button"
                className="primary"
                onClick={() => saveScripts().catch((e) => props.onError(String(e)))}
              >
                保存
              </button>
            </div>
            <ParamForm
              schema={(tmpl?.paramSchema as Record<string, unknown>) || {}}
              value={paramItem.param || {}}
              syncArrayKey={tmpl?.paramArraySyncContent || null}
              contentLength={paramItem.content?.length ?? 0}
              onChange={(param) => updateItemAt(paramItemIdx, { param })}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}

