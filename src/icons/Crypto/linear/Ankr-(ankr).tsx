import * as React from "react";
import type { SVGProps } from "react";
const SvgAnkrAnkr = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.1 9.8V6.4L12 2l8.9 4.4v3.4M3.1 14.2v3.4L12 22l8.9-4.4v-3.4M12 22v-5.6"
    />
    <path
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M12 16.4a4.4 4.4 0 1 0 0-8.8 4.4 4.4 0 0 0 0 8.8Z"
    />
  </svg>
);
export default SvgAnkrAnkr;
