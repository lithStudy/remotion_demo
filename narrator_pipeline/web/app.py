"""Scene Studio FastAPI 应用：全 POST API。"""

from __future__ import annotations

from dataclasses import asdict
from urllib.parse import quote

from fastapi import FastAPI, File, HTTPException, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import Response

from narrator_pipeline.contracts.validation_errors import ScriptValidationError
from narrator_pipeline.web.auth import AuthDep, issue_token
from narrator_pipeline.web import jobs as job_service
from narrator_pipeline.web import workspace
from narrator_pipeline.web.schemas import (
    ConfirmSyncFromScriptsParam,
    ContinueStep1Param,
    CreateProjectParam,
    DeleteProjectParam,
    EmptyParam,
    ExportProjectParam,
    GenerateParam,
    GetDraftParam,
    GetScriptsParam,
    JobIdParam,
    ListTemplatesParam,
    LoginParam,
    PreviewSyncFromScriptsParam,
    ProjectNameParam,
    RegenParamParam,
    SaveDraftParam,
    SaveScriptsParam,
)
from narrator_pipeline.web.settings import workspace_root
from narrator_pipeline.web.workspace import ensure_workspace


def create_app() -> FastAPI:
    ensure_workspace()
    job_service.recover_from_disk()
    app = FastAPI(title="Scene Studio", version="0.1.0")
    app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    @app.post("/api/login")
    def login(param: LoginParam):
        token = issue_token(param.password)
        return {"token": token}

    @app.post("/api/workspace/info")
    def workspace_info(_auth: AuthDep, _param: EmptyParam):
        return {"workspaceRoot": str(workspace_root())}

    @app.post("/api/projects/list")
    def projects_list(_auth: AuthDep, _param: EmptyParam):
        items = workspace.list_projects()
        return {"projects": [asdict(p) for p in items]}

    @app.post("/api/projects/create")
    def projects_create(_auth: AuthDep, param: CreateProjectParam):
        try:
            info = workspace.create_project(param.name, param.narrationText)
        except ValueError as e:
            raise HTTPException(status_code=400, detail=str(e)) from e
        return {"project": asdict(info)}

    @app.post("/api/projects/delete")
    def projects_delete(_auth: AuthDep, param: DeleteProjectParam):
        try:
            workspace.delete_project(param.name)
        except ValueError as e:
            raise HTTPException(status_code=400, detail=str(e)) from e
        return {"ok": True}

    @app.post("/api/projects/export")
    def projects_export(_auth: AuthDep, param: ExportProjectParam):
        try:
            data = workspace.export_zip_bytes(param.name)
        except ValueError as e:
            raise HTTPException(status_code=400, detail=str(e)) from e
        filename = f"{param.name}.zip"
        return Response(
            content=data,
            media_type="application/zip",
            headers={
                "Content-Disposition": f"attachment; filename*=UTF-8''{quote(filename)}"
            },
        )

    @app.post("/api/projects/import")
    async def projects_import(_auth: AuthDep, file: UploadFile = File(...)):
        raw = await file.read()
        try:
            name = workspace.import_zip_bytes(raw)
        except ValueError as e:
            raise HTTPException(status_code=400, detail=str(e)) from e
        return {"name": name}

    @app.post("/api/generate/start")
    def generate_start(_auth: AuthDep, param: GenerateParam):
        try:
            workspace.assert_valid_name(param.name)
            job = job_service.start_generate(
                param.name,
                pause_after_step0=param.pauseAfterStep0,
                llm_provider=param.llmProvider,
                llm_model=param.llmModel,
                force=param.force,
            )
        except RuntimeError as e:
            raise HTTPException(status_code=409, detail=str(e)) from e
        except ValueError as e:
            raise HTTPException(status_code=400, detail=str(e)) from e
        return {"jobId": job.jobId, "status": job.status, "phase": job.phase}

    @app.post("/api/generate/continue-step1")
    def generate_continue_step1(_auth: AuthDep, param: ContinueStep1Param):
        try:
            workspace.assert_valid_name(param.name)
            job = job_service.start_step1_only(
                param.name,
                llm_provider=param.llmProvider,
                llm_model=param.llmModel,
                force=param.force,
            )
        except RuntimeError as e:
            raise HTTPException(status_code=409, detail=str(e)) from e
        except ValueError as e:
            raise HTTPException(status_code=400, detail=str(e)) from e
        return {"jobId": job.jobId, "status": job.status, "phase": job.phase}

    def _job_payload(job: job_service.Job) -> dict:
        return {
            "jobId": job.jobId,
            "name": job.name,
            "kind": job.kind,
            "status": job.status,
            "phase": job.phase,
            "logs": job.logs[-200:],
            "error": job.error,
            "createdAt": job.createdAt,
            "finishedAt": job.finishedAt,
            "timeoutSec": job_service.JOB_TIMEOUT_SEC,
        }

    @app.post("/api/jobs/status")
    def jobs_status(_auth: AuthDep, param: JobIdParam):
        job = job_service.get_job(param.jobId)
        if job is None:
            raise HTTPException(status_code=404, detail="job 不存在")
        return _job_payload(job)

    @app.post("/api/jobs/active")
    def jobs_active(_auth: AuthDep, _param: EmptyParam):
        job = job_service.get_active_job()
        return {"job": None if job is None else _job_payload(job)}

    @app.post("/api/draft/get")
    def draft_get(_auth: AuthDep, param: GetDraftParam):
        try:
            draft = workspace.read_draft(param.name)
        except Exception as e:
            raise HTTPException(status_code=400, detail=str(e)) from e
        return {"draft": draft}

    @app.post("/api/draft/save")
    def draft_save(_auth: AuthDep, param: SaveDraftParam):
        try:
            draft = workspace.write_draft(param.name, param.draft)
        except Exception as e:
            raise HTTPException(status_code=400, detail=str(e)) from e
        return {"draft": draft}

    @app.post("/api/scripts/get")
    def scripts_get(_auth: AuthDep, param: GetScriptsParam):
        try:
            scripts = workspace.read_scripts(param.name)
        except FileNotFoundError as e:
            raise HTTPException(status_code=404, detail=str(e)) from e
        except Exception as e:
            raise HTTPException(status_code=400, detail=str(e)) from e
        return {"scripts": scripts}

    @app.post("/api/scripts/save")
    def scripts_save(_auth: AuthDep, param: SaveScriptsParam):
        try:
            normalized, warnings = workspace.write_scripts(param.name, param.scripts)
        except ScriptValidationError as e:
            raise HTTPException(status_code=400, detail=str(e)) from e
        except Exception as e:
            raise HTTPException(status_code=400, detail=str(e)) from e
        return {"scripts": normalized, "warnings": warnings}

    @app.post("/api/scripts/sync-preview")
    def scripts_sync_preview(_auth: AuthDep, param: PreviewSyncFromScriptsParam):
        try:
            preview = workspace.build_sync_preview(param.scripts)
        except ValueError as e:
            raise HTTPException(status_code=400, detail=str(e)) from e
        return {
            "draft": preview["draft"],
            "narrationText": preview["narrationText"],
            "updateNarration": param.updateNarration,
        }

    @app.post("/api/scripts/sync-confirm")
    def scripts_sync_confirm(_auth: AuthDep, param: ConfirmSyncFromScriptsParam):
        try:
            result = workspace.apply_sync_from_scripts(
                param.name,
                param.scripts,
                update_narration=param.updateNarration,
            )
        except Exception as e:
            raise HTTPException(status_code=400, detail=str(e)) from e
        return result

    @app.post("/api/scripts/regen-param")
    def scripts_regen_param(_auth: AuthDep, param: RegenParamParam):
        if job_service.is_busy():
            raise HTTPException(status_code=409, detail="已有生成任务在运行，请稍后再试")
        try:
            result = workspace.regenerate_item_param(
                param.name,
                param.scripts,
                param.sceneIdx,
                param.itemIdx,
                llm_provider=param.llmProvider,
                llm_model=param.llmModel,
            )
        except ScriptValidationError as e:
            raise HTTPException(status_code=400, detail=str(e)) from e
        except ValueError as e:
            raise HTTPException(status_code=400, detail=str(e)) from e
        return result

    @app.post("/api/templates/list")
    def templates_list(_auth: AuthDep, _param: ListTemplatesParam):
        return {"templates": workspace.template_catalog()}

    @app.post("/api/projects/get")
    def projects_get(_auth: AuthDep, param: ProjectNameParam):
        try:
            name = workspace.assert_valid_name(param.name)
        except ValueError as e:
            raise HTTPException(status_code=400, detail=str(e)) from e
        projects = {p.name: p for p in workspace.list_projects()}
        info = projects.get(name)
        if info is None:
            raise HTTPException(status_code=404, detail=f"工程不存在: {name}")
        return {"project": asdict(info)}

    return app


app = create_app()
