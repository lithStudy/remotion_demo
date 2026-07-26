import requirements from "./generated/paramOverrideRequirements.json";
import { templateOverrides } from "./overrides/loadOverrides";

type RequirementsFile = {
  version: number;
  templates: Record<
    string,
    {
      requiredOverrideKeys: string[];
    }
  >;
};

export function assertParamOverrides(): void {
  const req = requirements as RequirementsFile;
  const errors: string[] = [];

  for (const [template, meta] of Object.entries(req.templates)) {
    const required = meta.requiredOverrideKeys || [];
    if (required.length === 0) {
      if (templateOverrides.has(template)) {
        const mod = templateOverrides.get(template)!;
        if (Object.keys(mod.fieldOverrides).length > 0) {
          // 允许空需求时存在文件，但多余 key 仍要报
          for (const key of Object.keys(mod.fieldOverrides)) {
            errors.push(`${template}: fieldOverrides 含多余 key "${key}"`);
          }
        }
      }
      continue;
    }

    const mod = templateOverrides.get(template);
    if (!mod) {
      errors.push(
        `${template}: 缺少 overrides/${template}.tsx（需要 keys: ${required.join(", ")}）`,
      );
      continue;
    }
    const keys = new Set(Object.keys(mod.fieldOverrides));
    for (const key of required) {
      if (!keys.has(key)) {
        errors.push(`${template}: 缺少 fieldOverrides["${key}"]`);
      }
    }
    for (const key of keys) {
      if (!required.includes(key)) {
        errors.push(`${template}: fieldOverrides 含多余 key "${key}"`);
      }
    }
  }

  for (const template of templateOverrides.keys()) {
    if (!(template in req.templates)) {
      errors.push(`${template}: override 存在但 requirements 中无此模板`);
    }
  }

  if (errors.length) {
    throw new Error(
      `param override 检查失败:\n${errors.map((e) => `- ${e}`).join("\n")}`,
    );
  }
}
