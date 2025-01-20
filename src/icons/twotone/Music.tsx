import * as React from "react";
import type { SVGProps } from "react";
const SvgMusic = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.28 22a3.12 3.12 0 1 0 0-6.24 3.12 3.12 0 0 0 0 6.24M17.72 19.92a3.12 3.12 0 1 0 0-6.24 3.12 3.12 0 0 0 0 6.24"
    />
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
    >
      <path d="M20.84 16.8V4.6c0-2.6-1.63-2.96-3.28-2.51l-6.24 1.7C10.18 4.1 9.4 5 9.4 6.3v12.57M9.4 9.52 20.84 6.4" />
    </g>
  </svg>
);
export default SvgMusic;
