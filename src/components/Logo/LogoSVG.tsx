// No react import needed for simple SVG

const LogoSVG = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 1000 164" fill="white" xmlns="http://www.w3.org/2000/svg">
    {/* Letter 1: E */}
    <g>
      <path d="M0 0 h164 v39 h-164 z M0 64 h164 v39 h-164 z M0 128 h164 v39 h-164 z" />
    </g>
    {/* Letter 2: M */}
    <g transform="translate(194, 0)">
      <path d="M0 0 L 39 0 L 106 85 L 174 0 L 213 0 L 213 164 L 174 164 L 174 61 L 106 146 L 39 61 L 39 164 L 0 164 Z" />
    </g>
    {/* Letter 3: T */}
    <g transform="translate(437, 0)">
      <path d="M0 0 L 164 0 L 164 39 L 102 39 L 102 164 L 63 164 L 63 39 L 0 39 Z" />
    </g>
    {/* Letter 4: I */}
    <g transform="translate(631, 0)">
      <path d="M0 0 L 82 164 L 0 164 Z" />
    </g>
    {/* Letter 5: V */}
    <g transform="translate(713, 0)">
      <path d="M0 0 L 42 0 L 101 119 L 158 0 L 200 0 L 123 164 L 78 164 Z" />
    </g>
    {/* Letter 6: I (mirrored) */}
    <g transform="translate(913, 0)">
      <path d="M82 0 L 0 164 L 82 164 Z" />
    </g>
  </svg>
);

export default LogoSVG;
