import * as React from "react";
import type { SVGProps } from "react";
const SvgDashDash = (props: SVGProps<SVGSVGElement>) => (
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
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M6.01 20.5H3.94L5 16.25h7.44c3.56 0 5.31-2.25 5.31-5.31v-.19c0-1.75-.75-3-3-3H6.06L7.12 3.5H16c4 0 6 2.5 6 6V12c0 5-3 8.5-8.5 8.5h-2.56"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M11.5 10.5H4.31c-.92 0-1.72.62-1.94 1.51L2 13.5h7.19c.92 0 1.72-.62 1.94-1.51z"
    />
  </svg>
);
export default SvgDashDash;
