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
      fill="currentColor"
      d="M15 22.75H9c-1.32 0-2.42-.13-3.35-.41a.77.77 0 0 1-.54-.78c.25-2.99 3.28-5.34 6.89-5.34s6.63 2.34 6.89 5.34c.03.36-.19.68-.54.78-.93.28-2.03.41-3.35.41m-8.28-1.69c.66.13 1.41.19 2.28.19h6c.87 0 1.62-.06 2.28-.19-.53-1.92-2.72-3.34-5.28-3.34s-4.75 1.42-5.28 3.34"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15 2H9C4 2 2 4 2 9v6c0 3.78 1.14 5.85 3.86 6.62.22-2.6 2.89-4.65 6.14-4.65s5.92 2.05 6.14 4.65C20.86 20.85 22 18.78 22 15V9c0-5-2-7-7-7m-3 12.17c-1.98 0-3.58-1.61-3.58-3.59S10.02 7 12 7s3.58 1.6 3.58 3.58-1.6 3.59-3.58 3.59"
    />
    <path
      fill="currentColor"
      d="M12 14.92a4.34 4.34 0 0 1-4.33-4.34c0-2.39 1.94-4.33 4.33-4.33s4.33 1.94 4.33 4.33A4.34 4.34 0 0 1 12 14.92m0-7.17a2.836 2.836 0 0 0 0 5.67 2.836 2.836 0 0 0 0-5.67"
    />
  </svg>
);
export default SvgUserSquare;
