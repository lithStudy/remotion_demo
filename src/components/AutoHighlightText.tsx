import React from "react";
import { HighlightText } from "./TextAnimations";

/**
 * 自动高亮文本组件
 * 根据高亮词列表和时间点，自动将文本分割并应用 HighlightText 组件
 */
export const AutoHighlightText: React.FC<{
    text: string;
    highlights: string[];
    highlightTimings: number[];
    baseDelay: number;
    highlightColors: string | string[]; // 单个颜色或颜色数组
    durationInFrames?: number;
    style?: React.CSSProperties;
}> = ({ text, highlights, highlightTimings, baseDelay, highlightColors, durationInFrames = 20, style }) => {
    const nodes: React.ReactNode[] = [];
    let currentIndex = 0;

    highlights.forEach((word, index) => {
        const foundIndex = text.indexOf(word, currentIndex);
        if (foundIndex === -1) {
            console.warn(`AutoHighlightText: Word "${word}" not found after index ${currentIndex}`);
            return;
        }

        // Add preceding plain text
        if (foundIndex > currentIndex) {
            nodes.push(
                <span key={`plain-${index}`}>
                    {text.slice(currentIndex, foundIndex)}
                </span>
            );
        }

        // Determine color
        const color = Array.isArray(highlightColors)
            ? highlightColors[index % highlightColors.length]
            : highlightColors;

        // Add highlight
        const startTime = highlightTimings[index] ?? 0;
        nodes.push(
            <HighlightText
                key={`hl-${index}`}
                delay={startTime + baseDelay}
                durationInFrames={durationInFrames}
                highlightColor={color}
                style={style}
            >
                {word}
            </HighlightText>
        );

        currentIndex = foundIndex + word.length;
    });

    // Add remaining text
    if (currentIndex < text.length) {
        nodes.push(
            <span key="plain-end">
                {text.slice(currentIndex)}
            </span>
        );
    }

    return <>{nodes}</>;
};
