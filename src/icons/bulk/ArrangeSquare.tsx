import * as React from "react";
import type { SVGProps } from "react";
const SvgArrangeSquare = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17.85 13.53a.78.78 0 0 0-.41-.41.7.7 0 0 0-.29-.06H6.85c-.41 0-.75.34-.75.75s.34.75.75.75h8.5l-1.76 1.76c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.38-.07.53-.22l3.04-3.04c.07-.07.12-.15.16-.24a.8.8 0 0 0 0-.57M6.15 10.47c.08.18.22.33.41.41.09.04.19.06.29.06h10.31c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-8.5l1.76-1.76c.29-.29.29-.77 0-1.06a.755.755 0 0 0-1.06 0L6.32 9.65c-.07.07-.13.16-.17.25a.8.8 0 0 0 0 .57"
    />
  </svg>
);
export default SvgArrangeSquare;
