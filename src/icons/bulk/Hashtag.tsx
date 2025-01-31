import * as React from "react";
import type { SVGProps } from "react";
const SvgHashtag = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M13.86 6.65h-3.72c-1.92 0-3.49 1.56-3.49 3.49v3.72a3.5 3.5 0 0 0 3.49 3.49h3.72c1.92 0 3.49-1.56 3.49-3.49v-3.72a3.5 3.5 0 0 0-3.49-3.49m2.09 3.49v1.16H12.7V8.05h1.16c1.15 0 2.09.94 2.09 2.09m-5.81-2.09h1.16v3.26H8.05v-1.16c0-1.16.94-2.1 2.09-2.1m-2.09 5.81V12.7h3.26v3.26h-1.16c-1.16-.01-2.1-.95-2.1-2.1m5.81 2.09H12.7V12.7h3.26v1.16a2.11 2.11 0 0 1-2.1 2.09"
    />
  </svg>
);
export default SvgHashtag;
