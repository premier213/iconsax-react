import * as React from "react";
import type { SVGProps } from "react";
const SvgPersonalcard = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17 21H7c-4 0-5-1-5-5V8c0-4 1-5 5-5h10c4 0 5 1 5 5v8c0 4-1 5-5 5"
    />
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
    >
      <path d="M14 8h5M15 12h4M17 16h2M8.5 11.29a1.81 1.81 0 1 0 0-3.62 1.81 1.81 0 0 0 0 3.62M12 16.33a3.02 3.02 0 0 0-2.74-2.72 7.7 7.7 0 0 0-1.52 0A3.03 3.03 0 0 0 5 16.33" />
    </g>
  </svg>
);
export default SvgPersonalcard;
