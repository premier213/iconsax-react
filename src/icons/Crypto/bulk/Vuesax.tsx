import * as React from "react";
import type { SVGProps } from "react";
const SvgVuesax = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 22.75c-.25 0-.49-.13-.63-.34l-9.04-14a.765.765 0 0 1 .22-1.04c.35-.22.81-.13 1.04.22l8.4 13.02 8.37-13.02c.22-.35.69-.45 1.04-.23s.45.69.23 1.04l-9 14c-.14.22-.37.35-.63.35"
    />
    <path
      fill="currentColor"
      d="M3.92 4h1.82c.17 0 .32.08.42.22l5.44 8.15c.2.3.63.3.83 0l5.44-8.15c.09-.14.25-.22.42-.22h1.82c.4 0 .63.44.42.77l-8.08 12.58c-.2.31-.64.31-.84 0L3.53 4.77A.477.477 0 0 1 3.92 4"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="m8 3 3.58 5.38c.2.3.63.3.83 0L16 3l-2.8 1V2h-2.4v2z"
    />
  </svg>
);
export default SvgVuesax;
