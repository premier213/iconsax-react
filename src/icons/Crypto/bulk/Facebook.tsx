import * as React from "react";
import type { SVGProps } from "react";
const SvgFacebook = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path fill="currentColor" d="M24 0H0v24h24z" opacity={0.58} />
    <path
      fill="currentColor"
      d="M16.19 2H7.82C4.18 2 2.01 4.17 2.01 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="m13.92 9.28.05 2.95 2.63-.04c.19 0 .33.17.3.35l-.35 1.91c-.03.14-.15.24-.29.25l-2.25.04.12 7.25-3 .05-.12-7.25-1.7.03c-.17 0-.3-.13-.3-.3l-.03-1.9c0-.17.13-.3.3-.3l1.7-.03-.05-3.25a2.996 2.996 0 0 1 2.95-3.05l2.7-.04c.17 0 .3.13.3.3l.04 2.4c0 .17-.13.3-.3.3l-2.4.04c-.17-.01-.3.13-.3.29"
    />
  </svg>
);
export default SvgFacebook;
