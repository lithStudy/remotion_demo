"""公网预览端口：校验登录 Cookie，再把整站转发到本机 Remotion Studio。"""

from __future__ import annotations

import http.client
import threading
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer

from narrator_pipeline.web.auth import cookie_header_valid
from narrator_pipeline.web.settings import preview_port, remotion_port

_HOP = {
    "connection",
    "keep-alive",
    "proxy-authenticate",
    "proxy-authorization",
    "te",
    "trailers",
    "transfer-encoding",
    "upgrade",
    "host",
}


class _Handler(BaseHTTPRequestHandler):
    protocol_version = "HTTP/1.1"

    def do_GET(self) -> None:
        self._proxy()

    def do_POST(self) -> None:
        self._proxy()

    def do_HEAD(self) -> None:
        self._proxy()

    def do_OPTIONS(self) -> None:
        self._proxy()

    def do_PUT(self) -> None:
        self._proxy()

    def do_DELETE(self) -> None:
        self._proxy()

    def log_message(self, format: str, *args: object) -> None:
        return None

    def _proxy(self) -> None:
        if not cookie_header_valid(self.headers.get("Cookie")):
            self._text(401, "未登录。请先在 Scene Studio 登录。")
            return

        length = int(self.headers.get("Content-Length", "0") or "0")
        body = self.rfile.read(length) if length else None
        headers: dict[str, str] = {}
        for key, value in self.headers.items():
            if key.lower() in _HOP or key.lower() == "cookie":
                continue
            headers[key] = value
        port = remotion_port()
        headers["Host"] = f"127.0.0.1:{port}"

        conn = http.client.HTTPConnection("127.0.0.1", port, timeout=None)
        try:
            conn.request(self.command, self.path, body=body, headers=headers)
            resp = conn.getresponse()
        except OSError as exc:
            self._text(503, f"Remotion Studio 未运行。请先成功跑完步骤任务。({exc})")
            conn.close()
            return

        has_length = any(key.lower() == "content-length" for key, _value in resp.headers.items())
        self.send_response(resp.status)
        for key, value in resp.headers.items():
            if key.lower() in _HOP:
                continue
            self.send_header(key, value)
        self.end_headers()
        if not has_length:
            self.close_connection = True
        if self.command == "HEAD":
            resp.close()
            conn.close()
            return
        try:
            while True:
                chunk = resp.read1(65536)
                if not chunk:
                    break
                self.wfile.write(chunk)
                self.wfile.flush()
        except (BrokenPipeError, ConnectionResetError):
            pass
        finally:
            resp.close()
            conn.close()

    def _text(self, status: int, message: str) -> None:
        data = message.encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "text/plain; charset=utf-8")
        self.send_header("Content-Length", str(len(data)))
        self.end_headers()
        if self.command != "HEAD":
            self.wfile.write(data)


def start_preview_proxy() -> None:
    server = ThreadingHTTPServer(("0.0.0.0", preview_port()), _Handler)
    thread = threading.Thread(
        target=server.serve_forever,
        name="studio-preview-proxy",
        daemon=True,
    )
    thread.start()
