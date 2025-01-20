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
      d="M11 5v3H9c-.6 0-1 .4-1 1v2H5V9c0-2.2 1.8-4 4-4zM13 19v-3h2c.6 0 1-.4 1-1v-2h3v2c0 2.2-1.8 4-4 4z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15 22H9c-5 0-7-2-7-7V9c0-5 2-7 7-7h6c5 0 7 2 7 7v6c0 5-2 7-7 7"
    />
  </svg>
);
export default SvgFrame1;
