import * as React from "react";
import type { SVGProps } from "react";
const SvgOmegaCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M17 17.25h-3.1c-.3 0-.57-.17-.69-.45a.75.75 0 0 1 .13-.81l1.62-1.79c.67-.75 1.05-1.7 1.05-2.68 0-1-.41-1.94-1.16-2.65A4.18 4.18 0 0 0 12 7.75c-1.06 0-2.1.41-2.85 1.12s-1.16 1.65-1.16 2.65c0 .98.37 1.93 1.05 2.68l1.62 1.79a.753.753 0 0 1-.56 1.26H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.41l-.49-.54a5.5 5.5 0 0 1-1.43-3.69c0-1.39.59-2.76 1.63-3.74A5.6 5.6 0 0 1 12 6.25c1.46 0 2.84.54 3.88 1.53 1.03.98 1.63 2.35 1.63 3.74 0 1.35-.51 2.66-1.43 3.69l-.49.54H17c.41 0 .75.34.75.75s-.34.75-.75.75"
    />
  </svg>
);
export default SvgOmegaCircle;
