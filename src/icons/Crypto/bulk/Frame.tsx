import * as React from "react";
import type { SVGProps } from "react";
const SvgFrame = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path fill="currentColor" d="M24 0H0v24h24z" />
    <path fill="currentColor" d="m12 6 5-3 5 3v12l-5 3-10-6V9l10 6V9z" />
    <path
      fill="currentColor"
      d="m12 18-5 3-5-3V6l5-3 10 6v6L7 9v6z"
      opacity={0.4}
    />
  </svg>
);
export default SvgFrame;
