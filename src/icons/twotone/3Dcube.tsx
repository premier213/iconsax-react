import * as React from "react";
import type { SVGProps } from "react";
const Svg3Dcube = (props: SVGProps<SVGSVGElement>) => (
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
      d="m12.92 2.26 6.51 3.51c.76.41.76 1.58 0 1.99l-6.51 3.51c-.58.31-1.26.31-1.84 0L4.57 7.76c-.76-.41-.76-1.58 0-1.99l6.51-3.51c.58-.31 1.26-.31 1.84 0"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m3.61 10.13 6.05 3.03c.75.38 1.23 1.15 1.23 1.99v5.72c0 .83-.87 1.36-1.61.99l-6.05-3.03A2.24 2.24 0 0 1 2 16.84v-5.72c0-.83.87-1.36 1.61-.99M20.39 10.13l-6.05 3.03c-.75.38-1.23 1.15-1.23 1.99v5.72c0 .83.87 1.36 1.61.99l6.05-3.03c.75-.38 1.23-1.15 1.23-1.99v-5.72c0-.83-.87-1.36-1.61-.99"
      opacity={0.4}
    />
  </svg>
);
export default Svg3Dcube;
