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
      d="M14.42 5.64h7.28"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M2.299 5.64h7.28M14.42 15.33h7.28M14.42 21.39h7.28"
      opacity={0.4}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.09 9.27V2M2.299 22l7.28-7.27M9.579 22l-7.28-7.27"
    />
  </svg>
);
export default SvgMath;
