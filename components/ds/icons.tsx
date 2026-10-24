/* Icons used inside the design-system components, matching bundle.js */
type IconProps = { size?: number };

function Frame({ size = 24, children }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <Frame {...props}>
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </Frame>
  );
}

export function AlertIcon(props: IconProps) {
  return (
    <Frame {...props}>
      <circle cx={12} cy={12} r={9} />
      <path d="M12 7.5v5.5M12 16.5v.01" />
    </Frame>
  );
}
