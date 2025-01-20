import * as React from "react";
import type { SVGProps } from "react";
const SvgArrow3 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.45 6.72 6.73 3 3.01 6.72M6.73 21V3M13.55 17.28 17.27 21l3.72-3.72M17.27 3v18"
    />
  </svg>
);
export default SvgArrow3;
