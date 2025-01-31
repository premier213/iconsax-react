import * as React from "react";
import type { SVGProps } from "react";
const SvgTagRight = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.22 3.1c-1.75 0-2.81 1.92-1.89 3.41l2.77 4.43c.37.59.37 1.55 0 2.14l-2.77 4.43c-.93 1.48.14 3.41 1.89 3.41h10.45c.61 0 1.41-.4 1.78-.89l5.18-6.9c.46-.61.5-1.64.1-2.28l-4.18-6.68c-.36-.58-1.21-1.05-1.89-1.05h-7"
    />
  </svg>
);
export default SvgTagRight;
