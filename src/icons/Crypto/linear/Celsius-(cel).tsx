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
      d="M16.3 15.3c-1 1.3-2.6 2.2-4.3 2.2-3 0-5.4-2.4-5.4-5.4S9 6.6 12 6.6c1.2 0 2.4.4 3.3 1.1M17.4 11.4a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4"
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
