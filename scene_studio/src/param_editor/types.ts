import type { ReactNode } from "react";

export type JsonSchema = {
  type?: string;
  properties?: Record<string, JsonSchema>;
  required?: string[];
  items?: JsonSchema;
  enum?: unknown[];
  default?: unknown;
  description?: string;
  title?: string;
  format?: string;
  minItems?: number;
  maxItems?: number;
  minimum?: number;
  maximum?: number;
  oneOf?: JsonSchema[];
  anyOf?: JsonSchema[];
  $ref?: string;
  $defs?: Record<string, JsonSchema>;
};

export type FieldOverrideProps = {
  name: string;
  schema: JsonSchema;
  value: unknown;
  onChange: (v: unknown) => void;
  required?: boolean;
  contentLength?: number;
  lockedLength?: number | null;
  /** 根 schema，供 $ref 解析 */
  rootSchema?: JsonSchema;
};

export type FieldOverrideComponent = (props: FieldOverrideProps) => ReactNode;

export type TemplateOverrideModule = {
  template: string;
  fieldOverrides: Record<string, FieldOverrideComponent>;
};
