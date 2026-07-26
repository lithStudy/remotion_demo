export function BooleanField({
  name,
  value,
  onChange,
  required,
}: {
  name: string;
  value: unknown;
  onChange: (v: boolean) => void;
  required?: boolean;
}) {
  return (
    <div className="field">
      <label className="check">
        <input
          type="checkbox"
          checked={Boolean(value)}
          onChange={(e) => onChange(e.target.checked)}
        />
        {name}
        {required ? <span className="req">*</span> : null}
      </label>
    </div>
  );
}
