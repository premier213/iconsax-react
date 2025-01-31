import * as React from "react";
import type { SVGProps } from "react";
const SvgBlogger = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17 11c-.55 0-1-.45-1-1V9q0-3-3-3H9Q6 6 6 9v6q0 3 3 3h6q3 0 3-3v-3c0-.55-.45-1-1-1m-7-1.75h2c.41 0 .75.34.75.75s-.34.75-.75.75h-2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75m4 5.5h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75"
    />
    <path
      fill="currentColor"
      d="M16.19 2H7.82C4.18 2 2.01 4.17 2.01 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2"
      opacity={0.4}
    />
  </svg>
);
export default SvgBlogger;
