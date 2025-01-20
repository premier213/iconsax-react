import * as React from "react";
import type { SVGProps } from "react";
const SvgEraser1 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9 22h12M2.91 17.58l3.51 3.51a3 3 0 0 0 4.24 0l10.43-10.43a3 3 0 0 0 0-4.24l-3.51-3.51a3 3 0 0 0-4.24 0L2.91 13.34a3 3 0 0 0 0 4.24"
    />
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
    >
      <path d="m7.12 9.13 7.75 7.75M3.52 17.66 9.17 12M6.34 20.49 12 14.83" />
    </g>
  </svg>
);
export default SvgEraser1;
