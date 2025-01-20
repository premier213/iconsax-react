import * as React from "react";
import type { SVGProps } from "react";
const SvgScanner = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.03 2H17c3 0 5 2 5 5v2M2 9V7c0-3 2-5 5-5M2 15v2c0 3 2 5 5 5h10c3 0 5-2 5-5v-2M2 12h6M11 12h11"
    />
  </svg>
);
export default SvgScanner;
