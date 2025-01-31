import * as React from "react";
import type { SVGProps } from "react";
const SvgCardCoin = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 17.06h10"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.69 22H4.23c-1.78 0-2.22-.44-2.22-2.2v-4.1c0-1.76.44-2.2 2.22-2.2h5.56c1.78 0 2.22.44 2.22 2.2v4.11c0 1.76-.44 2.2-2.22 2.2M22 15c0 3.87-3.13 7-7 7l1.05-1.75M2 9c0-3.87 3.13-7 7-7L7.95 3.75M18.5 11c2.49 0 4.5-2.01 4.5-4.5S20.99 2 18.5 2 14 4.01 14 6.5c0 .59.11 1.15.32 1.66"
    />
  </svg>
);
export default SvgCardCoin;
