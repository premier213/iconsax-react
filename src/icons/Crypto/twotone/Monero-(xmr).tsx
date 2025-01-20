import * as React from "react";
import type { SVGProps } from "react";
const SvgMoneroXmr = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21.54 15c-1.28 4.06-5.07 7-9.54 7-4.46 0-8.24-2.92-9.53-6.96L7 15V9l5 6 5-6v6z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M22 12c0 1.05-.16 2.05-.46 3H17V9l-5 6-5-6v6l-4.53.04C2.17 14.08 2 13.06 2 12 2 6.48 6.48 2 12 2s10 4.48 10 10"
      opacity={0.4}
    />
  </svg>
);
export default SvgMoneroXmr;
