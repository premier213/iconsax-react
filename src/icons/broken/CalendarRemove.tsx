import * as React from "react";
import type { SVGProps } from "react";
const SvgCalendarRemove = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M8 2v3M16 2v3M3.5 9.09h17M18 23a4 4 0 1 0 0-8 4 4 0 0 0 0 8M19.07 20.11 16.95 18M19.05 18.02l-2.12 2.12"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M3 13.01V8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5v7.86c-.73-.83-1.8-1.36-3-1.36-2.21 0-4 1.79-4 4 0 .75.21 1.46.58 2.06.21.36.48.68.79.94H8c-3.5 0-5-2-5-5"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.995 13.7h.009M8.295 13.7h.01M8.295 16.7h.01"
    />
  </svg>
);
export default SvgCalendarRemove;
