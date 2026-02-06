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
    /**
     * 可选：高亮引用，用于自动计算 delayBefore
     */
    highlightRef?: HighlightReference;
    /**
     * 可选：高亮文字列表，用于配置音频节点的文字片段
     */
    highlight?: string[];
    /**
     * [Runtime Calculated] 高亮延迟帧数（相对动画开始）
     * 由 applyHighlightDelays 计算并填充
     */
    highlightDelays?: number[];
}

/**
 * 高亮引用接口
 */
export interface HighlightReference {
    /** 关联的音频 ID (e.g. "scene3_4") */
    audioId: string;
    /** 高亮索引 */
    index: number;
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
    /** 高亮绝对时间（帧数）列表 */
    highlightAbsoluteTimes?: number[];
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
            // console.log(`[calculateAnimationTimings] Calculating start time for: ${config.name}, delayBefore: ${startTime}`);
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
            // console.log(`[calculateAnimationTimings] Calculating start time for: ${config.name}, delayBefore: ${startTime}`);
        }

        // 计算高亮绝对时间
        let highlightAbsoluteTimes: number[] | undefined;
        if (config.highlightDelays) {
            highlightAbsoluteTimes = config.highlightDelays.map(delay => startTime + delay);
        }

        // 返回包含起始时间和完整配置的对象
        timings[config.name] = {
            name: config.name,
            startTime,
            delayBefore: config.delayBefore,
            delayAfter: config.delayAfter,
            durationInFrames: config.durationInFrames,
            preName: config.preName,
            highlightAbsoluteTimes,
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
    bufferSeconds: number = -0.4
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

/**
 * 应用高亮延迟 (支持直接计算)
 * 遍历配置，对于包含 highlight 字段的配置，计算高亮词相对于该动画/音频开始的时间延迟（帧数）
 * 并填充到 highlightDelays 字段中
 * 
 * 同时保留对 highlightRef 的支持（如果仍有旧代码使用），但主要通过 highlight 本身来驱动
 * 
 * @param configs 动画配置数组
 * @param audioMap 音频映射对象
 * @param fps 帧率
 * @returns 更新后的配置数组
 */
export const applyHighlightDelays = (
    configs: AnimationConfig[],
    audioMap: AudioMap,
    fps: number = 30
): AnimationConfig[] => {
    // 创建查找表以便快速获取配置 (用于 highlightRef 处理)
    const configMap = new Map(configs.map(c => [c.name, c]));

    // 查找包含 highlights 的配置，建立 audioId -> highlights 映射
    const highlightsMap = new Map<string, string[]>();
    configs.forEach(c => {
        if (c.audioId && c.highlight) {
            highlightsMap.set(c.audioId, c.highlight);
        }
    });

    return configs.map(config => {
        let newConfig = { ...config };

        // 1. 处理本节点定义的 highlight 列表，计算相对延迟
        if (config.audioId && config.highlight && audioMap[config.audioId]) {
            const audioEntry = audioMap[config.audioId];
            const fullText = audioEntry.text;
            const audioDuration = audioEntry.duration;
            const highlightDelays: number[] = [];

            let searchIndex = 0;

            config.highlight.forEach((word, idx) => {
                const foundIndex = fullText.indexOf(word, searchIndex);
                if (foundIndex !== -1) {
                    const delaySeconds = (foundIndex / fullText.length) * audioDuration;
                    const delayFrames = Math.round(delaySeconds * fps);
                    highlightDelays.push(delayFrames);
                    searchIndex = foundIndex + 1;
                    console.log(`[applyHighlightDelays] ${config.name}: Generated delay for "${word}" -> ${delaySeconds.toFixed(3)}s (${delayFrames}f)`);
                } else {
                    console.warn(`[applyHighlightDelays] Warning: Highlight word "${word}" not found in text for ${config.name}`);
                    highlightDelays.push(0); // 找不到则默认0
                }
            });

            newConfig.highlightDelays = highlightDelays;
        }

        // 2. 兼容处理 highlightRef (如果有节点仍在使用独立配置)
        if (config.highlightRef) {
            const { audioId, index } = config.highlightRef;

            // 必须有 preName 才能计算相对延迟
            if (!config.preName) {
                return newConfig;
            }

            const preConfig = configMap.get(config.preName);
            if (!preConfig) {
                return newConfig;
            }

            // 计算高亮时间
            let highlightDelaySeconds = 0;
            const audioEntry = audioMap[audioId];
            const highlights = highlightsMap.get(audioId);

            if (audioEntry && highlights && highlights[index]) {
                const fullText = audioEntry.text;
                // const targetWord = highlights[index]; // unused
                const audioDuration = audioEntry.duration;

                let searchIndex = 0;
                let foundIndex = -1;

                for (let i = 0; i <= index; i++) {
                    const word = highlights[i];
                    foundIndex = fullText.indexOf(word, searchIndex);
                    if (foundIndex !== -1) {
                        searchIndex = foundIndex + 1;
                    } else {
                        break;
                    }
                }

                if (foundIndex !== -1) {
                    highlightDelaySeconds = (foundIndex / fullText.length) * audioDuration;
                }
            }

            const highlightDelayFrames = Math.round(highlightDelaySeconds * fps);
            const delayBefore = highlightDelayFrames - preConfig.durationInFrames - preConfig.delayAfter;

            newConfig.delayBefore = delayBefore;
        }

        return newConfig;
    });
};
