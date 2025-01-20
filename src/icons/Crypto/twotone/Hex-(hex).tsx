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
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M17 3.34H7L2 12l5 8.66h10L22 12z"
    />
    <path
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M10.87 14H7.03L5.1 17.33l1.93 3.33h3.84l1.93-3.33z"
      opacity={0.4}
    />
    <path
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M14.34 8H7.03l-3.65 6.33 3.65 6.33h7.31L18 14.33z"
      opacity={0.4}
    />
  </svg>
);
export default SvgHexHex;
