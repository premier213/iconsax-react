import * as React from "react";
import type { SVGProps } from "react";
const SvgSpotify = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M6.6 9.3c3.6-1.4 7.7-.9 10.9 1.3M7.9 12.4c2.7-1 5.7-.7 8 1M8.8 15.4c2-.8 4.2-.5 6 .7"
    />
  </svg>
);
export default SvgSpotify;
