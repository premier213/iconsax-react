import * as React from "react";
import type { SVGProps } from "react";
const SvgFormatSquare = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20 6.95v10.1A2.5 2.5 0 0 0 17.05 20H6.95A2.5 2.5 0 0 0 4 17.05V6.95A2.5 2.5 0 0 0 6.95 4h10.1A2.5 2.5 0 0 0 20 6.95"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7 4.5a2.5 2.5 0 0 1-5 0A2.5 2.5 0 0 1 6.95 4c.03.16.05.33.05.5M22 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0M7 19.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0M22 19.5a2.5 2.5 0 0 1-4.95.5 2.5 2.5 0 1 1 4.95-.5"
    />
  </svg>
);
export default SvgFormatSquare;
