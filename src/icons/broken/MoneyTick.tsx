import * as React from "react";
import type { SVGProps } from "react";
const SvgMoneyTick = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.5 12a2.5 2.5 0 0 0-5 0 2.5 2.5 0 0 0 2.5 2.5M18.5 9.5v5M9 18c0 .75-.21 1.46-.58 2.06A3.97 3.97 0 0 1 5 22a3.97 3.97 0 0 1-3.42-1.94A3.9 3.9 0 0 1 1 18c0-2.21 1.79-4 4-4s4 1.79 4 4"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m3.44 18 .99.99 2.13-1.97"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M22 13.14V15c0 3.5-2 5-5 5H8.5M2 15.3V9c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5"
    />
  </svg>
);
export default SvgMoneyTick;
