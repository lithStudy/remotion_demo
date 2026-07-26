import type { JsonSchema } from "./types";
import { resolveRef } from "./resolveRef";

export function defaultForSchema(
  schema: JsonSchema | undefined,
  rootSchema?: JsonSchema,
): unknown {
  if (!schema) return null;
  const resolved = resolveRef(schema, rootSchema);
  if (resolved.default !== undefined) return resolved.default;
  if (resolved.enum?.length) return resolved.enum[0];
  if (resolved.type === "boolean") return false;
  if (resolved.type === "number" || resolved.type === "integer") return 0;
  if (resolved.type === "array") return [];
  if (resolved.type === "object" || resolved.properties) {
    const out: Record<string, unknown> = {};
    for (const [k, prop] of Object.entries(resolved.properties || {})) {
      if ((resolved.required || []).includes(k)) {
        out[k] = defaultForSchema(prop, rootSchema);
      }
    }
    return out;
  }
  if (resolved.oneOf?.length) {
    return defaultForSchema(resolved.oneOf[0], rootSchema);
  }
  return "";
}
