"""异步生成任务：全局单飞 + 进度日志。"""

from __future__ import annotations

import threading
import traceback
import uuid
from dataclasses import dataclass, field
from datetime import datetime, timezone
from typing import Callable, Literal

from narrator_pipeline.analysis.step0 import run_step0_for_video
from narrator_pipeline.analysis.step1 import run_step1_for_video
from narrator_pipeline.web.settings import pipeline_config_with_workspace

JobStatus = Literal["queued", "running", "succeeded", "failed"]


@dataclass
class Job:
    jobId: str
    name: str
    kind: str
    status: JobStatus = "queued"
    phase: str = ""
    logs: list[str] = field(default_factory=list)
    error: str | None = None
    createdAt: str = field(
        default_factory=lambda: datetime.now(timezone.utc).isoformat()
    )
    finishedAt: str | None = None


_lock = threading.Lock()
_jobs: dict[str, Job] = {}
_running = False


class _LogCapture:
    def __init__(self, job: Job):
        self.job = job

    def write(self, s: str) -> int:
        text = s.rstrip("\n")
        if text:
            with _lock:
                self.job.logs.append(text)
                if len(self.job.logs) > 2000:
                    self.job.logs = self.job.logs[-1500:]
        return len(s)

    def flush(self) -> None:
        return None


def get_job(job_id: str) -> Job | None:
    with _lock:
        return _jobs.get(job_id)


def is_busy() -> bool:
    with _lock:
        return _running


def _set_phase(job: Job, phase: str) -> None:
    with _lock:
        job.phase = phase
        job.logs.append(f"[phase] {phase}")


def start_generate(
    name: str,
    *,
    pause_after_step0: bool,
    llm_provider: str | None,
    llm_model: str | None,
) -> Job:
    global _running
    with _lock:
        if _running:
            raise RuntimeError("已有生成任务在运行（全局单飞）")
        job = Job(
            jobId=str(uuid.uuid4()),
            name=name,
            kind="generate",
            status="running",
            phase="starting",
        )
        _jobs[job.jobId] = job
        _running = True

    thread = threading.Thread(
        target=_run_generate,
        args=(job.jobId, pause_after_step0, llm_provider, llm_model),
        daemon=True,
    )
    thread.start()
    return job


def start_step1_only(
    name: str,
    *,
    llm_provider: str | None,
    llm_model: str | None,
) -> Job:
    global _running
    with _lock:
        if _running:
            raise RuntimeError("已有生成任务在运行（全局单飞）")
        job = Job(
            jobId=str(uuid.uuid4()),
            name=name,
            kind="step1",
            status="running",
            phase="starting",
        )
        _jobs[job.jobId] = job
        _running = True

    thread = threading.Thread(
        target=_run_step1_only,
        args=(job.jobId, llm_provider, llm_model),
        daemon=True,
    )
    thread.start()
    return job


def _finish(job: Job, *, ok: bool, error: str | None = None) -> None:
    global _running
    with _lock:
        job.status = "succeeded" if ok else "failed"
        job.error = error
        job.finishedAt = datetime.now(timezone.utc).isoformat()
        _running = False


def _with_stdout_capture(job: Job, fn: Callable[[], None]) -> None:
    import sys

    capture = _LogCapture(job)
    old_out, old_err = sys.stdout, sys.stderr
    sys.stdout = capture  # type: ignore[assignment]
    sys.stderr = capture  # type: ignore[assignment]
    try:
        fn()
    finally:
        sys.stdout = old_out
        sys.stderr = old_err


def _run_generate(
    job_id: str,
    pause_after_step0: bool,
    llm_provider: str | None,
    llm_model: str | None,
) -> None:
    job = get_job(job_id)
    if job is None:
        return
    try:
        config = pipeline_config_with_workspace()

        def work() -> None:
            _set_phase(job, "step0")
            run_step0_for_video(
                job.name,
                config,
                llm_provider=llm_provider,
                llm_model=llm_model,
                print_continue_hint=False,
            )
            if pause_after_step0:
                _set_phase(job, "awaiting_draft_review")
                return
            _set_phase(job, "step1")
            run_step1_for_video(
                job.name,
                config,
                llm_provider=llm_provider,
                llm_model=llm_model,
            )
            _set_phase(job, "done")

        _with_stdout_capture(job, work)
        _finish(job, ok=True)
    except Exception as e:
        _finish(job, ok=False, error=f"{e}\n{traceback.format_exc()}")


def _run_step1_only(
    job_id: str,
    llm_provider: str | None,
    llm_model: str | None,
) -> None:
    job = get_job(job_id)
    if job is None:
        return
    try:
        config = pipeline_config_with_workspace()

        def work() -> None:
            _set_phase(job, "step1")
            run_step1_for_video(
                job.name,
                config,
                llm_provider=llm_provider,
                llm_model=llm_model,
            )
            _set_phase(job, "done")

        _with_stdout_capture(job, work)
        _finish(job, ok=True)
    except Exception as e:
        _finish(job, ok=False, error=f"{e}\n{traceback.format_exc()}")
