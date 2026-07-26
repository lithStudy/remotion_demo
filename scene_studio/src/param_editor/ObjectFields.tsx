import { SchemaField } from "./SchemaField";
import type { FieldOverrideComponent, JsonSchema } from "./types";

export function ObjectFields({
  schema,
  value,
  onChange,
  syncArrayKey,
  contentLength,
  rootSchema,
  fieldOverrides,
}: {
  schema: JsonSchema;
  value: Record<string, unknown>;
  onChange: (v: Record<string, unknown>) => void;
  syncArrayKey?: string | null;
  contentLength?: number;
  rootSchema?: JsonSchema;
  fieldOverrides?: Record<string, FieldOverrideComponent>;
}) {
  const props = schema.properties || {};
  const required = new Set(schema.required || []);
  const setKey = (key: string, v: unknown) => {
    onChange({ ...value, [key]: v });
  };
  const root = rootSchema ?? schema;

  return (
    <div className="object-fields">
      {Object.keys(props).length === 0 ? <p className="muted">无字段</p> : null}
      {Object.entries(props).map(([key, prop]) => {
        const Override = fieldOverrides?.[key];
        if (Override) {
          return (
            <Override
              key={key}
              name={key}
              schema={prop}
              value={value[key]}
              required={required.has(key)}
              lockedLength={
                syncArrayKey && key === syncArrayKey
                  ? (contentLength ?? null)
                  : null
              }
              contentLength={contentLength}
              rootSchema={root}
              onChange={(v) => setKey(key, v)}
            />
          );
        }
        return (
          <SchemaField
            key={key}
            name={key}
            schema={prop}
            value={value[key]}
            required={required.has(key)}
            lockedLength={
              syncArrayKey && key === syncArrayKey
                ? (contentLength ?? null)
                : null
            }
            contentLength={contentLength}
            rootSchema={root}
            onChange={(v) => setKey(key, v)}
          />
        );
      })}
    </div>
  );
}
