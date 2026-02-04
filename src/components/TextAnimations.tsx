import React from "react";
import {
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

// ==================== 配色常量 ====================
export const COLORS = {
  background: "#F7F9FC",
  text: "#2D3748",
  attack: "#E53E3E",
  defend: "#38B2AC",
  highlightAttack: "#FED7D7",
  highlightDefend: "#B2F5EA",
};

// ==================== 淡入文字 ====================
interface FadeInTextProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  style?: React.CSSProperties;
}

export const FadeInText: React.FC<FadeInTextProps> = ({
  children,
  delay = 0,
  duration = 20,
  style,
}) => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [delay, delay + duration], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const translateY = interpolate(frame, [delay, delay + duration], [20, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        opacity,
        transform: `translateY(${translateY}px)`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

// ==================== 弹性入场文字 ====================
interface SpringTextProps {
  children: React.ReactNode;
  delay?: number;
  style?: React.CSSProperties;
  bouncy?: boolean;
}

export const SpringText: React.FC<SpringTextProps> = ({
  children,
  delay = 0,
  style,
  bouncy = true,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({
    frame: frame - delay,
    fps,
    config: bouncy ? { damping: 8, stiffness: 200 } : { damping: 200 },
  });

  const opacity = interpolate(frame, [delay, delay + 5], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        opacity,
        transform: `scale(${scale})`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

// ==================== 打字机效果 ====================
interface TypewriterTextProps {
  text: string;
  delay?: number;
  durationInFrames?: number; // 整个打字动画的总帧数（优先级高于 charFrames）
  charFrames?: number; // 每个字符显示的帧数（当 durationInFrames 未提供时使用）
  showCursor?: boolean;
  style?: React.CSSProperties;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  delay = 0,
  durationInFrames,
  charFrames = 2,
  showCursor = true,
  style,
}) => {
  const frame = useCurrentFrame();

  const localFrame = Math.max(0, frame - delay);

  // 如果提供了 durationInFrames，根据总时长和文本长度计算每个字符的帧数
  // 否则使用 charFrames 参数
  const actualCharFrames = durationInFrames
    ? durationInFrames / text.length
    : charFrames;

  const typedChars = Math.min(text.length, Math.floor(localFrame / actualCharFrames));
  const displayText = text.slice(0, typedChars);

  // 光标闪烁周期（固定20帧一个周期）
  const cursorBlinkFrames = 20;
  const cursorOpacity = interpolate(
    (frame % cursorBlinkFrames), // 当前帧在闪烁周期中的位置，决定光标是否显示
    [0, 10, 20],                // 输入区间：[0,10] 区间内光标从显示到消失，[10,20] 区间内光标从消失又回到显示，形成循环
    [1, 0, 1],                  // 输出区间：1为完全显示，0为完全隐藏，形成闪烁效果
    {
      extrapolateLeft: "clamp", // 超出左边界时，结果保持最左侧输出值
      extrapolateRight: "clamp" // 超出右边界时，结果保持最右侧输出值
    }
  );

  return (
    <span style={style}>
      {displayText}
      {showCursor && typedChars < text.length && (
        <span style={{ opacity: cursorOpacity }}>▌</span>
      )}
    </span>
  );
};

// ==================== 支持 React 节点的打字机效果 ====================
interface TypewriterContentProps {
  children: React.ReactNode;
  delay?: number;
  durationInFrames?: number;
  charFrames?: number;
  showCursor?: boolean;
  style?: React.CSSProperties;
}

// 将 React 节点转换为字符数组，保留样式信息
interface CharInfo {
  char: string;
  elementType?: React.ElementType;
  elementProps?: Record<string, unknown>;
}

const flattenNodeToChars = (node: React.ReactNode): CharInfo[] => {
  if (typeof node === 'string') {
    return node.split('').map(char => ({ char }));
  }

  if (React.isValidElement(node)) {
    const element = node as React.ReactElement<Record<string, unknown>>;
    const props = element.props as Record<string, unknown>;
    const children = props.children;
    const elementType = element.type as React.ElementType;
    const elementProps: Record<string, unknown> = { ...props };
    delete elementProps.children; // 移除 children，因为我们会单独处理

    if (typeof children === 'string') {
      return children.split('').map(char => ({ char, elementType, elementProps }));
    }
    if (Array.isArray(children)) {
      const result: CharInfo[] = [];
      (children as React.ReactNode[]).forEach(child => {
        result.push(...flattenNodeToChars(child));
      });
      return result;
    }
    if (children !== null && children !== undefined) {
      return flattenNodeToChars(children as React.ReactNode);
    }
    return [];
  }

  if (Array.isArray(node)) {
    const result: CharInfo[] = [];
    node.forEach(child => {
      result.push(...flattenNodeToChars(child));
    });
    return result;
  }

  return [];
};

export const TypewriterContent: React.FC<TypewriterContentProps> = ({
  children,
  delay = 0,
  durationInFrames,
  charFrames = 2,
  showCursor = true,
  style,
}) => {
  const frame = useCurrentFrame();
  const localFrame = Math.max(0, frame - delay);

  const chars = flattenNodeToChars(children);
  const totalChars = chars.length;

  const actualCharFrames = durationInFrames
    ? durationInFrames / totalChars
    : charFrames;

  const typedChars = Math.min(totalChars, Math.floor(localFrame / actualCharFrames));

  // 光标闪烁周期
  const cursorBlinkFrames = 20;
  const cursorOpacity = interpolate(
    (frame % cursorBlinkFrames),
    [0, 10, 20],
    [1, 0, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp"
    }
  );

  // 渲染已打字的字符
  const renderTypedChars = () => {
    if (typedChars === 0) return null;

    const result: React.ReactNode[] = [];
    let currentElementType: React.ElementType | undefined;
    let currentElementProps: Record<string, unknown> | undefined;
    let currentText = '';
    let segmentStart = 0;

    for (let i = 0; i < typedChars; i++) {
      const { char, elementType, elementProps } = chars[i];

      // 检查是否切换到新的元素类型
      const isNewElement = elementType !== currentElementType;

      if (isNewElement && currentText) {
        // 输出之前的文本段
        if (currentElementType && currentElementProps) {
          result.push(
            React.createElement(
              currentElementType,
              { key: `seg-${segmentStart}`, ...currentElementProps },
              currentText
            )
          );
        } else {
          result.push(<React.Fragment key={`seg-${segmentStart}`}>{currentText}</React.Fragment>);
        }
        currentText = '';
        segmentStart = i;
      }

      currentElementType = elementType;
      currentElementProps = elementProps;
      currentText += char;
    }

    // 输出最后一个文本段
    if (currentText) {
      if (currentElementType && currentElementProps) {
        result.push(
          React.createElement(
            currentElementType,
            { key: `seg-${segmentStart}`, ...currentElementProps },
            currentText
          )
        );
      } else {
        result.push(<React.Fragment key={`seg-${segmentStart}`}>{currentText}</React.Fragment>);
      }
    }

    return result;
  };

  return (
    <span style={style}>
      {renderTypedChars()}
      {showCursor && typedChars < totalChars && (
        <span style={{ opacity: cursorOpacity }}>▌</span>
      )}
    </span>
  );
};

// ==================== 文字高亮效果 ====================
interface HighlightTextProps {
  children: React.ReactNode;
  delay?: number;
  durationInFrames?: number;
  highlightColor?: string;
  style?: React.CSSProperties;
}

export const HighlightText: React.FC<HighlightTextProps> = ({
  children,
  delay = 0,
  durationInFrames = 20,
  highlightColor = COLORS.highlightAttack,
  style,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const progress = spring({
    frame: frame - delay,
    fps,
    config: { damping: 200 },
    durationInFrames: durationInFrames,
  });

  return (
    <span style={{ position: "relative", display: "inline-block", ...style }}>
      <span
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: "50%",
          height: "1.1em",
          transform: `translateY(-50%) scaleX(${progress})`,
          transformOrigin: "left center",
          backgroundColor: highlightColor,
          borderRadius: "0.15em",
          zIndex: 0,
        }}
      />
      <span style={{ position: "relative", zIndex: 1 }}>{children}</span>
    </span>
  );
};

// ==================== 交错列表 ====================
interface StaggeredListProps {
  items: React.ReactNode[];
  startFrame?: number;
  staggerDelay?: number;
  itemStyle?: React.CSSProperties;
}

export const StaggeredList: React.FC<StaggeredListProps> = ({
  items,
  startFrame = 0,
  staggerDelay = 15,
  itemStyle,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      {items.map((item, index) => {
        const itemDelay = startFrame + index * staggerDelay;
        const opacity = spring({
          frame: frame - itemDelay,
          fps,
          config: { damping: 100 },
          durationInFrames: 20,
        });

        const translateX = interpolate(
          spring({
            frame: frame - itemDelay,
            fps,
            config: { damping: 100 },
            durationInFrames: 20,
          }),
          [0, 1],
          [-30, 0]
        );

        return (
          <div
            key={index}
            style={{
              opacity,
              transform: `translateX(${translateX}px)`,
              ...itemStyle,
            }}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
};

// ==================== 聊天气泡 ====================
interface ChatBubbleProps {
  content: string;
  side: "left" | "right";
  color?: string;
  backgroundColor?: string;
  delay?: number;
  durationInFrames?: number;
  style?: React.CSSProperties;
}

export const ChatBubble: React.FC<ChatBubbleProps> = ({
  content,
  side,
  color = COLORS.text,
  backgroundColor = "white",
  delay = 0,
  durationInFrames = 20,
  style,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({
    frame: frame - delay,
    fps,
    config: { damping: 80, stiffness: 200 },
    durationInFrames: durationInFrames,
  });

  const opacity = interpolate(frame, [delay, delay + 5], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const isLeft = side === "left";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: isLeft ? "flex-start" : "flex-end",
        paddingLeft: isLeft ? 0 : 200,
        paddingRight: isLeft ? 200 : 0,
      }}
    >
      <div
        style={{
          opacity,
          transform: `scale(${scale})`,
          transformOrigin: isLeft ? "left center" : "right center",
          backgroundColor,
          color,
          borderRadius: 20,
          padding: "20px 30px",
          fontSize: 35,
          fontWeight: 500,
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          maxWidth: 800,
          ...style,
        }}
      >
        {content}
      </div>
    </div>
  );
};

// ==================== 警告标签 ====================
interface WarningBadgeProps {
  text: string;
  delay?: number;
  style?: React.CSSProperties;
}

export const WarningBadge: React.FC<WarningBadgeProps> = ({
  text,
  delay = 0,
  style,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({
    frame: frame - delay,
    fps,
    config: { damping: 10, stiffness: 200 },
  });

  const opacity = interpolate(frame, [delay, delay + 3], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // 闪烁效果
  const flash = interpolate(
    (frame - delay) % 30,
    [0, 15, 30],
    [1, 0.7, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
    <div
      style={{
        opacity: opacity * flash,
        transform: `scale(${scale})`,
        backgroundColor: COLORS.attack,
        color: "white",
        padding: "15px 30px",
        borderRadius: 10,
        fontSize: 36,
        fontWeight: "bold",
        textAlign: "center",
        boxShadow: "0 4px 20px rgba(229, 62, 62, 0.4)",
        ...style,
      }}
    >
      {text}
    </div>
  );
};

// ==================== 印章效果 ====================
interface StampProps {
  text: string;
  delay?: number;
  style?: React.CSSProperties;
}

export const Stamp: React.FC<StampProps> = ({
  text,
  delay = 0,
  style,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({
    frame: frame - delay,
    fps,
    config: { damping: 15, stiffness: 300 },
  });

  const rotation = interpolate(
    spring({
      frame: frame - delay,
      fps,
      config: { damping: 15 },
    }),
    [0, 1],
    [-15, -5]
  );

  const opacity = interpolate(frame, [delay, delay + 3], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        opacity,
        transform: `scale(${scale}) rotate(${rotation}deg)`,
        border: `6px solid ${COLORS.attack}`,
        borderRadius: 15,
        padding: "20px 40px",
        fontSize: 48,
        fontWeight: "bold",
        color: COLORS.attack,
        backgroundColor: "rgba(255,255,255,0.95)",
        boxShadow: "0 8px 30px rgba(229, 62, 62, 0.3)",
        ...style,
      }}
    >
      {text}
    </div>
  );
};
