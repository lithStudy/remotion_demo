/**
 * 各场景文案汇总，供 TTS 配音使用。
 * 每段文案按场景内出现顺序排列，可与时间轴对应。
 */

export interface SceneScriptItem {
  /** 场景内序号，便于对轨 */
  order: number;
  /** 文案类型：标题/副标题/正文/标签等 */
  type: string;
  /** 纯文本内容，可直接用于 TTS */
  text: string;
  /** 备注（如高亮关键词、不读的标签等） */
  note?: string;
}

export interface SceneScript {
  sceneId: string;
  sceneName: string;
  items: SceneScriptItem[];
}

/** 场景1：开场 */
export const scene1Script: SceneScript = {
  sceneId: "scene1",
  sceneName: "开场",
  items: [
    { order: 1, type: "主标题", text: "为什么一合群，智商就归零？" },
    { order: 2, type: "副标题", text: "读透《乌合之众》，看清99%的无脑跟风。" },
    { order: 3, type: "标签", text: "心理学、思维提升、乌合之众、独立思考", note: "画面为 #心理学 #思维提升 等，可按需读或不读" },
  ],
};

/** 场景2：乌合之众 */
export const scene2Script: SceneScript = {
  sceneId: "scene2",
  sceneName: "乌合之众",
  items: [
    { order: 1, type: "标题", text: "乌合之众" },
    { order: 2, type: "副标题", text: "群体中没有智者，只有情绪巨婴" },
    { order: 3, type: "小标题", text: "概念解析" },
    {
      order: 4,
      type: "正文",
      text: "当个人融入群体，个性消失，智力下降，取而代之的是「群体精神」——易怒、冲动，不仅没脑子，还觉得自己无所不能。简单说就是：一个人是龙，一群人是虫。",
    },
  ],
};

/** 场景3：网络吃瓜 */
export const scene3Script: SceneScript = {
  sceneId: "scene3",
  sceneName: "网络吃瓜",
  items: [
    { order: 1, type: "标题", text: "网络吃瓜" },
    { order: 2, type: "副标题", text: "网络正义的狂欢" },
    { order: 3, type: "小标题", text: "表现" },
    {
      order: 4,
      type: "正文",
      text: "热搜一出，真相未明，大家就开始疯狂站队、网暴。「虽迟但到」、「死刑起步」刷满屏。结果反转了，大家又一哄而散，仿佛无事发生。",
    },
    { order: 5, type: "小标题", text: "原理" },
    {
      order: 6,
      type: "正文",
      text: "群体只接受简单的暗示，分不清现实与幻觉，极易被情绪煽动。",
    },
  ],
};

/** 场景4：消费跟风 */
export const scene4Script: SceneScript = {
  sceneId: "scene4",
  sceneName: "消费跟风",
  items: [
    { order: 1, type: "标题", text: "消费跟风" },
    { order: 2, type: "副标题", text: "排队2小时的奶茶" },
    { order: 3, type: "画面文字", text: "传染性。大家都在做，肯定是对的。", note: "画面中部大字，可选读" },
    { order: 4, type: "小标题", text: "表现" },
    {
      order: 5,
      type: "正文",
      text: "其实你并不渴，也不觉得多好喝。但看到几百人在排队，你也鬼使神差地排了进去。最后发个朋友圈：「终于喝到了」，其实心里觉得「就这？」。",
    },
    { order: 6, type: "小标题", text: "原理" },
    {
      order: 7,
      type: "正文",
      text: "传染性。在群体中，情绪和行为像病毒一样传播，让你觉得「大家都在做，肯定是对的」。",
    },
  ],
};

/** 场景5：职场沉默 */
export const scene5Script: SceneScript = {
  sceneId: "scene5",
  sceneName: "职场沉默",
  items: [
    { order: 1, type: "标题", text: "职场沉默" },
    { order: 2, type: "副标题", text: "职场中的「国王新衣」" },
    { order: 3, type: "小标题", text: "表现" },
    {
      order: 4,
      type: "正文",
      text: "明明老板的方案有大坑，但会议上没人敢反对。大家都在想：「别人没说话，我也不说」。最后项目黄了，大家才说：「其实我当时就觉得不行……」",
    },
    { order: 5, type: "小标题", text: "原理" },
    {
      order: 6,
      type: "正文",
      text: "群体扼杀异议。为了获得群体的归属感，个人会本能地压抑正确的判断。",
    },
  ],
};

/** 场景6：三大成因 */
export const scene6Script: SceneScript = {
  sceneId: "scene6",
  sceneName: "为什么我们会降智",
  items: [
    { order: 1, type: "标题", text: "为什么我们会「降智」？" },
    { order: 2, type: "副标题", text: "勒庞总结了三大成因" },
    { order: 3, type: "卡片标题+内容", text: "匿名性。「法不责众」。藏在人群里，责任感消失，胆子变大，敢做平时不敢做的坏事。" },
    { order: 4, type: "卡片标题+内容", text: "传染性。情绪也是病毒。狂热、恐慌、愤怒，在人群中会以几何级数扩散。" },
    { order: 5, type: "卡片标题+内容", text: "易受暗示性。大脑像被催眠。此时逻辑下线，谁声音大、谁情绪激昂，就听谁的。" },
  ],
};

/** 场景7：如何避免 */
export const scene7Script: SceneScript = {
  sceneId: "scene7",
  sceneName: "如何避免成为乌合之众",
  items: [
    { order: 1, type: "标题", text: "如何避免成为「乌合之众」？" },
    { order: 2, type: "策略标题", text: "让子弹飞一会儿" },
    {
      order: 3,
      type: "策略内容",
      text: "遇到热点事件，延迟3小时再表态。情绪退去，智商才能占领高地。",
    },
    { order: 4, type: "策略标题", text: "警惕「绝对化」词汇" },
    {
      order: 5,
      type: "策略内容",
      text: "当你听到「肯定、绝对、全是、必须」这些词时，警铃要大作。",
    },
    { order: 6, type: "策略标题", text: "寻找反对声音" },
    {
      order: 7,
      type: "策略内容",
      text: "刻意去听不同的观点。兼听则明，偏信则暗。",
    },
  ],
};

/** 场景8：结尾 */
export const scene8Script: SceneScript = {
  sceneId: "scene8",
  sceneName: "结尾",
  items: [
    {
      order: 1,
      type: "名言",
      text: "人一到群体中，智商就严重降低，为了获得认同，个体愿意抛弃是非，用智商去换取那份让人备感安全的归属感。",
    },
    { order: 2, type: "出处", text: "勒庞《乌合之众》" },
    {
      order: 3,
      type: "结语",
      text: "在这个喧嚣的世界，保持孤独，是保持清醒的唯一方式。",
    },
  ],
};

/** 全部场景文案（按场景顺序） */
export const allSceneScripts: SceneScript[] = [
  scene1Script,
  scene2Script,
  scene3Script,
  scene4Script,
  scene5Script,
  scene6Script,
  scene7Script,
  scene8Script,
];

/**
 * 导出为纯文本列表，便于复制到 TTS 工具。
 * 每行格式：场景名 > 类型: 文案
 */
export function getAllScriptsAsPlainText(): string {
  const lines: string[] = [];
  for (const scene of allSceneScripts) {
    for (const item of scene.items) {
      const note = item.note ? ` [${item.note}]` : "";
      lines.push(`${scene.sceneName} > ${item.type}: ${item.text}${note}`);
    }
  }
  return lines.join("\n\n");
}

/**
 * 仅导出需朗读的正文（不含“表现”“原理”等小标题，可自定义）
 */
export function getNarrationOnly(): Array<{ scene: string; text: string }> {
  const result: Array<{ scene: string; text: string }> = [];
  for (const scene of allSceneScripts) {
    for (const item of scene.items) {
      if (["小标题", "标签", "画面文字"].includes(item.type) && item.note?.includes("不读")) continue;
      result.push({ scene: scene.sceneName, text: item.text });
    }
  }
  return result;
}
