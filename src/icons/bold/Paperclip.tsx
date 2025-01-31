import * as React from "react";
import type { SVGProps } from "react";
const SvgPaperclip = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2m.56 11.71c0 1.52-1.23 2.75-2.75 2.75s-2.75-1.23-2.75-2.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2a1.25 1.25 0 0 0 2.5 0v-3.14c0-1.79-1.46-3.25-3.25-3.25s-3.25 1.46-3.25 3.25V14c0 1.48 1.2 2.68 2.68 2.68.41 0 .75.34.75.75s-.34.75-.75.75c-2.3 0-4.18-1.88-4.18-4.18v-3.43c0-2.62 2.13-4.75 4.75-4.75s4.75 2.13 4.75 4.75z"
    />
  </svg>
);
export default SvgPaperclip;
