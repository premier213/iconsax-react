import * as React from "react";
import type { SVGProps } from "react";
const SvgEraser = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21.03 22h-7.04a.749.749 0 1 1 0-1.5h7.04a.749.749 0 1 1 0 1.5"
    />
    <path
      fill="currentColor"
      d="m15.41 16.34-4.75 4.75a3.027 3.027 0 0 1-4.07.18c-.07-.06-.13-.12-.19-.18l-.87-.87-1.79-1.79-.86-.86c-.07-.07-.13-.14-.19-.21a3.01 3.01 0 0 1 .19-4.04l3.69-3.68 1.06-1.06z"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="m21.12 10.64-5.71 5.7-7.78-7.76 5.71-5.7a3.024 3.024 0 0 1 4.26 0l3.52 3.51a3.01 3.01 0 0 1 0 4.25"
    />
  </svg>
);
export default SvgEraser;
