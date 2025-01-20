import * as React from "react";
import type { SVGProps } from "react";
const SvgBatteryEmpty = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13 19H7c-4 0-5-1-5-5v-4c0-4 1-5 5-5h6c4 0 5 1 5 5v4c0 4-1 5-5 5M20.5 9.5C22 9.5 22 10 22 11v2c0 1 0 1.5-1.5 1.5"
    />
  </svg>
);
export default SvgBatteryEmpty;
