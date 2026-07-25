import { useCallback, useEffect, useMemo, useState } from "react";
import {
  api,
  getToken,
  setToken,
  type JobStatus,
  type ProjectInfo,
  type TemplateInfo,
} from "./api";
import { SyncModal } from "./components/SyncModal";
import { templateMap } from "./ParamForm";
import { DraftScreen } from "./screens/DraftScreen";
import { JobScreen } from "./screens/JobScreen";
import { LoginScreen } from "./screens/LoginScreen";
import { ProjectHomeScreen } from "./screens/ProjectHomeScreen";
import { ProjectListScreen } from "./screens/ProjectListScreen";
import { ScriptsShell } from "./screens/scripts/ScriptsShell";
import type { Screen } from "./types";

export default function App() {
  const [authed, setAuthed] = useState(Boolean(getToken()));
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [projects, setProjects] = useState<ProjectInfo[]>([]);
  const [templates, setTemplates] = useState<TemplateInfo[]>([]);
  const [screen, setScreen] = useState<Screen>("list");
  const [current, setCurrent] = useState<string | null>(null);
  const [draft, setDraft] = useState<Record<string, unknown> | null>(null);
  const [scripts, setScripts] = useState<Record<string, unknown> | null>(null);
  const [selected, setSelected] = useState<{
    sceneIdx: number;
    itemIdx: number | null;
  }>({
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

  const currentProject =
    current == null
      ? null
      : projects.find((p) => p.name === current) || null;

  const refreshProjects = useCallback(async () => {
    const res = await api.listProjects();
    setProjects(res.projects);
  }, []);

  useEffect(() => {
    if (!authed) return;
    (async () => {
      try {
        const [p, t] = await Promise.all([
          api.listProjects(),
          api.listTemplates(),
        ]);
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
            setScreen("draft");
          } else if (st.phase === "done") {
            const s = await api.getScripts(st.name);
            setScripts(s.scripts);
            setCurrent(st.name);
            setSelected({ sceneIdx: 0, itemIdx: null });
            setScreen("scripts");
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

  function openProject(name: string) {
    setError(null);
    setCurrent(name);
    setScreen("project");
  }

  async function openScripts(name: string) {
    setError(null);
    setCurrent(name);
    const s = await api.getScripts(name);
    setScripts(s.scripts);
    setSelected({ sceneIdx: 0, itemIdx: null });
    setScreen("scripts");
  }

  async function openDraft(name: string) {
    setError(null);
    setCurrent(name);
    const d = await api.getDraft(name);
    setDraft(d.draft);
    setScreen("draft");
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
    setCurrent(name);
    setScreen("job");
  }

  function goProjectHome() {
    if (current) setScreen("project");
    else setScreen("list");
  }

  if (!authed) {
    return (
      <LoginScreen
        password={password}
        setPassword={setPassword}
        error={error}
        onSubmit={onLogin}
      />
    );
  }

  return (
    <>
      {screen === "list" ? (
        <ProjectListScreen
          projects={projects}
          createName={createName}
          createText={createText}
          pauseAfterStep0={pauseAfterStep0}
          setCreateName={setCreateName}
          setCreateText={setCreateText}
          setPauseAfterStep0={setPauseAfterStep0}
          onRefresh={refreshProjects}
          onOpenProject={openProject}
          onLogout={() => {
            setToken(null);
            setAuthed(false);
          }}
          onError={setError}
          error={error}
        />
      ) : null}

      {screen === "project" && currentProject ? (
        <ProjectHomeScreen
          project={currentProject}
          pauseAfterStep0={pauseAfterStep0}
          setPauseAfterStep0={setPauseAfterStep0}
          onBack={() => {
            setScreen("list");
            setCurrent(null);
          }}
          onGenerate={() => startGen(currentProject.name)}
          onOpenDraft={() => openDraft(currentProject.name)}
          onOpenScripts={() => openScripts(currentProject.name)}
          onDeleted={async () => {
            setCurrent(null);
            setScreen("list");
            await refreshProjects();
          }}
          onError={setError}
          error={error}
        />
      ) : null}

      {screen === "project" && current && !currentProject ? (
        <ProjectListScreen
          projects={projects}
          createName={createName}
          createText={createText}
          pauseAfterStep0={pauseAfterStep0}
          setCreateName={setCreateName}
          setCreateText={setCreateText}
          setPauseAfterStep0={setPauseAfterStep0}
          onRefresh={refreshProjects}
          onOpenProject={openProject}
          onLogout={() => {
            setToken(null);
            setAuthed(false);
          }}
          onError={setError}
          error={error || `工程 ${current} 不存在或已删除`}
        />
      ) : null}

      {screen === "job" && job ? (
        <JobScreen
          job={job}
          onBack={goProjectHome}
          onReviewDraft={() => openDraft(job.name)}
          error={error}
        />
      ) : null}

      {screen === "draft" && draft && current ? (
        <DraftScreen
          name={current}
          draft={draft}
          setDraft={setDraft}
          onBack={goProjectHome}
          onError={setError}
          error={error}
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
            setScreen("job");
          }}
        />
      ) : null}

      {screen === "scripts" && scripts && current ? (
        <ScriptsShell
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
          error={error}
          onBack={goProjectHome}
          onOpenSync={async () => {
            const prev = await api.syncPreview(
              current,
              scripts,
              updateNarration,
            );
            setSyncPreview({
              draft: prev.draft,
              narrationText: prev.narrationText,
            });
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
            setScreen("job");
          }}
        />
      ) : null}

      {syncOpen && syncPreview && current && scripts ? (
        <SyncModal
          projectName={current}
          updateNarration={updateNarration}
          setUpdateNarration={setUpdateNarration}
          draft={syncPreview.draft}
          narrationText={syncPreview.narrationText}
          onCancel={() => setSyncOpen(false)}
          onConfirm={async () => {
            try {
              const res = await api.syncConfirm(
                current,
                scripts,
                updateNarration,
              );
              setScripts(res.scripts as Record<string, unknown>);
              setDraft(res.draft as Record<string, unknown>);
              setWarnings((res.warnings as string[]) || []);
              setSyncOpen(false);
              setError(null);
            } catch (e) {
              setError(String(e));
            }
          }}
        />
      ) : null}
    </>
  );
}
