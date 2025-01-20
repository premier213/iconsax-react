import * as React from "react";
import type { SVGProps } from "react";
const SvgSun = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15.5 12a3.5 3.5 0 0 1-3.5 3.5 3.5 3.5 0 0 1 0-7 3.5 3.5 0 0 1 3.5 3.5"
    />
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
    >
      <path d="M12 8.5V3M12 21v-5.5M10 3h4M10 21h4M8.97 10.25 4.21 7.5M19.791 16.5l-4.76-2.75M3.21 9.23l2-3.46M18.791 18.23l2-3.46M19.791 7.5l-4.76 2.75M8.97 13.75 4.21 16.5M20.791 9.23l-2-3.46M5.21 18.23l-2-3.46" />
    </g>
  </svg>
);
export default SvgSun;
