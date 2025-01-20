import * as React from "react";
import type { SVGProps } from "react";
const SvgGlobalSearch = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10"
    />
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
    >
      <path d="M8 3h1a28.42 28.42 0 0 0 0 18H8M15 3c.97 2.92 1.46 5.96 1.46 9" />
      <path d="M3 16v-1c2.92.97 5.96 1.46 9 1.46M3 9a28.42 28.42 0 0 1 18 0" />
    </g>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.2 21.4a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4M22 22l-1-1"
    />
  </svg>
);
export default SvgGlobalSearch;
