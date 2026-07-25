"""全部 POST 接口的 *Param 请求体。"""

from __future__ import annotations

from typing import Any

from pydantic import BaseModel, Field


class LoginParam(BaseModel):
    password: str


class EmptyParam(BaseModel):
    """无业务字段的 POST 占位。"""


class ProjectNameParam(BaseModel):
    name: str = Field(..., min_length=1)


class CreateProjectParam(BaseModel):
    name: str = Field(..., min_length=1)
    narrationText: str = Field(..., min_length=1)


class DeleteProjectParam(BaseModel):
    name: str = Field(..., min_length=1)


class GenerateParam(BaseModel):
    name: str = Field(..., min_length=1)
    pauseAfterStep0: bool = False
    llmProvider: str | None = None
    llmModel: str | None = None


class JobIdParam(BaseModel):
    jobId: str = Field(..., min_length=1)


class GetDraftParam(BaseModel):
    name: str = Field(..., min_length=1)


class SaveDraftParam(BaseModel):
    name: str = Field(..., min_length=1)
    draft: dict[str, Any]


class ContinueStep1Param(BaseModel):
    name: str = Field(..., min_length=1)
    llmProvider: str | None = None
    llmModel: str | None = None


class GetScriptsParam(BaseModel):
    name: str = Field(..., min_length=1)


class SaveScriptsParam(BaseModel):
    name: str = Field(..., min_length=1)
    scripts: dict[str, Any]


class PreviewSyncFromScriptsParam(BaseModel):
    name: str = Field(..., min_length=1)
    scripts: dict[str, Any]
    updateNarration: bool = True


class ConfirmSyncFromScriptsParam(BaseModel):
    name: str = Field(..., min_length=1)
    scripts: dict[str, Any]
    updateNarration: bool = True


class ExportProjectParam(BaseModel):
    name: str = Field(..., min_length=1)


class ListTemplatesParam(BaseModel):
    """列出模板注册表。"""


class RegenParamParam(BaseModel):
    """对分镜脚本中单个 item 做局部参数重生（只重写 param）。"""

    name: str = Field(..., min_length=1)
    scripts: dict[str, Any]
    sceneIdx: int = Field(..., ge=0)
    itemIdx: int = Field(..., ge=0)
    llmProvider: str | None = None
    llmModel: str | None = None
