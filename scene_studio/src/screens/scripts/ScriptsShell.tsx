import { useState } from "react";
import { api, type TemplateInfo } from "../../api";
import { AppShell } from "../../components/AppShell";
import { useIsNarrow } from "../../hooks/useIsNarrow";
import { ParamForm } from "../../ParamForm";
import {
  itemHasContent,
  moveContentAcrossItems,
  reorderItemOrders,
  sceneHasScriptContent,
  splitItemAt,
  syncItemsParamArrays,
} from "../../scriptHelpers";
import type { DrillLevel, Item, Scene } from "../../types";

type Props = {
  name: string;
  scripts: Record<string, unknown>;
  setScripts: (s: Record<string, unknown>) => void;
  selected: { sceneIdx: number; itemIdx: number | null };
  setSelected: (s: { sceneIdx: number; itemIdx: number | null }) => void;
  tmap: Map<string, TemplateInfo>;
  templates: TemplateInfo[];
  warnings: string[];
  setWarnings: (w: string[]) => void;
  onError: (e: string | null) => void;
  onBack: () => void;
  onOpenSync: () => Promise<void>;
  onRegenAllScripts: () => Promise<void>;
  error: string | null;
};

export function ScriptsShell(props: Props) {
  const narrow = useIsNarrow();
  const [drill, setDrill] = useState<DrillLevel>("scenes");
  const [regenBusy, setRegenBusy] = useState(false);
  const [regenAllBusy, setRegenAllBusy] = useState(false);
  const [editingKey, setEditingKey] = useState<string | null>(null);
  const [selectedKey, setSelectedKey] = useState<string | null>(null);
  const [moreOpen, setMoreOpen] = useState(false);

  function clearContentFocus() {
    setEditingKey(null);
    setSelectedKey(null);
  }

  const scenes = (props.scripts.scenes as Scene[]) || [];
  const sceneIdx = props.selected.sceneIdx;
  const scene = scenes[sceneIdx];
  const items = scene?.items || [];
  const paramItemIdx = props.selected.itemIdx;
  const paramItem =
    paramItemIdx == null ? null : items[paramItemIdx] || null;
  const tmpl = paramItem?.template
    ? props.tmap.get(paramItem.template)
    : undefined;

  function setScenes(nextScenes: Scene[]) {
    props.setScripts({ ...props.scripts, scenes: nextScenes });
  }

  function patchSceneItems(nextItems: Item[]) {
    if (!scene) return;
    const synced = syncItemsParamArrays(nextItems, props.tmap);
    const nextScenes = [...scenes];
    nextScenes[sceneIdx] = { ...scene, items: synced };
    setScenes(nextScenes);
  }

  function updateItemAt(itemIdx: number, patch: Partial<Item>) {
    const nextItems = [...items];
    nextItems[itemIdx] = { ...nextItems[itemIdx], ...patch };
    patchSceneItems(nextItems);
  }

  function selectScene(si: number) {
    props.setSelected({ sceneIdx: si, itemIdx: null });
    clearContentFocus();
    setDrill("script");
  }

  function openParam(itemIdx: number) {
    clearContentFocus();
    if (narrow) {
      props.setSelected({ sceneIdx, itemIdx });
      setDrill("param");
      return;
    }
    props.setSelected({
      sceneIdx,
      itemIdx: props.selected.itemIdx === itemIdx ? null : itemIdx,
    });
  }

  function backFromParam() {
    props.setSelected({ sceneIdx, itemIdx: null });
    setDrill("script");
  }

  function addScene() {
    const next = [
      ...scenes,
      {
        sceneId: `scene_${scenes.length + 1}`,
        sceneName: "新场景",
        items: [],
      },
    ];
    setScenes(next);
    selectScene(next.length - 1);
  }

  function addItem() {
    patchSceneItems([
      ...items,
      {
        order: items.length + 1,
        template: "TEXT_FOCUS",
        narrativeType: "LOGIC",
        content: [{ text: "" }],
        param: {},
      },
    ]);
  }

  async function onRegenParam() {
    if (paramItemIdx == null) return;
    const scriptsSnapshot = props.scripts;
    setRegenBusy(true);
    props.onError(null);
    try {
      const res = await api.regenParam(
        props.name,
        scriptsSnapshot,
        sceneIdx,
        paramItemIdx,
      );
      const nextScenes = [...((scriptsSnapshot.scenes as Scene[]) || [])];
      const sc = nextScenes[sceneIdx];
      if (!sc?.items?.[paramItemIdx]) return;
      const nextItems = [...sc.items];
      nextItems[paramItemIdx] = {
        ...nextItems[paramItemIdx],
        param: res.param,
      };
      nextScenes[sceneIdx] = { ...sc, items: nextItems };
      props.setScripts({ ...scriptsSnapshot, scenes: nextScenes });
    } catch (e) {
      props.onError(String(e));
    } finally {
      setRegenBusy(false);
    }
  }

  const showParamPage = narrow && drill === "param" && paramItem != null;
  const showListChrome = !narrow || drill === "scenes";
  const showSceneNav = showListChrome && (!narrow || drill === "scenes");
  const showScript = (!narrow || drill === "script") && !showParamPage;

  async function saveScripts() {
    props.onError(null);
    const res = await api.saveScripts(props.name, props.scripts);
    props.setScripts(res.scripts);
    props.setWarnings(res.warnings || []);
  }

  const shellBack = () => {
    if (narrow && drill === "param") {
      backFromParam();
      return;
    }
    if (narrow && drill === "script") {
      setDrill("scenes");
      return;
    }
    props.onBack();
  };

  const shellBackLabel =
    narrow && drill === "param"
      ? "口播表"
      : narrow && drill === "script"
        ? "场景"
        : "工程";

  const shellTitle =
    narrow && drill === "param"
      ? `参数 · #${paramItem?.order ?? ""}`
      : narrow && drill === "script"
        ? scene?.sceneName || scene?.sceneId || "口播表"
        : `脚本 · ${props.name}`;

  return (
    <AppShell
      title={shellTitle}
      subtitle={
        narrow && drill !== "scenes"
          ? props.name
          : tmpl?.label || paramItem?.template || undefined
      }
      onBack={shellBack}
      backLabel={shellBackLabel}
      error={props.error}
      actions={
        showListChrome || showParamPage ? (
          <>
            {showListChrome ? (
              <button
                type="button"
                className="ghost"
                onClick={() => setMoreOpen((v) => !v)}
              >
                更多
              </button>
            ) : null}
            <button
              type="button"
              className="primary"
              onClick={() =>
                saveScripts().catch((e) => props.onError(String(e)))
              }
            >
              保存
            </button>
          </>
        ) : (
          <button
            type="button"
            className="primary"
            onClick={() => saveScripts().catch((e) => props.onError(String(e)))}
          >
            保存
          </button>
        )
      }
    >
      {moreOpen && showListChrome ? (
        <div className="more-sheet">
          <button
            type="button"
            disabled={regenAllBusy}
            onClick={async () => {
              if (
                !window.confirm(
                  "将根据当前场景拆分草稿全量重新生成分镜脚本，覆盖现有脚本（含未保存编辑）。是否继续？",
                )
              ) {
                return;
              }
              setMoreOpen(false);
              setRegenAllBusy(true);
              props.onError(null);
              try {
                await props.onRegenAllScripts();
              } catch (e) {
                props.onError(String(e));
                setRegenAllBusy(false);
              }
            }}
          >
            {regenAllBusy ? "重新生成中…" : "全量重新生成脚本"}
          </button>
          <button
            type="button"
            onClick={() => {
              setMoreOpen(false);
              props.onOpenSync().catch((e) => props.onError(String(e)));
            }}
          >
            反推草稿…
          </button>
        </div>
      ) : null}

      {showListChrome ? (
        <section className="panel compact">
          <div className="field">
            <label className="field-label">topic</label>
            <input
              value={String(props.scripts.topic || "")}
              onChange={(e) =>
                props.setScripts({ ...props.scripts, topic: e.target.value })
              }
            />
          </div>
          {props.warnings.length ? (
            <div className="warn-box">
              <strong>warnings</strong>
              <pre className="logs">{props.warnings.join("\n")}</pre>
            </div>
          ) : null}
        </section>
      ) : null}

      <div className={`layout-editor ${narrow ? "is-narrow" : ""}`}>
        {showSceneNav ? (
          <div className="tree">
            {scenes.map((sc, si) => (
              <button
                key={sc.sceneId || si}
                type="button"
                className={`tree-btn ${sceneIdx === si && (!narrow || drill === "scenes") ? "active" : ""}`}
                onClick={() => selectScene(si)}
              >
                <span className="tree-btn-main">
                  {sc.sceneId} · {sc.sceneName || "场景"}
                </span>
                <span className="muted">{(sc.items || []).length}</span>
              </button>
            ))}
            <button type="button" className="tree-btn accent" onClick={addScene}>
              + 场景
            </button>
          </div>
        ) : null}

        {showScript && scene ? (
          <div className={narrow ? "editor-pane" : undefined}>
            <div className="scene-meta row wrap">
              <input
                style={{ maxWidth: 140 }}
                value={scene.sceneId || ""}
                onChange={(e) => {
                  const next = [...scenes];
                  next[sceneIdx] = { ...scene, sceneId: e.target.value };
                  setScenes(next);
                }}
                placeholder="sceneId"
              />
              <input
                className="grow"
                value={scene.sceneName || ""}
                onChange={(e) => {
                  const next = [...scenes];
                  next[sceneIdx] = { ...scene, sceneName: e.target.value };
                  setScenes(next);
                }}
                placeholder="sceneName"
              />
              <button
                type="button"
                className="danger"
                disabled={sceneHasScriptContent(scene)}
                title={
                  sceneHasScriptContent(scene)
                    ? "场景中有口播内容时不允许删除"
                    : undefined
                }
                onClick={() => {
                  if (sceneHasScriptContent(scene)) return;
                  const next = scenes.filter((_, i) => i !== sceneIdx);
                  setScenes(next);
                  props.setSelected({ sceneIdx: 0, itemIdx: null });
                  if (narrow) setDrill("scenes");
                }}
              >
                删除场景
              </button>
            </div>

            <div className="flat-script">
              {items.map((it, ii) => (
                <div className="item-group" key={ii}>
                  <div className="item-group-head">
                    <span className="item-order">#{it.order ?? ii + 1}</span>
                    <select
                      className="template-select"
                      value={it.template || ""}
                      onChange={(e) =>
                        updateItemAt(ii, {
                          template: e.target.value,
                          param: {},
                        })
                      }
                    >
                      {props.templates.map((t) => (
                        <option key={t.name} value={t.name}>
                          {t.label || t.name}
                        </option>
                      ))}
                    </select>
                    <button
                      type="button"
                      className="primary"
                      onClick={() => openParam(ii)}
                    >
                      {!narrow && paramItemIdx === ii ? "收起参数" : "编辑参数"}
                    </button>
                    <button
                      type="button"
                      className="danger"
                      disabled={itemHasContent(it)}
                      title={
                        itemHasContent(it)
                          ? "item 中有口播内容时不允许删除"
                          : undefined
                      }
                      onClick={() => {
                        if (itemHasContent(it)) return;
                        patchSceneItems(
                          reorderItemOrders(items.filter((_, i) => i !== ii)),
                        );
                        clearContentFocus();
                      }}
                    >
                      删 item
                    </button>
                  </div>

                  {!narrow && paramItemIdx === ii ? (
                    <div className="inline-param">
                      <div className="param-toolbar">
                        <button
                          type="button"
                          disabled={regenBusy}
                          onClick={() => onRegenParam()}
                        >
                          {regenBusy ? "重生中…" : "局部参数重生"}
                        </button>
                      </div>
                      <ParamForm
                        schema={
                          (props.tmap.get(it.template || "")?.paramSchema as
                            | Record<string, unknown>
                            | undefined) || {}
                        }
                        value={it.param || {}}
                        syncArrayKey={
                          props.tmap.get(it.template || "")
                            ?.paramArraySyncContent || null
                        }
                        contentLength={it.content?.length ?? 0}
                        onChange={(param) => updateItemAt(ii, { param })}
                      />
                    </div>
                  ) : null}

                  {(it.content || []).map((ci, ciIdx) => {
                    const key = `${ii}-${ciIdx}`;
                    const selected = selectedKey === key;
                    const editing = editingKey === key;
                    const showActions = selected || editing;
                    return (
                      <div key={key}>
                        <div
                          className={`content-row${showActions ? " is-selected" : ""}`}
                        >
                          {editing ? (
                            <textarea
                              autoFocus
                              rows={2}
                              value={ci.text || ""}
                              onChange={(e) => {
                                const nextContent = [...(it.content || [])];
                                nextContent[ciIdx] = {
                                  ...ci,
                                  text: e.target.value,
                                };
                                updateItemAt(ii, { content: nextContent });
                              }}
                              onBlur={() => setEditingKey(null)}
                            />
                          ) : (
                            <button
                              type="button"
                              className="content-text"
                              onClick={() => {
                                if (selected) {
                                  setEditingKey(key);
                                  return;
                                }
                                setSelectedKey(key);
                                setEditingKey(null);
                              }}
                            >
                              {ci.text?.trim() ? (
                                ci.text
                              ) : (
                                <span className="muted">
                                  {selected
                                    ? "（空，再点编辑）"
                                    : "（空，点按选中）"}
                                </span>
                              )}
                            </button>
                          )}
                          {showActions ? (
                            <div className="row content-actions">
                              {!editing ? (
                                <button
                                  type="button"
                                  className="primary"
                                  onClick={() => setEditingKey(key)}
                                >
                                  编辑
                                </button>
                              ) : null}
                              {ciIdx > 0 ? (
                                <button
                                  type="button"
                                  title="在此拆成新 item"
                                  onClick={() => {
                                    const next = splitItemAt(
                                      scenes,
                                      sceneIdx,
                                      ii,
                                      ciIdx,
                                    );
                                    if (!next) return;
                                    const synced = next.map((sc, sIdx) =>
                                      sIdx === sceneIdx
                                        ? {
                                            ...sc,
                                            items: syncItemsParamArrays(
                                              sc.items || [],
                                              props.tmap,
                                            ),
                                          }
                                        : sc,
                                    );
                                    setScenes(synced);
                                    clearContentFocus();
                                  }}
                                >
                                  拆分
                                </button>
                              ) : null}
                              <button
                                type="button"
                                disabled={ciIdx === 0 && ii === 0}
                                title={
                                  ciIdx === 0 && ii > 0
                                    ? "上移到上一 item"
                                    : undefined
                                }
                                onClick={() => {
                                  if (ciIdx > 0) {
                                    const next = [...(it.content || [])];
                                    const tmp = next[ciIdx - 1];
                                    next[ciIdx - 1] = next[ciIdx];
                                    next[ciIdx] = tmp;
                                    updateItemAt(ii, { content: next });
                                    setSelectedKey(`${ii}-${ciIdx - 1}`);
                                    setEditingKey(null);
                                    return;
                                  }
                                  if (ii === 0) return;
                                  const moved = moveContentAcrossItems(
                                    scenes,
                                    sceneIdx,
                                    ii,
                                    ciIdx,
                                    -1,
                                  );
                                  if (!moved) return;
                                  const synced = moved.scenes.map((sc, sIdx) =>
                                    sIdx === sceneIdx
                                      ? {
                                          ...sc,
                                          items: syncItemsParamArrays(
                                            sc.items || [],
                                            props.tmap,
                                          ),
                                        }
                                      : sc,
                                  );
                                  setScenes(synced);
                                  const dest = items[ii - 1];
                                  const destLen = dest?.content?.length || 0;
                                  setSelectedKey(
                                    `${moved.itemIdx}-${destLen}`,
                                  );
                                  setEditingKey(null);
                                }}
                              >
                                ↑
                              </button>
                              <button
                                type="button"
                                disabled={
                                  ciIdx >= (it.content?.length || 0) - 1 &&
                                  ii >= items.length - 1
                                }
                                title={
                                  ciIdx >= (it.content?.length || 0) - 1 &&
                                  ii < items.length - 1
                                    ? "下移到下一 item"
                                    : undefined
                                }
                                onClick={() => {
                                  const last =
                                    ciIdx >= (it.content?.length || 0) - 1;
                                  if (!last) {
                                    const next = [...(it.content || [])];
                                    const tmp = next[ciIdx + 1];
                                    next[ciIdx + 1] = next[ciIdx];
                                    next[ciIdx] = tmp;
                                    updateItemAt(ii, { content: next });
                                    setSelectedKey(`${ii}-${ciIdx + 1}`);
                                    setEditingKey(null);
                                    return;
                                  }
                                  if (ii >= items.length - 1) return;
                                  const moved = moveContentAcrossItems(
                                    scenes,
                                    sceneIdx,
                                    ii,
                                    ciIdx,
                                    1,
                                  );
                                  if (!moved) return;
                                  const synced = moved.scenes.map((sc, sIdx) =>
                                    sIdx === sceneIdx
                                      ? {
                                          ...sc,
                                          items: syncItemsParamArrays(
                                            sc.items || [],
                                            props.tmap,
                                          ),
                                        }
                                      : sc,
                                  );
                                  setScenes(synced);
                                  setSelectedKey(`${moved.itemIdx}-0`);
                                  setEditingKey(null);
                                }}
                              >
                                ↓
                              </button>
                              <button
                                type="button"
                                className="danger"
                                onClick={() => {
                                  const next = (it.content || []).filter(
                                    (_, i) => i !== ciIdx,
                                  );
                                  if (next.length === 0) {
                                    patchSceneItems(
                                      reorderItemOrders(
                                        items.filter((_, i) => i !== ii),
                                      ),
                                    );
                                  } else {
                                    updateItemAt(ii, { content: next });
                                  }
                                  clearContentFocus();
                                }}
                              >
                                删
                              </button>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    );
                  })}

                  <button
                    type="button"
                    className="add-content-btn"
                    onClick={() =>
                      updateItemAt(ii, {
                        content: [...(it.content || []), { text: "" }],
                      })
                    }
                  >
                    + 口播句
                  </button>
                </div>
              ))}

              <button type="button" className="btn-block" onClick={addItem}>
                + item
              </button>
            </div>
          </div>
        ) : null}

        {showScript && !scene ? (
          <div className={narrow ? "editor-pane" : undefined}>
            <p className="muted empty-hint">请选择场景</p>
          </div>
        ) : null}

        {showParamPage && paramItem && paramItemIdx != null ? (
          <div className="editor-pane">
            <p className="content-summary muted">
              {(() => {
                const summary = (paramItem.content || [])
                  .map((c) => c.text || "")
                  .join(" ");
                if (!summary.trim()) return "（无口播）";
                return summary.length > 120
                  ? `${summary.slice(0, 120)}…`
                  : summary;
              })()}
            </p>
            <div className="param-toolbar">
              <button
                type="button"
                disabled={regenBusy}
                onClick={() => onRegenParam()}
              >
                {regenBusy ? "重生中…" : "局部参数重生"}
              </button>
            </div>
            <ParamForm
              schema={(tmpl?.paramSchema as Record<string, unknown>) || {}}
              value={paramItem.param || {}}
              syncArrayKey={tmpl?.paramArraySyncContent || null}
              contentLength={paramItem.content?.length ?? 0}
              onChange={(param) => updateItemAt(paramItemIdx, { param })}
            />
          </div>
        ) : null}
      </div>
    </AppShell>
  );
}
