import * as React from "react";
import type { SVGProps } from "react";
const SvgSearchZoomIn = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.5 11h5M11 13.5v-5M11 2a9 9 0 1 1-4.07.97M19.071 20.97c.53 1.6 1.74 1.76 2.67.36.86-1.28.3-2.33-1.24-2.33-1.15 0-1.79.89-1.43 1.97"
    />
  </svg>
);
export default SvgSearchZoomIn;
