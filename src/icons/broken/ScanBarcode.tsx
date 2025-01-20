import * as React from "react";
import type { SVGProps } from "react";
const SvgScanBarcode = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 9V6.5C2 4.01 4.01 2 6.5 2H9M15 2h2.5C19.99 2 22 4.01 22 6.5V9M22 16v1.5c0 2.49-2.01 4.5-4.5 4.5H16M9 22H6.5C4.01 22 2 19.99 2 17.5V15M10.5 7v2q0 1.5-1.5 1.5H7q-1.5 0-1.5-1.5V7q0-1.5 1.5-1.5h2q1.5 0 1.5 1.5"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.5 9V7q0-1.5 1.5-1.5h2q1.5 0 1.5 1.5v2q0 1.5-1.5 1.5M7 13.5h2q1.5 0 1.5 1.5v2q0 1.5-1.5 1.5H7q-1.5 0-1.5-1.5M18.5 15v2q0 1.5-1.5 1.5h-2q-1.5 0-1.5-1.5v-2q0-1.5 1.5-1.5h2q1.5 0 1.5 1.5"
    />
  </svg>
);
export default SvgScanBarcode;
