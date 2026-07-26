import { FieldLabel } from "../FieldLabel";
import { FieldHint } from "./FieldHint";

export function StringField({
  name,
  value,
  onChange,
  required,
  description,
  multiline,
}: {
  name: string;
  value: unknown;
  onChange: (v: string) => void;
  required?: boolean;
  description?: string;
  multiline?: boolean;
}) {
  const text = value == null ? "" : String(value);
  return (
    <div className="field">
      <FieldLabel name={name} required={required} />
      {multiline ? (
        <textarea rows={3} value={text} onChange={(e) => onChange(e.target.value)} />
      ) : (
        <input type="text" value={text} onChange={(e) => onChange(e.target.value)} />
      )}
      <FieldHint text={description} />
    </div>
  );
}
