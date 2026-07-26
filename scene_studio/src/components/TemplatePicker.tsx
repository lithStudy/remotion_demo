import { useEffect, useId, useRef, useState } from "react";
import type { TemplateInfo } from "../api";

function previewSrc(name: string) {
  return `/template-previews/${name}.png`;
}

type Props = {
  templates: TemplateInfo[];
  value: string;
  onChange: (templateName: string) => void;
};

export function TemplatePicker(props: Props) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();
  const current =
    props.templates.find((t) => t.name === props.value) ?? null;
  const label = current?.label || props.value || "选择模板";

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="template-picker" ref={rootRef}>
      <button
        type="button"
        className="template-picker-trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((v) => !v)}
      >
        {props.value ? (
          <img
            className="template-picker-thumb"
            src={previewSrc(props.value)}
            alt=""
          />
        ) : (
          <span className="template-picker-thumb is-empty" />
        )}
        <span className="template-picker-label">{label}</span>
        <span className="template-picker-caret" aria-hidden>
          ▾
        </span>
      </button>

      {open ? (
        <div className="template-picker-panel" id={listId} role="listbox">
          {props.templates.map((t) => {
            const selected = t.name === props.value;
            return (
              <button
                key={t.name}
                type="button"
                role="option"
                aria-selected={selected}
                className={
                  selected
                    ? "template-picker-option is-selected"
                    : "template-picker-option"
                }
                onClick={() => {
                  props.onChange(t.name);
                  setOpen(false);
                }}
              >
                <img
                  className="template-picker-option-img"
                  src={previewSrc(t.name)}
                  alt=""
                />
                <span className="template-picker-option-label">
                  {t.label || t.name}
                </span>
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
