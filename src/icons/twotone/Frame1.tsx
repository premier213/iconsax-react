import * as React from "react";
import type { SVGProps } from "react";
const SvgFrame1 = (props: SVGProps<SVGSVGElement>) => (
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
      d="m9.01 20.5-5.02-5.01M9.01 3.5v17"
    />
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      opacity={0.4}
    >
      <path d="m14.99 3.5 5.02 5.01M14.99 20.5v-17" />
    </g>
  </svg>
);
export default SvgFrame1;
