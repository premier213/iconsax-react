import * as React from "react";
import type { SVGProps } from "react";
const SvgScanning = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 9V6.5C2 4.01 4.01 2 6.5 2H9M15 2h2.5C19.99 2 22 4.01 22 6.5V9M22 16v1.5c0 2.49-2.01 4.5-4.5 4.5H16M9 22H6.5C4.01 22 2 19.99 2 17.5V15M8.5 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5M7.5 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M16.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M15.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
    />
  </svg>
);
export default SvgScanning;
