import * as React from "react";
import type { SVGProps } from "react";
const SvgPlayAdd = (props: SVGProps<SVGSVGElement>) => (
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
      d="M23 19c0 .75-.21 1.46-.58 2.06-.21.36-.48.68-.79.94-.7.63-1.62 1-2.63 1a3.97 3.97 0 0 1-3.42-1.94A3.9 3.9 0 0 1 15 19c0-1.26.58-2.39 1.5-3.12A3.999 3.999 0 0 1 23 19M20.49 18.98h-2.98M19 17.52v2.99"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.97 2.85C9.2 2.3 10.57 2 12 2c5.52 0 10 4.48 10 10 0 1.31-.25 2.57-.72 3.72M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10 1.32 0 2.58-.26 3.73-.73"
    />
  </svg>
);
export default SvgPlayAdd;
