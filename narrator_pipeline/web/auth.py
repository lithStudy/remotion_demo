"""单用户口令鉴权：登录发 opaque token，请求头 Bearer 校验。"""

from __future__ import annotations

import secrets
from typing import Annotated

from fastapi import Depends, Header, HTTPException

from narrator_pipeline.web.settings import auth_password

_active_tokens: set[str] = set()


def issue_token(password: str) -> str:
    try:
        expected = auth_password()
    except RuntimeError as e:
        raise HTTPException(status_code=503, detail=str(e)) from e
    if password != expected:
        raise HTTPException(status_code=401, detail="口令错误")
    token = secrets.token_urlsafe(32)
    _active_tokens.add(token)
    return token


def require_token(
    authorization: Annotated[str | None, Header()] = None,
) -> str:
    if not authorization or not authorization.startswith("Bearer "):
        raise HTTPException(status_code=401, detail="缺少 Authorization Bearer")
    token = authorization[len("Bearer ") :].strip()
    if token not in _active_tokens:
        raise HTTPException(status_code=401, detail="无效或过期的 token")
    return token


AuthDep = Annotated[str, Depends(require_token)]
