import { AbsoluteFill, Sequence } from "remotion";
import { z } from "zod";
import { zColor } from "@remotion/zod-types";

// 导入场景组件
import {
  TitleScene,
  StrategyScene,
  Case1Scene,
  Case2Scene,
  Case3Scene,
  SummaryScene,
} from "./scenes";

export const adHominemSchema = z.object({
  backgroundColor: zColor(),
  primaryColor: zColor(),
  accentColor: zColor(),
});

/**
 * 人身攻击谬误讲解动画
 * Ad Hominem Fallacy Animation
 *
 * 场景时间轴:
 * - P1 标题场景: 0-150帧 (5秒)
 * - P2 策略场景: 150-330帧 (6秒)
 * - P3 案例一: 330-480帧 (5秒)
 * - P4 案例二: 480-630帧 (5秒)
 * - P5 案例三: 630-780帧 (5秒)
 * - P6 总结场景: 780-960帧 (6秒)
 *
 * 总时长: 960帧 (32秒 @ 30fps)
 */
export const AdHominem: React.FC<z.infer<typeof adHominemSchema>> = () => {
  return (
    <AbsoluteFill>
      {/* P1: 标题场景 - 0-150帧 (5秒) */}
      <Sequence durationInFrames={150}>
        <TitleScene />
      </Sequence>

      {/* P2: 策略场景 - 150-330帧 (6秒) */}
      <Sequence from={150} durationInFrames={180}>
        <StrategyScene />
      </Sequence>

      {/* P3: 案例一 - 330-480帧 (5秒) */}
      <Sequence from={330} durationInFrames={150}>
        <Case1Scene />
      </Sequence>

      {/* P4: 案例二 - 480-630帧 (5秒) */}
      <Sequence from={480} durationInFrames={150}>
        <Case2Scene />
      </Sequence>

      {/* P5: 案例三 - 630-780帧 (5秒) */}
      <Sequence from={630} durationInFrames={150}>
        <Case3Scene />
      </Sequence>

      {/* P6: 总结场景 - 780-960帧 (6秒) */}
      <Sequence from={780} durationInFrames={180}>
        <SummaryScene />
      </Sequence>
    </AbsoluteFill>
  );
};
