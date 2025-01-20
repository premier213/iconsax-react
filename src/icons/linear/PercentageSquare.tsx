import * as React from "react";
import type { SVGProps } from "react";
const SvgPercentageSquare = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9 2h6c5 0 7 2 7 7v6c0 5-2 7-7 7H9c-5 0-7-2-7-7V9c0-5 2-7 7-7M8.57 15.27l6.54-6.54"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.98 10.37a1.23 1.23 0 1 0 0-2.46 1.23 1.23 0 0 0 0 2.46M15.52 16.09a1.23 1.23 0 1 0 0-2.46 1.23 1.23 0 0 0 0 2.46"
    />
  </svg>
);
export default SvgPercentageSquare;
