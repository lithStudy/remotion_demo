import { FieldLabel } from "../FieldLabel";
import { FieldHint } from "./FieldHint";

export function ContentIndexField({
  name,
  value,
  onChange,
  required,
  description,
  contentLength,
}: {
  name: string;
  value: unknown;
  onChange: (v: number | null) => void;
  required?: boolean;
  description?: string;
  contentLength?: number;
}) {
  const len = contentLength ?? 0;
  const options = Array.from({ length: len }, (_, i) => i);
  const current = value == null || value === "" ? "" : String(value);

  return (
    <div className="field">
      <FieldLabel name={name} required={required} />
      {len > 0 ? (
        <select
          value={current}
          onChange={(e) =>
            onChange(e.target.value === "" ? null : Number(e.target.value))
          }
        >
          <option value="">—</option>
          {options.map((i) => (
            <option key={i} value={i}>
              content[{i}]
            </option>
          ))}
        </select>
      ) : (
        <input
          type="number"
          step={1}
          value={current}
          onChange={(e) =>
            onChange(e.target.value === "" ? null : Number(e.target.value))
          }
        />
      )}
      <FieldHint
        text={
          description ||
          (len > 0
            ? `content 下标（0-based），当前共 ${len} 条`
            : "content 下标（0-based）")
        }
      />
    </div>
  );
}
