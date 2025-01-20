import * as React from "react";
import type { SVGProps } from "react";
const SvgFingerCricle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M12 9.12c.91 0 1.65.74 1.65 1.65v2.47c0 .91-.74 1.65-1.65 1.65s-1.65-.74-1.65-1.65"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M16.98 13.47c-.2 2.58-2.36 4.6-4.98 4.6-2.76 0-5-2.24-5-5v-2.14c0-2.76 2.24-5 5-5 2.59 0 4.72 1.97 4.97 4.49"
    />
  </svg>
);
export default SvgFingerCricle;
