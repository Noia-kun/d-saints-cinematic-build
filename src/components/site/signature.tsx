export const SIGNATURE = "Connecting lives, one moment at a time. . .";

export function Signature({ className = "" }: { className?: string }) {
  return <span className={`signature-line ${className}`}>{SIGNATURE}</span>;
}
