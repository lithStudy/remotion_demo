import { z } from "zod";
import { Scene1, calculateScene1Duration } from "./scenes/Scene1";
import { Scene2, calculateScene2Duration } from "./scenes/Scene2";
import { Scene3, calculateScene3Duration } from "./scenes/Scene3";
import { Scene4, calculateScene4Duration } from "./scenes/Scene4";
import { Scene5, calculateScene5Duration } from "./scenes/Scene5";

export const 认知偏差自利偏差Schema = z.object({});

export const TRANSITION_DURATION = 15;
export const SCENE_END_PADDING = 20;
export const COVER_DURATION_FRAMES = 5;

export const sceneConfigs = [
    { name: "scene1", duration: calculateScene1Duration() + SCENE_END_PADDING, component: Scene1, label: "引入" },
    { name: "scene2", duration: calculateScene2Duration() + SCENE_END_PADDING, component: Scene2, label: "自利偏差" },
    { name: "scene3", duration: calculateScene3Duration() + SCENE_END_PADDING, component: Scene3, label: "双标反转" },
    { name: "scene4", duration: calculateScene4Duration() + SCENE_END_PADDING, component: Scene4, label: "非对称归因" },
    { name: "scene5", duration: calculateScene5Duration() + SCENE_END_PADDING, component: Scene5, label: "收束" },
];

export const MAIN_DURATION_认知偏差_自利偏差 =
    sceneConfigs.reduce((total, c) => total + c.duration, 0) -
    (sceneConfigs.length - 1) * TRANSITION_DURATION;

export const TOTAL_DURATION_认知偏差_自利偏差 =
    COVER_DURATION_FRAMES + MAIN_DURATION_认知偏差_自利偏差;

/** 版心：与 BW_LAYOUT_*、横屏主片一致 1920×1080 */
export const DESIGN_W = 1920;
export const DESIGN_H = 1080;

export const LANDSCAPE_W = 1920;
export const LANDSCAPE_H = 1080;
export const LANDSCAPE_CONTAIN_SCALE = Math.min(LANDSCAPE_W / DESIGN_W, LANDSCAPE_H / DESIGN_H);

export const VERTICAL_CANVAS_W = 1080;
export const VERTICAL_CANVAS_H = 1920;
export const VERTICAL_PLAY_W = VERTICAL_CANVAS_W;
export const VERTICAL_PLAY_H = Math.round((VERTICAL_CANVAS_W * 9) / 16);
export const VERTICAL_PLAY_TOP = Math.round((VERTICAL_CANVAS_H - VERTICAL_PLAY_H) / 2);
export const VERTICAL_PLAY_PROGRESS_GAP = 4;
export const VERTICAL_CONTENT_SCALE = VERTICAL_PLAY_H / DESIGN_H;
/** 竖屏底部品牌栏距画布底边的偏移 */
export const VERTICAL_BOTTOM_BRAND_OFFSET = 400;
