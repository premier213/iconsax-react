import * as React from "react";
import type { SVGProps } from "react";
const SvgCalculator = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 12.97V15c0 5 2 7 7 7h4c5 0 7-2 7-7V9c0-5-2-7-7-7h-4C5 2 3 4 3 9"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.5 7.58v1c0 .82-.67 1.5-1.5 1.5H9c-.82 0-1.5-.67-1.5-1.5v-1c0-.82.67-1.5 1.5-1.5h6c.83 0 1.5.67 1.5 1.5"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8.136 14h.012M11.996 14h.011M15.855 14h.011M8.136 17.5h.012M11.996 17.5h.011M15.855 17.5h.011"
    />
  </svg>
);
export default SvgCalculator;
