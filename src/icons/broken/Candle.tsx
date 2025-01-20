import * as React from "react";
import type { SVGProps } from "react";
const SvgCandle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.5 22v-7M6.5 5V2M17.5 22v-3M17.5 9V2M9.5 11.02V13c0 1.1-.5 2-2 2h-2c-1.5 0-2-.9-2-2V7c0-1.1.5-2 2-2h2c1.5 0 2 .9 2 2M20.5 11v6c0 1.1-.5 2-2 2h-2c-1.5 0-2-.9-2-2v-6c0-1.1.5-2 2-2h2c1.5 0 2 .9 2 2"
    />
  </svg>
);
export default SvgCandle;
