import * as React from "react";
import type { SVGProps } from "react";
const SvgReceiveSquare = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.19 2H7.82C4.17 2 2 4.17 2 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M11.471 15.04a.78.78 0 0 0 .53.22.75.75 0 0 0 .53-.22l3-3c.29-.29.29-.77 0-1.06a.754.754 0 0 0-1.06 0l-1.72 1.72V6.51c0-.41-.34-.75-.75-.75s-.75.34-.75.75v6.19l-1.72-1.72a.754.754 0 0 0-1.06 0c-.29.29-.29.77 0 1.06zM18.71 16.28a.75.75 0 0 0-.95-.47 18.33 18.33 0 0 1-11.53 0 .753.753 0 0 0-.95.47c-.13.39.08.82.47.95 2.01.67 4.12 1.01 6.24 1.01s4.23-.34 6.24-1.01c.4-.14.61-.56.48-.95"
    />
  </svg>
);
export default SvgReceiveSquare;
