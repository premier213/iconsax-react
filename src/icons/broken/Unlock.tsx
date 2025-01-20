import * as React from "react";
import type { SVGProps } from "react";
const SvgUnlock = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.5 16a2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0-2.5-2.5"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M22 17v-2c0-4-1-5-5-5H7c-4 0-5 1-5 5v2c0 4 1 5 5 5h10c1.76 0 2.94-.19 3.71-.75M6 10V8c0-3.31 1-6 6-6 4.5 0 6 2 6 5"
    />
  </svg>
);
export default SvgUnlock;
