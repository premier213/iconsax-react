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
      d="M5.4 13c-.6-1-.9-2.2-.9-3.5C4.5 5.4 7.9 2 12 2s7.5 3.4 7.5 7.5S16.1 17 12 17c0 0-2.7 0-3.7 2.2Q8 19.95 8 21l2-14"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14 21"
    />
  </svg>
);
export default SvgPolkadotDot;
