import * as React from "react";
import type { SVGProps } from "react";
const SvgFramer = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path fill="currentColor" d="M24 0H0v24h24z" opacity={0.58} />
    <path
      fill="currentColor"
      d="M4.5 10.49v5.94c0 .31.14.61.37.81l5.36 4.59c.7.6 1.77.1 1.77-.81v-4.1h4.91c.95 0 1.43-1.15.76-1.83L12 9.42H5.57c-.59-.01-1.07.47-1.07 1.07"
    />
    <path
      fill="currentColor"
      d="M18.43 1.91H7.09c-.95 0-1.43 1.15-.76 1.83L12 9.41h6.43c.59 0 1.07-.48 1.07-1.07V2.98c0-.59-.48-1.07-1.07-1.07"
      opacity={0.4}
    />
  </svg>
);
export default SvgFramer;
