export type ContentPiece = {
  text?: string;
  startFrame?: number;
  durationFrames?: number;
};

export type Item = {
  order?: number;
  template?: string;
  narrativeType?: string;
  reasoning?: string;
  content?: ContentPiece[];
  param?: Record<string, unknown>;
  totalDurationFrames?: number;
  groupKey?: string;
};

export type Scene = {
  sceneId?: string;
  sceneName?: string;
  text?: string;
  items?: Item[];
};

/** scenes → 场景扁平文案表 → param 页 */
export type DrillLevel = "scenes" | "script" | "param";

export type Screen =
  | "list"
  | "project"
  | "job"
  | "draft"
  | "scripts";
