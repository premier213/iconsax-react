import * as React from "react";
import type { SVGProps } from "react";
const SvgRefreshCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
    />
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
    >
      <path d="M8.01 14.51c.18.3.4.58.65.83a4.73 4.73 0 0 0 6.68 0 4.7 4.7 0 0 0 1.32-2.67M7.34 11.33c.14-.98.57-1.92 1.32-2.67a4.73 4.73 0 0 1 6.68 0c.26.26.47.54.65.83" />
      <path d="M7.82 17.18v-2.67h2.67M16.18 6.82v2.67h-2.67" />
    </g>
  </svg>
);
export default SvgRefreshCircle;
