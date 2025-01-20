import * as React from "react";
import type { SVGProps } from "react";
const SvgNebulasNas = (props: SVGProps<SVGSVGElement>) => (
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
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      opacity={0.4}
    >
      <path d="m12 5.25-2.5 8 5-2.5z" />
      <path d="M14.08 10.96 18 12.25l-4.5 2.5-.4-.13L6 12.25l4-2M13 15.25l-1 3-2.5-4.68" />
    </g>
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
export default SvgNebulasNas;
