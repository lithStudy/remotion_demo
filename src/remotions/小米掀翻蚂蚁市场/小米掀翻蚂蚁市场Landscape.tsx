import React from "react";
import { AbsoluteFill, Audio, interpolate, staticFile, useCurrentFrame } from "remotion";

import { RemotionLayoutMetricsProvider } from "../../components";
import { 小米掀翻蚂蚁市场MainBody } from "./小米掀翻蚂蚁市场MainBody";
import { DESIGN_H, DESIGN_W, LANDSCAPE_CONTAIN_SCALE } from "./小米掀翻蚂蚁市场Constants";

/** 横屏主片 1920×1080：版心 contain，避免裁切字幕/锚点 */
export const 小米掀翻蚂蚁市场Landscape: React.FC = () => {
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
        <AbsoluteFill style={{ background: "#0f172a" }}>
            <Audio
                src={staticFile("audio/effects/Seven_Measured_Breaths.mp3")}
                loop
                volume={0.10}
                name="Background music"
            />
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
            <RemotionLayoutMetricsProvider value={{ width: DESIGN_W, height: DESIGN_H }}>
                <AbsoluteFill
                    style={{


                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        overflow: "hidden",
                    }}
                >
                    <div
                        style={{


                            width: DESIGN_W,
                            height: DESIGN_H,
                            flexShrink: 0,
                            transform: `scale(${LANDSCAPE_CONTAIN_SCALE})`,
                            transformOrigin: "center center",
                        }}
                    >
                        <小米掀翻蚂蚁市场MainBody />
                    </div>
                </AbsoluteFill>
            </RemotionLayoutMetricsProvider>
        </AbsoluteFill>
    );
};
