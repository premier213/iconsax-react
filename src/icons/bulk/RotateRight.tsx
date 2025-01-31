import * as React from "react";
import type { SVGProps } from "react";
const SvgRotateRight = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.75 22h-4.5C8.5 22 7 20.5 7 16.75v-4.5C7 8.5 8.5 7 12.25 7h4.5C20.5 7 22 8.5 22 12.25v4.5C22 20.5 20.5 22 16.75 22"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M2.75 10.5c.41 0 .75-.34.75-.75 0-2.96 2.06-5.44 4.83-6.09l-.27.45c-.21.36-.1.82.26 1.03s.82.1 1.03-.26l1.05-1.75c.14-.23.14-.52.01-.75A.78.78 0 0 0 9.75 2C5.48 2 2 5.48 2 9.75c0 .41.34.75.75.75"
    />
  </svg>
);
export default SvgRotateRight;
