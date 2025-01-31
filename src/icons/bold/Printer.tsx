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
      d="M7 5c0-1.66 1.34-3 3-3h4c1.66 0 3 1.34 3 3 0 .55-.45 1-1 1H8c-.55 0-1-.45-1-1M17.75 15c0 .41-.34.75-.75.75h-1V19c0 1.66-1.34 3-3 3h-2c-1.66 0-3-1.34-3-3v-3.25H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10c.41 0 .75.34.75.75"
    />
    <path
      fill="currentColor"
      d="M18 7H6q-3 0-3 3v5q0 3 3 3h.375c.345 0 .625-.28.625-.625s-.289-.615-.612-.737A1.76 1.76 0 0 1 5.25 15c0-.96.79-1.75 1.75-1.75h10c.96 0 1.75.79 1.75 1.75a1.76 1.76 0 0 1-1.138 1.638c-.323.122-.612.392-.612.737s.28.625.625.625H18q3 0 3-3v-5q0-3-3-3m-8 4.75H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75"
    />
  </svg>
);
export default SvgPrinter;
