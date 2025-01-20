import * as React from "react";
import type { SVGProps } from "react";
const SvgPolkadotDot = (props: SVGProps<SVGSVGElement>) => (
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
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M19.5 9.5c0 4.14-3.36 7.5-7.5 7.5 0 0-2.69 0-3.66 2.2-.21.49-.34 1.08-.34 1.8l2-14"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M5.37 13a7.5 7.5 0 0 1-.87-3.5 7.503 7.503 0 0 1 13.52-4.48"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 21"
    />
  </svg>
);
export default SvgPolkadotDot;
