import * as React from "react";
import type { SVGProps } from "react";
const SvgStacksStx = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
  >
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      opacity={0.4}
    >
      <path d="M7.5 10.5h9M9 6.5l2.82 4M14.82 6.5l-2.82 4M7.5 13.5h9M9 17.5l2.82-4M14.82 17.5l-2.82-4" />
    </g>
    <path
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
    />
  </svg>
);
export default SvgStacksStx;
