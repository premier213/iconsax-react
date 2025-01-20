import * as React from "react";
import type { SVGProps } from "react";
const SvgStatusUp = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="M6.88 18.15v-2.07M12 18.15v-4.14M17.12 18.15v-6.22"
      opacity={0.4}
    />
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      opacity={0.4}
    >
      <path d="m17.12 5.85-.46.54a18.9 18.9 0 0 1-9.78 6.04" />
      <path strokeLinejoin="round" d="M14.19 5.85h2.93v2.92" />
    </g>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7"
    />
  </svg>
);
export default SvgStatusUp;
