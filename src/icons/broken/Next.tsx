import * as React from "react";
import type { SVGProps } from "react";
const SvgNext = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.73 7.39 7.58 5c-1.7-.98-3.83.24-3.83 2.21v9.57c0 1.96 2.13 3.19 3.83 2.21l4.15-2.39 4.15-2.4c1.7-.98 1.7-3.43 0-4.41M20.24 18.18V17M20.24 14V5.82"
    />
  </svg>
);
export default SvgNext;
