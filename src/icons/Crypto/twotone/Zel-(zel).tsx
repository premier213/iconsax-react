import * as React from "react";
import type { SVGProps } from "react";
const SvgZelZel = (props: SVGProps<SVGSVGElement>) => (
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
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      opacity={0.4}
    >
      <path d="M10.5 11.46v2.85L8 15.75l-2.5-1.44v-2.85L8 10.02l1.25.72zM18.5 11.46v2.85L16 15.75l-2.5-1.44v-2.85l1.25-.72 1.25-.72z" />
      <path d="M14.75 9.33v1.41l-1.25.72v1.73l-1.5.86-1.5-.86v-1.73l-1.25-.72V9.33L12 7.75z" />
    </g>
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
    />
  </svg>
);
export default SvgZelZel;
