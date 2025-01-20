import * as React from "react";
import type { SVGProps } from "react";
const SvgVolumeSlash = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15 8.37v-.96c0-2.98-2.07-4.12-4.59-2.54L7.49 6.7c-.32.19-.69.3-1.06.3H5q-3 0-3 3v4q0 3 3 3h2M10.41 19.13c2.52 1.58 4.59.43 4.59-2.54v-3.64M18.81 9.42c.9 2.15.63 4.66-.81 6.58M21.15 7.8a10.82 10.82 0 0 1-1.32 10.7M22 2 2 22"
    />
  </svg>
);
export default SvgVolumeSlash;
