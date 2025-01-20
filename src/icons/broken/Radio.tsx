import * as React from "react";
import type { SVGProps } from "react";
const SvgRadio = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 14.05V17c0 3 2 5 5 5h10c3 0 5-2 5-5v-7c0-3-2-5-5-5H7c-3 0-5 2-5 5M7 2v3"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.5 16a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 2.5 2.5M14.5 11h4M14.5 15h.5M18 15h.5"
    />
  </svg>
);
export default SvgRadio;
