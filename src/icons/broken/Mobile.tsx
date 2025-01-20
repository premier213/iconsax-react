import * as React from "react";
import type { SVGProps } from "react";
const SvgMobile = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20 11.03V17c0 4-1 5-5 5H9c-4 0-5-1-5-5V7c0-4 1-5 5-5h6c4 0 5 1 5 5M14 5.5h-4"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 19.1a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1"
    />
  </svg>
);
export default SvgMobile;
