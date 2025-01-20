import * as React from "react";
import type { SVGProps } from "react";
const SvgFigma = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
  >
    <g
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      opacity={0.4}
    >
      <path d="M12 6h-2c-1.1 0-2 .9-2 2s.9 2 2 2h2zM12 10h-2c-1.1 0-2 .9-2 2s.9 2 2 2h2zM12 14h-2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2zM12 6h2c1.1 0 2 .9 2 2s-.9 2-2 2h-2zM14 10c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2Z" />
    </g>
    <path
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
    />
  </svg>
);
export default SvgFigma;
