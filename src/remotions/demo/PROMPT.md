# Remotion 动画主题开发提示词

本文档基于 `src/remotions/demo` 的代码结构，定义了创建新动画主题时应遵循的命名规范、代码结构和开发模式。

## 📁 目录结构

每个动画主题应遵循以下目录结构：

```
src/remotions/
  └── {主题名}/
      ├── {主题名}.tsx          # 主组件文件
      └── scenes/
          ├── index.ts          # 场景组件统一导出
          ├── Scene0.tsx        # 场景0（从0开始编号）
          ├── Scene1.tsx        # 场景1
          ├── Scene2.tsx        # 场景2
          └── ...               # 更多场景
```

**示例**：
- 主题名：`Demo` → 目录：`src/remotions/demo/`
- 主题名：`StrawManFallacy` → 目录：`src/remotions/StrawManFallacy/`

## 🏷️ 命名规范

### 主文件命名

1. **主组件名称**：使用主题名（PascalCase）
   ```typescript
   export const Demo: React.FC<z.infer<typeof DemoSchema>> = () => { ... }
   ```

2. **Schema 名称**：`{主题名}Schema`
   ```typescript
   export const DemoSchema = z.object({ ... });
   ```

3. **总时长常量**：`TOTAL_DURATION_{主题名大写}`
   ```typescript
   export const TOTAL_DURATION_DEMO = ...;
   ```

### 场景文件命名

1. **场景组件名称**：`Scene{N}`（从0开始，N为数字）
   ```typescript
   export const Scene0: React.FC = () => { ... }
   export const Scene1: React.FC = () => { ... }
   ```

2. **场景时长计算函数**：`calculateScene{N}Duration`
   ```typescript
   export const calculateScene0Duration = (): number => { ... }
   export const calculateScene1Duration = (): number => { ... }
   ```

3. **场景配置数组**：`sceneConfigs`
   ```typescript
   const sceneConfigs = [
       { name: "scene0", durationInFrames: calculateScene0Duration(), component: Scene0 },
       { name: "scene1", durationInFrames: calculateScene1Duration(), component: Scene1 },
   ];
   ```

### 动画配置命名

1. **动画配置数组**：`animationConfigs`（在每个场景文件中）
   ```typescript
   const animationConfigs: AnimationConfig[] = [
       { name: "title", delayBefore: 0, delayAfter: 0, durationInFrames: 20, preName: null },
       { name: "subtitle", delayBefore: 30, delayAfter: 0, durationInFrames: 20, preName: "title" },
   ];
   ```

2. **动画时序信息**：`animationTimings`（在场景组件中使用）
   ```typescript
   const animationTimings = calculateAnimationTimings(animationConfigs);
   ```

### 转场配置命名

1. **转场配置数组**：`transitionConfigs`
   ```typescript
   const transitionConfigs = [
       { type: "fade" as const },
       { type: "fade" as const, direction: "from-left" as const },
   ];
   ```

2. **转场时长常量**：`TRANSITION_DURATION`
   ```typescript
   const TRANSITION_DURATION = 15; // 每个转场持续15帧
   ```

## 📝 代码结构

### 主组件文件结构（{主题名}.tsx）

```typescript
import React from "react";
import { AbsoluteFill } from "remotion";
import { z } from "zod";
import { zColor } from "@remotion/zod-types";
import {
    linearTiming,
    TransitionSeries,
} from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { wipe } from "@remotion/transitions/wipe";
import { slide } from "@remotion/transitions/slide";

// 1. 导入场景组件
import {
    Scene0,
    Scene1,
    Scene2,
    // ... 更多场景
} from "./scenes";

// 2. 导入场景时长计算函数
import { calculateScene0Duration } from "./scenes/Scene0";
import { calculateScene1Duration } from "./scenes/Scene1";
// ... 更多场景

// 3. Schema 定义
export const {主题名}Schema = z.object({
    backgroundColor: zColor(),
    primaryColor: zColor(),
    accentColor: zColor(),
});

// 4. 场景配置数组
const sceneConfigs = [
    { name: "scene0", durationInFrames: calculateScene0Duration(), component: Scene0 },
    { name: "scene1", durationInFrames: calculateScene1Duration(), component: Scene1 },
    // ... 更多场景
];

// 5. 转场效果配置
const transitionConfigs = [
    { type: "fade" as const },
    { type: "fade" as const, direction: "from-left" as const },
    // ... 更多转场
];

// 6. 转场时长常量
const TRANSITION_DURATION = 15;

// 7. 计算总时长
export const TOTAL_DURATION_{主题名大写} = sceneConfigs.reduce(
    (total, config) => total + config.durationInFrames,
    0
) - (sceneConfigs.length - 1) * TRANSITION_DURATION;

// 8. 主组件
export const {主题名}: React.FC<z.infer<typeof {主题名}Schema>> = () => {
    return (
        <AbsoluteFill>
            <TransitionSeries>
                {sceneConfigs.map((config, index) => {
                    const SceneComponent = config.component;
                    const isLast = index === sceneConfigs.length - 1;
                    
                    return (
                        <React.Fragment key={config.name}>
                            <TransitionSeries.Sequence durationInFrames={config.durationInFrames}>
                                <SceneComponent />
                            </TransitionSeries.Sequence>
                            
                            {!isLast && (
                                <TransitionSeries.Transition
                                    timing={linearTiming({ durationInFrames: TRANSITION_DURATION })}
                                    presentation={
                                        transitionConfigs[index].type === "fade"
                                            ? fade()
                                            : transitionConfigs[index].type === "wipe"
                                            ? wipe({ direction: transitionConfigs[index].direction || "from-left" })
                                            : slide({ direction: transitionConfigs[index].direction || "from-bottom" })
                                    }
                                />
                            )}
                        </React.Fragment>
                    );
                })}
            </TransitionSeries>
        </AbsoluteFill>
    );
};
```

### 场景文件结构（Scene{N}.tsx）

```typescript
import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring } from "remotion";
import {
    // 导入需要的组件
} from "../../../components";
import { AnimationConfig, calculateAnimationTimings, calculateSceneDuration } from "../../../utils";

/**
 * 动画配置：统一的数据结构
 * - name: 动画名称
 * - delayBefore: 在前一个动画结束后的延迟帧数
 * - delayAfter: 当前动画结束后的延迟帧数（用于下一个动画）
 * - durationInFrames: 动画持续帧数
 * - preName: 前一个动画的名称，null 表示这是第一个动画
 * 
 * 修改这里的值即可调整动画时序，后续动画会自动调整延迟时间
 */
const animationConfigs: AnimationConfig[] = [
    { name: "title", delayBefore: 0, delayAfter: 0, durationInFrames: 20, preName: null },
    { name: "subtitle", delayBefore: 30, delayAfter: 0, durationInFrames: 20, preName: "title" },
    // ... 更多动画配置
];

/**
 * 计算场景总时长：最后一个动画的结束时间
 * 结束时间 = 起始时间 + 持续时间 + delayAfter
 */
export const calculateScene{N}Duration = (): number => {
    return calculateSceneDuration(animationConfigs);
};

/**
 * 场景入口
 */
export const Scene{N}: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    // 计算所有动画的延迟时间和配置信息
    const animationTimings = calculateAnimationTimings(animationConfigs);

    // 计算动画值（使用 spring 或 interpolate）
    const titleScale = spring({
        frame: frame - animationTimings.title.startTime,
        fps,
        config: { damping: 80 },
        durationInFrames: animationTimings.title.durationInFrames,
    });

    return (
        <AbsoluteFill
            style={{
                // 场景样式
            }}
        >
            {/* 场景内容 */}
        </AbsoluteFill>
    );
};
```

### 场景导出文件结构（scenes/index.ts）

```typescript
export { Scene0 } from "./Scene0";
export { Scene1 } from "./Scene1";
export { Scene2 } from "./Scene2";
// ... 更多场景
```

## 🔧 关键开发要点

### 1. 动画时序管理

- 使用 `AnimationConfig` 接口定义动画配置
- 通过 `preName` 建立动画依赖关系
- 使用 `calculateAnimationTimings()` 自动计算动画起始时间
- 使用 `calculateSceneDuration()` 自动计算场景总时长

### 2. 场景切换

- 使用 `TransitionSeries` 组件管理场景切换
- 每个场景使用 `TransitionSeries.Sequence` 包裹
- 场景之间使用 `TransitionSeries.Transition` 添加转场效果
- 转场时长需要从总时长中减去（因为转场是重叠的）

### 3. 动画实现

- 优先使用 `spring()` 实现弹性动画
- 使用 `interpolate()` 实现线性插值动画
- 动画帧数计算：`frame - animationTimings.{动画名}.startTime`
- 使用 `useVideoConfig()` 获取 fps 等配置

### 4. 组件复用与管理

**重要原则：优先复用，按需新增**

- **组件复用**：
  - 在创建新组件前，**必须先检查** `src/components/` 目录中是否已存在可复用的组件
  - 查看 `src/components/index.ts` 了解所有可用的组件
  - 优先使用现有组件，避免重复开发
  - 现有组件包括但不限于：
    - `TextAnimations.tsx` - 文本动画组件（TypewriterText、TypewriterContent、SpringText、FadeInText 等）
    - `LottieAnimation.tsx` - Lottie 动画组件
    - 其他通用UI组件（ChatBubble、StaggeredList、HighlightText、Stamp 等）

- **新增组件**：
  - 只有在 `components` 目录中确实没有可复用组件时，才创建新组件
  - 新组件应放在 `src/components/` 目录下
  - 组件文件命名使用 PascalCase（如 `MyNewComponent.tsx`）
  - 必须在 `src/components/index.ts` 中导出新组件，以便统一导入

- **组件导入**：
  - 统一从 `../../../components` 导入所有组件
  - 使用 `import { ComponentName } from "../../../components"` 的方式导入

### 5. 工具类管理

**重要原则：可复用的工具函数统一到 utils 文件夹**

- **工具函数复用**：
  - 在创建新工具函数前，**必须先检查** `src/utils/` 目录中是否已存在可复用的函数
  - 查看 `src/utils/index.ts` 了解所有可用的工具函数
  - 优先使用现有工具函数，避免重复开发
  - 现有工具函数包括：
    - `animationTiming.ts` - 动画时序管理（AnimationConfig、calculateAnimationTimings、calculateSceneDuration 等）

- **新增工具函数**：
  - 只有在 `utils` 目录中确实没有可复用函数时，才创建新工具函数
  - 新工具函数应放在 `src/utils/` 目录下
  - 工具文件命名使用 camelCase（如 `myNewUtil.ts`）
  - 必须在 `src/utils/index.ts` 中导出新工具函数，以便统一导入

- **工具函数导入**：
  - 统一从 `../../../utils` 导入所有工具函数
  - 使用 `import { functionName } from "../../../utils"` 的方式导入

### 6. Root.tsx 注册

在 `src/Root.tsx` 中注册新主题：

```typescript
import { {主题名}, {主题名}Schema, TOTAL_DURATION_{主题名大写} } from "./remotions/{主题名}/{主题名}";

<Composition
    id="{主题名}"
    component={主题名}
    durationInFrames={TOTAL_DURATION_{主题名大写}}
    fps={30}
    width={1920}
    height={1080}
    schema={主题名Schema}
    defaultProps={{
        backgroundColor: "#F7F9FC",
        primaryColor: "#38B2AC",
        accentColor: "#E53E3E",
    }}
/>
```

## 📋 开发检查清单

创建新动画主题时，请确保：

- [ ] 目录结构符合规范
- [ ] 所有命名符合规范（组件名、函数名、常量名）
- [ ] 主文件包含完整的 Schema、场景配置、转场配置
- [ ] 每个场景文件包含 `animationConfigs` 和 `calculateScene{N}Duration` 函数
- [ ] 场景导出文件包含所有场景的导出
- [ ] 在 `Root.tsx` 中注册了新主题
- [ ] 所有动画使用 `animationTimings` 进行时序管理
- [ ] 转场时长已从总时长中正确减去
- [ ] **已检查 `components` 目录，优先使用现有组件**
- [ ] **如需新增组件，已在 `components/index.ts` 中导出**
- [ ] **已检查 `utils` 目录，优先使用现有工具函数**
- [ ] **如需新增工具函数，已在 `utils/index.ts` 中导出**

## 🎯 示例参考

完整示例请参考：
- `src/remotions/demo/Demo.tsx` - 主组件示例
- `src/remotions/demo/scenes/Scene0.tsx` - 场景组件示例
- `src/remotions/demo/scenes/index.ts` - 场景导出示例
