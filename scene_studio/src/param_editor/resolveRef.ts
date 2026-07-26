import type { JsonSchema } from "./types";

export function resolveRef(
  schema: JsonSchema,
  rootSchema?: JsonSchema,
): JsonSchema {
  if (!schema.$ref || !rootSchema) return schema;
  const ref = schema.$ref;
  if (!ref.startsWith("#/$defs/")) return schema;
  const name = ref.slice("#/$defs/".length);
  const def = rootSchema.$defs?.[name];
  if (!def) {
    throw new Error(`param_schema $ref 无法解析: ${ref}`);
  }
  const { $ref: _ignored, ...rest } = schema;
  return { ...def, ...rest };
}
