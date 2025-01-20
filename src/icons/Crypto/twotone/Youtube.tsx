import * as React from "react";
import type { SVGProps } from "react";
const SvgYoutube = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17 20H7c-3 0-5-2-5-5V9c0-3 2-5 5-5h10c3 0 5 2 5 5v6c0 3-2 5-5 5"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="m11.42 9.49 2.47 1.48c.94.57.94 1.49 0 2.06l-2.47 1.48c-1 .6-1.82.14-1.82-1.03v-2.97c0-1.16.82-1.62 1.82-1.02"
      opacity={0.4}
    />
  </svg>
);
export default SvgYoutube;
