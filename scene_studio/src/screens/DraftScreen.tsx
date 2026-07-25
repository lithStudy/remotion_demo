import { api } from "../api";
import { AppShell } from "../components/AppShell";
import type { Scene } from "../types";

type Props = {
  name: string;
  draft: Record<string, unknown>;
  setDraft: (d: Record<string, unknown>) => void;
  onBack: () => void;
  onError: (e: string | null) => void;
  onContinue: () => Promise<void>;
  error: string | null;
};

export function DraftScreen(props: Props) {
  const scenes = (props.draft.scenes as Scene[]) || [];
  return (
    <AppShell
      title="草稿审阅"
      subtitle={props.name}
      onBack={props.onBack}
      backLabel="工程"
      error={props.error}
      actions={
        <button
          type="button"
          className="primary"
          onClick={() =>
            api
              .saveDraft(props.name, props.draft)
              .then((res) => props.setDraft(res.draft))
              .catch((e) => props.onError(String(e)))
          }
        >
          保存
        </button>
      }
    >
      <div className="stack-gap">
        <section className="panel">
          <div className="field">
            <label className="field-label">topic</label>
            <input
              value={String(props.draft.topic || "")}
              onChange={(e) =>
                props.setDraft({ ...props.draft, topic: e.target.value })
              }
            />
          </div>
        </section>

        {scenes.map((scene, idx) => (
          <section
            key={scene.sceneId || idx}
            className="panel panel-nested"
          >
            <div className="row between wrap">
              <input
                className="grow"
                value={scene.sceneId || ""}
                onChange={(e) => {
                  const next = [...scenes];
                  next[idx] = { ...scene, sceneId: e.target.value };
                  props.setDraft({ ...props.draft, scenes: next });
                }}
                placeholder="sceneId"
              />
              <button
                type="button"
                className="danger"
                disabled={Boolean(scene.text?.trim())}
                title={
                  scene.text?.trim() ? "场景中有文案时不允许删除" : undefined
                }
                onClick={() => {
                  if (scene.text?.trim()) return;
                  const next = scenes.filter((_, i) => i !== idx);
                  props.setDraft({ ...props.draft, scenes: next });
                }}
              >
                删除
              </button>
            </div>
            <div className="field">
              <label className="field-label">sceneName</label>
              <input
                value={scene.sceneName || ""}
                onChange={(e) => {
                  const next = [...scenes];
                  next[idx] = { ...scene, sceneName: e.target.value };
                  props.setDraft({ ...props.draft, scenes: next });
                }}
              />
            </div>
            <div className="field">
              <label className="field-label">text</label>
              <textarea
                rows={4}
                value={scene.text || ""}
                onChange={(e) => {
                  const next = [...scenes];
                  next[idx] = { ...scene, text: e.target.value };
                  props.setDraft({ ...props.draft, scenes: next });
                }}
              />
            </div>
          </section>
        ))}

        <button
          type="button"
          className="btn-block"
          onClick={() => {
            props.setDraft({
              ...props.draft,
              scenes: [
                ...scenes,
                {
                  sceneId: `scene_${scenes.length + 1}`,
                  sceneName: "新场景",
                  text: "",
                },
              ],
            });
          }}
        >
          + 场景
        </button>

        <div className="bottom-bar">
          <button
            type="button"
            className="primary btn-block"
            onClick={() => props.onContinue().catch((e) => props.onError(String(e)))}
          >
            继续生成脚本（Step1）
          </button>
        </div>
      </div>
    </AppShell>
  );
}
