import * as React from "react";
import type { SVGProps } from "react";
const SvgForwardSquare = (props: SVGProps<SVGSVGElement>) => (
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
      d="m17.53 8.66-1.57-1.57a.754.754 0 0 0-1.06 0c-.29.29-.29.77 0 1.06l.33.33h-5.15c-2.11 0-3.83 1.72-3.83 3.83s1.72 3.83 3.83 3.83H15c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-4.92c-1.28 0-2.33-1.04-2.33-2.33s1.04-2.33 2.33-2.33h5.08l-.26.26c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.38-.07.53-.22l1.57-1.57c.29-.3.29-.77 0-1.07"
    />
  </svg>
);
export default SvgForwardSquare;
