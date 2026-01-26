import React from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";

export interface TypewriterTextProps {
  text: string;
  startFrame?: number;
  charactersPerFrame?: number;
  style?: React.CSSProperties;
}

/**
 * 打字机效果组件
 * 逐字符显示文本
 */
export const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  startFrame = 0,
  charactersPerFrame = 2,
  style,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const currentFrame = Math.max(0, frame - startFrame);
  const charactersToShow = Math.min(
    text.length,
    Math.floor(currentFrame * charactersPerFrame)
  );

  const visibleText = text.slice(0, charactersToShow);
  const cursor = charactersToShow < text.length ? "|" : "";

  return (
    <div
      style={{
        color: "#c9d1d9",
        fontSize: 24,
        lineHeight: 1.8,
        fontFamily: "monospace",
        whiteSpace: "pre-wrap",
        wordBreak: "break-word",
        ...style,
      }}
    >
      {visibleText}
      <span
        style={{
          opacity: Math.sin((currentFrame / fps) * Math.PI * 2) > 0 ? 1 : 0,
          color: "#64ffda",
        }}
      >
        {cursor}
      </span>
    </div>
  );
};
