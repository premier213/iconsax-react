import * as React from "react";
import type { SVGProps } from "react";
const SvgBuildings = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 11q0-3 3-3h5v11q0 3 3 3H5q-3 0-3-3v-4M10.11 4c-.08.3-.11.63-.11 1v3H5V6c0-1.1.9-2 2-2zM14 8v5M18 8v5M17 17h-2c-.55 0-1 .45-1 1v4h4v-4c0-.55-.45-1-1-1M6 13v4"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M10 19V5q0-3 3-3h6q3 0 3 3v14q0 3-3 3h-6q-3 0-3-3"
    />
  </svg>
);
export default SvgBuildings;
