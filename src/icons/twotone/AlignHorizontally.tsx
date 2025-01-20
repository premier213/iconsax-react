import * as React from "react";
import type { SVGProps } from "react";
const SvgAlignHorizontally = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.75 17.4V6.6c0-1.5.64-2.1 2.23-2.1h1.04c1.59 0 2.23.6 2.23 2.1v10.8c0 1.5-.64 2.1-2.23 2.1H6.98c-1.59 0-2.23-.6-2.23-2.1M13.25 15.4V8.6c0-1.5.64-2.1 2.23-2.1h1.04c1.59 0 2.23.6 2.23 2.1v6.8c0 1.5-.64 2.1-2.23 2.1h-1.04c-1.59 0-2.23-.6-2.23-2.1"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M2 12h2.4M11 12h2M22 12h-2.69"
      opacity={0.4}
    />
  </svg>
);
export default SvgAlignHorizontally;
