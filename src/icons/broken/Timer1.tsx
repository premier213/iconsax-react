import * as React from "react";
import type { SVGProps } from "react";
const SvgTimer1 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 8v5"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M9 2h6"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5 8a8.7 8.7 0 0 0-1.75 5.25C3.25 18.08 7.17 22 12 22s8.75-3.92 8.75-8.75S16.83 4.5 12 4.5c-1.26 0-2.45.26-3.53.74"
    />
  </svg>
);
export default SvgTimer1;
