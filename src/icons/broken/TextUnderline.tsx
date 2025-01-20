import * as React from "react";
import type { SVGProps } from "react";
const SvgTextUnderline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 21h14M12 17c3.87 0 7-3.13 7-7V3M5 3v7c0 2.17.98 4.1 2.53 5.38"
    />
  </svg>
);
export default SvgTextUnderline;
