import * as React from "react";
import type { SVGProps } from "react";
const SvgBatteryDisable = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20.5 9.5C22 9.5 22 10 22 11v2c0 1 0 1.5-1.5 1.5M4 21.5l4.09-6.47L16 2.5M2 14c0 3.4.72 4.63 3.39 4.92M7 5c-4 0-5 1-5 5M13 19c4 0 5-1 5-5v-4c0-3.39-.72-4.63-3.37-4.92"
    />
  </svg>
);
export default SvgBatteryDisable;
