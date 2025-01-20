import * as React from "react";
import type { SVGProps } from "react";
const SvgBlend = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21.97 12c0 3.31-2.69 6-6 6a5.93 5.93 0 0 1-4-1.54c1.23-1.09 2-2.69 2-4.46s-.77-3.37-2-4.46a5.93 5.93 0 0 1 4-1.54c3.31 0 6 2.69 6 6"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.44 15.92A5.97 5.97 0 0 1 1.97 12c0-3.31 2.69-6 6-6 1.54 0 2.94.58 4 1.54 1.23 1.09 2 2.69 2 4.46s-.77 3.37-2 4.46a5.93 5.93 0 0 1-4 1.54"
    />
  </svg>
);
export default SvgBlend;
