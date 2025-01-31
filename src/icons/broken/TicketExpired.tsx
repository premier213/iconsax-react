import * as React from "react";
import type { SVGProps } from "react";
const SvgTicketExpired = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22 10.75v-.92c0-3.7-.92-4.62-4.62-4.62H11V12M10.91 20h6.47c3.7 0 4.62-.92 4.62-4.62-1.28 0-2.31-1.04-2.31-2.31"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11 17v3H8.23c-1.48 0-2.35-1.01-3.31-3.33l-.18-.45a2.35 2.35 0 0 0 1.29-3.09 2.37 2.37 0 0 0-3.1-1.29l-.17-.43c-1.44-3.52-.94-4.75 2.58-6.2l2.64-1.08L11 11.45V14M8.17 20H8"
    />
  </svg>
);
export default SvgTicketExpired;
