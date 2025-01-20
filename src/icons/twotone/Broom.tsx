import * as React from "react";
import type { SVGProps } from "react";
const SvgBroom = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.87 5.67 6.45 7.75 4.89 5.19a2.01 2.01 0 0 1 .67-2.75 2.01 2.01 0 0 1 2.75.67z"
      opacity={0.4}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m11.82 9.16-3.16 1.92a3.98 3.98 0 0 0-1.51 5.18l2.05 4.18c.66 1.35 2.26 1.82 3.54 1.03l6.43-3.91c1.29-.78 1.6-2.41.71-3.62l-2.77-3.74c-1.2-1.62-3.45-2.16-5.29-1.04M10.757 5.098l-5.124 3.12 2.08 3.417 5.125-3.12z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14.31 16.81 1.65 2.71M11.75 18.37l1.65 2.71M16.87 15.25l1.65 2.71"
      opacity={0.4}
    />
  </svg>
);
export default SvgBroom;
