import * as React from "react";
import type { SVGProps } from "react";
const SvgData = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4M20 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4M20 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4M4 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4M6 12h12"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11 12v5q0 3 3 3h4M18 4h-4q-3 0-3 3v.98"
    />
  </svg>
);
export default SvgData;
