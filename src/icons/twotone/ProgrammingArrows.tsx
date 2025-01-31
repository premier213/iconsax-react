import * as React from "react";
import type { SVGProps } from "react";
const SvgProgrammingArrows = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
    />
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
    >
      <path d="M19 16V6.5c0-1.1-.9-2-2-2h-5.5" />
      <path d="m14 2-3 2.5L14 7M5 8v9.5c0 1.1.9 2 2 2h5.5" />
      <path d="m10 22 3-2.5-3-2.5" />
    </g>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
    />
  </svg>
);
export default SvgProgrammingArrows;
