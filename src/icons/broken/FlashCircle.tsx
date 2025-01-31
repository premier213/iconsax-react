import * as React from "react";
import type { SVGProps } from "react";
const SvgFlashCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="m8.68 11.91 1.65.41-.95 3.84c-.22.9.22 1.2.98.67l5.18-3.59c.63-.44.54-.95-.21-1.14l-1.65-.41.95-3.84c.22-.9-.22-1.2-.98-.67l-5.18 3.59c-.63.44-.54.95.21 1.14"
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
export default SvgFlashCircle;
