import * as React from "react";
import type { SVGProps } from "react";
const SvgArrow2 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
  >
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
    >
      <path d="m17.281 10.45 3.72-3.72-3.72-3.72M3 6.73h18" />
    </g>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.72 13.55 3 17.27l3.72 3.72M21 17.27H3"
    />
  </svg>
);
export default SvgArrow2;
