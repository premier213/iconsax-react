import * as React from "react";
import type { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
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
      d="m6.74 18.24-3.68-3.68c-1.4-1.4-1.4-3.7 0-5.11l6.39-6.39c1.4-1.4 3.7-1.4 5.11 0l6.39 6.39c1.4 1.4 1.4 3.7 0 5.11l-6.39 6.39c-1.4 1.4-3.7 1.4-5.11 0"
    />
  </svg>
);
export default SvgComponent;
