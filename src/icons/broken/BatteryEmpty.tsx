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
      d="M10.97 5H13c4 0 5 1 5 5v4c0 2-.25 3.25-1 4s-2 1-4 1H7c-4 0-5-1-5-5v-4c0-4 1-5 5-5M20.5 9.5c.86 0 1.23.16 1.38.49.12.25.12.58.12 1.01v2c0 1 0 1.5-1.5 1.5"
    />
  </svg>
);
export default SvgBatteryEmpty;
