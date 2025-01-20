import * as React from "react";
import type { SVGProps } from "react";
const SvgFramer = (props: SVGProps<SVGSVGElement>) => (
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
      d="m5 2 14 14H5V9h14V2zM12 16v6l-7-6z"
    />
  </svg>
);
export default SvgFramer;
