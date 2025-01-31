import * as React from "react";
import type { SVGProps } from "react";
const SvgTextUnderline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20.95 4.13c-.29-.42-.66-.79-1.08-1.08C18.92 2.36 17.68 2 16.19 2H7.81c-.2 0-.4.01-.59.03C3.94 2.24 2 4.37 2 7.81v8.38c0 1.49.36 2.73 1.05 3.68.29.42.66.79 1.08 1.08.82.6 1.86.95 3.09 1.03.19.01.39.02.59.02h8.38c3.64 0 5.81-2.17 5.81-5.81V7.81c0-1.49-.36-2.73-1.05-3.68m-4.12 14.83H7.17c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9.67c.41 0 .75.34.75.75s-.34.75-.76.75m.75-8.34c0 3.08-2.5 5.58-5.58 5.58s-5.58-2.5-5.58-5.58V5.79c0-.41.34-.75.75-.75s.75.34.75.75v4.83c0 2.25 1.83 4.08 4.08 4.08s4.08-1.83 4.08-4.08V5.79c0-.41.34-.75.75-.75s.75.34.75.75z"
    />
  </svg>
);
export default SvgTextUnderline;
