import type { TemplateInfo } from "../api";
import { assertParamOverrides } from "./assertOverrides";
import { defaultForSchema } from "./defaults";
import { ObjectFields } from "./ObjectFields";
import { getFieldOverrides } from "./overrides/loadOverrides";
import type { JsonSchema } from "./types";

assertParamOverrides();

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
  const cur = Array.isArray(param[syncKey])
    ? [...(param[syncKey] as unknown[])]
    : [];
  while (cur.length < contentLen) {
    cur.push(defaultForSchema(itemSchema, root));
  }
  while (cur.length > contentLen) {
    cur.pop();
  }
  return { ...param, [syncKey]: cur };
}

export function ParamForm({
  schema,
  value,
  onChange,
  syncArrayKey,
  contentLength,
  templateName,
}: {
  schema: Record<string, unknown>;
  value: Record<string, unknown>;
  onChange: (next: Record<string, unknown>) => void;
  syncArrayKey?: string | null;
  contentLength?: number;
  templateName?: string | null;
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
        rootSchema={s}
        fieldOverrides={getFieldOverrides(templateName)}
      />
    </div>
  );
}

export function templateMap(templates: TemplateInfo[]) {
  const m = new Map<string, TemplateInfo>();
  for (const t of templates) m.set(t.name, t);
  return m;
}
