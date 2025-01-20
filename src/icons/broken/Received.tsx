import * as React from "react";
import type { SVGProps } from "react";
const SvgReceived = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.59 5.91 19 3.5M5 17.5l8.38-8.38M5 7.23V17.5h10.27M3.5 22h17"
    />
  </svg>
);
export default SvgReceived;
