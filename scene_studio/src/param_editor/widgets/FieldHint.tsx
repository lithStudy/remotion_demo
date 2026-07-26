export function FieldHint({ text }: { text?: string }) {
  if (!text) return null;
  return <p className="hint">{text}</p>;
}
