import * as React from "react";
import type { SVGProps } from "react";
const SvgCourthouse = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 22h20M12 2c1.6.64 3.4.64 5 0v3c-1.6.64-3.4.64-5 0zM12 5v3M17 8H7q-3 0-3 3v11h16V11q0-3-3-3M4.58 12h14.84"
    />
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M7.99 12v10M11.99 12v10M15.99 12v10"
      opacity={0.4}
    />
  </svg>
);
export default SvgCourthouse;
