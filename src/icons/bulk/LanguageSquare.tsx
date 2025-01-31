import * as React from "react";
import type { SVGProps } from "react";
const SvgLanguageSquare = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17 15.97c-1.31 0-2.56-.6-3.56-1.71a8.53 8.53 0 0 0 1.77-4.56h1.78c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-2.43c-.02 0-.04-.01-.06-.01s-.04.01-.06.01h-1.69v-.93c0-.41-.34-.75-.75-.75s-.75.34-.75.75v.93H7.01c-.41 0-.75.34-.75.75s.34.75.75.75h6.69c-.37 3.52-3.23 6.27-6.71 6.27-.41 0-.75.34-.75.75s.34.75.75.75c2.07 0 3.96-.8 5.41-2.11 1.27 1.36 2.88 2.11 4.59 2.11.41 0 .75-.34.75-.75s-.33-.75-.74-.75"
    />
  </svg>
);
export default SvgLanguageSquare;
