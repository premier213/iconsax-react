import * as React from "react";
import type { SVGProps } from "react";
const SvgDocumentCopy = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="M2 12.6C2 8.6 3.6 7 7.6 7h3M17 13.4v3c0 4-1.6 5.6-5.6 5.6H7.6c-4 0-5.6-1.6-5.6-5.6M13.8 13.4c-2.4 0-3.2-.8-3.2-3.2V7l6.4 6.4M11.6 2h4M7 5c0-1.66 1.34-3 3-3h2.62M22 8v6.19c0 1.55-1.26 2.81-2.81 2.81M22 8h-3c-2.25 0-3-.75-3-3V2z"
    />
  </svg>
);
export default SvgDocumentCopy;
