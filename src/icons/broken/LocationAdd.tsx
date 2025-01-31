import * as React from "react";
import type { SVGProps } from "react";
const SvgLocationAdd = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="M9.25 11h5.5M12 13.75v-5.5"
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
export default SvgLocationAdd;
