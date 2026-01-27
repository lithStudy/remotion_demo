/**
 * 动画配置接口
 */
export interface AnimationConfig {
    /** 动画名称 */
    name: string;
    /** 在前一个动画结束后的延迟帧数 */
    delayBefore: number;
    /** 当前动画结束后的延迟帧数（用于下一个动画） */
    delayAfter: number;
    /** 动画持续帧数 */
    durationInFrames: number;
    /** 前一个动画的名称，null 表示这是第一个动画 */
    preName: string | null;
}

/**
 * 计算每个动画的绝对延迟时间（相对时间）
 * 通过 preName 找到前一个动画，计算其结束时间，然后加上 delayBefore
 * 
 * @param animationConfigs 动画配置数组
 * @returns 返回一个对象，键为动画名称，值为该动画的起始时间（帧数）
 */
export const calculateAnimationTimings = (
    animationConfigs: AnimationConfig[]
): Record<string, number> => {
    const timings: Record<string, number> = {};
    const configMap = new Map(animationConfigs.map(config => [config.name, config]));
    
    // 计算每个动画的起始时间
    animationConfigs.forEach((config) => {
        if (config.preName === null) {
            // 第一个动画，从0开始
            timings[config.name] = config.delayBefore;
            // 添加日志
            console.log(`[calculateAnimationTimings] Calculating start time for: ${config.name}, delayBefore: ${timings[config.name]}`);
        } else {
            // 找到前一个动画的配置
            const preConfig = configMap.get(config.preName);
            if (!preConfig) {
                throw new Error(`找不到前一个动画: ${config.preName}`);
            }
            
            // 前一个动画的结束时间 = 起始时间 + 持续时间 + delayAfter
            const preEndTime = timings[preConfig.name] + preConfig.durationInFrames + preConfig.delayAfter;
            
            // 当前动画的起始时间 = 前一个动画的结束时间 + delayBefore
            timings[config.name] = preEndTime + config.delayBefore;
            console.log(`[calculateAnimationTimings] Calculating start time for: ${config.name}, delayBefore: ${timings[config.name]}`);
        }
    });
    
    return timings;
};

/**
 * 计算场景总时长：最后一个动画的结束时间
 * 结束时间 = 起始时间 + 持续时间 + delayAfter
 * 
 * @param animationConfigs 动画配置数组
 * @returns 场景总时长（帧数）
 */
export const calculateSceneDuration = (
    animationConfigs: AnimationConfig[]
): number => {
    const timings = calculateAnimationTimings(animationConfigs);
    const lastConfig = animationConfigs[animationConfigs.length - 1];
    const lastStartTime = timings[lastConfig.name];
    const totalDuration = lastStartTime + lastConfig.durationInFrames + lastConfig.delayAfter;
    return totalDuration;
};
