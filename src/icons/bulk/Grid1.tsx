import * as React from "react";
import type { SVGProps } from "react";
const SvgGrid1 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.51 2v6.5H2v-.69C2 4.17 4.17 2 7.81 2zM22 7.81v.69h-6.49V2h.68C19.83 2 22 4.17 22 7.81M22 15.5v.69c0 3.64-2.17 5.81-5.81 5.81h-.68v-6.5zM8.51 15.5V22h-.7C4.17 22 2 19.83 2 16.19v-.69z"
    />
    <path
      fill="currentColor"
      d="M8.51 8.5H2v7h6.51zM22 8.5h-6.49v7H22z"
      opacity={0.4}
    />
    <path fill="currentColor" d="M15.51 8.5h-7v7h7z" />
    <path
      fill="currentColor"
      d="M15.51 2h-7v6.5h7zM15.51 15.5h-7V22h7z"
      opacity={0.4}
    />
  </svg>
);
export default SvgGrid1;
