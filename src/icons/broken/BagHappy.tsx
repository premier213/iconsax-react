import * as React from "react";
import type { SVGProps } from "react";
const SvgBagHappy = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15.34 15.28c.1-.33.16-.67.16-1.03M8.5 14.25c0 1.92 1.58 3.5 3.5 3.5.36 0 .71-.06 1.04-.16M8.81 2 5.19 5.63M15.19 2l3.62 3.63"
    />
    <path
      stroke="currentColor"
      strokeWidth={1.5}
      d="M2 7.85c0-1.85.99-2 2.22-2h15.56c1.23 0 2.22.15 2.22 2 0 2.15-.99 2-2.22 2H4.22C2.99 9.85 2 10 2 7.85Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M4.91 18.64C5.23 20.58 6 22 8.86 22h6.03c3.11 0 3.57-1.36 3.93-3.24L20.5 10M3.5 10l.69 4.25"
    />
  </svg>
);
export default SvgBagHappy;
