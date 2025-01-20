import * as React from "react";
import type { SVGProps } from "react";
const SvgMoreCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75m0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75"
    />
    <path
      fill="currentColor"
      d="M12 13c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1M16 13c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1M8 13c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1"
    />
  </svg>
);
export default SvgMoreCircle;
