export function AwsLogo({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 90 54" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Amazon Web Services">
      <text
        x="0"
        y="30"
        fontFamily="var(--font-inter), Inter, system-ui, sans-serif"
        fontSize="34"
        fontWeight="700"
        letterSpacing="-1"
        fill="currentColor"
      >
        aws
      </text>
      <path
        d="M4 44c22 12 55 12 78 1"
        stroke="#FF9900"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      <path d="M78 40l7 5-9 3z" fill="#FF9900" />
    </svg>
  );
}
