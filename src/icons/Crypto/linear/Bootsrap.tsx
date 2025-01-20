import * as React from "react";
import type { SVGProps } from "react";
const SvgBootsrap = (props: SVGProps<SVGSVGElement>) => (
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
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M17 3H7C5.3 3 4 4.3 4 6v.8c0 .8-.1 1.5-.4 2.3C3.3 10.2 2.2 11 1 11v2c1.2 0 2.3.8 2.6 1.9.3.7.4 1.5.4 2.3v.8c0 1.7 1.3 3 3 3h10c1.7 0 3-1.3 3-3v-.8c0-.8.1-1.5.4-2.3.4-1.1 1.4-1.9 2.6-1.9v-2c-1.2 0-2.3-.8-2.6-1.9-.3-.7-.4-1.5-.4-2.3V6c0-1.7-1.3-3-3-3Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M9.8 12h2.9c1.2 0 2.1.9 2.1 2.1s-.9 2.1-2.1 2.1H9.8V7.8h2.9c1.2 0 2.1.9 2.1 2.1s-.9 2.1-2.1 2.1z"
    />
  </svg>
);
export default SvgBootsrap;
