import * as React from "react";
import type { SVGProps } from "react";
const SvgIllustrator = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15 22H9c-5 0-7-2-7-7V9c0-5 2-7 7-7h6c5 0 7 2 7 7v6c0 5-2 7-7 7"
    />
    <g stroke="currentColor" opacity={0.4}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M6.5 16 10 8l3.6 8"
      />
      <path strokeMiterlimit={10} strokeWidth={1.5} d="M7.3 13.3h5.4" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M16.1 16v-5.3"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16.14 8.034"
      />
    </g>
  </svg>
);
export default SvgIllustrator;
