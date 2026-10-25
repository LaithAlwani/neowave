/* Inline stroke icons used across the marketing page, copied from the artboards. */
export type IconName = "pin" | "whatsapp" | "people" | "browser" | "calendar" | "chat" | "face" | "mail" | "globe";

const PATHS: Record<IconName, React.ReactNode> = {
  pin: (
    <>
      <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z" />
      <circle cx={12} cy={9.5} r={2.5} />
    </>
  ),
  whatsapp: <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z" />,
  people: (
    <>
      <path d="M16 20v-1.5a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4V20" />
      <circle cx={9.5} cy={8} r={3.5} />
      <path d="M21 20v-1.5a4 4 0 0 0-3-3.9M16 4.2a3.5 3.5 0 0 1 0 7.6" />
    </>
  ),
  browser: (
    <>
      <rect x={3} y={4} width={18} height={16} rx={3} />
      <path d="M3 9h18" />
    </>
  ),
  calendar: (
    <>
      <rect x={3} y={5} width={18} height={16} rx={3} />
      <path d="M3 10h18M8 3v4M16 3v4" />
    </>
  ),
  chat: (
    <>
      <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z" />
      <path d="M8.5 12h.01M12 12h.01M15.5 12h.01" />
    </>
  ),
  face: (
    <>
      <circle cx={12} cy={12} r={9} />
      <path d="M8.5 14a4.5 4.5 0 0 0 7 0M9 9.5h.01M15 9.5h.01" />
    </>
  ),
  mail: (
    <>
      <rect x={3} y={5} width={18} height={14} rx={3} />
      <path d="M3.5 7l8.5 6 8.5-6" />
    </>
  ),
  globe: (
    <>
      <circle cx={12} cy={12} r={9} />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
    </>
  ),
};

export function Icon({ name, className = "n-ic" }: { name: IconName; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      {PATHS[name]}
    </svg>
  );
}
