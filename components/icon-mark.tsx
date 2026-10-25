/** The logo mark (navy rounded square + teal wave) as plain SVG, shared by the favicon routes. */
export function IconMark({ size, radius = 30 }: { size: number; radius?: number }) {
  return (
    <div style={{ width: size, height: size, display: "flex" }}>
      <svg width={size} height={size} viewBox="0 0 120 120">
        <rect x={0} y={0} width={120} height={120} rx={radius} fill="#0B2545" />
        <path d="M18 70 C 33 44, 48 44, 60 64 S 87 86, 102 56" fill="none" stroke="#0E9384" strokeWidth={13} strokeLinecap="round" />
      </svg>
    </div>
  );
}
