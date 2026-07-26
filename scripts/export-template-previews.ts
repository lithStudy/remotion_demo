/**
 * 从 TemplateShowcase 各模板段末帧导出预览图到 scene_studio/public/template-previews/{TEMPLATE_NAME}.png
 * 用法：npx tsx scripts/export-template-previews.ts
 * 新增模板：在 TemplateShowcase 追加 key=模板名 的段后重跑本脚本即可。
 */
import path from "node:path";
import { mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { bundle } from "@remotion/bundler";
import { renderStill, selectComposition } from "@remotion/renderer";
import { getTemplateShowcaseStillJobs } from "../src/templateShowcase/showcaseStillJobs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const entryPoint = path.join(root, "src", "index.ts");
const outDir = path.join(root, "scene_studio", "public", "template-previews");
const inputProps = { showLabels: false };

async function main() {
	const jobs = getTemplateShowcaseStillJobs();
	if (jobs.length === 0) {
		throw new Error("没有可导出的模板段（key 须为 SCREAMING_SNAKE，如 BEAT_SEQUENCE）");
	}
	mkdirSync(outDir, { recursive: true });

	console.log(`Bundling… (${jobs.length} templates)`);
	const serveUrl = await bundle({
		entryPoint,
		onProgress: (p) => {
			if (p === 1) console.log("Bundle done");
		},
	});

	const composition = await selectComposition({
		serveUrl,
		id: "TemplateShowcase",
		inputProps,
	});

	for (const job of jobs) {
		const output = path.join(outDir, `${job.templateName}.png`);
		console.log(`Still ${job.templateName} frame=${job.frame}`);
		await renderStill({
			composition,
			serveUrl,
			output,
			frame: job.frame,
			inputProps,
			imageFormat: "png",
		});
	}
	console.log(`Wrote ${jobs.length} previews → ${outDir}`);
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
