import * as React from "react";
import type { SVGProps } from "react";
const SvgTask = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11 19.5h10M11 12.5h10M11 5.5h10"
      opacity={0.4}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m3 5.5 1 1 3-3M3 12.5l1 1 3-3M3 19.5l1 1 3-3"
    />
  </svg>
);
export default SvgTask;
