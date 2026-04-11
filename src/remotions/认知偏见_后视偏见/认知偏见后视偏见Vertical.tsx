import React from "react";
import { AbsoluteFill, Audio, interpolate, staticFile, useCurrentFrame } from "remotion";

import { RemotionLayoutMetricsProvider } from "../../components";
import { 认知偏见后视偏见MainBody } from "./认知偏见后视偏见MainBody";
import { 认知偏见后视偏见ProgressBar, 认知偏见后视偏见TopStaticHeadline } from "./认知偏见后视偏见VerticalChrome";
import {
    DESIGN_H,
    DESIGN_W,
    VERTICAL_CANVAS_W,
    VERTICAL_CONTENT_SCALE,
    VERTICAL_PLAY_H,
    VERTICAL_PLAY_PROGRESS_GAP,
    VERTICAL_PLAY_TOP,
    VERTICAL_PLAY_W,
} from "./认知偏见后视偏见Constants";

/** 竖屏 1080×1920：顶栏 + 中间 16:9 视口 + 进度条 */
export const 认知偏见后视偏见Vertical: React.FC = () => {
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
        <AbsoluteFill style={{ background: "#000" }}>
            <Audio
                src={staticFile("audio/effects/Seven_Measured_Breaths.mp3")}
                loop
                volume={0.22}
                name="Background music"
            />
            <认知偏见后视偏见TopStaticHeadline canvasW={VERTICAL_CANVAS_W} topBandH={VERTICAL_PLAY_TOP} />
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
                        background: "linear-gradient(135deg, #fffdf7 0%, #f7fbff 52%, #f6fff8 100%)",
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
                            "radial-gradient(circle at 20% 30%, rgba(255, 225, 170, 0.42), transparent 36%), radial-gradient(circle at 78% 64%, rgba(174, 222, 255, 0.35), transparent 40%), radial-gradient(circle at 52% 80%, rgba(191, 255, 208, 0.26), transparent 42%)",
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
                            <认知偏见后视偏见MainBody />
                        </div>
                    </RemotionLayoutMetricsProvider>
                </div>
            </div>
            <div
                style={{


                    position: "absolute",
                    left: 0,
                    top: VERTICAL_PLAY_TOP + VERTICAL_PLAY_H + VERTICAL_PLAY_PROGRESS_GAP,
                    width: VERTICAL_CANVAS_W,
                    paddingLeft: 40,
                    paddingRight: 40,
                    boxSizing: "border-box",
                    pointerEvents: "none",
                }}
            >
                <认知偏见后视偏见ProgressBar />
            </div>
        </AbsoluteFill>
    );
};
