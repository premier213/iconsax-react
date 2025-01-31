import * as React from "react";
import type { SVGProps } from "react";
const SvgSize = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21.97 5.5v4c0 1.93-1.57 3.5-3.5 3.5h-1.5v-.75c0-2.9-2.35-5.25-5.25-5.25h-.75V5.5c0-1.93 1.57-3.5 3.5-3.5h4c1.94 0 3.5 1.57 3.5 3.5"
    />
    <path
      fill="currentColor"
      d="M11.72 7H6.97c-2.76 0-5 2.24-5 5v5c0 2.76 2.24 5 5 5h5c2.76 0 5-2.24 5-5v-4.75c0-2.9-2.35-5.25-5.25-5.25"
      opacity={0.4}
    />
  </svg>
);
export default SvgSize;
