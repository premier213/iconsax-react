import * as React from "react";
import type { SVGProps } from "react";
const SvgLevel = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.2 14.02A9.99 9.99 0 0 0 12 22c4.82 0 8.84-3.41 9.79-7.95M21.81 10.06C20.91 5.46 16.86 2 12 2 7.17 2 3.14 5.43 2.2 9.98"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
      opacity={0.4}
    />
  </svg>
);
export default SvgLevel;
