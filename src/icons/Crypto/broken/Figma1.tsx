import * as React from "react";
import type { SVGProps } from "react";
const SvgFigma1 = (props: SVGProps<SVGSVGElement>) => (
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
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M12 6h-2c-1.1 0-2 .9-2 2s.9 2 2 2h2zM12 10h-2c-1.1 0-2 .9-2 2s.9 2 2 2h2zM12 14h-2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2zM12 6h2c1.1 0 2 .9 2 2s-.9 2-2 2h-2zM14 10c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85"
    />
  </svg>
);
export default SvgFigma1;
