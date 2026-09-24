import { useEffect, useState } from "react";
import type { JobStatus } from "../api";
import { isJobActive, isStep1JobContext } from "../api";
import { AppShell } from "../components/AppShell";

type Props = {
  job: JobStatus;
  onBack: () => void;
  onReviewDraft: () => void;
  onRegenerate: () => void;
  onRestartFromScratch: () => void;
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
  const step1Context = isStep1JobContext(job);

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
          <>
            <button
              type="button"
              className="btn-block"
              style={{ marginTop: 12 }}
              onClick={() => {
                const msg = running
                  ? step1Context
                    ? "当前 Step1 仍在进行，确认取消并从断点续跑？"
                    : "当前生成仍在进行，确认取消并重新开始？"
                  : step1Context
                    ? "确认从断点续跑 Step1？（已完成的场景/条目会跳过）"
                    : "确认重新生成？";
                if (!window.confirm(msg)) return;
                props.onRegenerate();
              }}
            >
              {step1Context ? "重新生成（续跑）" : "重新生成"}
            </button>
            {step1Context ? (
              <button
                type="button"
                className="btn-block"
                style={{ marginTop: 8 }}
                onClick={() => {
                  const msg = running
                    ? "当前 Step1 仍在进行，确认取消并从头重新生成 Step1？"
                    : "确认忽略断点、从头重新生成 Step1？（不重跑场景拆分）";
                  if (!window.confirm(msg)) return;
                  props.onRestartFromScratch();
                }}
              >
                从头生成 Step1
              </button>
            ) : null}
          </>
        ) : null}
      </section>
    </AppShell>
  );
}
