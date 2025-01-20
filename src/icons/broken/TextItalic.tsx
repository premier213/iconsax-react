import * as React from "react";
import type { SVGProps } from "react";
const SvgTextItalic = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.62 3h9.25M5.12 21h9.25M10.5 17.99 9.75 21M14.25 3 11.5 14.01"
    />
  </svg>
);
export default SvgTextItalic;
