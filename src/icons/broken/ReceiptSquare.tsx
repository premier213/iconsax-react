import * as React from "react";
import type { SVGProps } from "react";
const SvgReceiptSquare = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 12.94V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17 13.04v2.66c0 1.57-.86 1.94-1.9.82-.48-.51-1.22-.47-1.64.09l-.6.8c-.47.63-1.25.63-1.72 0l-.59-.79c-.42-.56-1.16-.6-1.64-.09-1.05 1.12-1.9.75-1.9-.82V9.08c0-2.37.56-2.96 2.78-2.96h4.44c2.22 0 2.78.59 2.78 2.96"
    />
  </svg>
);
export default SvgReceiptSquare;
