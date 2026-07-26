import type { FieldOverrideProps } from "../types";
import { FieldLabel } from "../FieldLabel";
import { ContentIndexField, StringField } from "../widgets";

function asRow(row: unknown): Record<string, unknown> {
  if (typeof row === "string") return { text: row };
  if (row && typeof row === "object" && !Array.isArray(row)) {
    return row as Record<string, unknown>;
  }
  return {};
}

function StepListStepsEditor({
  name,
  schema,
  value,
  onChange,
  required,
  contentLength,
  lockedLength,
}: FieldOverrideProps) {
  const list = Array.isArray(value) ? value : [];
  const locked = lockedLength != null;
  const canAdd =
    !locked && (schema.maxItems == null || list.length < schema.maxItems);
  const canRemove =
    !locked && (schema.minItems == null || list.length > schema.minItems);

  const setAt = (idx: number, row: Record<string, unknown>) => {
    const next = [...list];
    next[idx] = row;
    onChange(next);
  };
  const removeAt = (idx: number) => {
    if (!canRemove) return;
    onChange(list.filter((_, i) => i !== idx));
  };
  const move = (idx: number, dir: -1 | 1) => {
    const j = idx + dir;
    if (j < 0 || j >= list.length) return;
    const next = [...list];
    const tmp = next[idx];
    next[idx] = next[j];
    next[j] = tmp;
    onChange(next);
  };

  return (
    <div className="field array-field">
      <FieldLabel name={name} required={required} />
      {locked ? (
        <p className="hint">
          长度与口播片段同步（{lockedLength}），不可手改条数
        </p>
      ) : null}
      {schema.description ? <p className="hint">{schema.description}</p> : null}
      <div className="array-rows">
        {list.map((raw, idx) => {
          const row = asRow(raw);
          const patch = (key: string, v: unknown) =>
            setAt(idx, { ...row, [key]: v });
          return (
            <div className="array-row" key={idx}>
              <div className="array-row-head">
                <span className="muted">#{idx + 1}</span>
                <div className="row">
                  <button
                    type="button"
                    disabled={idx === 0}
                    onClick={() => move(idx, -1)}
                    title="上移"
                  >
                    ↑
                  </button>
                  <button
                    type="button"
                    disabled={idx >= list.length - 1}
                    onClick={() => move(idx, 1)}
                    title="下移"
                  >
                    ↓
                  </button>
                  {canRemove ? (
                    <button
                      type="button"
                      className="danger"
                      onClick={() => removeAt(idx)}
                    >
                      删
                    </button>
                  ) : null}
                </div>
              </div>
              <StringField
                name="text"
                value={row.text}
                onChange={(v) => patch("text", v)}
                required
              />
              <ContentIndexField
                name="showFrom"
                value={row.showFrom}
                onChange={(v) => patch("showFrom", v)}
                description="对应 content 数组的下标（0-based）；不传则按序号顺延"
                contentLength={contentLength}
              />
            </div>
          );
        })}
      </div>
      {canAdd ? (
        <button type="button" onClick={() => onChange([...list, {}])}>
          + 添加 {name}
        </button>
      ) : null}
    </div>
  );
}

export const template = "STEP_LIST";
export const fieldOverrides = {
  steps: StepListStepsEditor,
};
