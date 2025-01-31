import * as React from "react";
import type { SVGProps } from "react";
const SvgTimerStart = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 8v5M8.01 5.46c1.2-.61 2.55-.96 3.99-.96 4.83 0 8.75 3.92 8.75 8.75M12 22c-4.83 0-8.75-3.92-8.75-8.75 0-1.98.66-3.8 1.76-5.26"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M9 2h6M14.9 18.5v-1.16c0-1.43 1.02-2.02 2.26-1.3l1 .58 1 .58c1.24.72 1.24 1.89 0 2.61l-1 .58-1 .58c-1.24.72-2.26.13-2.26-1.3z"
    />
  </svg>
);
export default SvgTimerStart;
