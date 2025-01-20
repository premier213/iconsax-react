import * as React from "react";
import type { SVGProps } from "react";
const SvgProgrammingArrow = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19 16V6.5c0-1.1-.9-2-2-2h-4.5"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15 2-3 2.5L15 7M5 9v7M5.25 2C3.46 2 2 3.46 2 5.25S3.46 8.5 5.25 8.5 8.5 7.04 8.5 5.25M5 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6M19 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
    />
  </svg>
);
export default SvgProgrammingArrow;
