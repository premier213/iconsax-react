import * as React from "react";
import type { SVGProps } from "react";
const SvgXd = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15 22H9c-5 0-7-2-7-7V9c0-5 2-7 7-7h6c5 0 7 2 7 7v6c0 5-2 7-7 7"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M18 8.5v7.1h-1.8c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8H18M6 8.5l5.7 7M11.7 8.5l-5.7 7"
    />
  </svg>
);
export default SvgXd;
