import * as React from "react";
import type { SVGProps } from "react";
const SvgMaximizeCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
  >
    <g fill="currentColor" fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <path d="M16.25 3a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0V3.75H17a.75.75 0 0 1-.75-.75" />
      <path d="M21.53 2.47a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06l6-6a.75.75 0 0 1 1.06 0M3 16.25a.75.75 0 0 1 .75.75v3.25H7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75v-4a.75.75 0 0 1 .75-.75" />
      <path d="M9.53 14.47a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 0 1-1.06-1.06l6-6a.75.75 0 0 1 1.06 0" />
    </g>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M1.25 12C1.25 6.066 6.066 1.25 12 1.25c.74 0 1.47.075 2.167.215a.75.75 0 1 1-.294 1.47A9.6 9.6 0 0 0 12 2.75c-5.106 0-9.25 4.144-9.25 9.25 0 .64.065 1.26.185 1.85a.75.75 0 0 1-1.47.3A11 11 0 0 1 1.25 12M21.654 9.265a.75.75 0 0 1 .882.588c.14.696.215 1.416.215 2.147 0 5.934-4.816 10.75-10.75 10.75-.74 0-1.47-.075-2.167-.214a.75.75 0 0 1 .294-1.471c.602.12 1.233.185 1.873.185 5.105 0 9.25-4.144 9.25-9.25 0-.628-.065-1.25-.186-1.853a.75.75 0 0 1 .588-.882"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMaximizeCircle;
