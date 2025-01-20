import * as React from "react";
import type { SVGProps } from "react";
const SvgGroup = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11 5v3H9c-.55 0-1 .45-1 1v2H5V9c0-2.21 1.79-4 4-4zM13 19v-3h2c.55 0 1-.45 1-1v-2h3v2c0 2.21-1.79 4-4 4z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M2 12.83V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9"
    />
  </svg>
);
export default SvgGroup;
