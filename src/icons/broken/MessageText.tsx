import * as React from "react";
import type { SVGProps } from "react";
const SvgMessageText = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22 8q0-6-6-6H8Q2 2 2 8v13c0 .55.45 1 1 1h13q6 0 6-6v-4"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M15 9.5h2M7 9.5h5M7 14.5h7"
    />
  </svg>
);
export default SvgMessageText;
