"""本机 Remotion Studio。已在跑则不重启；失败的启动会关掉本次拉起的进程。"""

from __future__ import annotations

import http.client
import shutil
import subprocess
import sys
import threading
import time
from pathlib import Path

from narrator_pipeline.web.settings import remotion_port, workspace_root

_READY_MARK = b"remotion_isStudio"
_START_TIMEOUT_S = 300

_lock = threading.Lock()
_start_lock = threading.Lock()
_proc: subprocess.Popen[bytes] | None = None
_log_handle: object | None = None


def is_running() -> bool:
    return _probe(remotion_port()) == "studio"


def ensure_running() -> str:
    """返回 already 或 started。端口被其他程序占用时失败。"""
    with _start_lock:
        return _ensure_running_locked()


def _ensure_running_locked() -> str:
    global _proc, _log_handle
    port = remotion_port()
    state = _probe(port)
    if state == "studio":
        return "already"
    if state == "other":
        raise RuntimeError(
            f"端口 {port} 已被占用，且不是 Remotion Studio。请释放该端口。"
        )

    npx = shutil.which("npx")
    if not npx:
        raise RuntimeError("未找到 npx，无法启动 Remotion Studio")

    root = workspace_root()
    log_path = root / ".scene-studio" / "remotion-studio.log"
    log_path.parent.mkdir(parents=True, exist_ok=True)
    log_file = open(log_path, "ab")
    try:
        proc = subprocess.Popen(
            [npx, "remotion", "studio", "--port", str(port), "--no-open"],
            cwd=str(root),
            stdout=log_file,
            stderr=subprocess.STDOUT,
            stdin=subprocess.DEVNULL,
        )
    except OSError:
        log_file.close()
        raise
    with _lock:
        _proc = proc
        _log_handle = log_file

    deadline = time.monotonic() + _START_TIMEOUT_S
    while time.monotonic() < deadline:
        if proc.poll() is not None:
            _kill_spawned(proc, log_file)
            raise RuntimeError(
                "Remotion Studio 进程已退出。\n" + _log_tail(log_path)
            )
        if _probe(port) == "studio":
            return "started"
        time.sleep(0.5)

    _kill_spawned(proc, log_file)
    raise RuntimeError(
        f"Remotion Studio 在 {_START_TIMEOUT_S} 秒内未就绪。\n" + _log_tail(log_path)
    )


def _probe(port: int) -> str:
    try:
        conn = http.client.HTTPConnection("127.0.0.1", port, timeout=2)
        conn.request("GET", "/")
        resp = conn.getresponse()
        body = resp.read(65536)
        conn.close()
    except OSError:
        return "down"
    if resp.status == 200 and _READY_MARK in body:
        return "studio"
    return "other"


def _kill_spawned(proc: subprocess.Popen[bytes], log_file: object) -> None:
    global _proc, _log_handle
    if proc.poll() is None:
        if sys.platform == "win32":
            subprocess.run(
                ["taskkill", "/F", "/T", "/PID", str(proc.pid)],
                stdout=subprocess.DEVNULL,
                stderr=subprocess.DEVNULL,
                check=False,
            )
        else:
            proc.kill()
        try:
            proc.wait(timeout=10)
        except subprocess.TimeoutExpired:
            pass
    with _lock:
        if _proc is proc:
            _proc = None
            _log_handle = None
    close = getattr(log_file, "close", None)
    if close is not None:
        close()


def _log_tail(path: Path) -> str:
    if not path.is_file():
        return ""
    data = path.read_bytes()
    text = data.decode("utf-8", errors="replace")
    lines = text.splitlines()
    return "\n".join(lines[-40:])
