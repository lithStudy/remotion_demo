/**
 * DATA_TABLE 模板：2～5 列、2～8 行的数据表；表头常驻，数据行按 showFrom 与口播句对齐逐行显现。
 */
import React from "react";
import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from "remotion";
import { BW_TEXT, type TemplateAnchorsProps, type TemplateBaseProps } from "./shared";
import { TemplateDefaultAnchors } from "./TemplateAnchorsLayer";
import {
	TemplateContentRenderer,
	normalizeContent,
} from "./TemplateContentRenderer";

export const templateMeta = {
	"name": "DATA_TABLE",
	"componentExport": "BWDataTable",
	"description":
		"适用：规格对照、多维度参数、版本差异、价目/档位并列等需要「行列结构」一目了然的段落。\n差异：纯两项整数对比用 STAT_COMPARE；无表格结构的要点清单用 CHECKLIST_REVEAL 或 STEP_LIST。\n参数：columns 为表头（2～5 列短文案）；rows 每项 cells 长度应与列数一致（不足补空、超出截断），showFrom 为 content 下标，从该条 startFrame 起该行入场。",
	"psychology": "结构化对比与可信度",
	"image_count": "0",
	"content_min_items": 2,
	"content_max_items": 12,
	"param_schema": {
		"type": "object",
		"properties": {
			"title": {
				"type": "string",
				"description": "可选；表上方标题，建议 4～18 字",
			},
			"columns": {
				"type": "array",
				"minItems": 2,
				"maxItems": 5,
				"description": "表头文案，从左到右",
				"items": { "type": "string", "description": "列标题，建议 2～8 字" },
			},
			"rows": {
				"type": "array",
				"minItems": 2,
				"maxItems": 8,
				"description":
					"数据行；cells 为单元格文案（顺序与 columns 一致）；showFrom 为 content 下标（0-based）",
				"items": {
					"type": "object",
					"required": ["cells", "showFrom"],
					"properties": {
						"cells": {
							"type": "array",
							"minItems": 1,
							"maxItems": 5,
							"items": { "type": "string", "description": "单元格短文案" },
						},
						"showFrom": {
							"type": "integer",
							"format": "content_index",
							"description": "该行出现时机：content 数组下标，取该条 startFrame",
						},
					},
				},
			},
		},
		"required": ["columns", "rows"],
	},
	"example": {
		"template": "DATA_TABLE",
		"param": {
			"title": "三档对比",
			"columns": ["档位", "续航", "价格"],
			"rows": [
				{ "cells": ["标准", "一天", "1999"], "showFrom": 0 },
				{ "cells": ["Pro", "一天半", "2699"], "showFrom": 1 },
				{ "cells": ["Ultra", "两天", "3999"], "showFrom": 2 },
			],
		},
	},
} as const;

export type DataTableRowItem = {
	cells: string[];
	showFrom: number;
};

export interface BWDataTableProps extends TemplateBaseProps, TemplateAnchorsProps {
	columns: string[];
	rows: DataTableRowItem[];
	title?: string;
}

const fontStack =
	'"Microsoft YaHei", "PingFang SC", "Noto Sans SC", sans-serif';

const resolveRowStartFrame = (
	showFrom: number,
	rowIndex: number,
	contentItems: ReturnType<typeof normalizeContent>,
	staggerFallback: number,
): number => {
	if (
		typeof showFrom === "number" &&
		Number.isInteger(showFrom) &&
		showFrom >= 0 &&
		showFrom < contentItems.length
	) {
		const cue = contentItems[showFrom];
		if (cue && typeof cue.startFrame === "number") return cue.startFrame;
	}
	return rowIndex * staggerFallback;
};

function padCells(cells: string[], colCount: number): string[] {
	const raw = Array.isArray(cells) ? cells.map((c) => (typeof c === "string" ? c : "")) : [];
	if (raw.length >= colCount) return raw.slice(0, colCount);
	return [...raw, ...Array(colCount - raw.length).fill("")];
}

const DataTableRowView: React.FC<{
	cells: string[];
	startFrame: number;
	isStriped: boolean;
	fontSize: number;
}> = ({ cells, startFrame, isStriped, fontSize }) => {
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();
	const rel = frame - startFrame;
	const rowIn = spring({
		frame: rel,
		fps,
		config: { damping: 78, stiffness: 200 },
		durationInFrames: 20,
	});
	const opacity = interpolate(rowIn, [0, 1], [0, 1], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	});
	const slideY = interpolate(rowIn, [0, 1], [14, 0], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	});

	return (
		<div
			style={{
				display: "grid",
				gridTemplateColumns: `repeat(${cells.length}, 1fr)`,
				backgroundColor: isStriped ? "#f4f4f5" : "#ffffff",
				opacity,
				transform: `translateY(${slideY}px)`,
			}}
		>
			{cells.map((text, i) => (
				<div
					key={i}
					style={{
						padding: "16px 14px",
						fontSize,
						fontWeight: i === 0 ? 700 : 600,
						color: BW_TEXT,
						fontFamily: fontStack,
						lineHeight: 1.35,
						borderTop: "1px solid rgba(17,17,17,0.14)",
						borderRight:
							i < cells.length - 1 ? "1px solid rgba(17,17,17,0.1)" : undefined,
					}}
				>
					{text}
				</div>
			))}
		</div>
	);
};

export const BWDataTable: React.FC<BWDataTableProps> = ({
	columns,
	rows,
	title,
	content,
	anchors,
	audioSrc,
	children,
	style,
}) => {
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();
	const items = normalizeContent(content);
	const slice = (columns ?? [])
		.slice(0, 5)
		.map((c) => (typeof c === "string" ? c : ""));
	const colCount = Math.max(2, Math.min(5, slice.length));
	const effectiveCols = Array.from({ length: colCount }, (_, i) => slice[i]?.trim() || "—");
	const list = (rows ?? []).slice(0, 8);
	const stagger = 14;
	const starts = list.map((r, i) =>
		resolveRowStartFrame(r.showFrom ?? 0, i, items, stagger),
	);

	const headerIn = spring({
		frame,
		fps,
		config: { damping: 80, stiffness: 200 },
		durationInFrames: 18,
	});
	const headerOpacity = interpolate(headerIn, [0, 1], [0, 1], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	});
	const headerFont = colCount >= 5 ? 30 : colCount === 2 ? 40 : 34;
	const cellFont = colCount >= 5 ? 28 : colCount === 2 ? 36 : 32;

	return (
		<AbsoluteFill style={style}>
			<div
				style={{
					position: "absolute",
					left: 300,
					right: 300,
					top: title ? "20%" : "22%",
					bottom: "22%",
					display: "flex",
					flexDirection: "column",
					alignItems: "stretch",
				}}
			>
				{title ? (
					<div
						style={{
							fontSize: 46,
							fontWeight: 800,
							color: BW_TEXT,
							marginBottom: 40,
							textAlign: "center",
							fontFamily: fontStack,
						}}
					>
						{title}
					</div>
				) : null}
				<div
					style={{
						borderRadius: 14,
						border: `2px solid ${BW_TEXT}`,
						overflow: "hidden",
						boxShadow: "0 10px 36px rgba(0,0,0,0.06)",
						opacity: headerOpacity,
					}}
				>
					<div
						style={{
							display: "grid",
							gridTemplateColumns: `repeat(${colCount}, 1fr)`,
							backgroundColor: BW_TEXT,
							color: "#ffffff",
						}}
					>
						{effectiveCols.map((h, i) => (
							<div
								key={i}
								style={{
									padding: "16px 14px",
									fontSize: headerFont,
									fontWeight: 800,
									fontFamily: fontStack,
									lineHeight: 1.25,
									borderRight:
										i < colCount - 1 ? "1px solid rgba(255,255,255,0.22)" : undefined,
								}}
							>
								{h}
							</div>
						))}
					</div>
					{list.map((row, i) => (
						<DataTableRowView
							key={i}
							cells={padCells(row.cells, colCount)}
							startFrame={starts[i] ?? 0}
							isStriped={i % 2 === 0}
							fontSize={cellFont}
						/>
					))}
				</div>
			</div>
			<TemplateDefaultAnchors content={content} anchors={anchors} />
			<TemplateContentRenderer content={content} audioSrc={audioSrc} />
			{children}
		</AbsoluteFill>
	);
};
