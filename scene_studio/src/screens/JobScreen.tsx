import type { JobStatus } from "../api";
import { AppShell } from "../components/AppShell";

type Props = {
  job: JobStatus;
  onBack: () => void;
  onReviewDraft: () => void;
  error: string | null;
};

export function JobScreen(props: Props) {
  const { job } = props;
  const running = job.status !== "succeeded" && job.status !== "failed";
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
      </section>
    </AppShell>
  );
}
