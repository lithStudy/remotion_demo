/**
 * Registry generation script.
 * Run with: npm run generate-registry
 *
 * Imports all template definitions (pure TS, no React/image imports),
 * computes derived fields (imagePaths, requiredExtraParams), and writes
 * script_v5/template_registry.json — the stable artifact consumed by Python.
 */

import * as fs from "fs";
import * as path from "path";
import { ALL_TEMPLATE_METAS } from "./template-definitions";
import { extractImagePaths, extractRequiredParams } from "./template-schema";

interface RegistryEntry {
  component_export: string;
  description: string;
  psychology: string;
  image_count: number | string;
  param_schema: Record<string, unknown>;
  image_paths: string[];
  required_extra_params: string[];
  default_anchor_color: string;
  default_anchor_anim: string;
  default_audio_effect: string;
  content_min_items?: number;
  content_max_items?: number;
  content_anchor_required?: boolean;
  example: { template: string; param: Record<string, unknown> };
}

const registry: Record<string, RegistryEntry> = {};

for (const meta of ALL_TEMPLATE_METAS) {
  registry[meta.name] = {
    component_export: meta.componentExport,
    description: meta.description,
    psychology: meta.psychology,
    image_count: meta.imageCount,
    param_schema: meta.paramSchema as Record<string, unknown>,
    image_paths: extractImagePaths(meta.paramSchema),
    required_extra_params: extractRequiredParams(meta.paramSchema),
    default_anchor_color: meta.defaultAnchorColor,
    default_anchor_anim: meta.defaultAnchorAnim,
    default_audio_effect: meta.defaultAudioEffect,
    ...(meta.contentMinItems !== undefined && { content_min_items: meta.contentMinItems }),
    ...(meta.contentMaxItems !== undefined && { content_max_items: meta.contentMaxItems }),
    ...(meta.contentAnchorRequired !== undefined && {
      content_anchor_required: meta.contentAnchorRequired,
    }),
    example: meta.example,
  };
}

const outputPath = path.resolve(process.cwd(), "script_v5", "template_registry.json");
fs.writeFileSync(outputPath, JSON.stringify(registry, null, 2), "utf-8");

console.log(`✅ template_registry.json written to ${outputPath}`);
console.log(`   Templates: ${Object.keys(registry).join(", ")}`);

// Print image paths summary
for (const [name, entry] of Object.entries(registry)) {
  if (entry.image_paths.length > 0) {
    console.log(`   ${name}: image_paths = [${entry.image_paths.join(", ")}]`);
  }
}
