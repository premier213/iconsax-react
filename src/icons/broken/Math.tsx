import * as React from "react";
import type { SVGProps } from "react";
const SvgMath = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.3 5.64h7.28M14.42 15.33h7.28M14.42 21.39h7.28M20.96 5.64h.74M14.42 5.64h3.27M18.09 9.27V2M9.58 14.73l-1.43 1.42M2.3 22l3.51-3.51M9.58 22 2.3 14.73"
    />
  </svg>
);
export default SvgMath;
