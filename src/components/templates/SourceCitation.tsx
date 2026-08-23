/**
 * SOURCE_CITATION 模板：片尾参考资料列表（论文引用式）
 * 支持 titleZh / publisherZh：主行中文可读，副行保留原文便于检索。
 * 双语多行条目超出可视区时自动分页；单页内仍溢出则向上滚动。
 */
import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { BW_TEXT, type TemplateBaseProps } from "./shared";
import { TemplateContentRenderer } from "./TemplateContentRenderer";

// 基础展示帧数（列表出现前的缓冲时间）
export const SOURCE_CITATION_BASE_FRAMES = 24;
// 每条文献所需展示帧数（逐条显示，增加阅读时间）
export const SOURCE_CITATION_PER_ITEM_FRAMES = 12;
// 溢出滚动时的整体阅读缓冲帧数
export const SOURCE_CITATION_READ_BUFFER_FRAMES = 60;
// 溢出滚动的阈值（条目数超过该值后滚动而非分页）
export const SOURCE_CITATION_SCROLL_THRESHOLD = 6;
// 最多支持的引用文献条数，超过该值报错
export const SOURCE_CITATION_MAX_REFERENCES = 8;
// 双语（含 titleZh 或 publisherZh）时，每页最大条目数
export const SOURCE_CITATION_ITEMS_PER_PAGE_BILINGUAL = 4;
// 单语（无 titleZh/publisherZh）时，每页最大条目数
export const SOURCE_CITATION_ITEMS_PER_PAGE_MONO = 5;
// 分页切换时的转场动画帧数
export const SOURCE_CITATION_PAGE_TRANSITION_FRAMES = 12;
/** 非末页：条目展示完即可翻页（分页时非最后一页） */
export const SOURCE_CITATION_PAGE_READ_BUFFER_FRAMES = 15;
/** 末页 / 单页：留足阅读时间（最后一页或仅一页时的额外停留） */
export const SOURCE_CITATION_LAST_PAGE_READ_BUFFER_FRAMES = 10;

export const templateMeta = {
	"name": "SOURCE_CITATION",
	"componentExport": "BWSourceCitation",
	"description":
		"适用：片尾独立 scene，展示支撑全文论点的证据来源列表（类似论文 References），纯视觉无口播。\n差异：正片引述原话/证言用 QUOTE_CITATION；本模板为文献脚注列表，非引号大字。\n位置：建议作为最后一个 scene（scene_references），无 audioSrc，content 为空。\n时长：按 references 条数自动计算；双语多行条目每页最多 4 条，超出自动分页；单页溢出时列表向上滚动。\n参数：sectionTitle 可选（默认「参考资料」）；references 必填 1～12 条，每项 title 必填（原文标题，便于检索），titleZh/publisherZh 可选（中文主显示），publisher/year 可选。",
	"chinese_name": "参考资料",
	"image_count": 0,
	"content_optional": true,
	"duration_formula": "分页：各页 24+n×12+缓冲(末页27/非末15)，页间叠化12帧；单页：24+n×12+27",
	"param_schema": {
		"type": "object",
		"properties": {
			"sectionTitle": {
				"type": "string",
				"description": "列表主标题，默认「参考资料」",
			},
			"references": {
				"type": "array",
				"minItems": 1,
				"maxItems": 12,
				"description": "参考文献条目；title 必填（原文），titleZh/publisherZh 可选（中文主显示）",
				"items": {
					"type": "object",
					"required": ["title"],
					"properties": {
						"title": {
							"type": "string",
							"description": "文献原文标题（便于读者检索）",
						},
						"titleZh": {
							"type": "string",
							"description": "中文译名（可选，有则作为主标题显示）",
						},
						"publisher": {
							"type": "string",
							"description": "出版方/机构/作者原文（可选）",
						},
						"publisherZh": {
							"type": "string",
							"description": "出版方中文译名（可选，有则作为主显示）",
						},
						"year": { "type": "string", "description": "发布年份（可选）" },
					},
				},
			},
		},
		"required": ["references"],
	},
	"example": {
		"template": "SOURCE_CITATION",
		"param": {
			"sectionTitle": "参考资料",
			"references": [
				{
					"title": "2021中国民营企业500强调研分析报告",
					"publisher": "全国工商联",
					"year": "2021",
				},
				{
					"title": "华为投资控股有限公司2020年年度报告",
					"publisher": "华为技术有限公司",
					"year": "2020",
				},
			],
		},
	},
} as const;

export type SourceCitationReferenceItem = {
	title: string;
	titleZh?: string;
	publisher?: string;
	publisherZh?: string;
	year?: string;
};

export interface BWSourceCitationProps extends TemplateBaseProps {
	sectionTitle?: string;
	references: SourceCitationReferenceItem[];
}

const FONT_STACK = '"Microsoft YaHei", "PingFang SC", "Noto Sans SC", sans-serif';
const ROW_GAP = 10;
const COLUMN_TOP_RATIO = 0.08;
const COLUMN_BOTTOM_RATIO = 0.08;
const BILINGUAL_ROW_MIN_HEIGHT = 158;
const MONO_ROW_MIN_HEIGHT = 96;
const ROW_HEIGHT_SAFETY = 1.12;

export function sourceCitationHasBilingual(
	references: SourceCitationReferenceItem[],
): boolean {
	return references.some((ref) => getSourceCitationOriginalTitle(ref) !== null);
}

export function getSourceCitationItemsPerPage(hasBilingual: boolean): number {
	return hasBilingual
		? SOURCE_CITATION_ITEMS_PER_PAGE_BILINGUAL
		: SOURCE_CITATION_ITEMS_PER_PAGE_MONO;
}

export function chunkSourceCitationReferences(
	references: SourceCitationReferenceItem[],
	itemsPerPage: number,
): SourceCitationReferenceItem[][] {
	const pages: SourceCitationReferenceItem[][] = [];
	for (let i = 0; i < references.length; i += itemsPerPage) {
		pages.push(references.slice(i, i + itemsPerPage));
	}
	return pages;
}

export function computeSourceCitationPageDuration(
	pageItemCount: number,
	isLastPage = true,
): number {
	const count = Math.max(1, Math.min(SOURCE_CITATION_MAX_REFERENCES, pageItemCount));
	const readBuffer = isLastPage
		? SOURCE_CITATION_LAST_PAGE_READ_BUFFER_FRAMES
		: SOURCE_CITATION_PAGE_READ_BUFFER_FRAMES;
	return (
		SOURCE_CITATION_BASE_FRAMES +
		count * SOURCE_CITATION_PER_ITEM_FRAMES +
		readBuffer
	);
}

export function computeSourceCitationDurationFromReferences(
	references: SourceCitationReferenceItem[],
): number {
	const list = references
		.filter((ref) => ref && typeof ref.title === "string" && ref.title.trim())
		.slice(0, SOURCE_CITATION_MAX_REFERENCES);
	if (list.length === 0) {
		return computeSourceCitationPageDuration(1);
	}

	const hasBilingual = sourceCitationHasBilingual(list);
	const perPage = getSourceCitationItemsPerPage(hasBilingual);
	const pages = chunkSourceCitationReferences(list, perPage);

	if (pages.length === 1) {
		return computeSourceCitationPageDuration(pages[0].length, true);
	}

	let total = 0;
	for (let i = 0; i < pages.length; i++) {
		total += computeSourceCitationPageDuration(
			pages[i].length,
			i === pages.length - 1,
		);
		if (i < pages.length - 1) {
			total -= SOURCE_CITATION_PAGE_TRANSITION_FRAMES;
		}
	}
	return total;
}

export function computeSourceCitationDuration(referenceCount: number): number {
	const count = Math.max(
		1,
		Math.min(SOURCE_CITATION_MAX_REFERENCES, Math.floor(referenceCount)),
	);
	return (
		SOURCE_CITATION_BASE_FRAMES +
		count * SOURCE_CITATION_PER_ITEM_FRAMES +
		SOURCE_CITATION_LAST_PAGE_READ_BUFFER_FRAMES
	);
}

function getDisplayTitle(ref: SourceCitationReferenceItem): string {
	return ref.titleZh?.trim() || ref.title?.trim() || "";
}

function getDisplayPublisher(ref: SourceCitationReferenceItem): string {
	return ref.publisherZh?.trim() || ref.publisher?.trim() || "";
}

/** 原文标题：与中文译名并存时供检索副行展示 */
export function getSourceCitationOriginalTitle(
	ref: SourceCitationReferenceItem,
): string | null {
	const original = ref.title?.trim() ?? "";
	const localized = ref.titleZh?.trim() ?? "";
	if (!original || !localized || original === localized) {
		return null;
	}
	return original;
}

/** 单行引用串（兼容旧调用）；画面改用分栏结构展示 */
export function formatSourceCitationLine(
	index: number,
	ref: SourceCitationReferenceItem,
): string {
	const title = getDisplayTitle(ref);
	const publisher = getDisplayPublisher(ref);
	const year = ref.year?.trim() ?? "";
	const numbered = `[${index + 1}]`;

	if (publisher && year) {
		return `${numbered} ${publisher}.《${title}》. ${year}.`;
	}
	if (publisher) {
		return `${numbered} ${publisher}.《${title}》.`;
	}
	if (year) {
		return `${numbered} 《${title}》. ${year}.`;
	}
	return `${numbered} 《${title}》.`;
}

function getItemEnterFrame(index: number, pageStartFrame = 0): number {
	return pageStartFrame + SOURCE_CITATION_BASE_FRAMES + index * SOURCE_CITATION_PER_ITEM_FRAMES;
}

/** 按内容估算行高（含换行余量），供滚动偏移 */
function estimateRowHeight(
	ref: SourceCitationReferenceItem,
	contentWidth: number,
	titleFont: number,
): number {
	const title = getDisplayTitle(ref);
	const original = getSourceCitationOriginalTitle(ref);
	const charsPerLine = Math.max(12, Math.floor(contentWidth / (titleFont * 0.95)));
	const titleLines = Math.max(1, Math.ceil(title.length / charsPerLine));
	const originalLines = original
		? Math.max(
				1,
				Math.ceil(
					original.length / Math.max(14, Math.floor(contentWidth / (titleFont * 0.7))),
				),
			)
		: 0;
	const metaLine = getDisplayPublisher(ref) || ref.year?.trim() ? 1 : 0;
	const rowPadding = 22;
	const computed =
		rowPadding +
		titleLines * titleFont * 1.35 +
		metaLine * (titleFont * 0.88 * 1.4 + 6) +
		originalLines * (titleFont * 0.82 * 1.45 + 6) +
		(original ? 4 : 0);
	const minHeight = original ? BILINGUAL_ROW_MIN_HEIGHT : MONO_ROW_MIN_HEIGHT;
	return Math.max(computed, minHeight) * ROW_HEIGHT_SAFETY;
}

function computeListViewportH(
	height: number,
	sectionTitleSize: number,
	hasBilingual: boolean,
): number {
	const columnH = height * (1 - COLUMN_TOP_RATIO - COLUMN_BOTTOM_RATIO);
	const headerBlockH = 22 + 8 + sectionTitleSize * 1.2 + (hasBilingual ? 28 : 40);
	const footerBlockH = 16 + 28;
	return Math.max(160, columnH - headerBlockH - footerBlockH);
}

function computeTitleFontSize(itemCount: number, hasBilingual: boolean): number {
	if (hasBilingual) {
		if (itemCount >= 8) return 30;
		if (itemCount >= 6) return 32;
		return 34;
	}
	if (itemCount >= 8) return 32;
	if (itemCount >= 6) return 36;
	return 40;
}

function computeSectionTitleSize(itemCount: number, hasBilingual: boolean): number {
	if (hasBilingual) {
		if (itemCount >= 8) return 48;
		return 54;
	}
	if (itemCount >= 8) return 52;
	return 58;
}

function computePageOpacity(
	relFrame: number,
	pageDuration: number,
	isLastPage: boolean,
): number {
	const fadeIn = interpolate(relFrame, [0, 18], [0, 1], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	});
	if (isLastPage) {
		// 最后一页保持全亮至场景结束，不做淡出
		return fadeIn;
	}
	// 非末页仅在翻页叠化窗口内淡出，避免整页时长结束后再闪灭
	const fadeOutStart = Math.max(18, pageDuration - SOURCE_CITATION_PAGE_TRANSITION_FRAMES);
	const fadeOut = interpolate(relFrame, [fadeOutStart, pageDuration], [1, 0], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	});
	return Math.min(fadeIn, fadeOut);
}

function getActivePageIndex(frame: number, pageStarts: number[], pageDurations: number[]): number {
	let active = 0;
	for (let i = 0; i < pageStarts.length; i++) {
		if (frame >= pageStarts[i]) {
			active = i;
		}
	}
	const rel = frame - pageStarts[active];
	if (rel > pageDurations[active] && active < pageStarts.length - 1) {
		return active + 1;
	}
	return active;
}

const ReferenceRow: React.FC<{
	index: number;
	refItem: SourceCitationReferenceItem;
	enterFrame: number;
	titleFontSize: number;
}> = ({ index, refItem, enterFrame, titleFontSize }) => {
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();
	const rel = frame - enterFrame;
	const rowIn = spring({
		frame: rel,
		fps,
		config: { damping: 80, stiffness: 180 },
		durationInFrames: 18,
	});
	const opacity = interpolate(rowIn, [0, 1], [0, 1], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	});
	const translateX = interpolate(rowIn, [0, 1], [-28, 0], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	});

	const title = getDisplayTitle(refItem);
	const publisher = getDisplayPublisher(refItem);
	const year = refItem.year?.trim() ?? "";
	const originalTitle = getSourceCitationOriginalTitle(refItem);
	const metaFontSize = Math.max(24, Math.round(titleFontSize * 0.88));
	const subFontSize = Math.max(22, Math.round(titleFontSize * 0.82));
	const metaParts = [publisher, year].filter(Boolean);

	return (
		<div
			style={{
				opacity,
				transform: `translateX(${translateX}px)`,
				padding: "10px 0 12px",
				borderBottom: "1px solid #e8e8e8",
				display: "flex",
				alignItems: "flex-start",
				gap: 14,
				width: "100%",
				boxSizing: "border-box",
			}}
		>
			<div
				style={{
					flex: "0 0 auto",
					fontSize: titleFontSize,
					lineHeight: 1.35,
					color: "#666666",
					fontFamily: FONT_STACK,
					fontWeight: 700,
					minWidth: "1.6em",
				}}
			>
				[{index + 1}]
			</div>
			<div style={{ flex: 1, minWidth: 0 }}>
				<div
					style={{
						fontSize: titleFontSize,
						lineHeight: 1.35,
						color: BW_TEXT,
						fontFamily: FONT_STACK,
						fontWeight: 600,
						overflowWrap: "anywhere",
						wordBreak: "break-word",
					}}
				>
					{title}
				</div>
				{metaParts.length > 0 ? (
					<div
						style={{
							marginTop: 6,
							fontSize: metaFontSize,
							lineHeight: 1.4,
							color: "#444444",
							fontFamily: FONT_STACK,
							fontWeight: 500,
							overflowWrap: "anywhere",
							wordBreak: "break-word",
						}}
					>
						{metaParts.join(" · ")}
					</div>
				) : null}
				{originalTitle ? (
					<div
						style={{
							marginTop: 6,
							fontSize: subFontSize,
							lineHeight: 1.45,
							color: "#555555",
							fontFamily: FONT_STACK,
							fontWeight: 500,
							overflowWrap: "anywhere",
							wordBreak: "break-word",
						}}
					>
						原文：{originalTitle}
					</div>
				) : null}
			</div>
		</div>
	);
};

const ReferenceListPanel: React.FC<{
	pageItems: SourceCitationReferenceItem[];
	globalIndexOffset: number;
	pageStartFrame: number;
	pageDurationFrames: number;
	titleFontSize: number;
	contentWidth: number;
	listViewportH: number;
	isPaginated: boolean;
}> = ({
	pageItems,
	globalIndexOffset,
	pageStartFrame,
	pageDurationFrames,
	titleFontSize,
	contentWidth,
	listViewportH,
	isPaginated,
}) => {
	const frame = useCurrentFrame();

	const rowHeights = pageItems.map((ref) =>
		estimateRowHeight(ref, contentWidth - 48, titleFontSize),
	);
	const totalListH =
		rowHeights.reduce((sum, h) => sum + h, 0) +
		Math.max(0, pageItems.length - 1) * ROW_GAP;
	const maxScroll = Math.max(0, totalListH - listViewportH);

	const lastItemEnter = getItemEnterFrame(pageItems.length - 1, pageStartFrame);
	const scrollHoldFrames = 22;
	const scrollStartFrame = lastItemEnter + scrollHoldFrames;
	const scrollDistanceFrames = Math.max(36, Math.ceil(maxScroll / 2.5));
	const scrollEndFrame = Math.min(
		pageStartFrame + pageDurationFrames - 8,
		scrollStartFrame + scrollDistanceFrames,
	);
	const listTranslateY =
		maxScroll > 0 && !isPaginated
			? -interpolate(frame, [scrollStartFrame, scrollEndFrame], [0, maxScroll], {
					extrapolateLeft: "clamp",
					extrapolateRight: "clamp",
				})
			: 0;

	return (
		<div
			style={{
				width: "100%",
				flex: isPaginated ? undefined : 1,
				minHeight: 0,
				height: isPaginated ? listViewportH : undefined,
				overflow: "hidden",
				position: isPaginated ? "absolute" : "relative",
				inset: isPaginated ? 0 : undefined,
			}}
		>
			<div
				style={{
					transform: `translateY(${listTranslateY}px)`,
					display: "flex",
					flexDirection: "column",
					gap: ROW_GAP,
				}}
			>
				{pageItems.map((ref, localIndex) => (
					<ReferenceRow
						key={`${globalIndexOffset + localIndex}-${ref.title}`}
						index={globalIndexOffset + localIndex}
						refItem={ref}
						enterFrame={getItemEnterFrame(localIndex, pageStartFrame)}
						titleFontSize={titleFontSize}
					/>
				))}
			</div>
		</div>
	);
};

export const BWSourceCitation: React.FC<BWSourceCitationProps> = ({
	sectionTitle = "参考资料",
	references,
	content,
	audioSrc,
	children,
	style,
	totalDurationFrames,
}) => {
	const frame = useCurrentFrame();
	const { fps, width, height } = useVideoConfig();

	const list = (references ?? [])
		.filter((ref) => ref && typeof ref.title === "string" && ref.title.trim())
		.slice(0, SOURCE_CITATION_MAX_REFERENCES);

	const hasBilingual = sourceCitationHasBilingual(list);
	const perPage = getSourceCitationItemsPerPage(hasBilingual);
	const pages = chunkSourceCitationReferences(list, perPage);
	const isPaginated = pages.length > 1;

	const pageDurations = pages.map((pageItems, pageIdx) =>
		computeSourceCitationPageDuration(
			pageItems.length,
			pageIdx === pages.length - 1,
		),
	);
	const pageStarts: number[] = [];
	let timelineAcc = 0;
	for (let i = 0; i < pages.length; i++) {
		pageStarts.push(timelineAcc);
		timelineAcc += pageDurations[i];
		if (i < pages.length - 1) {
			timelineAcc -= SOURCE_CITATION_PAGE_TRANSITION_FRAMES;
		}
	}

	const maxPageItemCount = Math.max(...pages.map((p) => p.length), 1);
	const sideInset = Math.round(Math.min(Math.max(width * 0.055, 72), 140));
	const listMaxWidth = Math.min(width - sideInset * 2, 1480);
	const contentWidth = listMaxWidth;
	const titleFontSize = computeTitleFontSize(maxPageItemCount, hasBilingual);
	const sectionTitleSize = computeSectionTitleSize(maxPageItemCount, hasBilingual);
	const listViewportH = computeListViewportH(height, sectionTitleSize, hasBilingual);
	const activePageIdx = isPaginated
		? getActivePageIndex(frame, pageStarts, pageDurations)
		: 0;

	const computedSceneDuration = computeSourceCitationDurationFromReferences(list);
	const sceneDuration =
		typeof totalDurationFrames === "number" && totalDurationFrames > 0
			? totalDurationFrames
			: computedSceneDuration;

	const titleOpacity = spring({
		frame,
		fps,
		config: { damping: 80, stiffness: 100 },
		durationInFrames: 24,
	});
	const titleTranslateY = interpolate(titleOpacity, [0, 1], [16, 0], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	});

	return (
		<AbsoluteFill style={style}>
			<div
				style={{
					position: "absolute",
					left: sideInset,
					right: sideInset,
					top: `${COLUMN_TOP_RATIO * 100}%`,
					bottom: `${COLUMN_BOTTOM_RATIO * 100}%`,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<div
					style={{
						textAlign: "center",
						marginBottom: hasBilingual ? 28 : 40,
						flexShrink: 0,
						opacity: titleOpacity,
						transform: `translateY(${titleTranslateY}px)`,
					}}
				>
					<div
						style={{
							fontSize: 22,
							letterSpacing: "0.28em",
							color: "#888888",
							fontFamily: FONT_STACK,
							fontWeight: 600,
							marginBottom: 8,
						}}
					>
						REFERENCES
					</div>
					<div
						style={{
							fontSize: sectionTitleSize,
							fontWeight: 800,
							color: BW_TEXT,
							fontFamily: FONT_STACK,
							lineHeight: 1.2,
						}}
					>
						{sectionTitle}
					</div>
					{isPaginated ? (
						<div
							style={{
								marginTop: 10,
								fontSize: 22,
								color: "#888888",
								fontFamily: FONT_STACK,
								fontWeight: 600,
							}}
						>
							{activePageIdx + 1} / {pages.length}
						</div>
					) : null}
				</div>

				<div
					style={{
						width: "100%",
						maxWidth: listMaxWidth,
						flex: 1,
						minHeight: 0,
						position: "relative",
					}}
				>
					{isPaginated
						? pages.map((pageItems, pageIdx) => {
								const pageStart = pageStarts[pageIdx];
								const pageDur = pageDurations[pageIdx];
								const isLastPage = pageIdx === pages.length - 1;
								const relFrame = frame - pageStart;
								if (relFrame < 0) {
									return null;
								}
								if (!isLastPage && relFrame > pageDur) {
									return null;
								}
								if (isLastPage && frame >= sceneDuration) {
									return null;
								}
								const opacity = computePageOpacity(
									relFrame,
									pageDur,
									isLastPage,
								);
								if (opacity <= 0.01) {
									return null;
								}

								return (
									<div
										key={`page-${pageIdx}`}
										style={{
											position: "absolute",
											inset: 0,
											opacity,
										}}
									>
										<ReferenceListPanel
											pageItems={pageItems}
											globalIndexOffset={pageIdx * perPage}
											pageStartFrame={pageStart}
											pageDurationFrames={pageDur}
											titleFontSize={titleFontSize}
											contentWidth={contentWidth}
											listViewportH={listViewportH}
											isPaginated={true}
										/>
									</div>
								);
							})
						: (
							<ReferenceListPanel
								pageItems={pages[0]}
								globalIndexOffset={0}
								pageStartFrame={0}
								pageDurationFrames={pageDurations[0]}
								titleFontSize={titleFontSize}
								contentWidth={contentWidth}
								listViewportH={listViewportH}
								isPaginated={false}
							/>
						)}
				</div>

				<div
					style={{
						alignSelf: "flex-end",
						marginTop: 16,
						flexShrink: 0,
						fontSize: 24,
						color: "#666666",
						fontStyle: "italic",
						fontFamily: FONT_STACK,
						opacity: titleOpacity,
					}}
				>
					— 数据来源
				</div>
			</div>

			<TemplateContentRenderer content={content} audioSrc={audioSrc} />
			{children}
		</AbsoluteFill>
	);
};
