import * as React from "react";
import type { SVGProps } from "react";
const SvgBuliding = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 22h20M17 2H7C4 2 3 3.79 3 6v16h18V6c0-2.21-1-4-4-4M7 16.5h3M14 16.5h3M7 12h3M14 12h3M7 7.5h3M14 7.5h3"
    />
  </svg>
);
export default SvgBuliding;
