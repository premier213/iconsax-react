import * as React from "react";
import type { SVGProps } from "react";
const SvgNemXem = (props: SVGProps<SVGSVGElement>) => (
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
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M2 5s10-6 20 0c0 0 0 11-10 17 0 0-10-5-10-17Z"
    />
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      opacity={0.4}
    >
      <path d="M2.1 7.07C5.21 17.15 12 10 12 10c-1-6 4.07-7.06 4.07-7.06l.59-.11M16.35 18.51S19 13 12 10" />
    </g>
  </svg>
);
export default SvgNemXem;
