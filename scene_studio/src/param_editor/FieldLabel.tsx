export function FieldLabel({
  name,
  required,
}: {
  name: string;
  required?: boolean;
}) {
  return (
    <label className="field-label">
      {name}
      {required ? <span className="req">*</span> : null}
    </label>
  );
}
