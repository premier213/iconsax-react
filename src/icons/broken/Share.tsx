import * as React from "react";
import type { SVGProps } from "react";
const SvgShare = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.96 6.17c2 1.39 3.38 3.6 3.66 6.15M3.49 12.37a8.6 8.6 0 0 1 3.6-6.15M8.19 20.94c1.16.59 2.48.92 3.87.92 1.34 0 2.6-.3 3.73-.85M9.28 4.92a2.78 2.78 0 1 0 2.78-2.78M4.83 19.92a2.78 2.78 0 1 0 0-5.56 2.78 2.78 0 0 0 0 5.56M21.94 17.14a2.78 2.78 0 1 0-2.78 2.78"
    />
  </svg>
);
export default SvgShare;
