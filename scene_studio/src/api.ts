const API_BASE = import.meta.env.VITE_API_BASE ?? "";

let token: string | null = localStorage.getItem("scene_studio_token");

export function setToken(t: string | null) {
  token = t;
  if (t) localStorage.setItem("scene_studio_token", t);
  else localStorage.removeItem("scene_studio_token");
}

export function getToken() {
  return token;
}

async function postJson<T>(path: string, body: unknown, auth = true): Promise<T> {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };
  if (auth) {
    if (!token) throw new Error("未登录");
    headers.Authorization = `Bearer ${token}`;
  }
  const res = await fetch(`${API_BASE}${path}`, {
    method: "POST",
    headers,
    body: JSON.stringify(body ?? {}),
  });
  if (!res.ok) {
    let detail = res.statusText;
    try {
      const j = await res.json();
      detail = j.detail ?? JSON.stringify(j);
    } catch {
      /* ignore */
    }
    throw new Error(typeof detail === "string" ? detail : JSON.stringify(detail));
  }
  const ct = res.headers.get("content-type") || "";
  if (ct.includes("application/json")) return (await res.json()) as T;
  return undefined as T;
}

export type ProjectInfo = {
  name: string;
  hasNarration: boolean;
  hasDraft: boolean;
  hasScripts: boolean;
  topic: string | null;
};

export type TemplateInfo = {
  name: string;
  /** 中文显示名（来自 templateMeta.psychology） */
  label?: string;
  description?: string;
  paramSchema: Record<string, unknown>;
  contentMinItems?: number;
  contentMaxItems?: number;
  imageCount?: number;
  /** 与 item.content 条数锁定同步的 param 数组字段名 */
  paramArraySyncContent?: string | null;
};

export type JobStatus = {
  jobId: string;
  name: string;
  kind: string;
  status: string;
  phase: string;
  logs: string[];
  error: string | null;
  createdAt: string;
  finishedAt: string | null;
};

export const api = {
  login: (password: string) =>
    postJson<{ token: string }>("/api/login", { password }, false),

  listProjects: () =>
    postJson<{ projects: ProjectInfo[] }>("/api/projects/list", {}),

  createProject: (name: string, narrationText: string) =>
    postJson<{ project: ProjectInfo }>("/api/projects/create", {
      name,
      narrationText,
    }),

  deleteProject: (name: string) =>
    postJson<{ ok: boolean }>("/api/projects/delete", { name }),

  getProject: (name: string) =>
    postJson<{ project: ProjectInfo }>("/api/projects/get", { name }),

  exportProject: async (name: string) => {
    if (!token) throw new Error("未登录");
    const res = await fetch(`${API_BASE}/api/projects/export`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ name }),
    });
    if (!res.ok) throw new Error(await res.text());
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${name}.zip`;
    a.click();
    URL.revokeObjectURL(url);
  },

  importProject: async (file: File) => {
    if (!token) throw new Error("未登录");
    const fd = new FormData();
    fd.append("file", file);
    const res = await fetch(`${API_BASE}/api/projects/import`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: fd,
    });
    if (!res.ok) {
      const j = await res.json().catch(() => ({}));
      throw new Error(j.detail || res.statusText);
    }
    return (await res.json()) as { name: string };
  },

  startGenerate: (
    name: string,
    pauseAfterStep0: boolean,
    llmProvider?: string | null,
    llmModel?: string | null,
  ) =>
    postJson<{ jobId: string; status: string; phase: string }>(
      "/api/generate/start",
      { name, pauseAfterStep0, llmProvider, llmModel },
    ),

  continueStep1: (name: string) =>
    postJson<{ jobId: string }>("/api/generate/continue-step1", { name }),

  jobStatus: (jobId: string) =>
    postJson<JobStatus>("/api/jobs/status", { jobId }),

  getDraft: (name: string) =>
    postJson<{ draft: Record<string, unknown> }>("/api/draft/get", { name }),

  saveDraft: (name: string, draft: Record<string, unknown>) =>
    postJson<{ draft: Record<string, unknown> }>("/api/draft/save", {
      name,
      draft,
    }),

  getScripts: (name: string) =>
    postJson<{ scripts: Record<string, unknown> }>("/api/scripts/get", {
      name,
    }),

  saveScripts: (name: string, scripts: Record<string, unknown>) =>
    postJson<{ scripts: Record<string, unknown>; warnings: string[] }>(
      "/api/scripts/save",
      { name, scripts },
    ),

  syncPreview: (name: string, scripts: Record<string, unknown>, updateNarration: boolean) =>
    postJson<{
      draft: Record<string, unknown>;
      narrationText: string;
      updateNarration: boolean;
    }>("/api/scripts/sync-preview", { name, scripts, updateNarration }),

  syncConfirm: (name: string, scripts: Record<string, unknown>, updateNarration: boolean) =>
    postJson<Record<string, unknown>>("/api/scripts/sync-confirm", {
      name,
      scripts,
      updateNarration,
    }),

  listTemplates: () =>
    postJson<{ templates: TemplateInfo[] }>("/api/templates/list", {}),

  regenParam: (
    name: string,
    scripts: Record<string, unknown>,
    sceneIdx: number,
    itemIdx: number,
  ) =>
    postJson<{ param: Record<string, unknown> }>("/api/scripts/regen-param", {
      name,
      scripts,
      sceneIdx,
      itemIdx,
    }),
};
