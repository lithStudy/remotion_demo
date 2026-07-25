import type { TemplateInfo } from "./api";

type JsonSchema = {
  type?: string;
  properties?: Record<
    string,
    JsonSchema & {
      title?: string;
      description?: string;
      enum?: unknown[];
      default?: unknown;
      format?: string;
      minItems?: number;
      maxItems?: number;
    }
  >;
  required?: string[];
  items?: JsonSchema;
  enum?: unknown[];
  default?: unknown;
  description?: string;
  format?: string;
  minItems?: number;
  maxItems?: number;
};

function FieldLabel({ name, required }: { name: string; required?: boolean }) {
  return (
    <label className="field-label">
      {name}
      {required ? <span className="req">*</span> : null}
    </label>
  );
}

function defaultForSchema(schema: JsonSchema | undefined): unknown {
  if (!schema) return null;
  if (schema.default !== undefined) return schema.default;
  if (schema.enum?.length) return schema.enum[0];
  if (schema.type === "boolean") return false;
  if (schema.type === "number" || schema.type === "integer") return 0;
  if (schema.type === "array") return [];
  if (schema.type === "object") {
    const out: Record<string, unknown> = {};
    for (const [k, prop] of Object.entries(schema.properties || {})) {
      if ((schema.required || []).includes(k)) {
        out[k] = defaultForSchema(prop);
      }
    }
    return out;
  }
  return "";
}

/** 将 param 中与 content 同步的数组对齐到指定长度 */
export function syncParamArrayToContentLength(
  param: Record<string, unknown>,
  syncKey: string | undefined | null,
  contentLen: number,
  schema: Record<string, unknown>,
): Record<string, unknown> {
  if (!syncKey) return param;
  const root = schema as JsonSchema;
  const prop = root.properties?.[syncKey];
  if (!prop || prop.type !== "array") return param;
  const itemSchema = prop.items || {};
  const cur = Array.isArray(param[syncKey]) ? [...(param[syncKey] as unknown[])] : [];
  while (cur.length < contentLen) {
    cur.push(defaultForSchema(itemSchema));
  }
  while (cur.length > contentLen) {
    cur.pop();
  }
  return { ...param, [syncKey]: cur };
}

function SchemaField({
  name,
  schema,
  value,
  onChange,
  required,
  lockedLength,
}: {
  name: string;
  schema: JsonSchema;
  value: unknown;
  onChange: (v: unknown) => void;
  required?: boolean;
  /** 若设置，则 array 长度锁定为该值（param_array_sync_content） */
  lockedLength?: number | null;
}) {
  if (schema.enum) {
    return (
      <div className="field">
        <FieldLabel name={name} required={required} />
        <select
          value={value == null ? "" : String(value)}
          onChange={(e) => onChange(e.target.value === "" ? null : e.target.value)}
        >
          <option value="">—</option>
          {schema.enum.map((opt) => (
            <option key={String(opt)} value={String(opt)}>
              {String(opt)}
            </option>
          ))}
        </select>
        {schema.description ? <p className="hint">{schema.description}</p> : null}
      </div>
    );
  }

  if (schema.type === "boolean") {
    return (
      <div className="field">
        <label className="check">
          <input
            type="checkbox"
            checked={Boolean(value)}
            onChange={(e) => onChange(e.target.checked)}
          />
          {name}
          {required ? <span className="req">*</span> : null}
        </label>
      </div>
    );
  }

  if (schema.type === "number" || schema.type === "integer") {
    return (
      <div className="field">
        <FieldLabel name={name} required={required} />
        <input
          type="number"
          value={value == null || value === "" ? "" : Number(value)}
          onChange={(e) =>
            onChange(e.target.value === "" ? null : Number(e.target.value))
          }
        />
        {schema.description ? <p className="hint">{schema.description}</p> : null}
      </div>
    );
  }

  if (schema.type === "array") {
    const itemSchema = schema.items || { type: "string" };
    const list = Array.isArray(value) ? value : [];
    const locked = lockedLength != null;
    const canAdd =
      !locked && (schema.maxItems == null || list.length < schema.maxItems);
    const canRemove =
      !locked && (schema.minItems == null || list.length > schema.minItems);

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

    return (
      <div className="field array-field">
        <FieldLabel name={name} required={required} />
        {locked ? (
          <p className="hint">长度与口播片段同步（{lockedLength}），不可手改条数</p>
        ) : null}
        {schema.description ? <p className="hint">{schema.description}</p> : null}
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
                    <button type="button" className="danger" onClick={() => removeAt(idx)}>
                      删
                    </button>
                  ) : null}
                </div>
              </div>
              {itemSchema.type === "object" || itemSchema.properties ? (
                <ObjectFields
                  schema={itemSchema}
                  value={
                    row && typeof row === "object" && !Array.isArray(row)
                      ? (row as Record<string, unknown>)
                      : {}
                  }
                  onChange={(v) => setAt(idx, v)}
                />
              ) : (
                <SchemaField
                  name={`项 ${idx + 1}`}
                  schema={itemSchema}
                  value={row}
                  onChange={(v) => setAt(idx, v)}
                />
              )}
            </div>
          ))}
        </div>
        {canAdd ? (
          <button
            type="button"
            onClick={() => onChange([...list, defaultForSchema(itemSchema)])}
          >
            + 添加 {name}
          </button>
        ) : null}
      </div>
    );
  }

  if (schema.type === "object" || schema.properties) {
    return (
      <div className="field object-field">
        <FieldLabel name={name} required={required} />
        {schema.description ? <p className="hint">{schema.description}</p> : null}
        <ObjectFields
          schema={schema}
          value={
            value && typeof value === "object" && !Array.isArray(value)
              ? (value as Record<string, unknown>)
              : {}
          }
          onChange={onChange}
        />
      </div>
    );
  }

  return (
    <div className="field">
      <FieldLabel name={name} required={required} />
      <input
        type="text"
        value={value == null ? "" : String(value)}
        onChange={(e) => onChange(e.target.value)}
      />
      {schema.description ? <p className="hint">{schema.description}</p> : null}
      {schema.format === "image_prompt" ? (
        <p className="hint">图片提示词</p>
      ) : null}
    </div>
  );
}

function ObjectFields({
  schema,
  value,
  onChange,
  syncArrayKey,
  contentLength,
}: {
  schema: JsonSchema;
  value: Record<string, unknown>;
  onChange: (v: Record<string, unknown>) => void;
  syncArrayKey?: string | null;
  contentLength?: number;
}) {
  const props = schema.properties || {};
  const required = new Set(schema.required || []);
  const setKey = (key: string, v: unknown) => {
    onChange({ ...value, [key]: v });
  };

  return (
    <div className="object-fields">
      {Object.keys(props).length === 0 ? (
        <p className="muted">无字段</p>
      ) : null}
      {Object.entries(props).map(([key, prop]) => (
        <SchemaField
          key={key}
          name={key}
          schema={prop}
          value={value[key]}
          required={required.has(key)}
          lockedLength={
            syncArrayKey && key === syncArrayKey ? contentLength ?? null : null
          }
          onChange={(v) => setKey(key, v)}
        />
      ))}
    </div>
  );
}

export function ParamForm({
  schema,
  value,
  onChange,
  syncArrayKey,
  contentLength,
}: {
  schema: Record<string, unknown>;
  value: Record<string, unknown>;
  onChange: (next: Record<string, unknown>) => void;
  syncArrayKey?: string | null;
  contentLength?: number;
}) {
  const s = schema as JsonSchema;
  if (!s.properties || Object.keys(s.properties).length === 0) {
    return <p className="muted">该模板无 param_schema 字段</p>;
  }
  return (
    <div className="param-form">
      <ObjectFields
        schema={s}
        value={value}
        onChange={onChange}
        syncArrayKey={syncArrayKey}
        contentLength={contentLength}
      />
    </div>
  );
}

export function templateMap(templates: TemplateInfo[]) {
  const m = new Map<string, TemplateInfo>();
  for (const t of templates) m.set(t.name, t);
  return m;
}
