import * as React from "react";
import type { SVGProps } from "react";
const SvgRotateLeft = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.25 22h4.5C15.5 22 17 20.5 17 16.75v-4.5C17 8.5 15.5 7 11.75 7h-4.5C3.5 7 2 8.5 2 12.25v4.5C2 20.5 3.5 22 7.25 22"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M21.25 10.5c-.41 0-.75-.34-.75-.75 0-2.96-2.06-5.44-4.83-6.09l.27.45c.21.36.1.82-.26 1.03s-.82.1-1.03-.26L13.6 3.13a.75.75 0 0 1-.01-.75c.14-.23.39-.38.66-.38C18.52 2 22 5.48 22 9.75c0 .41-.34.75-.75.75"
    />
  </svg>
);
export default SvgRotateLeft;
