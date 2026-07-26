import { useCallback, useEffect, useMemo, useState } from "react";
import {
  api,
  getToken,
  isDraftGenerating,
  isJobActive,
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

function applyJobStart(
  setJob: (j: JobStatus) => void,
  setCurrent: (n: string) => void,
  setScreen: (s: Screen) => void,
  name: string,
  kind: string,
  res: { jobId: string; status: string; phase: string },
) {
  setJob({
    jobId: res.jobId,
    name,
    kind,
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
        const [p, t, active] = await Promise.all([
          api.listProjects(),
          api.listTemplates(),
          api.activeJob(),
        ]);
        setProjects(p.projects);
        setTemplates(t.templates);
        if (active.job) {
          setJob(active.job);
          setCurrent(active.job.name);
          setScreen("job");
        }
      } catch (e) {
        setError(String(e));
        if (String(e).includes("401") || String(e).includes("token")) {
          setToken(null);
          setAuthed(false);
        }
      }
    })();
  }, [authed]);

  const activeJobId = isJobActive(job) ? job!.jobId : null;
  useEffect(() => {
    if (!activeJobId) return;
    const id = window.setInterval(async () => {
      try {
        const st = await api.jobStatus(activeJobId);
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
  }, [activeJobId, refreshProjects]);

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
    const active = await api.activeJob();
    let force = false;
    if (isJobActive(active.job)) {
      if (
        !window.confirm("已有生成任务进行中，确认取消并重新生成分镜？")
      ) {
        return;
      }
      force = true;
    }
    const res = await api.startGenerate(name, pauseAfterStep0, { force });
    applyJobStart(setJob, setCurrent, setScreen, name, "generate", res);
  }

  async function startStep1(name: string) {
    setError(null);
    const active = await api.activeJob();
    if (isDraftGenerating(active.job)) {
      throw new Error("正在生成草稿（Step0），不允许生成脚本");
    }
    let force = false;
    if (isJobActive(active.job)) {
      if (
        !window.confirm("已有生成任务进行中，确认取消并重新生成脚本？")
      ) {
        return;
      }
      force = true;
    }
    const res = await api.continueStep1(name, { force });
    applyJobStart(setJob, setCurrent, setScreen, name, "step1", res);
  }

  async function regenerateCurrentJob() {
    if (!job) return;
    setError(null);
    if (job.kind === "step1") {
      const res = await api.continueStep1(job.name, { force: true });
      applyJobStart(setJob, setCurrent, setScreen, job.name, "step1", res);
      return;
    }
    const res = await api.startGenerate(job.name, pauseAfterStep0, {
      force: true,
    });
    applyJobStart(setJob, setCurrent, setScreen, job.name, "generate", res);
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
          activeJob={isJobActive(job) && job?.name === currentProject.name ? job : null}
          onBack={() => {
            setScreen("list");
            setCurrent(null);
          }}
          onGenerate={() => startGen(currentProject.name)}
          onOpenDraft={() => openDraft(currentProject.name)}
          onOpenScripts={() => openScripts(currentProject.name)}
          onOpenJob={() => {
            if (job) setScreen("job");
          }}
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
          onRegenerate={() =>
            regenerateCurrentJob().catch((e) => setError(String(e)))
          }
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
          scriptGenBlocked={isDraftGenerating(job)}
          onContinue={async () => {
            await startStep1(current);
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
          scriptGenBlocked={isDraftGenerating(job)}
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
            await startStep1(current);
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
