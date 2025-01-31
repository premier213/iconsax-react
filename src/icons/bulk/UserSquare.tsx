import * as React from "react";
import type { SVGProps } from "react";
const SvgUserSquare = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22 7.81v8.38c0 2.81-1.29 4.74-3.56 5.47-.66.23-1.42.34-2.25.34H7.81c-.83 0-1.59-.11-2.25-.34C3.29 20.93 2 19 2 16.19V7.81C2 4.17 4.17 2 7.81 2h8.38C19.83 2 22 4.17 22 7.81"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M18.44 21.66c-.66.23-1.42.34-2.25.34H7.81c-.83 0-1.59-.11-2.25-.34.35-2.64 3.11-4.69 6.44-4.69s6.09 2.05 6.44 4.69M15.58 11.58c0 1.98-1.6 3.59-3.58 3.59s-3.58-1.61-3.58-3.59S10.02 8 12 8s3.58 1.6 3.58 3.58"
    />
  </svg>
);
export default SvgUserSquare;
