import * as React from "react";
import type { SVGProps } from "react";
const SvgPlayCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.91 14.12c1.8-1.04 1.8-2.74 0-3.78l-1.45-.84-1.45-.84c-1.8-1.04-3.27-.19-3.27 1.89v3.34c0 1.66.94 2.54 2.24 2.29"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85"
    />
  </svg>
);
export default SvgPlayCircle;
