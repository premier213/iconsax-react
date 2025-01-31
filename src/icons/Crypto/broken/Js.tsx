import * as React from "react";
import type { SVGProps } from "react";
const SvgJs = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.51 2.27c.3-.17.67-.17.97 0l8 4.44c.32.18.51.51.51.87v8.82a1 1 0 0 1-.51.87l-8 4.44c-.3.17-.67.17-.97 0L10 21M9 9l-.01 7.93c0 1.52-1.64 2.49-2.97 1.75l-2.51-1.39a.99.99 0 0 1-.51-.87V7.6c0-.36.2-.7.51-.87l3.7-2.06"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M17 10.75C17 9.78 16.22 9 15.25 9H13.5c-.97 0-1.75.78-1.75 1.75s.78 1.75 1.75 1.75h1.75c.97 0 1.75.78 1.75 1.75S16.22 16 15.25 16H13.5c-.97 0-1.75-.78-1.75-1.75"
    />
  </svg>
);
export default SvgJs;
