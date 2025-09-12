"use client";

export function Waves() {
  return (
    <div className="relative">
      <svg
        className="waves"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shapeRendering="auto"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 
            58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="parallax">
          <use href="#gentle-wave" x="48" y="0" fill="#DFD8FF" />
          <use href="#gentle-wave" x="48" y="3" fill="#ECE7FF" />
          <use href="#gentle-wave" x="48" y="5" fill="#ECE7FF" />
          <use href="#gentle-wave" x="48" y="7" fill="#8A69D5" />
        </g>
      </svg>
    </div>
  );
}
