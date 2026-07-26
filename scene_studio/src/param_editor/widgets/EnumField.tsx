import { FieldLabel } from "../FieldLabel";
import { FieldHint } from "./FieldHint";

export function EnumField({
  name,
  value,
  onChange,
  required,
  description,
  options,
}: {
  name: string;
  value: unknown;
  onChange: (v: unknown) => void;
  required?: boolean;
  description?: string;
  options: unknown[];
}) {
  return (
    <div className="field">
      <FieldLabel name={name} required={required} />
      <select
        value={value == null ? "" : String(value)}
        onChange={(e) => onChange(e.target.value === "" ? null : e.target.value)}
      >
        <option value="">—</option>
        {options.map((opt) => (
          <option key={String(opt)} value={String(opt)}>
            {String(opt)}
          </option>
        ))}
      </select>
      <FieldHint text={description} />
    </div>
  );
}
