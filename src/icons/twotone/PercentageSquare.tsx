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
      d="M9 2h6c5 0 7 2 7 7v6c0 5-2 7-7 7H9c-5 0-7-2-7-7V9c0-5 2-7 7-7"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8.32 15.27 6.54-6.54M8.73 10.37a1.23 1.23 0 1 0 0-2.46 1.23 1.23 0 0 0 0 2.46M15.269 16.09a1.23 1.23 0 1 0 0-2.46 1.23 1.23 0 0 0 0 2.46"
      opacity={0.4}
    />
  </svg>
);
export default SvgPercentageSquare;
