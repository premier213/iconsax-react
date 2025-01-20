import * as React from "react";
import type { SVGProps } from "react";
const SvgCelsiusCel = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.33 15.28a5.44 5.44 0 0 1-9.77-3.29c0-3.01 2.43-5.44 5.44-5.44 1.23 0 2.36.41 3.27 1.09M17.42 11.34a1.17 1.17 0 1 0 0-2.34 1.17 1.17 0 0 0 0 2.34"
      opacity={0.4}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
    />
  </svg>
);
export default SvgCelsiusCel;
