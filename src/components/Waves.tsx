import colors from 'tailwindcss/colors';

export default function Waves() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xlinkHref="http://www.w3.org/1999/xlinkHref"
      viewBox="0 24 150 28"
      preserveAspectRatio="none"
      width="100%"
      height="100%"
      shapeRendering="auto"
    >
      <defs>
        <path
          id="gentle-wave"
          d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
        />
      </defs>
      <g>
        <use
          className="animate-wave"
          xlinkHref="#gentle-wave"
          x="48"
          y="0"
          fill={colors.teal[500]}
          // fill={colors.cyan[400]}
        />

        <use
          className="animate-wave"
          xlinkHref="#gentle-wave"
          x="48"
          y="3"
          fill="rgba(255,255,255,0.5)"
        />
        <use
          className="animate-wave"
          xlinkHref="#gentle-wave"
          x="48"
          y="5"
          fill="rgba(255,255,255,0.3)"
        />
        <use
          className="animate-wave"
          xlinkHref="#gentle-wave"
          x="48"
          y="7"
          // fill={colors.neutral[900]}
          fill={colors.slate[900]}
        />
      </g>
    </svg>
  );
}
