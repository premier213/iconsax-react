import * as React from "react";
import type { SVGProps } from "react";
const SvgMicrophone = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 19c3.31 0 6-2.69 6-6V8c0-3.31-2.69-6-6-6S6 4.69 6 8v5c0 3.31 2.69 6 6 6"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3 11v2a9 9 0 0 0 18 0v-2M9.11 7.48a8 8 0 0 1 5.5 0M10.03 10.48c1.2-.33 2.47-.33 3.67 0"
      opacity={0.4}
    />
  </svg>
);
export default SvgMicrophone;
