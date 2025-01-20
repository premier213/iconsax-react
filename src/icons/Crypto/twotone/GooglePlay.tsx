import * as React from "react";
import type { SVGProps } from "react";
const SvgGooglePlay = (props: SVGProps<SVGSVGElement>) => (
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
      d="m16.92 8.8-3.22 3.22-9.58 9.58-.58.29c-.71.35-1.54-.16-1.54-.96V3.07c0-.8.83-1.31 1.55-.96z"
    />
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      opacity={0.4}
    >
      <path d="m21.4 12.95-4.52 2.26-3.19-3.19 3.22-3.22 4.49 2.25c.79.39.79 1.51 0 1.9" />
      <path d="M16.89 15.21 4.12 21.6l9.58-9.58zM13.7 12.02 4.09 2.41" />
    </g>
  </svg>
);
export default SvgGooglePlay;
