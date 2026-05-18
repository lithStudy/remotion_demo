import { z } from "zod";
import { Scene1, calculateScene1Duration } from "./scenes/Scene1";
import { Scene2, calculateScene2Duration } from "./scenes/Scene2";
import { Scene3, calculateScene3Duration } from "./scenes/Scene3";
import { Scene4, calculateScene4Duration } from "./scenes/Scene4";
import { Scene5, calculateScene5Duration } from "./scenes/Scene5";
import { Scene6, calculateScene6Duration } from "./scenes/Scene6";
import { Scene7, calculateScene7Duration } from "./scenes/Scene7";
import { Scene8, calculateScene8Duration } from "./scenes/Scene8";

export const 华为制裁论Schema = z.object({});

export const TRANSITION_DURATION = 15;
export const SCENE_END_PADDING = 20;
export const COVER_DURATION_FRAMES = 5;

export const sceneConfigs = [
    { name: "scene1", duration: calculateScene1Duration() + SCENE_END_PADDING, component: Scene1, label: "引入：华为困境" },
    { name: "scene2", duration: calculateScene2Duration() + SCENE_END_PADDING, component: Scene2, label: "剖析：制裁与去华为化" },
    { name: "scene3", duration: calculateScene3Duration() + SCENE_END_PADDING, component: Scene3, label: "剖析：惩罚性制裁" },
    { name: "scene4", duration: calculateScene4Duration() + SCENE_END_PADDING, component: Scene4, label: "剖析：制约性制裁" },
    { name: "scene5", duration: calculateScene5Duration() + SCENE_END_PADDING, component: Scene5, label: "剖析：去华为化原因" },
    { name: "scene6", duration: calculateScene6Duration() + SCENE_END_PADDING, component: Scene6, label: "剖析：法理风险" },
    { name: "scene7", duration: calculateScene7Duration() + SCENE_END_PADDING, component: Scene7, label: "总结：多重原因" },
    { name: "scene8", duration: calculateScene8Duration() + SCENE_END_PADDING, component: Scene8, label: "反转：站队问题" },
];

export const MAIN_DURATION_华为制裁论 =
    sceneConfigs.reduce((total, c) => total + c.duration, 0) -
    (sceneConfigs.length - 1) * TRANSITION_DURATION;

export const TOTAL_DURATION_华为制裁论 =
    COVER_DURATION_FRAMES + MAIN_DURATION_华为制裁论;

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
