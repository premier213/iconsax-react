import * as React from "react";
import type { SVGProps } from "react";
const SvgMakerMkr = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path fill="currentColor" d="M24 0H0v24h24z" />
    <path
      fill="currentColor"
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M10.75 15.25c-.41 0-.75-.34-.75-.75v-2.08l-2.67-1.6v3.68c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-5a.745.745 0 0 1 1.13-.64l4.17 2.5c.23.14.36.38.36.64v2.5a.74.74 0 0 1-.74.75M17.42 15.25c-.41 0-.75-.34-.75-.75v-3.68L14 12.42v2.08c0 .41-.34.75-.75.75s-.75-.34-.75-.75V12c0-.26.14-.51.36-.64l4.17-2.5c.23-.14.52-.14.75-.01.24.13.38.38.38.65v5a.74.74 0 0 1-.74.75"
    />
  </svg>
);
export default SvgMakerMkr;
