import * as React from "react";
import type { SVGProps } from "react";
const SvgRadar1 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 19.75c-4.27 0-7.75-3.48-7.75-7.75 0-1.36.36-2.69 1.03-3.86.21-.36.67-.48 1.02-.28l6.07 3.49c.36.21.48.66.28 1.02-.21.36-.66.48-1.02.28L6.25 9.56c-.32.77-.49 1.6-.49 2.44 0 3.45 2.8 6.25 6.25 6.25s6.25-2.8 6.25-6.25a6.252 6.252 0 0 0-10-5 .75.75 0 0 1-.9-1.2 7.7 7.7 0 0 1 4.65-1.55c4.27 0 7.75 3.48 7.75 7.75s-3.49 7.75-7.76 7.75"
    />
  </svg>
);
export default SvgRadar1;
