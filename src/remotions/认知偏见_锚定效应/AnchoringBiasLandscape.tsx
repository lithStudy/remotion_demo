import React from "react";
import { AbsoluteFill, Audio, interpolate, staticFile, useCurrentFrame } from "remotion";

import { RemotionLayoutMetricsProvider } from "../../components";
import { AnchoringBiasMainBody } from "./AnchoringBiasMainBody";
import { DESIGN_H, DESIGN_W, LANDSCAPE_CONTAIN_SCALE } from "./anchoringConstants";

/**
 * 横屏主片 1920×1080：版心「contain」纳入画面，避免 cover 裁切上下（锚点词等丢失）
 */
export const AnchoringBiasLandscape: React.FC = () => {
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
                volume={0.15}
                name="Background music"
            />
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
                        <AnchoringBiasMainBody />
                    </div>
                </AbsoluteFill>
            </RemotionLayoutMetricsProvider>
        </AbsoluteFill>
    );
};
