import * as React from "react";
import type { SVGProps } from "react";
const SvgMask2 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17 12c0 2.76-2.24 5-5 5V7c1.32 0 2.52.51 3.42 1.35M12 7v10c-2.76 0-5-2.24-5-5s2.24-5 5-5M12 22v-5M12 7V2"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85"
    />
  </svg>
);
export default SvgMask2;
