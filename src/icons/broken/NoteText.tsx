import * as React from "react";
import type { SVGProps } from "react";
const SvgNoteText = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 2v3M16 2v3M3 8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5V17c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5v-4.25M8 11h8M8 16h4"
    />
  </svg>
);
export default SvgNoteText;
