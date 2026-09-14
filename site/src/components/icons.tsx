/* Phosphor icons (MIT), inlined so the page doesn't ship the whole icon library for three glyphs. */

type IconProps = { size?: number | string; strokeWidth?: number; className?: string };

function Svg({ size = '1em', strokeWidth = 16, className, children }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 256 256"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  );
}

export function RobotIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="32" y="56" width="192" height="160" rx="24" />
      <rect x="72" y="144" width="112" height="40" rx="20" />
      <line x1="148" y1="144" x2="148" y2="184" />
      <line x1="108" y1="144" x2="108" y2="184" />
      <line x1="128" y1="56" x2="128" y2="16" />
      <circle cx="84" cy="108" r="12" fill="currentColor" stroke="none" />
      <circle cx="172" cy="108" r="12" fill="currentColor" stroke="none" />
    </Svg>
  );
}

export function ArrowSquareOutIcon(props: IconProps) {
  return (
    <Svg strokeWidth={24} {...props}>
      <polyline points="216 100 216 40 156 40" />
      <line x1="144" y1="112" x2="216" y2="40" />
      <path d="M184,144v64a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8h64" />
    </Svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <Svg strokeWidth={24} {...props}>
      <polyline points="216 72 104 184 48 128" />
    </Svg>
  );
}
