import * as React from "react";
import type { SVGProps } from "react";
const SvgScissor = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.5 10a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M5.5 21a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"
    />
    <path
      fill="currentColor"
      d="m15.25 11.98 7.2-5.38a.75.75 0 0 0-.9-1.2L14 11.05 8.45 6.9a.75.75 0 0 0-.9 1.2l5.2 3.89-5.9 4.42a.75.75 0 0 0 .9 1.2l6.26-4.68 7.55 5.65c.13.1.29.15.45.15a.75.75 0 0 0 .45-1.35z"
      opacity={0.4}
    />
  </svg>
);
export default SvgScissor;
