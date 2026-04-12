import { z } from "zod";
import { Scene1, calculateScene1Duration } from "./scenes/Scene1";
import { Scene2, calculateScene2Duration } from "./scenes/Scene2";
import { Scene3, calculateScene3Duration } from "./scenes/Scene3";
import { Scene4, calculateScene4Duration } from "./scenes/Scene4";

export const 认知偏见锚定效应Schema = z.object({});

export const TRANSITION_DURATION = 15;
export const SCENE_END_PADDING = 20;
export const COVER_DURATION_FRAMES = 5;

export const sceneConfigs = [
    { name: "scene1", duration: calculateScene1Duration() + SCENE_END_PADDING, component: Scene1, label: "引入：锚定效应与占便宜心理" },
    { name: "scene2", duration: calculateScene2Duration() + SCENE_END_PADDING, component: Scene2, label: "命名：锚定效应的定义与影响" },
    { name: "scene3", duration: calculateScene3Duration() + SCENE_END_PADDING, component: Scene3, label: "剖析：锚定效应的应用场景" },
    { name: "scene4", duration: calculateScene4Duration() + SCENE_END_PADDING, component: Scene4, label: "召唤：如何避免锚定效应" },
];

export const MAIN_DURATION_认知偏见_锚定效应 =
    sceneConfigs.reduce((total, c) => total + c.duration, 0) -
    (sceneConfigs.length - 1) * TRANSITION_DURATION;

export const TOTAL_DURATION_认知偏见_锚定效应 =
    COVER_DURATION_FRAMES + MAIN_DURATION_认知偏见_锚定效应;

/** 版心设计尺寸：与 `BW_LAYOUT_*`、横屏主片一致1920×1080 */
export const DESIGN_W = 1920;
export const DESIGN_H = 1080;

/** 横屏主片 */
export const LANDSCAPE_W = 1920;
export const LANDSCAPE_H = 1080;
/** 完整显示版心（不裁切锚点/字幕）；左右等量留白，由外层渐变铺满 */
export const LANDSCAPE_CONTAIN_SCALE = Math.min(LANDSCAPE_W / DESIGN_W, LANDSCAPE_H / DESIGN_H);

/** 竖屏抖音壳 */
export const VERTICAL_CANVAS_W = 1080;
export const VERTICAL_CANVAS_H = 1920;
export const VERTICAL_PLAY_W = VERTICAL_CANVAS_W;
/** 1080 宽对应的 16:9 视口高度 */
export const VERTICAL_PLAY_H = Math.round((VERTICAL_CANVAS_W * 9) / 16);
/** 播放区垂直居中后的顶部偏移 */
export const VERTICAL_PLAY_TOP = Math.round((VERTICAL_CANVAS_H - VERTICAL_PLAY_H) / 2);
export const VERTICAL_PLAY_PROGRESS_GAP = 4;
export const VERTICAL_CONTENT_SCALE = VERTICAL_PLAY_H / DESIGN_H;
