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
      fill="currentColor"
      d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2M17 15.71c0 1.57-.86 1.94-1.9.82-.48-.51-1.22-.47-1.64.09l-.59.79c-.47.63-1.25.63-1.72 0l-.6-.8c-.42-.56-1.16-.6-1.64-.09-1.05 1.12-1.91.75-1.91-.81V9.08c0-2.37.56-2.96 2.78-2.96h4.44c2.22 0 2.78.59 2.78 2.96z"
    />
  </svg>
);
export default SvgReceiptSquare;
