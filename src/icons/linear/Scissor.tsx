import * as React from "react";
import type { SVGProps } from "react";
const SvgScissor = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.5 10a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M5.5 21a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M22 6 8.65 15.98M22 17.97 8.65 7.98"
    />
  </svg>
);
export default SvgScissor;
