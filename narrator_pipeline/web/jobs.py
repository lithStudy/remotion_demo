"""异步生成任务：全局单飞 + 进度日志 + 落盘状态。"""

from __future__ import annotations

import json
import threading
import traceback
import uuid
from dataclasses import asdict, dataclass, field
from datetime import datetime, timezone
from pathlib import Path
from typing import Any, Callable, Literal

from narrator_pipeline.analysis.step0 import run_step0_for_video
from narrator_pipeline.analysis.step1 import run_step1_for_video
from narrator_pipeline.paths import resolve_video_paths
from narrator_pipeline.web.settings import pipeline_config_with_workspace, workspace_root

JobStatus = Literal[
    "queued",
    "running",
    "succeeded",
    "failed",
    "cancelled",
    "timed_out",
    "interrupted",
]

JOB_TIMEOUT_SEC = 600
_DRAFT_PHASES = frozenset({"starting", "step0"})
_TERMINAL = frozenset(
    {"succeeded", "failed", "cancelled", "timed_out", "interrupted"}
)


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
_active_job_id: str | None = None


class _LogCapture:
    def __init__(self, job: Job):
        self.job = job
        self._since_flush = 0

    def write(self, s: str) -> int:
        text = s.rstrip("\n")
        if text:
            with _lock:
                self.job.logs.append(text)
                if len(self.job.logs) > 2000:
                    self.job.logs = self.job.logs[-1500:]
                self._since_flush += 1
                should_flush = self._since_flush >= 20
                if should_flush:
                    self._since_flush = 0
            if should_flush:
                _persist_job(self.job)
        return len(s)

    def flush(self) -> None:
        return None


def _active_pointer_path() -> Path:
    return workspace_root() / ".scene-studio" / "active-job.json"


def _job_path(name: str) -> Path:
    config = pipeline_config_with_workspace()
    return resolve_video_paths(name, config).generate_job


def _job_to_dict(job: Job) -> dict[str, Any]:
    data = asdict(job)
    data["logs"] = job.logs[-200:]
    return data


def _persist_job(job: Job) -> None:
    path = _job_path(job.name)
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(
        json.dumps(_job_to_dict(job), ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )


def _persist_active(job: Job | None) -> None:
    pointer = _active_pointer_path()
    if job is None:
        if pointer.is_file():
            pointer.unlink()
        return
    pointer.parent.mkdir(parents=True, exist_ok=True)
    pointer.write_text(
        json.dumps({"name": job.name, "jobId": job.jobId}, ensure_ascii=False, indent=2)
        + "\n",
        encoding="utf-8",
    )


def _load_job_file(name: str) -> Job | None:
    path = _job_path(name)
    if not path.is_file():
        return None
    raw = json.loads(path.read_text(encoding="utf-8"))
    if not isinstance(raw, dict):
        return None
    return Job(
        jobId=str(raw["jobId"]),
        name=str(raw["name"]),
        kind=str(raw["kind"]),
        status=raw.get("status", "failed"),  # type: ignore[arg-type]
        phase=str(raw.get("phase") or ""),
        logs=list(raw.get("logs") or []),
        error=raw.get("error"),
        createdAt=str(raw.get("createdAt") or datetime.now(timezone.utc).isoformat()),
        finishedAt=raw.get("finishedAt"),
    )


def _parse_created_at(job: Job) -> datetime:
    try:
        return datetime.fromisoformat(job.createdAt)
    except ValueError:
        return datetime.now(timezone.utc)


def _is_draft_generating(job: Job) -> bool:
    return job.kind == "generate" and job.phase in _DRAFT_PHASES


def get_job(job_id: str) -> Job | None:
    with _lock:
        _expire_locked()
        return _jobs.get(job_id)


def is_busy() -> bool:
    with _lock:
        _expire_locked()
        return _running


def get_active_job() -> Job | None:
    """返回当前进行中的全局单飞任务；无则 None。"""
    with _lock:
        _expire_locked()
        if _active_job_id is None:
            return None
        job = _jobs.get(_active_job_id)
        if job is None or job.status in _TERMINAL:
            return None
        return job


def recover_from_disk() -> None:
    """进程启动时恢复落盘状态；running 任务因无线程标为 interrupted。"""
    global _running, _active_job_id
    with _lock:
        pointer = _active_pointer_path()
        if not pointer.is_file():
            _running = False
            _active_job_id = None
            return
        try:
            meta = json.loads(pointer.read_text(encoding="utf-8"))
            name = str(meta["name"])
            job_id = str(meta["jobId"])
        except (OSError, KeyError, TypeError, json.JSONDecodeError):
            pointer.unlink(missing_ok=True)
            _running = False
            _active_job_id = None
            return

        job = _load_job_file(name)
        if job is None or job.jobId != job_id:
            pointer.unlink(missing_ok=True)
            _running = False
            _active_job_id = None
            return

        _jobs[job.jobId] = job
        if job.status == "running":
            job.status = "interrupted"
            job.error = "服务重启，生成任务已中断，可重新生成"
            job.finishedAt = datetime.now(timezone.utc).isoformat()
            _persist_job(job)
            pointer.unlink(missing_ok=True)
            _running = False
            _active_job_id = None
            return

        if job.status in _TERMINAL:
            pointer.unlink(missing_ok=True)
            _running = False
            _active_job_id = None
            return

        _running = True
        _active_job_id = job.jobId


def _expire_locked() -> None:
    global _running, _active_job_id
    if _active_job_id is None:
        return
    job = _jobs.get(_active_job_id)
    if job is None or job.status != "running":
        return
    created = _parse_created_at(job)
    now = datetime.now(timezone.utc)
    if created.tzinfo is None:
        created = created.replace(tzinfo=timezone.utc)
    if (now - created).total_seconds() < JOB_TIMEOUT_SEC:
        return
    job.status = "timed_out"
    job.error = f"生成超时（{JOB_TIMEOUT_SEC // 60} 分钟），可重新生成"
    job.finishedAt = now.isoformat()
    _running = False
    _active_job_id = None
    _persist_job(job)
    _persist_active(None)


def _cancel_active_locked(*, reason: str) -> Job | None:
    global _running, _active_job_id
    if _active_job_id is None:
        return None
    job = _jobs.get(_active_job_id)
    if job is None:
        _running = False
        _active_job_id = None
        _persist_active(None)
        return None
    if job.status == "running":
        job.status = "cancelled"
        job.error = reason
        job.finishedAt = datetime.now(timezone.utc).isoformat()
        _persist_job(job)
    _running = False
    _active_job_id = None
    _persist_active(None)
    return job


def _set_phase(job: Job, phase: str) -> None:
    with _lock:
        if job.status != "running" or _active_job_id != job.jobId:
            return
        job.phase = phase
        job.logs.append(f"[phase] {phase}")
    _persist_job(job)


def _begin_job(job: Job) -> None:
    global _running, _active_job_id
    _jobs[job.jobId] = job
    _running = True
    _active_job_id = job.jobId
    _persist_job(job)
    _persist_active(job)


def start_generate(
    name: str,
    *,
    pause_after_step0: bool,
    llm_provider: str | None,
    llm_model: str | None,
    force: bool = False,
) -> Job:
    with _lock:
        _expire_locked()
        if _running:
            if not force:
                raise RuntimeError("已有生成任务在运行（全局单飞）")
            _cancel_active_locked(reason="被新的生成任务顶替")
        job = Job(
            jobId=str(uuid.uuid4()),
            name=name,
            kind="generate",
            status="running",
            phase="starting",
        )
        _begin_job(job)

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
    force: bool = False,
) -> Job:
    with _lock:
        _expire_locked()
        if _running:
            active = _jobs.get(_active_job_id) if _active_job_id else None
            if active is not None and _is_draft_generating(active):
                raise RuntimeError("正在生成草稿（Step0），不允许生成脚本")
            if not force:
                raise RuntimeError("已有生成任务在运行（全局单飞）")
            _cancel_active_locked(reason="被新的脚本生成任务顶替")
        job = Job(
            jobId=str(uuid.uuid4()),
            name=name,
            kind="step1",
            status="running",
            phase="starting",
        )
        _begin_job(job)

    thread = threading.Thread(
        target=_run_step1_only,
        args=(job.jobId, llm_provider, llm_model),
        daemon=True,
    )
    thread.start()
    return job


def _finish(job: Job, *, ok: bool, error: str | None = None) -> None:
    global _running, _active_job_id
    with _lock:
        if job.status in _TERMINAL:
            return
        if _active_job_id != job.jobId:
            return
        job.status = "succeeded" if ok else "failed"
        job.error = error
        job.finishedAt = datetime.now(timezone.utc).isoformat()
        _running = False
        _active_job_id = None
    _persist_job(job)
    _persist_active(None)


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


def _still_active(job: Job) -> bool:
    with _lock:
        return _active_job_id == job.jobId and job.status == "running"


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
            if not _still_active(job):
                return
            _set_phase(job, "step0")
            run_step0_for_video(
                job.name,
                config,
                llm_provider=llm_provider,
                llm_model=llm_model,
                print_continue_hint=False,
            )
            if not _still_active(job):
                return
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
            if not _still_active(job):
                return
            _set_phase(job, "done")

        _with_stdout_capture(job, work)
        if _still_active(job):
            _finish(job, ok=True)
    except Exception as e:
        if _still_active(job):
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
            if not _still_active(job):
                return
            _set_phase(job, "step1")
            run_step1_for_video(
                job.name,
                config,
                llm_provider=llm_provider,
                llm_model=llm_model,
            )
            if not _still_active(job):
                return
            _set_phase(job, "done")

        _with_stdout_capture(job, work)
        if _still_active(job):
            _finish(job, ok=True)
    except Exception as e:
        if _still_active(job):
            _finish(job, ok=False, error=f"{e}\n{traceback.format_exc()}")
