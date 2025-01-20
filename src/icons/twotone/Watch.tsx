import * as React from "react";
import type { SVGProps } from "react";
const SvgWatch = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.5 19h7c2.33 0 3.5-1.17 3.5-3.5v-7C19 6.17 17.83 5 15.5 5h-7C6.17 5 5 6.17 5 8.5v7C5 17.83 6.17 19 8.5 19"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M16 2H8M16 22H8M11.5 9.5v3h3"
      opacity={0.4}
    />
  </svg>
);
export default SvgWatch;
