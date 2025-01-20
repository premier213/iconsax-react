import * as React from "react";
import type { SVGProps } from "react";
const SvgLocationCross = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14 12.96 10.04 9M13.96 9.04 10 13"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.98 4.3c4.37-4.11 12.84-2.7 14.4 4.21 1.15 5.08-2.01 9.38-4.78 12.04a5.193 5.193 0 0 1-7.21 0C5.63 17.88 2.46 13.58 3.62 8.5"
    />
  </svg>
);
export default SvgLocationCross;
