import * as React from "react";
import type { SVGProps } from "react";
const SvgVideoTick = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 9c0-5 2-7 7-7h6c5 0 7 2 7 7v6c0 .23 0 .45-.02.67-.04-.06-.09-.12-.14-.17-.01-.01-.02-.03-.03-.04-.81-.9-2-1.46-3.31-1.46-1.26 0-2.41.52-3.23 1.36a4.5 4.5 0 0 0-.62 5.46c.22.37.5.71.82.99.02.01.03.02.04.03.05.05.1.09.16.14-.21.02-.44.02-.67.02H9c-5 0-7-2-7-7v-1.97M2.52 7.11h18.96M8.52 2.11v4.86M15.48 2.11v4.41"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M23 18.5a4.5 4.5 0 0 1-1.54 3.38c-.79.7-1.82 1.12-2.96 1.12-1.07 0-2.06-.38-2.83-1.02h-.01A4.5 4.5 0 0 1 14 18.5c0-1.42.65-2.69 1.69-3.51A4.47 4.47 0 0 1 18.5 14c1.41 0 2.66.64 3.48 1.65.64.77 1.02 1.77 1.02 2.85"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.75 18.5 1.11 1.11 2.4-2.22"
    />
  </svg>
);
export default SvgVideoTick;
