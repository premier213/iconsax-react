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
      d="M12 8V6.5M12 4V3M12 21v-5.5M10 3h4M10 21h4M8.97 10.25 4.21 7.5M19.79 16.5l-4.76-2.75M3.21 9.23l2-3.46M18.79 18.23l2-3.46M8.97 13.75A3.47 3.47 0 0 1 8.5 12 3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 0 7"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m19.79 7.5-2.74 1.58-2.02 1.17M8.97 13.75 4.21 16.5M20.79 9.23l-2-3.46M5.21 18.23l-2-3.46"
    />
  </svg>
);
export default SvgSun;
