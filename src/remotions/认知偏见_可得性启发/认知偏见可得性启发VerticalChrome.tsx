import React from "react";
import { useCurrentFrame } from "remotion";

import { VerticalSegmentedProgressBar } from "../../components";
import { COVER_DURATION_FRAMES, sceneConfigs, TRANSITION_DURATION } from "./认知偏见可得性启发Constants";

const FONT_STACK =
    '"PingFang SC", "Microsoft YaHei", "Noto Sans SC", "Source Han Sans SC", sans-serif';

const STATIC_HEADLINE = "可得性启发";
const STATIC_HEADLINE_SUB = "认知心理学";
const STATIC_HEADLINE_SUB_EN = "COGNITIVE PSYCHOLOGY";
const THEME_ACCENT = "#2563EB";
const THEME_ACCENT_SOFT = "#2563EBD9";

type TopStaticHeadlineProps = {
    canvasW: number;
    topBandH: number;
};

export const 认知偏见可得性启发TopStaticHeadline: React.FC<TopStaticHeadlineProps> = ({ canvasW, topBandH }) => (
    <div
        style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: canvasW,
            height: topBandH,
            overflow: "hidden",
            boxSizing: "border-box",
            pointerEvents: "none",
        }}
    >
        <div
            style={{
                position: "absolute",
                inset: 0,
                background:
                    "radial-gradient(ellipse 72% 85% at 50% 48%, rgba(37, 99, 235, 0.14) 0%, transparent 58%), radial-gradient(ellipse 50% 40% at 50% 100%, rgba(56, 189, 248, 0.08) 0%, transparent 50%)",
            }}
        />
        <div
            style={{
                position: "absolute",
                left: "12%",
                right: "12%",
                bottom: 0,
                height: 1,
                background: "linear-gradient(90deg, transparent 0%, rgba(226, 232, 240, 0.45) 45%, rgba(226, 232, 240, 0.45) 55%, transparent 100%)",
            }}
        />
        <div
            style={{
                position: "absolute",
                left: 36,
                top: 36,
                width: 40,
                height: 40,
                borderLeft: "2px solid rgba(248, 250, 252, 0.22)",
                borderTop: "2px solid rgba(248, 250, 252, 0.22)",
                borderRadius: "2px 0 0 0",
            }}
        />
        <div
            style={{
                position: "absolute",
                right: 36,
                top: 36,
                width: 40,
                height: 40,
                borderRight: "2px solid rgba(248, 250, 252, 0.22)",
                borderTop: "2px solid rgba(248, 250, 252, 0.22)",
                borderRadius: "0 2px 0 0",
            }}
        />
        <div
            style={{
                position: "relative",
                zIndex: 1,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "0 56px",
                boxSizing: "border-box",
            }}
        >
            <div
                style={{
                    width: 56,
                    height: 4,
                    borderRadius: 999,
                    background: `linear-gradient(90deg, ${THEME_ACCENT_SOFT}, rgba(56, 189, 248, 0.95))`,
                    boxShadow: "0 0 22px rgba(37, 99, 235, 0.45)",
                    marginBottom: 22,
                }}
            />
            <div
                style={{
                    fontSize: 80,
                    fontWeight: 800,
                    fontFamily: FONT_STACK,
                    color: "#fafafa",
                    letterSpacing: "0.14em",
                    textAlign: "center",
                    lineHeight: 1.08,
                    textShadow:
                        "0 1px 0 rgba(255,255,255,0.12), 0 4px 36px rgba(0,0,0,0.55), 0 0 48px rgba(37, 99, 235, 0.25)",
                }}
            >
                {STATIC_HEADLINE}
            </div>
            <div
                style={{
                    marginTop: 10,
                    fontSize: 15,
                    fontWeight: 600,
                    fontFamily: 'ui-sans-serif, "Segoe UI", sans-serif',
                    color: "rgba(148, 163, 184, 0.95)",
                    letterSpacing: "0.42em",
                    textAlign: "center",
                }}
            >
                {STATIC_HEADLINE_SUB_EN}
            </div>
            <div
                style={{
                    marginTop: 20,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 20,
                    width: "100%",
                    maxWidth: 520,
                }}
            >
                <div
                    style={{
                        flex: 1,
                        height: 1,
                        background: "linear-gradient(90deg, transparent, rgba(248, 250, 252, 0.38))",
                    }}
                />
                <div
                    style={{
                        width: 7,
                        height: 7,
                        transform: "rotate(45deg)",
                        background: `linear-gradient(135deg, ${THEME_ACCENT}, rgba(56, 189, 248, 0.9))`,
                        boxShadow: "0 0 12px rgba(37, 99, 235, 0.5)",
                        flexShrink: 0,
                    }}
                />
                <div
                    style={{
                        fontSize: 26,
                        fontWeight: 600,
                        fontFamily: FONT_STACK,
                        color: "rgba(248, 250, 252, 0.88)",
                        letterSpacing: "0.42em",
                        textAlign: "center",
                        flexShrink: 0,
                    }}
                >
                    {STATIC_HEADLINE_SUB}
                </div>
                <div
                    style={{
                        width: 7,
                        height: 7,
                        transform: "rotate(45deg)",
                        background: `linear-gradient(135deg, ${THEME_ACCENT}, rgba(56, 189, 248, 0.9))`,
                        boxShadow: "0 0 12px rgba(37, 99, 235, 0.5)",
                        flexShrink: 0,
                    }}
                />
                <div
                    style={{
                        flex: 1,
                        height: 1,
                        background: "linear-gradient(270deg, transparent, rgba(248, 250, 252, 0.38))",
                    }}
                />
            </div>
        </div>
    </div>
);

const AvailabilityHeuristicVerticalProgressBarInner: React.FC = () => {
    const frame = useCurrentFrame();
    return (
        <VerticalSegmentedProgressBar
            frame={frame}
            coverDurationFrames={COVER_DURATION_FRAMES}
            sceneConfigs={sceneConfigs}
            transitionDuration={TRANSITION_DURATION}
            fontStack={FONT_STACK}
        />
    );
};

export const 认知偏见可得性启发ProgressBar = AvailabilityHeuristicVerticalProgressBarInner;
