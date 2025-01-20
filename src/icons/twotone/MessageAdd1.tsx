import * as React from "react";
import type { SVGProps } from "react";
const SvgMessageAdd1 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 2H8Q2 2 2 8v13c0 .55.45 1 1 1h13q6 0 6-6V8q0-6-6-6"
    />
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      opacity={0.4}
    >
      <path d="M8.5 12h7M12 15.5v-7" />
    </g>
  </svg>
);
export default SvgMessageAdd1;
