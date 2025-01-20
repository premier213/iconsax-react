import * as React from "react";
import type { SVGProps } from "react";
const SvgUndo = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.98 8.31H4.13M7.13 18.31h8c2.76 0 5-2.24 5-5s-2.24-5-5-5"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.43 10.81 3.87 8.25l2.56-2.56"
    />
  </svg>
);
export default SvgUndo;
