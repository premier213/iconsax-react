import * as React from "react";
import type { SVGProps } from "react";
const SvgCake = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 22h20M17.56 10c1.84 0 3.33 1.34 3.33 3v9M3.11 22v-9c0-1.66 1.49-3 3.33-3h6.86M5.56 10V7.17C5.56 5.97 6.64 5 7.98 5h8.05c1.33 0 2.41.97 2.41 2.17V10"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.47 14h-.45c-.74 0-1.35.6-1.35 1.35v.31a1.35 1.35 0 0 1-2.7 0v-.31a1.35 1.35 0 0 0-2.7 0v.31a1.35 1.35 0 0 1-2.7 0v-.31C10.6 14.6 10 14 9.26 14s-1.35.6-1.35 1.35M3.53 13.98l.37.01c.74.01 1.33.61 1.33 1.35v.33c0 .74.6 1.35 1.35 1.35M8 5V3M16 5V3M12 5V2"
    />
  </svg>
);
export default SvgCake;
