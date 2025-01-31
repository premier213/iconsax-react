import * as React from "react";
import type { SVGProps } from "react";
const SvgPrevious = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20.24 7.22v9.57c0 1.96-2.129 3.19-3.829 2.21l-4.15-2.39-4.15-2.4c-1.7-.98-1.7-3.43 0-4.41l4.15-2.4 4.15-2.39c1.7-.98 3.83.24 3.83 2.21"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.76 18.18V5.82"
      opacity={0.4}
    />
  </svg>
);
export default SvgPrevious;
