import React, { useEffect, useState } from "react";
import { Lottie, LottieAnimationData } from "@remotion/lottie";
import { cancelRender, continueRender, delayRender, staticFile } from "remotion";

interface LottieAnimationProps {
    /**
     * Lottie动画的URL或本地文件路径
     * 如果是本地文件，应该放在public文件夹中，并使用staticFile()包装
     * 如果是远程URL，直接传入URL字符串
     */
    src: string;
    /**
     * 样式对象
     */
    style?: React.CSSProperties;
    /**
     * 动画播放速度，默认为1
     */
    playbackRate?: number;
    /**
     * 是否循环播放，默认为true
     */
    loop?: boolean;
    /**
     * 动画方向，"forward"为正向，"backward"为反向
     */
    direction?: "forward" | "backward";
}

/**
 * Lottie动画组件
 * 支持本地文件和远程URL
 */
export const LottieAnimation: React.FC<LottieAnimationProps> = ({
    src,
    style,
    playbackRate = 1,
    loop = true,
    direction = "forward",
}) => {
    const [handle] = useState(() => delayRender("加载Lottie动画"));
    const [animationData, setAnimationData] = useState<LottieAnimationData | null>(null);

    useEffect(() => {
        // 判断是本地文件还是远程URL
        const url = src.startsWith("http") ? src : staticFile(src.replace(/^\/?public\//, ""));

        fetch(url)
            .then((data) => data.json())
            .then((json) => {
                setAnimationData(json);
                continueRender(handle);
            })
            .catch((err) => {
                cancelRender(err);
            });
    }, [handle, src]);

    if (!animationData) {
        return null;
    }

    return (
        <Lottie
            animationData={animationData}
            style={style}
            playbackRate={playbackRate}
            loop={loop}
            direction={direction}
        />
    );
};
