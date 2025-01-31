import * as React from "react";
import type { SVGProps } from "react";
const SvgHierarchySquare = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.55 14.55v-4.29C9.39 9.95 10 9.15 10 8.2 10 6.99 9.01 6 7.8 6s-2.2.99-2.2 2.2c0 .95.61 1.75 1.45 2.06v4.29c-.76.3-1.3 1.04-1.3 1.9 0 1.13.92 2.05 2.05 2.05s2.05-.92 2.05-2.05c0-.86-.54-1.6-1.3-1.9M17.499 14.55v-5.8c0-.96-.79-1.75-1.75-1.75h-1.13l.21-.17c.32-.27.36-.74.1-1.06a.76.76 0 0 0-1.06-.1l-1.8 1.5a.761.761 0 0 0 0 1.16l1.8 1.5c.14.12.31.17.48.17a.75.75 0 0 0 .48-1.33l-.21-.17h1.13c.14 0 .25.11.25.25v5.8c-.76.3-1.3 1.04-1.3 1.9 0 1.13.92 2.05 2.05 2.05s2.05-.92 2.05-2.05c0-.86-.54-1.6-1.3-1.9"
    />
  </svg>
);
export default SvgHierarchySquare;
