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
    /** 
     * 可选：关联的音频 ID，格式为 "sceneId_order" (如 "scene1_1")
     * 如果提供，将从 audio-map.json 读取实际时长并覆盖 durationInFrames
     */
    audioId?: string;
}

/**
 * 动画时序信息接口：包含原始配置和计算出的起始时间
 */
export interface AnimationTimingInfo {
    /** 动画名称 */
    name: string;
    /** 动画起始时间（帧数） */
    startTime: number;
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
 * @returns 返回一个对象，键为动画名称，值为包含起始时间和完整配置的动画时序信息
 */
export const calculateAnimationTimings = (
    animationConfigs: AnimationConfig[]
): Record<string, AnimationTimingInfo> => {
    const timings: Record<string, AnimationTimingInfo> = {};
    const configMap = new Map(animationConfigs.map(config => [config.name, config]));

    // 按依赖关系排序：先计算 preName 为 null 的，再计算依赖其他动画的
    // 使用拓扑排序确保被依赖的动画先被计算
    const sortedConfigs: AnimationConfig[] = [];
    const processed = new Set<string>();

    // 递归函数：计算一个动画及其所有依赖
    const processConfig = (config: AnimationConfig) => {
        // 如果已经处理过，跳过
        if (processed.has(config.name)) {
            return;
        }

        // 如果有依赖，先处理依赖
        if (config.preName !== null) {
            const preConfig = configMap.get(config.preName);
            if (!preConfig) {
                throw new Error(`找不到前一个动画: ${config.preName}`);
            }
            // 递归处理依赖的动画
            processConfig(preConfig);
        }

        // 处理当前动画
        sortedConfigs.push(config);
        processed.add(config.name);
    };

    // 处理所有配置
    animationConfigs.forEach(config => {
        processConfig(config);
    });

    // 按排序后的顺序计算每个动画的起始时间
    sortedConfigs.forEach((config) => {
        let startTime: number;

        if (config.preName === null) {
            // 第一个动画，从0开始
            startTime = config.delayBefore;
            // 添加日志
            console.log(`[calculateAnimationTimings] Calculating start time for: ${config.name}, delayBefore: ${startTime}`);
        } else {
            // 找到前一个动画的配置
            const preConfig = configMap.get(config.preName);
            if (!preConfig) {
                throw new Error(`找不到前一个动画: ${config.preName}`);
            }

            // 确保前一个动画已经被计算
            if (!timings[preConfig.name]) {
                throw new Error(`前一个动画 ${config.preName} 尚未被计算，可能存在循环依赖`);
            }

            // 前一个动画的结束时间 = 起始时间 + 持续时间 + delayAfter
            const preEndTime = timings[preConfig.name].startTime + preConfig.durationInFrames + preConfig.delayAfter;

            // 当前动画的起始时间 = 前一个动画的结束时间 + delayBefore
            startTime = preEndTime + config.delayBefore;
            console.log(`[calculateAnimationTimings] Calculating start time for: ${config.name}, delayBefore: ${startTime}`);
        }

        // 返回包含起始时间和完整配置的对象
        timings[config.name] = {
            name: config.name,
            startTime,
            delayBefore: config.delayBefore,
            delayAfter: config.delayAfter,
            durationInFrames: config.durationInFrames,
            preName: config.preName,
        };
    });

    return timings;
};

/**
 * 音频映射条目接口
 */
export interface AudioMapEntry {
    duration: number;
    file: string;
    sceneId: string;
    order: number;
    type: string;
    text: string;
}

/**
 * 音频映射接口
 */
export interface AudioMap {
    [key: string]: AudioMapEntry;
}

/**
 * 根据音频时长计算帧数
 * @param durationInSeconds 音频时长（秒）
 * @param fps 帧率
 * @param bufferSeconds 可选的缓冲时间（秒），默认 0.3 秒
 * @returns 帧数
 */
export const audioDurationToFrames = (
    durationInSeconds: number,
    fps: number = 30,
    bufferSeconds: number = 0.3
): number => {
    return Math.ceil((durationInSeconds + bufferSeconds) * fps);
};

/**
 * 从音频映射中获取并应用音频时长
 * @param configs 动画配置数组
 * @param audioMap 音频映射对象（可选）
 * @param fps 帧率，默认 30
 * @returns 应用音频时长后的配置数组
 */
export const applyAudioDurations = (
    configs: AnimationConfig[],
    audioMap?: AudioMap,
    fps: number = 30
): AnimationConfig[] => {
    if (!audioMap) {
        return configs;
    }

    return configs.map(config => {
        if (config.audioId && audioMap[config.audioId]) {
            const audioDuration = audioMap[config.audioId].duration;
            const durationInFrames = audioDurationToFrames(audioDuration, fps);

            console.log(
                `[applyAudioDurations] ${config.name}: 使用音频时长 ${audioDuration.toFixed(2)}s => ${durationInFrames} 帧`
            );

            return {
                ...config,
                durationInFrames,
            };
        }
        return config;
    });
};

/**
 * 计算场景总时长：根据动画链路求总和，返回最长链路的结束时间
 * 结束时间 = 起始时间 + 持续时间 + delayAfter
 * 
 * @param animationConfigs 动画配置数组
 * @param audioMap 可选的音频映射对象，用于覆盖时长
 * @param fps 帧率，默认 30
 * @returns 场景总时长（帧数）
 */
export const calculateSceneDuration = (
    animationConfigs: AnimationConfig[],
    audioMap?: AudioMap,
    fps: number = 30
): number => {
    // 应用音频时长
    const configsWithAudio = applyAudioDurations(animationConfigs, audioMap, fps);
    const timings = calculateAnimationTimings(configsWithAudio);

    // 找出所有链路的终点（没有其他动画依赖它的动画）
    // 收集所有被依赖的动画名称
    const dependentNames = new Set(
        configsWithAudio
            .filter(config => config.preName !== null)
            .map(config => config.preName!)
    );

    // 终点动画：存在于配置中，但没有其他动画依赖它
    const endAnimations = configsWithAudio.filter(
        config => !dependentNames.has(config.name)
    );

    // 计算每条链路的结束时间，取最大值
    let maxDuration = 0;
    endAnimations.forEach(config => {
        const timingInfo = timings[config.name];
        const endTime = timingInfo.startTime + timingInfo.durationInFrames + timingInfo.delayAfter;
        maxDuration = Math.max(maxDuration, endTime);
    });

    return maxDuration;
};
