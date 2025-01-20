import * as React from "react";
import type { SVGProps } from "react";
const SvgPhotoshop = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15 22H9c-5 0-7-2-7-7V9c0-5 2-7 7-7h6c5 0 7 2 7 7v6c0 5-2 7-7 7"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M7.5 16V8h2c1.1 0 2 .9 2 2s-.9 2-2 2h-2M16.5 11h-1.3c-.7 0-1.2.6-1.2 1.2 0 .7.6 1.2 1.2 1.2.7 0 1.2.6 1.2 1.2 0 .7-.6 1.2-1.2 1.2H14"
    />
  </svg>
);
export default SvgPhotoshop;
