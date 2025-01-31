import * as React from "react";
import type { SVGProps } from "react";
const SvgCoin = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18.5 12.65v3.7c0 3.12-2.91 5.65-6.5 5.65s-6.5-2.53-6.5-5.65v-3.7C5.5 15.77 8.41 18 12 18s6.5-2.23 6.5-5.35"
    />
    <path
      fill="currentColor"
      d="M18.5 7.65v5c0 3.12-2.91 5.35-6.5 5.35s-6.5-2.23-6.5-5.35v-5c0 .91.25 1.75.69 2.47C7.26 11.88 9.46 13 12 13s4.74-1.12 5.81-2.88c.44-.72.69-1.56.69-2.47"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M18.5 7.65c0 .91-.25 1.75-.69 2.47C16.74 11.88 14.54 13 12 13s-4.74-1.12-5.81-2.88c-.44-.72-.69-1.56-.69-2.47C5.5 4.53 8.41 2 12 2c1.8 0 3.42.63 4.6 1.65 1.17 1.03 1.9 2.44 1.9 4"
    />
  </svg>
);
export default SvgCoin;
