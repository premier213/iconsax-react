import * as React from "react";
import type { SVGProps } from "react";
const SvgMoreSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M12 13c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1M16 13c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1M8 13c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1"
    />
  </svg>
);
export default SvgMoreSquare;
