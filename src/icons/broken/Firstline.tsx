import * as React from "react";
import type { SVGProps } from "react";
const SvgFirstline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14 4.5h7M14 9.5h7M3 14.5h18M9.5 8.43V5.57C9.5 4.45 9.05 4 7.92 4H5.07C3.95 4 3.5 4.45 3.5 5.57v2.85c0 1.13.45 1.58 1.57 1.58h2.85c1.13 0 1.58-.45 1.58-1.57M10.05 19.5H21M3 19.5h2.98"
    />
  </svg>
);
export default SvgFirstline;
