import * as React from "react";
import type { SVGProps } from "react";
const SvgMessageSearch = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13.2 21.37c-.66.88-1.74.88-2.4 0l-1.5-2c-.17-.22-.53-.4-.8-.4H8c-4 0-6-1-6-6v-5q0-6 6-6h8q6 0 6 6v5"
    />
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
    >
      <path d="M18.2 21.4a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4M22 22l-1-1" />
    </g>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15.997 11h.008M11.995 11h.009M7.995 11h.008"
    />
  </svg>
);
export default SvgMessageSearch;
