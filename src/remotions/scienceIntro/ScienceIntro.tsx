import React from "react";
import {
	AbsoluteFill,
	useCurrentFrame,
	useVideoConfig,
	interpolate,
	Img,
	staticFile,
} from "remotion";
import { z } from "zod";

/** 
 * 科普开场动画
 * 流程：闪烁(Flash) -> 停顿(Hold) -> 下移(Move) -> 文字(Text)
 */

// === 1. 时间轴配置 (单位：帧) ===
const FLASH_DURATION = 55;      // 闪烁时长
const HOLD_DURATION = 20;       // 闪烁后停顿时长
const MOVE_DURATION = 20;       // 图片下移时长
const TEXT_DELAY_FROM_MOVE = 15; // 文字出现时间（相对于图片开始下移的延迟）

// 自动计算各阶段起始点（方便后续调整）
const START_HOLD = FLASH_DURATION;
const START_MOVE = START_HOLD + HOLD_DURATION;
const START_TEXT = START_MOVE + TEXT_DELAY_FROM_MOVE;

const FLASH_CYCLES = 5; // 闪烁循环次数（增加次数可以让最后几张切换更快）

// === 2. 简化的缓动函数 ===
// 改用 Quart (四次幂) 缓动，比 Expo 尾部更短，避免最后几张卡太久
const easeOutQuart = (t: number) => {
	return 1 - Math.pow(1 - t, 4);
};

export const ScienceIntroSchema = z.object({
	cardImages: z.array(z.string()).optional(),
	finalCardIndex: z.number().int().min(0).optional(),
	titleText: z.string().optional(),
	watermarkText: z.string().optional(),
});

const DEFAULT_CARD_IMAGES = [
	"images/confirmationBias/cb_scene_1.png",
	"images/confirmationBias/cb_scene_2.png",
	"images/confirmationBias/cb_scene_3.png",
	"images/confirmationBias/cb_scene_4.png",
	"images/confirmationBias/cb_scene_5.png",
	"images/confirmationBias/cb_scene_6.png",
	"images/confirmationBias/cb_scene_7.png",
].map((path) => staticFile(path));

export const TOTAL_DURATION_SCIENCE_INTRO = START_TEXT + 60; // 保证文字出来后还有点时间

export const ScienceIntro: React.FC<z.infer<typeof ScienceIntroSchema>> = ({
	cardImages: cardImagePaths,
	finalCardIndex: finalIndexProp,
	titleText = "确认偏误",
	watermarkText = "认知偏见",
}) => {
	const frame = useCurrentFrame();
	const { width, height } = useVideoConfig();

	// 准备图片资源
	const cardImages = (cardImagePaths?.length
		? cardImagePaths.map((p) => (p.startsWith("http") ? p : staticFile(p)))
		: DEFAULT_CARD_IMAGES) as string[];

	const totalCards = cardImages.length;
	// 确定最终定格在哪张图
	const targetIndex =
		finalIndexProp !== undefined
			? Math.min(finalIndexProp, totalCards - 1)
			: totalCards - 1;

	// === 3. 核心动画逻辑 ===

	// A. 闪烁阶段计算
	// 进度 0 -> 1
	const flashT = interpolate(frame, [0, FLASH_DURATION], [0, 1], {
		extrapolateRight: "clamp",
	});
	// 缓动
	const easedT = easeOutQuart(flashT);
	// 映射到图片索引：
	// 为了让最后减速阶段展示的【那一张】就是 targetIndex，
	// 我们把总步数设为 +1，并在后面限制最大值。
	// 这样在 easedT 接近 1 的最后阶段，index 就会稳定在 targetIndex 上。
	const totalSteps = totalCards * FLASH_CYCLES + targetIndex + 1;
	// 使用 min 确保不会在 easedT=1 的瞬间跳到下一张
	const rawIndex = Math.min(
		Math.floor(easedT * totalSteps),
		totalSteps - 1
	);
	// 取余数得到当前图
	const cycledIndex = rawIndex % totalCards;
	
	// 计算当前卡片展示的微进度 (0~1)，用于做缩放动画
	// 当 easedT 变大，rawIndex 增长变慢，这个进度也会变慢，完美契合
	const stepProgress = (easedT * totalSteps) % 1;
	// 简单的“推镜头”效果：每张图出现时从 1.0 放大到 1.1
	// 这种“呼吸感”能有效消除硬切的生硬视觉
	const scaleAnim = 1 + 0.1 * stepProgress;

	// B. 确定当前显示的图片索引
	let displayIndex = cycledIndex;
	// 只有在完全进入 Hold 阶段且不再闪烁时才强制锁定（其实上面逻辑已经保证了最后是 targetIndex）
	if (frame >= FLASH_DURATION) {
		displayIndex = targetIndex;
	}

	// C. 图片下移计算
	const cardOffsetY = interpolate(
		frame,
		[START_MOVE, START_MOVE + MOVE_DURATION],
		[0, height * 0.1],
		{ extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: easeOutQuart }
	);

	// D. 文字出现计算
	const textOpacity = interpolate(
		frame,
		[START_TEXT, START_TEXT + 30], // 文字淡入耗时30帧
		[0, 1],
		{ extrapolateLeft: "clamp", extrapolateRight: "clamp" }
	);
	const textOffsetY = interpolate(
		frame,
		[START_TEXT, START_TEXT + 30],
		[-50, 0], // 文字带一点下落浮现
		{ extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: easeOutQuart }
	);

	// E. 样式计算
	const displaySrc = cardImages[displayIndex];
	const cardSize = Math.min(width, height) * 0.6; // 稍微调大一点，因为圆形视觉上会比矩形小

    // F. 旋转动画 (模拟唱片转动)
    // 33 RPM 约等于每秒 0.55 转 => 每秒转 198 度
    // 30 FPS => 每帧转 6.6 度
    // 修改：只在图片下移固定后开始转动
    const ROTATION_START = START_MOVE + MOVE_DURATION;
    const rotation = interpolate(
        frame, 
        [ROTATION_START, ROTATION_START + 1], 
        [0, 6], 
        {
            extrapolateLeft: "clamp",
            extrapolateRight: "extend",
        }
    );

	return (
		<AbsoluteFill
			style={{
				backgroundColor: "#FAF5FF",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			{/* 背景水印文字 - 按文字占用空间动态计算格子与数量 */}
			{(() => {
				const wmFontSize = 36;
				// 按字符数估算宽度（中文约 1em/字），旋转 -18° 后的包围盒（用水印文案计算格子）
				const textW = wmFontSize * watermarkText.length;
				const textH = wmFontSize * 1.2;
				const rad = (18 * Math.PI) / 180;
				const rotatedW = textW * Math.cos(rad) + textH * Math.sin(rad);
				const rotatedH = textW * Math.sin(rad) + textH * Math.cos(rad);
				const gap = 12;
				// 格子至少为旋转包围盒 + 间距，只设下限避免极短文案格子过小
				const cellW = Math.max(60, rotatedW + gap);
				const cellH = Math.max(40, rotatedH + gap);
				const cols = Math.ceil(width / cellW) + 2;
				const rows = Math.ceil(height / cellH) + 2;
				return (
					<div
						style={{
							position: "absolute",
							inset: 0,
							display: "grid",
							gridTemplateColumns: `repeat(${cols}, ${cellW}px)`,
							gridTemplateRows: `repeat(${rows}, ${cellH}px)`,
							alignContent: "start",
							justifyContent: "start",
							left: -cellW,
							top: -cellH,
							overflow: "hidden",
							pointerEvents: "none",
						}}
					>
						{Array.from({ length: cols * rows }, (_, i) => (
							<span
								key={i}
								style={{
									fontSize: wmFontSize,
									fontWeight: 200,
									color: "rgb(60, 57, 63)",
									opacity: 0.3,
									transform: "rotate(-18deg)",
									whiteSpace: "nowrap",
									userSelect: "none",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									width: cellW,
									height: cellH,
								}}
							>
								{watermarkText}
							</span>
						))}
					</div>
				);
			})()}

			{/* 唱片容器 */}
			<div
				style={{
					position: "absolute",
					top: "50%",
					left: "50%",
					width: cardSize,
					height: cardSize,
					transform: `translate(-50%, calc(-50% + ${cardOffsetY}px)) rotate(${rotation}deg)`,
					borderRadius: "50%",
                    backgroundColor: "#111", // 唱片黑胶底色
					boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    // 模拟黑胶纹理
                    background: `
                        radial-gradient(
                            circle, 
                            #111 25%, 
                            #222 26%, 
                            #111 27%, 
                            #222 28%, 
                            #111 29%
                        )
                    `,
                    border: "8px solid #000",
				}}
			>
                {/* 唱片纹理覆盖层 (可选，为了更好看的反光效果) */}
                <div 
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        borderRadius: "50%",
                        background: "repeating-radial-gradient(#222 0, #111 2px, #222 4px)",
                        opacity: 0.3,
                        pointerEvents: "none",
                    }}
                />

                {/* 封面图片 (作为唱片中间的 Label) */}
				<div
                    style={{
                        width: "65%", // 图片占唱片的大部分，留出黑胶边缘
                        height: "65%",
                        borderRadius: "50%",
                        overflow: "hidden",
                        position: "relative",
                        border: "2px solid rgba(255,255,255,0.2)",
                        transform: `scale(${scaleAnim})`, // 只缩放图片
                    }}
                >
                    <Img
                        src={displaySrc}
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                        }}
                    />
                </div>

                {/* 中间的小孔 */}
                <div 
                    style={{
                        position: "absolute",
                        width: 12,
                        height: 12,
                        backgroundColor: "#eee",
                        borderRadius: "50%",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        boxShadow: "inset 1px 1px 2px rgba(0,0,0,0.5)",
                        zIndex: 10,
                    }}
                />
			</div>

			{/* 文字容器 */}
			<div
				style={{
					position: "absolute",
					top: height * 0.2, // 放在上方
					width: "100%",
					display: "flex",
					justifyContent: "center",
					opacity: textOpacity,
					transform: `translateY(${textOffsetY}px)`,
				}}
			>
				<span
					style={{
						fontSize: 60,
						fontWeight: "bold",
						color: "#6B46C1",
						marginBottom: 50,
						marginTop: 20,
						borderBottom: "4px solid #9F7AEA",
						paddingBottom: 10,
					}}
				>
					{titleText}
				</span>
			</div>
		</AbsoluteFill>
	);
};
