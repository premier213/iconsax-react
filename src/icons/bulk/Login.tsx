import * as React from "react";
import type { SVGProps } from "react";
const SvgLogin = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.76 2c-.48 0-.86.38-.86.86v18.29c0 .47.38.86.86.86 5.89 0 10-4.11 10-10S16.64 2 10.76 2"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="m15.9 11.54-2.84-2.85a.754.754 0 0 0-1.06 0c-.29.29-.29.77 0 1.06l1.56 1.56H3.99c-.41 0-.75.34-.75.75s.34.75.75.75h9.57L12 14.38c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.38-.07.53-.22l2.84-2.85c.3-.29.3-.76 0-1.05"
    />
  </svg>
);
export default SvgLogin;
