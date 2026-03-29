/**
 * Template parameter schema system — single source of truth.
 *
 * Exports:
 *  - Schema node types (StrNode, NumNode, EnumNode, ObjNode, ArrNode …)
 *  - Builder helpers (strField, numField, enumField, objField, arrField …)
 *  - TemplateMeta interface
 *  - IMAGE_ENTER_EFFECTS constant
 *  - InferSchema<T>  — derive TypeScript type from a ParamSchema
 *  - extractImagePaths() — recursively collect "imagePrompt"-tagged paths
 *  - extractRequiredParams() — collect top-level required field keys
 */

// ─────────────────────────────────────────────────────────────
// Semantic tags
// ─────────────────────────────────────────────────────────────

/**
 * Tags describe what a field is for, independently of its primitive type.
 * Consumers (AI prompt, validator, image extractor) react to tags rather
 * than hardcoded type strings.
 */
export type FieldTag =
  | "imagePrompt"     // string that describes an image to be generated
  | "anchorLike"      // object/array representing anchor/highlight elements
  | "subtitleSource"  // field that drives subtitle display
  | "audioAsset";     // field holding an audio file path

// ─────────────────────────────────────────────────────────────
// Image enter effects (shared between schema & runtime)
// ─────────────────────────────────────────────────────────────

export const IMAGE_ENTER_EFFECTS = [
  "breathe",
  "slideLeft",
  "slideBottom",
  "zoomIn",
  "fadeIn",
] as const;

export type ImageEnterEffect = (typeof IMAGE_ENTER_EFFECTS)[number];

// ─────────────────────────────────────────────────────────────
// Schema node types
// ─────────────────────────────────────────────────────────────

interface BaseNode {
  /** Whether the field must be present in the AI-generated param. */
  required?: boolean;
  /** Human-readable description shown in AI prompts. */
  description: string;
  /** Semantic tags for automated processing. */
  tags?: FieldTag[];
}

export interface StrNode extends BaseNode {
  kind: "string";
  defaultValue?: string;
}

export interface NumNode extends BaseNode {
  kind: "number";
  defaultValue?: number;
}

export interface BoolNode extends BaseNode {
  kind: "boolean";
  defaultValue?: boolean;
}

export interface EnumNode extends BaseNode {
  kind: "enum";
  values: readonly string[];
  defaultValue?: string;
}

export interface ObjNode extends BaseNode {
  kind: "object";
  fields: ParamSchema;
}

export interface ArrNode extends BaseNode {
  kind: "array";
  item: SchemaNode;
  minItems?: number;
  maxItems?: number;
}

export type SchemaNode = StrNode | NumNode | BoolNode | EnumNode | ObjNode | ArrNode;
export type ParamSchema = Record<string, SchemaNode>;

// ─────────────────────────────────────────────────────────────
// Builder helpers — return plain serialisable objects
// ─────────────────────────────────────────────────────────────

export const strField = (opts: Omit<StrNode, "kind">): StrNode => ({
  kind: "string",
  ...opts,
});

export const numField = (opts: Omit<NumNode, "kind">): NumNode => ({
  kind: "number",
  ...opts,
});

export const boolField = (opts: Omit<BoolNode, "kind">): BoolNode => ({
  kind: "boolean",
  ...opts,
});

export const enumField = (opts: Omit<EnumNode, "kind">): EnumNode => ({
  kind: "enum",
  ...opts,
});

export const objField = (opts: Omit<ObjNode, "kind">): ObjNode => ({
  kind: "object",
  ...opts,
});

export const arrField = (opts: Omit<ArrNode, "kind">): ArrNode => ({
  kind: "array",
  ...opts,
});

// ─────────────────────────────────────────────────────────────
// TypeScript type inference from schema
// ─────────────────────────────────────────────────────────────

type InferNode<T extends SchemaNode> = T extends StrNode
  ? string
  : T extends NumNode
  ? number
  : T extends BoolNode
  ? boolean
  : T extends EnumNode
  ? T["values"][number]
  : T extends ObjNode
  ? InferSchema<T["fields"]>
  : T extends ArrNode
  ? Array<InferNode<T["item"]>>
  : never;

type RequiredKeys<T extends ParamSchema> = {
  [K in keyof T]: T[K] extends { required: true } ? K : never;
}[keyof T];

type OptionalKeys<T extends ParamSchema> = {
  [K in keyof T]: T[K] extends { required: true } ? never : K;
}[keyof T];

/**
 * Derive the TypeScript shape of a param object from its ParamSchema.
 *
 * @example
 * const schema = { title: strField({ required: true, description: "..." }) };
 * type Props = InferSchema<typeof schema>; // { title: string }
 */
export type InferSchema<T extends ParamSchema> = {
  [K in RequiredKeys<T>]: InferNode<T[K]>;
} & {
  [K in OptionalKeys<T>]?: InferNode<T[K]>;
};

// ─────────────────────────────────────────────────────────────
// TemplateMeta — one object per template
// ─────────────────────────────────────────────────────────────

export interface TemplateMeta {
  /** Template name used in scene-scripts.json (e.g. "CENTER_FOCUS"). */
  name: string;
  /** React component export name (e.g. "BWCenterFocus"). */
  componentExport: string;
  /** Full description including when to use, differences, and param hints. */
  description: string;
  /** Psychology principle name shown in the selection table. */
  psychology: string;
  /** Expected number of images (0, 1, 2, "2-4", etc.). */
  imageCount: number | string;
  /** Structured parameter schema — single source of truth. */
  paramSchema: ParamSchema;
  /** Default anchor highlight color. */
  defaultAnchorColor: string;
  /** Default anchor animation style. */
  defaultAnchorAnim: string;
  /** Default audio effect ID for anchors. */
  defaultAudioEffect: string;
  /** Minimum number of content (subtitle) items recommended. */
  contentMinItems?: number;
  /** Maximum number of content (subtitle) items recommended. */
  contentMaxItems?: number;
  /** Whether the template requires at least one anchor. */
  contentAnchorRequired?: boolean;
  /** One representative example shown in the AI prompt. */
  example: { template: string; param: Record<string, unknown> };
}

// ─────────────────────────────────────────────────────────────
// Utilities — used by generate-registry.ts
// ─────────────────────────────────────────────────────────────

/**
 * Recursively scan a ParamSchema and return all dotted JSON paths
 * to fields tagged with "imagePrompt".
 *
 * Examples:
 *   strField({ tags: ["imagePrompt"] })  →  "imageSrc"
 *   arrField({ item: objField({ fields: { imageSrc: strField({ tags: ["imagePrompt"] }) } }) })
 *     →  "stages[].imageSrc"
 *   objField({ fields: { image: objField({ fields: { src: strField({ tags: ["imagePrompt"] }) } }) } })
 *     →  "groups[].image.src"
 */
export function extractImagePaths(
  schema: ParamSchema,
  prefix = ""
): string[] {
  const paths: string[] = [];
  for (const [key, node] of Object.entries(schema)) {
    const path = prefix ? `${prefix}.${key}` : key;
    if (node.tags?.includes("imagePrompt")) {
      paths.push(path);
    }
    if (node.kind === "object") {
      paths.push(...extractImagePaths(node.fields, path));
    }
    if (node.kind === "array") {
      const { item } = node;
      if (item.kind === "object") {
        paths.push(...extractImagePaths(item.fields, `${path}[]`));
      } else if (item.tags?.includes("imagePrompt")) {
        paths.push(`${path}[]`);
      }
    }
  }
  return paths;
}

/**
 * Return the top-level keys in the schema that have required=true.
 * Used to auto-derive the required_extra_params list in the registry.
 */
export function extractRequiredParams(schema: ParamSchema): string[] {
  return Object.entries(schema)
    .filter(([, node]) => node.required === true)
    .map(([key]) => key);
}
