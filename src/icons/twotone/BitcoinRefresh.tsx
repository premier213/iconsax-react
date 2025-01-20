import * as React from "react";
import type { SVGProps } from "react";
const SvgBitcoinRefresh = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.47 11.42 2.73 9.68 1 11.42M19.53 12.58l1.74 1.74 1.74-1.74"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.26 14.32V12c0-5.12-4.15-9.26-9.26-9.26-2.92 0-5.53 1.36-7.23 3.47M2.74 9.68V12c0 5.12 4.15 9.26 9.26 9.26 2.92 0 5.53-1.36 7.23-3.47"
    />
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      opacity={0.4}
    >
      <path d="M9 8.5h4.38c.97 0 1.75.88 1.75 1.75 0 .97-.78 1.75-1.75 1.75H9zM9 12h5c1.1 0 2 .78 2 1.75s-.9 1.75-2 1.75H9zM11.8 15.5v1.75M11.8 6.75V8.5" />
    </g>
  </svg>
);
export default SvgBitcoinRefresh;
