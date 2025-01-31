import * as React from "react";
import type { SVGProps } from "react";
const SvgCoffee = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 13.55v-3.08a4.21 4.21 0 0 1 4.21-4.21h7.37a4.21 4.21 0 0 1 4.21 4.21v7.32A4.21 4.21 0 0 1 13.58 22H6.21C3.89 22 2 20.11 2 17.79M5.5 4V2.25M9.5 4V2.25M13.5 4V2.25M22 13.16c0 2.32-1.89 4.21-4.21 4.21V8.95A4.21 4.21 0 0 1 22 13.16M2 12h15.51"
    />
  </svg>
);
export default SvgCoffee;
