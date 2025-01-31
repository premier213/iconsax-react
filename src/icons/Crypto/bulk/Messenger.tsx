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
    <path fill="currentColor" d="M24 0H0v24h24z" opacity={0.58} />
    <path
      fill="currentColor"
      d="M5.68 18.44v1.85c0 .77.82 1.25 1.49.87l1.86-1.05c.94.27 1.93.41 2.96.41 5.52 0 10-4.15 10-9.26S17.51 2 11.99 2s-10 4.15-10 9.26c.01 2.89 1.45 5.48 3.69 7.18"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="m11.02 9.56-2.54 3.02c-.31.37.03.92.5.81l2.01-.49c.13-.03.26-.01.37.05l1.01.59c.21.12.48.08.63-.11l2.5-2.99c.31-.37-.04-.93-.51-.8l-1.82.47a.5.5 0 0 1-.36-.04l-1.18-.62a.48.48 0 0 0-.61.11"
    />
  </svg>
);
export default SvgMessenger;
