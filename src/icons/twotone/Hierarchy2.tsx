import * as React from "react";
import type { SVGProps } from "react";
const SvgHierarchy2 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.25 22a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5M5 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6M19 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
    />
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
    >
      <path d="M5 15V8M5.129 15a4.06 4.06 0 0 1 3.94-3.04l3.43.01c2.62.01 4.85-1.67 5.67-4.01" />
    </g>
  </svg>
);
export default SvgHierarchy2;
