import * as React from "react";
import type { SVGProps } from "react";
const SvgMenu = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17.54 8.31a2.46 2.46 0 1 0 0-4.92 2.46 2.46 0 0 0 0 4.92M8.92 5.85c0-1.36-1.1-2.46-2.46-2.46S4 4.49 4 5.85s1.1 2.46 2.46 2.46M17.54 20.62c1.36 0 2.46-1.1 2.46-2.46s-1.1-2.46-2.46-2.46-2.46 1.1-2.46 2.46M6.46 20.61a2.46 2.46 0 1 0 0-4.92 2.46 2.46 0 0 0 0 4.92"
    />
  </svg>
);
export default SvgMenu;
