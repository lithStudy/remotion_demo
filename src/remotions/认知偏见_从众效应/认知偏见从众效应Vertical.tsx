import React from "react";
import { AbsoluteFill, Audio, interpolate, staticFile, useCurrentFrame } from "remotion";

import { RemotionLayoutMetricsProvider, VERTICAL_SHELL_BG, VerticalBottomBrandBar } from "../../components";
import { 认知偏见从众效应MainBody } from "./认知偏见从众效应MainBody";
import { 认知偏见从众效应ProgressBar, 认知偏见从众效应TopStaticHeadline } from "./认知偏见从众效应VerticalChrome";
import {
    DESIGN_H,
    DESIGN_W,
    VERTICAL_BOTTOM_BRAND_OFFSET,
    VERTICAL_CANVAS_W,
    VERTICAL_CONTENT_SCALE,
    VERTICAL_PLAY_H,
    VERTICAL_PLAY_PROGRESS_GAP,
    VERTICAL_PLAY_TOP,
    VERTICAL_PLAY_W,
} from "./认知偏见从众效应Constants";

/** 竖屏 1080×1920：顶栏 + 中间 16:9 视口 + 进度条 */
export const 认知偏见从众效应Vertical: React.FC = () => {
    const frame = useCurrentFrame();
    const bgShiftX = interpolate(frame % 240, [0, 120, 240], [-4, 4, -4], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });
    const bgShiftY = interpolate(frame % 180, [0, 90, 180], [-3, 3, -3], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });
    const bgBreathOpacity = interpolate(frame % 150, [0, 75, 150], [0.22, 0.34, 0.22], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });

    return (
        <AbsoluteFill style={{ background: VERTICAL_SHELL_BG }}>
            <Audio
                src={staticFile("audio/effects/Seven_Measured_Breaths.mp3")}
                loop
                volume={0.10}
                name="Background music"
            />
            <认知偏见从众效应TopStaticHeadline canvasW={VERTICAL_CANVAS_W} topBandH={VERTICAL_PLAY_TOP} />
            <div
                style={{


                    position: "absolute",
                    left: 0,
                    top: VERTICAL_PLAY_TOP,
                    width: VERTICAL_PLAY_W,
                    height: VERTICAL_PLAY_H,
                    overflow: "hidden",
                }}
            >
                <div
                    style={{


                        height: "100%",
                        width: "100%",
                    background: "linear-gradient(135deg, #f8fafc 0%, #eff6ff 50%, #e2e8f0 100%)",
                }}
            />
            <div
                style={{


                    position: "absolute",
                    inset: "-6%",
                    pointerEvents: "none",
                    opacity: bgBreathOpacity,
                    transform: `translate(${bgShiftX}px, ${bgShiftY}px)`,
                    background:
                        "radial-gradient(circle at 20% 30%, rgba(37, 99, 235, 0.08), transparent 40%), radial-gradient(circle at 80% 60%, rgba(56, 189, 248, 0.12), transparent 45%), radial-gradient(circle at 40% 80%, rgba(148, 163, 184, 0.15), transparent 50%)",
                }}
                />
                <div
                    style={{


                        position: "absolute",
                        left: 0,
                        right: 0,
                        top: 0,
                        height: VERTICAL_PLAY_H,
                        overflow: "hidden",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "flex-start",
                    }}
                >
                    <RemotionLayoutMetricsProvider value={{ width: DESIGN_W, height: DESIGN_H }}>
                        <div
                            style={{


                                width: DESIGN_W,
                                height: DESIGN_H,
                                flexShrink: 0,
                                transform: `scale(${VERTICAL_CONTENT_SCALE})`,
                                transformOrigin: "top center",
                            }}
                        >
                            <认知偏见从众效应MainBody />
                        </div>
                    </RemotionLayoutMetricsProvider>
                </div>
            </div>
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: VERTICAL_PLAY_TOP,
                    width: VERTICAL_PLAY_W,
                    height: VERTICAL_PLAY_H,
                    border: "1px solid rgba(255, 255, 255, 0.07)",
                    boxSizing: "border-box",
                    pointerEvents: "none",
                    zIndex: 20,
                }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: VERTICAL_PLAY_TOP + VERTICAL_PLAY_H + VERTICAL_PLAY_PROGRESS_GAP,
                    width: VERTICAL_CANVAS_W,
                    boxSizing: "border-box",
                    pointerEvents: "none",
                }}
            >
                <认知偏见从众效应ProgressBar />
            </div>
            <div
                style={{ 
                    position: "absolute",
                    left: 0,
                    bottom: VERTICAL_BOTTOM_BRAND_OFFSET,
                    width: VERTICAL_CANVAS_W,
                    boxSizing: "border-box",
                    pointerEvents: "none",
                    zIndex: 18,
                }}
            >
                <VerticalBottomBrandBar canvasW={VERTICAL_CANVAS_W} />
            </div>
        </AbsoluteFill>
    );
};
