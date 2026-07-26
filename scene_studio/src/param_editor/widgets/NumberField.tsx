import { FieldLabel } from "../FieldLabel";
import { FieldHint } from "./FieldHint";

export function NumberField({
  name,
  value,
  onChange,
  required,
  description,
  integer,
}: {
  name: string;
  value: unknown;
  onChange: (v: number | null) => void;
  required?: boolean;
  description?: string;
  integer?: boolean;
}) {
  return (
    <div className="field">
      <FieldLabel name={name} required={required} />
      <input
        type="number"
        step={integer ? 1 : "any"}
        value={value == null || value === "" ? "" : Number(value)}
        onChange={(e) =>
          onChange(e.target.value === "" ? null : Number(e.target.value))
        }
      />
      <FieldHint text={description} />
    </div>
  );
}
