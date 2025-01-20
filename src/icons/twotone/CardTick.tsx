import * as React from "react";
import type { SVGProps } from "react";
const SvgCardTick = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 10h20"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.55 20.5H6.44c-3.55 0-4.45-.88-4.45-4.39V7.89c0-3.18.74-4.2 3.53-4.36.28-.01.59-.02.92-.02h11.11c3.55 0 4.45.88 4.45 4.39v4.41"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M6 16h4M22 18c0 .75-.21 1.46-.58 2.06A3.97 3.97 0 0 1 18 22a3.97 3.97 0 0 1-3.42-1.94A3.9 3.9 0 0 1 14 18c0-2.21 1.79-4 4-4s4 1.79 4 4"
      opacity={0.4}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.44 18 .99.99 2.13-1.97"
      opacity={0.4}
    />
  </svg>
);
export default SvgCardTick;
