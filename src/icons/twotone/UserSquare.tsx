import * as React from "react";
import type { SVGProps } from "react";
const SvgUserSquare = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="M18.14 21.62c-.88.26-1.92.38-3.14.38H9c-1.22 0-2.26-.12-3.14-.38.22-2.6 2.89-4.65 6.14-4.65s5.92 2.05 6.14 4.65"
      opacity={0.4}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M22 9v6c0 3.78-1.14 5.85-3.86 6.62-.88.26-1.92.38-3.14.38H9c-1.22 0-2.26-.12-3.14-.38C3.14 20.85 2 18.78 2 15V9c0-5 2-7 7-7h6c5 0 7 2 7 7"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.58 10.58c0 1.98-1.6 3.59-3.58 3.59s-3.58-1.61-3.58-3.59S10.02 7 12 7s3.58 1.6 3.58 3.58"
      opacity={0.4}
    />
  </svg>
);
export default SvgUserSquare;
