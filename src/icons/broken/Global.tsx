import * as React from "react";
import type { SVGProps } from "react";
const SvgGlobal = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.54 12c0 3.04.49 6.08 1.46 9H8M8 3h1c-.49 1.46-.85 2.95-1.1 4.46M16.13 16.36c-.25 1.56-.62 3.12-1.13 4.64M15 3c.97 2.92 1.46 5.96 1.46 9"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3 16v-1a28.42 28.42 0 0 0 18 0v1M3 9a28.42 28.42 0 0 1 18 0"
    />
  </svg>
);
export default SvgGlobal;
