import * as React from "react";
import type { SVGProps } from "react";
const SvgVolumeSlash = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 22 22"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14 7.37v-.96c0-2.98-2.07-4.12-4.59-2.54L6.49 5.7c-.32.19-.69.3-1.06.3H4Q1 6 1 9v4q0 3 3 3h2"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.41 18.13c2.52 1.58 4.59.43 4.59-2.54v-3.64M17.81 8.42c.9 2.15.63 4.66-.81 6.58M20.15 6.8a10.82 10.82 0 0 1-1.32 10.7"
      opacity={0.4}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 1 1 21"
    />
  </svg>
);
export default SvgVolumeSlash;
