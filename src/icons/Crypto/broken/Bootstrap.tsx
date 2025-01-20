import * as React from "react";
import type { SVGProps } from "react";
const SvgBootstrap = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7 3C5.34 3 4 4.34 4 6v.84c0 .77-.12 1.53-.37 2.26A2.785 2.785 0 0 1 1 11v2c1.19 0 2.25.76 2.63 1.9.24.73.37 1.5.37 2.26V18c0 1.66 1.34 3 3 3h10c1.66 0 3-1.34 3-3v-.84c0-.77.12-1.53.37-2.26.38-1.13 1.44-1.9 2.63-1.9v-2c-1.19 0-2.25-.76-2.63-1.9-.24-.73-.37-1.5-.37-2.26V6c0-1.66-1.34-3-3-3h-4.75"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M9.75 12h2.92c1.15 0 2.08.93 2.08 2.08s-.93 2.08-2.08 2.08H9.75V7.83h2.92c1.15 0 2.08.93 2.08 2.08s-.93 2.08-2.08 2.08H9.75"
    />
  </svg>
);
export default SvgBootstrap;
