import * as React from "react";
import type { SVGProps } from "react";
const SvgEraser1 = (props: SVGProps<SVGSVGElement>) => (
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
      d="m13.58 14.69-2.32 2.32c-.64.65-1.69.65-2.34 0l-1.93-1.93c-.65-.65-.65-1.7 0-2.34l2.32-2.32z"
    />
    <path
      fill="currentColor"
      d="m17.01 11.26-3.43 3.43-4.27-4.27 3.43-3.43c.64-.65 1.69-.65 2.34 0l1.93 1.93c.65.65.65 1.7 0 2.34"
      opacity={0.6}
    />
  </svg>
);
export default SvgEraser1;
