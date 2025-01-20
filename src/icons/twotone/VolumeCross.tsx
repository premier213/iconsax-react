import * as React from "react";
import type { SVGProps } from "react";
const SvgVolumeCross = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 22 18"
  >
    <path
      stroke="currentColor"
      strokeWidth={1.5}
      d="M1 7v4q0 3 3 3h1.43c.37 0 .74.11 1.06.3l2.92 1.83c2.52 1.58 4.59.43 4.59-2.54V4.41c0-2.98-2.07-4.12-4.59-2.54L6.49 3.7c-.32.19-.69.3-1.06.3H4Q1 4 1 7Z"
    />
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      opacity={0.4}
    >
      <path d="m21 10.961-3.96-3.96M20.96 7.041 17 11.001" />
    </g>
  </svg>
);
export default SvgVolumeCross;
