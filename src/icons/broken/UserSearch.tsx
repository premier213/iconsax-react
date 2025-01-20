import * as React from "react";
import type { SVGProps } from "react";
const SvgUserSearch = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15.02 3.01A4.94 4.94 0 0 0 12 2C9.24 2 7 4.24 7 7s2.24 5 5 5 5-2.24 5-5M3.41 22c0-3.87 3.85-7 8.59-7M18.2 21.4a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4M22 22l-1-1"
    />
  </svg>
);
export default SvgUserSearch;
