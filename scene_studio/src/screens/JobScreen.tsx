import { useEffect, useState } from "react";
import type { JobStatus } from "../api";
import { isJobActive } from "../api";
import { AppShell } from "../components/AppShell";

type Props = {
  job: JobStatus;
  onBack: () => void;
  onReviewDraft: () => void;
  onRegenerate: () => void;
  error: string | null;
};

function remainLabel(job: JobStatus): string | null {
  if (job.status !== "running") return null;
  const timeoutSec = job.timeoutSec ?? 600;
  const created = Date.parse(job.createdAt);
  if (Number.isNaN(created)) return null;
  const left = Math.max(0, timeoutSec * 1000 - (Date.now() - created));
  const mins = Math.floor(left / 60000);
  const secs = Math.floor((left % 60000) / 1000);
  return `剩余约 ${mins}:${String(secs).padStart(2, "0")}`;
}

export function JobScreen(props: Props) {
  const { job } = props;
  const running = isJobActive(job);
  const [, setTick] = useState(0);
  useEffect(() => {
    if (!running) return;
    const id = window.setInterval(() => setTick((n) => n + 1), 1000);
    return () => window.clearInterval(id);
  }, [running]);
  const showRegen =
    running ||
    job.status === "timed_out" ||
    job.status === "interrupted" ||
    job.status === "cancelled" ||
    job.status === "failed";
  const remain = remainLabel(job);

  return (
    <AppShell
      title="生成任务"
      subtitle={`${job.name} · ${job.status}`}
      onBack={props.onBack}
      backLabel="工程"
      error={props.error}
    >
      <section className="panel">
        <p className="job-phase">
          阶段 <strong>{job.phase}</strong>
          {running ? <span className="pulse"> · 进行中</span> : null}
          {remain ? <span className="muted"> · {remain}</span> : null}
        </p>
        {job.error ? <pre className="error">{job.error}</pre> : null}
        <pre className="logs job-logs">{job.logs.join("\n")}</pre>
        {job.status === "succeeded" && job.phase === "awaiting_draft_review" ? (
          <button
            type="button"
            className="primary btn-block"
            onClick={props.onReviewDraft}
          >
            审阅草稿
          </button>
        ) : null}
        {showRegen ? (
          <button
            type="button"
            className="btn-block"
            style={{ marginTop: 12 }}
            onClick={() => {
              const msg = running
                ? "当前生成仍在进行，确认取消并重新生成？"
                : "确认重新生成？";
              if (!window.confirm(msg)) return;
              props.onRegenerate();
            }}
          >
            重新生成
          </button>
        ) : null}
      </section>
    </AppShell>
  );
}
