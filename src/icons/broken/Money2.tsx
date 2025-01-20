import * as React from "react";
import type { SVGProps } from "react";
const SvgMoney2 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 12.53v2.97c0 3.5 2 5 5 5h10c3 0 5-1.5 5-5v-7c0-3.5-2-5-5-5H7c-3 0-5 1.5-5 5V9h1c3 0 4-1 4-4V4"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M15 12c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3M22 9h-1c-3 0-4-1-4-4V4M2 15h1c3 0 4 1 4 4v1M22 15h-1c-3 0-4 1-4 4v1"
    />
  </svg>
);
export default SvgMoney2;
