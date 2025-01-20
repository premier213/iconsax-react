import * as React from "react";
import type { SVGProps } from "react";
const SvgBucket = (props: SVGProps<SVGSVGElement>) => (
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
      d="m9.69 3.29 7.35 7.35c.37.37.37.97 0 1.34L11.02 18c-1.34 1.34-2.67 1.34-4.01 0L3 13.99c-1.34-1.34-1.34-2.67 0-4.01l4.31-4.31M8.35 1.95l1.34 1.34M2.07 11.92l15.12-.66M3 22h7M13 22h3"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.85 15S17 17.01 17 18.24c0 1.02.83 1.85 1.85 1.85s1.85-.83 1.85-1.85c0-1.23-1.85-3.24-1.85-3.24"
    />
  </svg>
);
export default SvgBucket;
