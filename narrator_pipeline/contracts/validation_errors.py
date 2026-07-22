from __future__ import annotations

from dataclasses import dataclass
from typing import Any


@dataclass(frozen=True)
class ScriptValidationError(Exception):
    reason: str
    scene_id: str | None = None
    order: Any | None = None
    template: str | None = None
    path: str | None = None

    def __str__(self) -> str:
        parts: list[str] = []
        if self.scene_id is not None:
            parts.append(f"sceneId={self.scene_id}")
        if self.order is not None:
            parts.append(f"order={self.order}")
        if self.template:
            parts.append(f"template={self.template}")
        if self.path:
            parts.append(f"path={self.path}")
        loc = (" " + " ".join(parts)) if parts else ""
        return f"{self.reason}{loc}"

