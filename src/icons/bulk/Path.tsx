import * as React from "react";
import type { SVGProps } from "react";
const SvgPath = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="m20.02 10.7-2.8 1.77-5.66-5.66 1.76-2.8c.82-1.29 2.46-1.35 3.67-.15l3.18 3.18c1.13 1.13 1.06 2.89-.15 3.66"
    />
    <path
      fill="currentColor"
      d="M14.71 19.95 6 20.98c-.6.07-1.14-.02-1.59-.24a2.4 2.4 0 0 1-1.11-1.11c-.22-.45-.3-.99-.24-1.58L4.1 9.33c.25-2.18 1.06-2.89 3.36-2.76l4.12.25 5.66 5.66.24 4.12c.21 2.3-.58 3.1-2.77 3.35"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M7.98 17.15 4.4 20.73a2.4 2.4 0 0 1-1.11-1.11l3.59-3.59c.31-.3.81-.3 1.11 0 .31.32.31.81-.01 1.12"
    />
  </svg>
);
export default SvgPath;
