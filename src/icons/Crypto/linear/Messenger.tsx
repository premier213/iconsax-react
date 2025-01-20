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
      d="M5.7 18.4V22L9 20.1c.9.3 1.9.4 3 .4 5.5 0 10-4.1 10-9.3C22 6.1 17.5 2 12 2S2 6.1 2 11.3c0 2.9 1.4 5.4 3.7 7.1"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="m11.3 9.2-3.8 4.5 3.7-.9 1.5.9 3.8-4.5-3.5.9z"
    />
  </svg>
);
export default SvgMessenger;
