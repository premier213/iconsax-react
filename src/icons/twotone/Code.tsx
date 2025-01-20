import * as React from "react";
import type { SVGProps } from "react";
const SvgCode = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9 13c-.66.33-1.21.82-1.62 1.43-.23.35-.23.79 0 1.14.41.61.96 1.1 1.62 1.43M15.21 13c.66.33 1.21.82 1.62 1.43.23.35.23.79 0 1.14-.41.61-.96 1.1-1.62 1.43"
      opacity={0.4}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M2.23 8.01 21.45 8"
      opacity={0.4}
    />
  </svg>
);
export default SvgCode;
