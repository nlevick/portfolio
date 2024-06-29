export default function Waves() {
  return (
    <svg
      className="w-full h-1/6 max-h-40"
      xmlns="http://www.w3.org/2000/svg"
      xlinkHref="http://www.w3.org/1999/xlinkHref"
      viewBox="0 24 150 28"
      preserveAspectRatio="none"
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
          // fill="rgba(255,255,255,0.7)"
          fill="#bbf7d0"
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
          fill="#171717"
        />
      </g>
    </svg>
  );
}
