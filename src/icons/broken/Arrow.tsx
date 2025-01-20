import * as React from "react";
import type { SVGProps } from "react";
const SvgArrow = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 22v-2M12 18v-2M12 14v-3c0-3.87 3.13-7 7-7h3"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.45 5.6A6.97 6.97 0 0 1 12 11v3M2 4h3M4 2 2 4l2 2M20 2l2 2-2 2"
    />
  </svg>
);
export default SvgArrow;
