import * as React from "react";
import type { SVGProps } from "react";
const SvgCardTick1 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 8.5h11.5M6 16.5h2M10.5 16.5h4"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M2 11.01V7.89c0-3.51.89-4.39 4.44-4.39h7.06M22 11.03v5.08c0 3.51-.89 4.39-4.44 4.39H6.44C2.89 20.5 2 19.62 2 16.11v-1.1M16.5 6 18 7.5l4-4"
    />
  </svg>
);
export default SvgCardTick1;
