import * as React from "react";
import type { SVGProps } from "react";
const SvgHexHex = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.51 7.65 2 12l5 8.66h10L22 12l-5-8.66H7l-.37.64"
    />
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M10.87 14H7.03L5.1 17.33l1.93 3.33h3.84l1.93-3.33z"
    />
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M14.34 8H7.03l-3.65 6.33 3.65 6.33h7.31L18 14.33z"
    />
  </svg>
);
export default SvgHexHex;
