import * as React from "react";
import type { SVGProps } from "react";
const SvgScissor = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7"
    />
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
    >
      <path d="M8.42 10.9a1.92 1.92 0 1 0 0-3.84 1.92 1.92 0 0 0 0 3.84M8.42 16.94a1.92 1.92 0 1 0 0-3.84 1.92 1.92 0 0 0 0 3.84M17.5 8.7l-7.34 5.49M17.5 15.28l-7.34-5.49" />
    </g>
  </svg>
);
export default SvgScissor;
