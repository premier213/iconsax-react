import * as React from "react";
import type { SVGProps } from "react";
const SvgQuoteDownSquare = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M7 12.16h2.68c.71 0 1.19.54 1.19 1.19v1.49c0 .65-.48 1.19-1.19 1.19H8.19A1.2 1.2 0 0 1 7 14.84zM7 12.16c0-2.79.52-3.26 2.09-4.19M13.14 12.16h2.68c.71 0 1.19.54 1.19 1.19v1.49c0 .65-.48 1.19-1.19 1.19h-1.49a1.2 1.2 0 0 1-1.19-1.19zM13.14 12.16c0-2.79.52-3.26 2.09-4.19" />
    </g>
  </svg>
);
export default SvgQuoteDownSquare;
