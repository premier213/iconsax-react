import * as React from "react";
import type { SVGProps } from "react";
const SvgDocumentCopy = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 22 22"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16 12.4v3c0 4-1.6 5.6-5.6 5.6H6.6c-4 0-5.6-1.6-5.6-5.6v-3.8C1 7.6 2.6 6 6.6 6h3"
      opacity={0.4}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16 12.4h-3.2c-2.4 0-3.2-.8-3.2-3.2V6z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6 4c0-1.66 1.34-3 3-3h6M21 7v6.19c0 1.55-1.26 2.81-2.81 2.81"
      opacity={0.4}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 7h-3c-2.25 0-3-.75-3-3V1z"
    />
  </svg>
);
export default SvgDocumentCopy;
