import * as React from "react";
import type { SVGProps } from "react";
const SvgMainComponent = (props: SVGProps<SVGSVGElement>) => (
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
      d="m20.95 14.55-6.39 6.39c-1.4 1.4-3.7 1.4-5.11 0l-6.39-6.39c-1.4-1.4-1.4-3.7 0-5.11l6.39-6.39c1.4-1.4 3.7-1.4 5.11 0l6.39 6.39c1.4 1.41 1.4 3.71 0 5.11"
    />
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
    >
      <path d="m6.25 6.25 11.5 11.5M17.75 6.25l-11.5 11.5" />
    </g>
  </svg>
);
export default SvgMainComponent;
