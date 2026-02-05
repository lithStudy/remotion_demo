import React from "react";
import { AbsoluteFill, useCurrentFrame, random, useVideoConfig, Sequence, Audio, staticFile } from "remotion";
import { FadeInText, SpringText, Stamp } from "../../../components";
import { useMemo } from "react";
import {
    AnimationConfig,
    calculateAnimationTimings,
    calculateSceneDuration,
    applyAudioDurations,
    type AudioMap,
} from "../../../utils";
import audioMapData from "./audio-map.json";

const audioMap = audioMapData as AudioMap;

const baseConfigs: AnimationConfig[] = [
    {
        name: "title",
        delayBefore: 5,
        delayAfter: 0,
        durationInFrames: 40,
        preName: null,
        audioId: "scene1_1" // 关联音频 ID
    },
    {
        name: "subtitle",
        delayBefore: 5,
        delayAfter: 0,
        durationInFrames: 30,
        preName: "title",
        audioId: "scene1_2" // 关联音频 ID
    },
    { name: "tags", delayBefore: 0, delayAfter: 60, durationInFrames: 30, preName: "title" },
];

// 应用音频时长
const animationConfigs = applyAudioDurations(baseConfigs, audioMap, 30);

export const calculateScene1Duration = (): number => {
    return calculateSceneDuration(baseConfigs, audioMapData as AudioMap, 30);
};

const BACKGROUND =
    "linear-gradient(180deg, #0f172a 0%, #0c1222 40%, #050810 100%)";

const Particle: React.FC<{
    seed: number;
    width: number;
    height: number;
    frame: number;
}> = ({ seed, width, height, frame }) => {
    const x = random(seed) * width;
    const y = random(seed + 1) * height;
    const size = random(seed + 2) * 4 + 2; // 2-6px
    const speedX = (random(seed + 3) - 0.5) * 1.5; // Slightly faster drift
    const speedY = (random(seed + 4) - 0.5) * 1.5;
    const opacityBase = random(seed + 5) * 0.3 + 0.1;

    // Movement
    let currentX = x + speedX * frame;
    let currentY = y + speedY * frame;

    // Wrap around logic
    // We add extra buffer to wrap smoothly off-screen
    const buffer = 20;
    currentX = ((currentX % (width + buffer)) + (width + buffer)) % (width + buffer) - buffer;
    currentY = ((currentY % (height + buffer)) + (height + buffer)) % (height + buffer) - buffer;

    // Flicker
    const flicker = Math.sin(frame * 0.05 + seed * 10) * 0.3 + 0.7;
    const opacity = opacityBase * flicker;

    return (
        <div
            style={{
                position: "absolute",
                left: currentX,
                top: currentY,
                width: size,
                height: size,
                borderRadius: "50%",
                background: "rgba(255, 255, 255, 0.8)",
                opacity,
                boxShadow: `0 0 ${size * 2}px rgba(255, 255, 255, 0.4)`,
            }}
        />
    );
};

const BackgroundParticles: React.FC = () => {
    const frame = useCurrentFrame();
    const { width, height } = useVideoConfig();
    const particles = new Array(60).fill(0).map((_, i) => i);

    return (
        <AbsoluteFill>
            {particles.map((i) => (
                <Particle
                    key={i}
                    seed={i + 100} // Offset seed to avoid correlation with other scenes if any
                    width={width}
                    height={height}
                    frame={frame}
                />
            ))}
        </AbsoluteFill>
    );
};


export const Scene1: React.FC = () => {
    const configsWithAudio = useMemo(() => applyAudioDurations(baseConfigs, audioMapData as AudioMap, 30), []);
    const timings = useMemo(() => calculateAnimationTimings(configsWithAudio), [configsWithAudio]);

    const animationTimings = calculateAnimationTimings(animationConfigs);

    return (
        <AbsoluteFill
            style={{
                background: BACKGROUND,
            }}
        >


            <BackgroundParticles />

            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingBottom: 80, // Visual balance
                }}
            >
                {/* Main Title */}
                <SpringText delay={timings["title"].startTime}>
                    <div
                        style={{
                            fontSize: 96,
                            fontWeight: 900,
                            color: "#fff",
                            letterSpacing: "0.05em",
                            lineHeight: 1.2,
                            textAlign: "center",
                            textShadow: "0 4px 30px rgba(0,0,0,0.6), 0 0 50px rgba(255,255,255,0.1)",
                            marginBottom: 32,
                        }}
                    >
                        为什么一合群，<br />
                        <span style={{ color: "#FFEB3B" }}>智商就归零？</span>
                    </div>
                </SpringText>

                {/* Subtitle */}
                <FadeInText delay={timings["subtitle"].startTime}>
                    <div
                        style={{
                            fontSize: 42,
                            fontWeight: 500,
                            color: "rgba(255,255,255,0.85)",
                            letterSpacing: "0.1em",
                            textAlign: "center",
                            textShadow: "0 2px 10px rgba(0,0,0,0.4)",
                        }}
                    >
                        读透《乌合之众》，看清99%的无脑跟风。
                    </div>
                </FadeInText>
            </div>

            {/* Bottom Tags */}
            <div
                style={{
                    position: "absolute",
                    bottom: 80,
                    left: 0,
                    right: 0,
                    display: "flex",
                    justifyContent: "center",
                    gap: 32,
                    alignItems: "center",
                }}
            >
                {[
                    { text: "心理学", rot: -3 },
                    { text: "思维提升", rot: 2 },
                    { text: "乌合之众", rot: -2 },
                    { text: "独立思考", rot: 4 },
                ].map((tag, i) => (
                    <div key={tag.text} style={{ transform: `rotate(${tag.rot}deg)` }}>
                        <Stamp
                            text={`#${tag.text}`}
                            delay={timings["tags"].startTime + i * 5}
                            style={{
                                fontSize: 24,
                                padding: "8px 16px",
                            }}
                        />
                    </div>
                ))}
            </div>


            {/* 音频 */}
            {baseConfigs.map((config) => {
                if (!config.audioId || !audioMap[config.audioId]) return null;
                return (
                    <Sequence
                        key={config.name}
                        from={animationTimings[config.name].startTime}
                        durationInFrames={animationTimings[config.name].durationInFrames}
                    >
                        <Audio src={staticFile(audioMap[config.audioId].file)} />
                    </Sequence>
                );
            })}
        </AbsoluteFill>
    );
};
