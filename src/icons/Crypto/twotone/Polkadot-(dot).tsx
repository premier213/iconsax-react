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
      d="M5.37 13a7.5 7.5 0 0 1-.87-3.5C4.5 5.36 7.86 2 12 2s7.5 3.36 7.5 7.5S16.14 17 12 17c0 0-2.69 0-3.66 2.2-.21.49-.34 1.08-.34 1.8l2-14"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 21"
      opacity={0.4}
    />
  </svg>
);
export default SvgPolkadotDot;
