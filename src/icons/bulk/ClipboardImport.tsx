import * as React from "react";
import type { SVGProps } from "react";
const SvgClipboardImport = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.24 3.65H7.76c-2.47 0-4.47 2.01-4.47 4.47v9.41C3.29 19.99 5.3 22 7.76 22h8.47c2.47 0 4.47-2.01 4.47-4.47V8.12c.01-2.47-2-4.47-4.46-4.47"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M14.35 2h-4.7c-1.04 0-1.89.84-1.89 1.88v.94c0 1.04.84 1.88 1.88 1.88h4.71c1.04 0 1.88-.84 1.88-1.88v-.94C16.24 2.84 15.39 2 14.35 2M15 13.25c-.41 0-.75.34-.75.75v1.19l-4.72-4.72a.754.754 0 0 0-1.06 0c-.29.29-.29.77 0 1.06l4.72 4.72H12c-.41 0-.75.34-.75.75s.34.75.75.75h3c.41 0 .75-.34.75-.75v-3c0-.41-.34-.75-.75-.75"
    />
  </svg>
);
export default SvgClipboardImport;
