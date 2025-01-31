import * as React from "react";
import type { SVGProps } from "react";
const SvgMaximize = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18 9.25c-.41 0-.75.34-.75.75v1.25h-4.5v-4.5H14c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-4c-.41 0-.75.34-.75.75s.34.75.75.75h1.25v4.5h-4.5V10c0-.41-.34-.75-.75-.75s-.75.34-.75.75v4c0 .41.34.75.75.75s.75-.34.75-.75v-1.25h4.5v4.5H10c-.41 0-.75.34-.75.75s.34.75.75.75h4c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-1.25v-4.5h4.5V14c0 .41.34.75.75.75s.75-.34.75-.75v-4c0-.41-.34-.75-.75-.75"
    />
  </svg>
);
export default SvgMaximize;
