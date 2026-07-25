import type { TemplateInfo } from "./api";
import { syncParamArrayToContentLength } from "./ParamForm";
import type { Item, Scene } from "./types";

export function reorderItemOrders(items: Item[]): Item[] {
  return items.map((it, i) => ({ ...it, order: i + 1 }));
}

export function itemHasContent(it: Item): boolean {
  return (it.content || []).length > 0;
}

export function sceneHasScriptContent(sc: Scene): boolean {
  return (sc.items || []).some(itemHasContent);
}

export function syncItemsParamArrays(
  items: Item[],
  tmap: Map<string, TemplateInfo>,
): Item[] {
  return items.map((it) => {
    const t = it.template ? tmap.get(it.template) : undefined;
    const key = t?.paramArraySyncContent;
    if (!key) return it;
    return {
      ...it,
      param: syncParamArrayToContentLength(
        it.param || {},
        key,
        it.content?.length || 0,
        (t?.paramSchema as Record<string, unknown>) || {},
      ),
    };
  });
}

export function moveContentAcrossItems(
  scenes: Scene[],
  sceneIdx: number,
  fromItemIdx: number,
  contentIdx: number,
  direction: -1 | 1,
): { scenes: Scene[]; itemIdx: number } | null {
  const scene = scenes[sceneIdx];
  if (!scene?.items) return null;
  const toItemIdx = fromItemIdx + direction;
  if (toItemIdx < 0 || toItemIdx >= scene.items.length) return null;

  const items = scene.items.map((it) => ({
    ...it,
    content: [...(it.content || [])],
    param: { ...(it.param || {}) },
  }));
  const fromItem = items[fromItemIdx];
  const toItem = items[toItemIdx];
  if (contentIdx < 0 || contentIdx >= (fromItem.content?.length || 0)) return null;

  const [piece] = fromItem.content!.splice(contentIdx, 1);
  if (direction === -1) {
    toItem.content!.push(piece);
  } else {
    toItem.content!.unshift(piece);
  }

  let selectItemIdx = toItemIdx;
  if (fromItem.content!.length === 0) {
    items.splice(fromItemIdx, 1);
    if (toItemIdx > fromItemIdx) selectItemIdx = toItemIdx - 1;
  }

  const nextScenes = [...scenes];
  nextScenes[sceneIdx] = { ...scene, items: reorderItemOrders(items) };
  return { scenes: nextScenes, itemIdx: selectItemIdx };
}

/** 在 contentIdx 处切开：该下标起（含）成为新 item */
export function splitItemAt(
  scenes: Scene[],
  sceneIdx: number,
  itemIdx: number,
  contentIdx: number,
): Scene[] | null {
  const scene = scenes[sceneIdx];
  const item = scene?.items?.[itemIdx];
  if (!item) return null;
  const content = item.content || [];
  if (contentIdx <= 0 || contentIdx >= content.length) return null;
  const items = [...(scene.items || [])];
  items[itemIdx] = { ...item, content: content.slice(0, contentIdx) };
  items.splice(itemIdx + 1, 0, {
    order: 0,
    template: "TEXT_FOCUS",
    narrativeType: "LOGIC",
    content: content.slice(contentIdx),
    param: {},
  });
  const nextScenes = [...scenes];
  nextScenes[sceneIdx] = { ...scene, items: reorderItemOrders(items) };
  return nextScenes;
}
