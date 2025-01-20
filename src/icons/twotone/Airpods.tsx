import * as React from "react";
import type { SVGProps } from "react";
const SvgAirpods = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.72 9.56h-.94A3.79 3.79 0 0 1 2 5.78C2 3.7 3.7 2 5.78 2h1.89a2.84 2.84 0 0 1 2.83 2.83V17.1c0 1.04-.85 1.89-1.89 1.89s-1.89-.85-1.89-1.89z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M5.78 6.72a.939.939 0 1 1 0-1.88"
      opacity={0.4}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M17.28 9.56h.94c2.08 0 3.78-1.7 3.78-3.78S20.3 2 18.22 2h-1.89a2.84 2.84 0 0 0-2.83 2.83V17.1c0 1.04.85 1.89 1.89 1.89s1.89-.85 1.89-1.89z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M18.22 6.72a.939.939 0 1 0 0-1.88M8.5 22v-3M15.5 22v-3"
      opacity={0.4}
    />
  </svg>
);
export default SvgAirpods;
