import * as React from "react";
import type { SVGProps } from "react";
const SvgMaximize2 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 9V6.5C2 4.01 4.01 2 6.5 2H9M15 2h2.5C19.99 2 22 4.01 22 6.5V9M22 16v1.5c0 2.49-2.01 4.5-4.5 4.5H16M9 22H6.5C4.01 22 2 19.99 2 17.5V15"
    />
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.54}
    >
      <path d="M18 12v-2M6 12h12zm0 0v-2zm0 0v2zm12 0v2zM12 6h2m-2 12V6zm0 0h2zm0 0h-2zm0-12h-2z" />
    </g>
  </svg>
);
export default SvgMaximize2;
