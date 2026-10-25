export function Logo({ label, size = 40, href = "#top" }: { label: string; size?: number; href?: string }) {
  return (
    <a className="n-logo" href={href} aria-label={label}>
      <svg width={size} height={size} viewBox="0 0 120 120" aria-hidden="true">
        <rect x={4} y={4} width={112} height={112} rx={30} fill="#0B2545" />
        <path d="M20 70 C 34 46, 48 46, 60 64 S 86 84, 100 56" fill="none" stroke="#0E9384" strokeWidth={11} strokeLinecap="round" />
      </svg>
      <span className="n-word">
        <b>neo</b>
        <i>wave</i>
      </span>
    </a>
  );
}
