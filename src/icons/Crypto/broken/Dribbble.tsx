import * as React from "react";
import type { SVGProps } from "react";
const SvgDribbble = (props: SVGProps<SVGSVGElement>) => (
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
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M18.5 4.79c-2.6 4.55-7.61 7.16-12.83 6.69l-3.17-.29M5.5 19.37c2.6-4.55 7.61-7.16 12.83-6.69l3.17.29"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="m7.63 3 3.18 3.95c2.13 2.64 3.64 5.71 4.44 9l1.21 4.99"
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
export default SvgDribbble;
