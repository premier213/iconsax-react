import * as React from "react";
import type { SVGProps } from "react";
const SvgToggleOn = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.35 3.86h9.3c4.1 0 5.35 1.25 5.35 5.35v5.58c0 4.1-1.25 5.35-5.35 5.35h-9.3c-4.1 0-5.35-1.25-5.35-5.35V9.21c0-4.1 1.25-5.35 5.35-5.35"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M13.21 7.58h2.23c2.25 0 3.3 1.05 3.3 3.3v2.23c0 2.25-1.05 3.3-3.3 3.3h-2.23c-2.25 0-3.3-1.05-3.3-3.3v-2.23c0-2.25 1.05-3.3 3.3-3.3"
    />
  </svg>
);
export default SvgToggleOn;
