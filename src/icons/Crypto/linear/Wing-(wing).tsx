import * as React from "react";
import type { SVGProps } from "react";
const SvgWingWing = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 5h3.5l2.7 4.7L17 19l-1.9-3.1 3.6-6.2zM9 5h3.5l2.7 4.7L10 19l-1.9-3.1 3.6-6.2zM1.8 5h3.5L8 9.8l-1.7 2.9z"
    />
  </svg>
);
export default SvgWingWing;
