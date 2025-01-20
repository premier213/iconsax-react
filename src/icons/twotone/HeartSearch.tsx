import * as React from "react";
import type { SVGProps } from "react";
const SvgHeartSearch = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21.49 12c.32-1.02.51-2.12.51-3.31 0-3.09-2.49-5.59-5.56-5.59-1.82 0-3.43.88-4.44 2.24A5.53 5.53 0 0 0 7.56 3.1C4.49 3.1 2 5.6 2 8.69c0 7 6.48 11.13 9.38 12.13.17.06.39.09.62.09"
      opacity={0.4}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.74 21a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4M21.54 21.6l-1-1"
    />
  </svg>
);
export default SvgHeartSearch;
