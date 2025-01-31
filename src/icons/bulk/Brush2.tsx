import * as React from "react";
import type { SVGProps } from "react";
const SvgBrush2 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.5 19.5V18h-5c-.55 0-1.05-.22-1.41-.59-.37-.36-.59-.86-.59-1.41 0-1.03.8-1.89 1.81-1.99.06-.01.12-.01.19-.01h15c.07 0 .13 0 .19.01.48.04.9.25 1.22.58.41.4.63.97.58 1.59-.09 1.05-1.04 1.82-2.1 1.82H14.5v1.5a2.5 2.5 0 0 1-5 0"
    />
    <path
      fill="currentColor"
      d="m20.17 5.3-.48 8.71c-.06-.01-.12-.01-.19-.01h-15c-.07 0-.13 0-.19.01L3.83 5.3A2.996 2.996 0 0 1 6.81 2h10.38c1.77 0 3.16 1.53 2.98 3.3"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M8.74 2v5c0 .41-.34.75-.75.75s-.75-.34-.75-.75V2zM12.75 2v2c0 .41-.34.75-.75.75s-.75-.34-.75-.75V2z"
    />
  </svg>
);
export default SvgBrush2;
