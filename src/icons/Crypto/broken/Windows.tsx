import * as React from "react";
import type { SVGProps } from "react";
const SvgWindows = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22 6.03V2L12 4v7h10"
    />
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="m22 22-10-2v-7h10zM10 4.3 2 6v5h8zM10 19.7 2 18v-5h8z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgWindows;
