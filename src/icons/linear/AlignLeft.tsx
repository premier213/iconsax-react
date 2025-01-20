import * as React from "react";
import type { SVGProps } from "react";
const SvgAlignLeft = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.1 19.25h11.8c1.5 0 2.1-.64 2.1-2.23v-1.04c0-1.59-.6-2.23-2.1-2.23H5.1M5.1 5.25h6.8c1.5 0 2.1.64 2.1 2.23v1.04c0 1.59-.6 2.23-2.1 2.23H5.1M5 1.99v20"
    />
  </svg>
);
export default SvgAlignLeft;
