import * as React from "react";
import type { SVGProps } from "react";
const SvgMoneyChange = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.5 12a2.5 2.5 0 0 0-5 0 2.5 2.5 0 0 0 2.5 2.5M22 13.14V15c0 3.5-2 5-5 5h-5"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M2 11V9c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5M18.5 9.5v5M2 15.5h5.34c.64 0 1.16.52 1.16 1.16v1.28"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M3.22 14.28 2 15.5l1.22 1.22M8.5 20.78H3.16c-.64 0-1.16-.52-1.16-1.16v-1.28"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="m7.28 22 1.22-1.22-1.22-1.22"
    />
  </svg>
);
export default SvgMoneyChange;
