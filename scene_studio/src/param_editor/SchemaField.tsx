import { defaultForSchema } from "./defaults";
import { FieldLabel } from "./FieldLabel";
import { resolveRef } from "./resolveRef";
import type { JsonSchema } from "./types";
import {
  BooleanField,
  ContentIndexField,
  EnumField,
  FieldHint,
  ImagePromptField,
  NumberField,
  StringField,
} from "./widgets";
import { ObjectFields } from "./ObjectFields";

function isContentIndex(schema: JsonSchema): boolean {
  return schema.format === "content_index" || schema.type === "content_index";
}

export function SchemaField({
  name,
  schema,
  value,
  onChange,
  required,
  lockedLength,
  contentLength,
  rootSchema,
}: {
  name: string;
  schema: JsonSchema;
  value: unknown;
  onChange: (v: unknown) => void;
  required?: boolean;
  lockedLength?: number | null;
  contentLength?: number;
  rootSchema?: JsonSchema;
}) {
  const s = resolveRef(schema, rootSchema);

  if (s.enum) {
    return (
      <EnumField
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        description={s.description}
        options={s.enum}
      />
    );
  }

  if (s.type === "boolean") {
    return (
      <BooleanField
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      />
    );
  }

  if (isContentIndex(s)) {
    return (
      <ContentIndexField
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        description={s.description}
        contentLength={contentLength}
      />
    );
  }

  if (s.format === "image_prompt") {
    return (
      <ImagePromptField
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        description={s.description}
      />
    );
  }

  if (s.type === "number" || s.type === "integer") {
    return (
      <NumberField
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        description={s.description}
        integer={s.type === "integer"}
      />
    );
  }

  if (s.type === "array") {
    const itemSchema = s.items || { type: "string" };
    const list = Array.isArray(value) ? value : [];
    const locked = lockedLength != null;
    const canAdd =
      !locked && (s.maxItems == null || list.length < s.maxItems);
    const canRemove =
      !locked && (s.minItems == null || list.length > s.minItems);

    const setAt = (idx: number, v: unknown) => {
      const next = [...list];
      next[idx] = v;
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

    const resolvedItem = resolveRef(itemSchema, rootSchema);

    return (
      <div className="field array-field">
        <FieldLabel name={name} required={required} />
        {locked ? (
          <p className="hint">
            长度与口播片段同步（{lockedLength}），不可手改条数
          </p>
        ) : null}
        <FieldHint text={s.description} />
        <div className="array-rows">
          {list.map((row, idx) => (
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
              {resolvedItem.type === "object" || resolvedItem.properties ? (
                <ObjectFields
                  schema={resolvedItem}
                  value={
                    row && typeof row === "object" && !Array.isArray(row)
                      ? (row as Record<string, unknown>)
                      : {}
                  }
                  onChange={(v) => setAt(idx, v)}
                  contentLength={contentLength}
                  rootSchema={rootSchema}
                />
              ) : (
                <SchemaField
                  name={`项 ${idx + 1}`}
                  schema={resolvedItem}
                  value={row}
                  onChange={(v) => setAt(idx, v)}
                  contentLength={contentLength}
                  rootSchema={rootSchema}
                />
              )}
            </div>
          ))}
        </div>
        {canAdd ? (
          <button
            type="button"
            onClick={() =>
              onChange([...list, defaultForSchema(resolvedItem, rootSchema)])
            }
          >
            + 添加 {name}
          </button>
        ) : null}
      </div>
    );
  }

  if (s.type === "object" || s.properties) {
    return (
      <div className="field object-field">
        <FieldLabel name={name} required={required} />
        <FieldHint text={s.description} />
        <ObjectFields
          schema={s}
          value={
            value && typeof value === "object" && !Array.isArray(value)
              ? (value as Record<string, unknown>)
              : {}
          }
          onChange={onChange}
          contentLength={contentLength}
          rootSchema={rootSchema}
        />
      </div>
    );
  }

  return (
    <StringField
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      description={s.description}
    />
  );
}
