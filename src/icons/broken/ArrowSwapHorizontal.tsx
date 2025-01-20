import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowSwapHorizontal = (props: SVGProps<SVGSVGElement>) => (
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
      d="m3.5 9.01 5.01-5.02M13.01 9.01H3.5M20.5 9.01H17M20.5 14.99l-5.01 5.02M10.99 14.99h9.51M3.5 14.99H7"
    />
  </svg>
);
export default SvgArrowSwapHorizontal;
