import * as React from "react";
import type { SVGProps } from "react";
const SvgRotateLeft = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20.67 13.33c0 4.79-3.88 8.67-8.67 8.67s-8.67-3.88-8.67-8.67c0-1.78.54-3.44 1.46-4.82m4.32-3.43c.87-.26 1.83-.43 2.89-.43 3.21 0 6.02 1.75 7.51 4.34M7.87 5.32 10.76 2M7.87 5.32l3.37 2.46"
    />
  </svg>
);
export default SvgRotateLeft;
