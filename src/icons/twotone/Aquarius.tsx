import * as React from "react";
import type { SVGProps } from "react";
const SvgAquarius = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 16c3.87 0 7-3.13 7-7s-3.13-7-7-7-7 3.13-7 7M12 16v6"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15 19H9"
      opacity={0.4}
    />
  </svg>
);
export default SvgAquarius;
