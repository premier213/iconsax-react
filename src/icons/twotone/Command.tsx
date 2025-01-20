import * as React from "react";
import type { SVGProps } from "react";
const SvgCommand = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 8H8v8h8zM5 22c1.65 0 3-1.35 3-3v-3H5c-1.65 0-3 1.35-3 3s1.35 3 3 3"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5 8h3V5c0-1.65-1.35-3-3-3S2 3.35 2 5s1.35 3 3 3"
      opacity={0.4}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16 8h3c1.65 0 3-1.35 3-3s-1.35-3-3-3-3 1.35-3 3z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19 22c1.65 0 3-1.35 3-3s-1.35-3-3-3h-3v3c0 1.65 1.35 3 3 3"
      opacity={0.4}
    />
  </svg>
);
export default SvgCommand;
