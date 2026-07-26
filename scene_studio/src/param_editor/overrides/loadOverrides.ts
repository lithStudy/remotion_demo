import type { TemplateOverrideModule } from "../types";

const modules = import.meta.glob("./*.tsx", { eager: true }) as Record<
  string,
  TemplateOverrideModule
>;

export const templateOverrides = new Map<string, TemplateOverrideModule>();

for (const [path, mod] of Object.entries(modules)) {
  if (path.endsWith("/loadOverrides.tsx")) continue;
  if (!mod.template || !mod.fieldOverrides) {
    throw new Error(`param override 导出不合规: ${path}`);
  }
  if (templateOverrides.has(mod.template)) {
    throw new Error(`param override 模板重复: ${mod.template} (${path})`);
  }
  templateOverrides.set(mod.template, mod);
}

export function getFieldOverrides(templateName: string | undefined | null) {
  if (!templateName) return undefined;
  return templateOverrides.get(templateName)?.fieldOverrides;
}
