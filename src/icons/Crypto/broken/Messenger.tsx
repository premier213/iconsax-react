import * as React from "react";
import type { SVGProps } from "react";
const SvgMessenger = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.13 5.55C2.8 7.12 2 9.11 2 11.26c0 2.9 1.44 5.48 3.68 7.18V22l3.36-1.89c.94.27 1.93.41 2.96.41 5.52 0 10-4.15 10-9.26S17.52 2 12 2c-1.38 0-2.7.26-3.89.73"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="m11.28 9.25-3.78 4.5 3.69-.9 1.55.9 3.76-4.5-3.51.9z"
    />
  </svg>
);
export default SvgMessenger;
