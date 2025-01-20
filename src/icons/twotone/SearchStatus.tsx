import * as React from "react";
import type { SVGProps } from "react";
const SvgSearchStatus = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14 5h6M14 8h3"
      opacity={0.4}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 11.5c0 5.25-4.25 9.5-9.5 9.5S2 16.75 2 11.5 6.25 2 11.5 2"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m22 22-2-2"
      opacity={0.4}
    />
  </svg>
);
export default SvgSearchStatus;
