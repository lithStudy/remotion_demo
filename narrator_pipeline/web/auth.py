"""单用户口令鉴权：登录发 opaque token。接口用 Bearer，预览用 Cookie。"""

from __future__ import annotations

import secrets
import threading
from typing import Annotated

from fastapi import Depends, Header, HTTPException
from starlette.responses import Response

from narrator_pipeline.web.settings import auth_password

COOKIE_NAME = "scene_studio_session"

_tokens_lock = threading.Lock()
_active_tokens: set[str] = set()


def issue_token(password: str) -> str:
    try:
        expected = auth_password()
    except RuntimeError as e:
        raise HTTPException(status_code=503, detail=str(e)) from e
    if password != expected:
        raise HTTPException(status_code=401, detail="口令错误")
    token = secrets.token_urlsafe(32)
    with _tokens_lock:
        _active_tokens.add(token)
    return token


def token_valid(token: str | None) -> bool:
    if not token:
        return False
    with _tokens_lock:
        return token in _active_tokens


def revoke_token(token: str | None) -> None:
    if not token:
        return
    with _tokens_lock:
        _active_tokens.discard(token)


def bearer_token(authorization: str | None) -> str | None:
    if not authorization or not authorization.startswith("Bearer "):
        return None
    token = authorization[len("Bearer ") :].strip()
    return token or None


def token_from_cookie_header(cookie_header: str | None) -> str | None:
    if not cookie_header:
        return None
    for part in cookie_header.split(";"):
        name, sep, value = part.strip().partition("=")
        if sep and name == COOKIE_NAME and value:
            return value
    return None


def cookie_header_valid(cookie_header: str | None) -> bool:
    return token_valid(token_from_cookie_header(cookie_header))


def apply_session_cookie(response: Response, token: str) -> None:
    response.set_cookie(
        COOKIE_NAME,
        token,
        httponly=True,
        samesite="lax",
        path="/",
        max_age=60 * 60 * 24 * 30,
    )


def clear_session_cookie(response: Response) -> None:
    response.delete_cookie(COOKIE_NAME, path="/", samesite="lax")


def require_token(
    authorization: Annotated[str | None, Header()] = None,
) -> str:
    token = bearer_token(authorization)
    if not token_valid(token):
        raise HTTPException(status_code=401, detail="无效或过期的 token")
    return token or ""


AuthDep = Annotated[str, Depends(require_token)]
