import * as React from "react";
import type { SVGProps } from "react";
const SvgOkbOkb = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10"
    />
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      opacity={0.4}
    >
      <path d="M12 22a5 5 0 1 0 0-10 5 5 0 0 0 0 10M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10" />
    </g>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M7 17A5 5 0 1 0 7 7a5 5 0 0 0 0 10"
    />
  </svg>
);
export default SvgOkbOkb;
