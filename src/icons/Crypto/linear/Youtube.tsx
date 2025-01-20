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
      d="m11.4 9.5 2.5 1.5c.9.6.9 1.5 0 2.1l-2.5 1.5c-1 .6-1.8.1-1.8-1v-3c0-1.3.8-1.7 1.8-1.1"
    />
  </svg>
);
export default SvgYoutube;
