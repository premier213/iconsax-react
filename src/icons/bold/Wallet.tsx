import * as React from "react";
import type { SVGProps } from "react";
const SvgWallet = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21.45 13.64v1a.5.5 0 0 1-.49.5H19.5c-.53 0-1.01-.39-1.05-.91-.03-.31.09-.6.29-.8a.95.95 0 0 1 .7-.29h1.51c.29.01.5.23.5.5"
    />
    <path
      fill="currentColor"
      d="M17.99 12.69c-.5.49-.74 1.22-.54 1.98.26.93 1.17 1.52 2.13 1.52h.87c.55 0 1 .45 1 1v.19c0 2.07-1.69 3.76-3.76 3.76H6.21c-2.07 0-3.76-1.69-3.76-3.76v-6.73c0-1.23.59-2.32 1.5-3 .63-.48 1.41-.76 2.26-.76h11.48c2.07 0 3.76 1.69 3.76 3.76v.44c0 .55-.45 1-1 1h-1.02c-.56 0-1.07.22-1.44.6M16.2 4.82c.27.27.04.69-.34.69L8.18 5.5c-.44 0-.67-.54-.35-.85l1.62-1.63a3.525 3.525 0 0 1 4.96 0l1.75 1.77c.01.01.03.02.04.03"
    />
  </svg>
);
export default SvgWallet;
