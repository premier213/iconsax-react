import * as React from "react";
import type { SVGProps } from "react";
const SvgRowVertical = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 19.77C2 21.36 2.6 22 4.1 22h15.8c1.5 0 2.1-.64 2.1-2.23v-4.04c0-1.59-.6-2.23-2.1-2.23H4.1c-1.5 0-2.1.64-2.1 2.23M22 4.23C22 2.64 21.4 2 19.9 2H4.1C2.6 2 2 2.64 2 4.23v4.04c0 1.59.6 2.23 2.1 2.23h15.8c1.5 0 2.1-.64 2.1-2.23"
    />
  </svg>
);
export default SvgRowVertical;
