import * as React from "react";
import type { SVGProps } from "react";
const SvgToggleOff = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.3 16h2.4c2 0 2.8-.8 2.8-2.8v-2.4c0-2-.8-2.8-2.8-2.8H8.3c-2 0-2.8.8-2.8 2.8v2.4c0 2 .8 2.8 2.8 2.8"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17 20H7c-4 0-5-1-5-5V9c0-4 1-5 5-5h10c4 0 5 1 5 5v6c0 4-1 5-5 5"
    />
  </svg>
);
export default SvgToggleOff;
