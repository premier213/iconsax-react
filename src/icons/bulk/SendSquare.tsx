import * as React from "react";
import type { SVGProps } from "react";
const SvgSendSquare = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.19 2H7.82C4.18 2 2.01 4.17 2.01 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M11.47 5.98a.75.75 0 0 1 1.06 0l3 3a.75.75 0 1 1-1.06 1.06L12 7.57l-2.47 2.47a.75.75 0 0 1-1.06-1.06z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 5.76a.75.75 0 0 1 .75.75v8a.75.75 0 0 1-1.5 0v-8a.75.75 0 0 1 .75-.75M5.289 16.272a.75.75 0 0 1 .949-.473 18.2 18.2 0 0 0 11.525 0 .75.75 0 0 1 .475 1.422 19.7 19.7 0 0 1-12.476 0 .75.75 0 0 1-.473-.949"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSendSquare;
