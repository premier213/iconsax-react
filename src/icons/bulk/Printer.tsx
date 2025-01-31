import * as React from "react";
import type { SVGProps } from "react";
const SvgPrinter = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 15v4c0 1.66-1.34 3-3 3h-2c-1.66 0-3-1.34-3-3v-4zM7 7V5c0-1.66 1.34-3 3-3h4c1.66 0 3 1.34 3 3v2z"
    />
    <path
      fill="currentColor"
      d="M18 7H6q-3 0-3 3v5q0 3 3 3h2v-3h8v3h2q3 0 3-3v-5q0-3-3-3m-8 4.75H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M10.75 11c0 .41-.34.75-.75.75H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75M17 15.75H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10c.41 0 .75.34.75.75s-.34.75-.75.75"
    />
  </svg>
);
export default SvgPrinter;
