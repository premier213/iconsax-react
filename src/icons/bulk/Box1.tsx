import * as React from "react";
import type { SVGProps } from "react";
const SvgBox1 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21.04 7.19 12 12.42 2.96 7.19c.4-.74.98-1.39 1.63-1.75l5.34-2.96c1.14-.64 3-.64 4.14 0l5.34 2.96c.65.36 1.23 1.01 1.63 1.75"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M12 12.42V22c-.75 0-1.5-.16-2.07-.48l-5.34-2.96c-1.21-.67-2.2-2.35-2.2-3.73V9.17c0-.64.22-1.34.57-1.98z"
      opacity={0.6}
    />
    <path
      fill="currentColor"
      d="M21.61 9.17v5.66c0 1.38-.99 3.06-2.2 3.73l-5.34 2.96c-.57.32-1.32.48-2.07.48v-9.58l9.04-5.23c.35.64.57 1.34.57 1.98"
    />
  </svg>
);
export default SvgBox1;
