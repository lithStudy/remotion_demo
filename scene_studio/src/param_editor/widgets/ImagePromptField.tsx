import { FieldLabel } from "../FieldLabel";
import { FieldHint } from "./FieldHint";

export function ImagePromptField({
  name,
  value,
  onChange,
  required,
  description,
}: {
  name: string;
  value: unknown;
  onChange: (v: string) => void;
  required?: boolean;
  description?: string;
}) {
  return (
    <div className="field">
      <FieldLabel name={name} required={required} />
      <textarea
        rows={3}
        value={value == null ? "" : String(value)}
        onChange={(e) => onChange(e.target.value)}
      />
      <FieldHint text={description || "图片提示词"} />
    </div>
  );
}
