import * as React from "react";
import type { SVGProps } from "react";
const SvgBlend = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M21.97 12a6.005 6.005 0 0 1-8.118 5.614c-.319-.121-.378-.529-.157-.788A7.4 7.4 0 0 0 15.471 12a7.4 7.4 0 0 0-1.772-4.825c-.223-.26-.164-.669.155-.79A6.005 6.005 0 0 1 21.97 12"
    />
    <path
      fill="currentColor"
      d="M13.97 12c0 1.77-.77 3.37-2 4.46a5.93 5.93 0 0 1-4 1.54c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.54 0 2.94.58 4 1.54 1.23 1.09 2 2.69 2 4.46"
    />
  </svg>
);
export default SvgBlend;
