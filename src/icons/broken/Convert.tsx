import * as React from "react";
import type { SVGProps } from "react";
const SvgConvert = (props: SVGProps<SVGSVGElement>) => (
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
      d="m6.12 4 8.19 8.2.01-4.55M17.88 20l-8.19-8.2-.01 4.55"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20 6c1.25 1.67 2 3.75 2 6 0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2c1.43 0 2.8.3 4.03.85"
    />
  </svg>
);
export default SvgConvert;
