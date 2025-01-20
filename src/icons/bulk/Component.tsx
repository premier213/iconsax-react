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
      fill="currentColor"
      d="m20.95 14.55-6.39 6.39c-1.4 1.4-3.7 1.4-5.11 0l-6.39-6.39c-1.4-1.4-1.4-3.7 0-5.11l6.39-6.39c1.4-1.4 3.7-1.4 5.11 0l6.39 6.39c1.4 1.41 1.4 3.71 0 5.11"
    />
  </svg>
);
export default SvgComponent;
