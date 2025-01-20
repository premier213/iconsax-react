import * as React from "react";
import type { SVGProps } from "react";
const SvgSidebarBottom = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22 15.5H2M14.56 8.5 12 11.06 9.44 8.5M22 15.5H2"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M1.97 11.02V9c0-5 2-7 7-7h6c5 0 7 2 7 7v6c0 5-2 7-7 7h-6c-5 0-7-2-7-7"
    />
  </svg>
);
export default SvgSidebarBottom;
