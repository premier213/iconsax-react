import * as React from "react";
import type { SVGProps } from "react";
const SvgChart2 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M16.42 7.81v8.38c0 .64-.52 1.16-1.16 1.16-.65 0-1.17-.52-1.17-1.16V7.81c0-.64.52-1.16 1.17-1.16.64 0 1.16.52 1.16 1.16M9.91 12.93v3.26c0 .64-.52 1.16-1.17 1.16-.64 0-1.16-.52-1.16-1.16v-3.26c0-.64.52-1.16 1.16-1.16.65 0 1.17.52 1.17 1.16"
    />
  </svg>
);
export default SvgChart2;
