import { z } from "zod";
import { Scene1, calculateScene1Duration } from "./scenes/Scene1";
import { Scene2, calculateScene2Duration } from "./scenes/Scene2";
import { Scene3, calculateScene3Duration } from "./scenes/Scene3";
import { Scene4, calculateScene4Duration } from "./scenes/Scene4";
import { Scene5, calculateScene5Duration } from "./scenes/Scene5";
import { Scene6, calculateScene6Duration } from "./scenes/Scene6";
import { Scene7, calculateScene7Duration } from "./scenes/Scene7";
import { Scene8, calculateScene8Duration } from "./scenes/Scene8";
import { Scene9, calculateScene9Duration } from "./scenes/Scene9";
import { Scene10, calculateScene10Duration } from "./scenes/Scene10";

export const 抵制特斯拉的伪爱国Schema = z.object({});

export const TRANSITION_DURATION = 15;
export const SCENE_END_PADDING = 20;
export const COVER_DURATION_FRAMES = 5;

export const sceneConfigs = [
    { name: "scene1", duration: calculateScene1Duration() + SCENE_END_PADDING, component: Scene1, label: "引入：砸特斯拉的真相" },
    { name: "scene2", duration: calculateScene2Duration() + SCENE_END_PADDING, component: Scene2, label: "剖析·供应链依赖" },
    { name: "scene3", duration: calculateScene3Duration() + SCENE_END_PADDING, component: Scene3, label: "剖析·就业依赖" },
    { name: "scene4", duration: calculateScene4Duration() + SCENE_END_PADDING, component: Scene4, label: "剖析·外汇收入" },
    { name: "scene5", duration: calculateScene5Duration() + SCENE_END_PADDING, component: Scene5, label: "剖析·鲶鱼效应" },
    { name: "scene6", duration: calculateScene6Duration() + SCENE_END_PADDING, component: Scene6, label: "剖析·倒逼进化" },
    { name: "scene7", duration: calculateScene7Duration() + SCENE_END_PADDING, component: Scene7, label: "剖析·技术普惠" },
    { name: "scene8", duration: calculateScene8Duration() + SCENE_END_PADDING, component: Scene8, label: "剖析·宁德时代崛起" },
    { name: "scene9", duration: calculateScene9Duration() + SCENE_END_PADDING, component: Scene9, label: "转折·封闭不是出路" },
    { name: "scene10", duration: calculateScene10Duration() + SCENE_END_PADDING, component: Scene10, label: "结论·真正的强国" },
];

export const MAIN_DURATION_抵制特斯拉的伪爱国 =
    sceneConfigs.reduce((total, c) => total + c.duration, 0) -
    (sceneConfigs.length - 1) * TRANSITION_DURATION;

export const TOTAL_DURATION_抵制特斯拉的伪爱国 =
    COVER_DURATION_FRAMES + MAIN_DURATION_抵制特斯拉的伪爱国;

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
