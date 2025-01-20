import * as React from "react";
import type { SVGProps } from "react";
const SvgFigma = (props: SVGProps<SVGSVGElement>) => (
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
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M12 2H8.67C6.83 2 5.34 3.49 5.34 5.33s1.49 3.33 3.33 3.33H12z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M8.67 15.33H12V8.66H8.67c-1.84 0-3.33 1.49-3.33 3.33"
    />
    <path
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M12 15.33H8.67c-1.84 0-3.33 1.49-3.33 3.33s1.49 3.33 3.33 3.33S12 20.5 12 18.66zM12 2h3.33c1.84 0 3.33 1.49 3.33 3.33s-1.49 3.33-3.33 3.33H12zM15.33 8.67c1.84 0 3.33 1.49 3.33 3.33s-1.49 3.33-3.33 3.33S12 13.84 12 12s1.49-3.33 3.33-3.33Z"
    />
  </svg>
);
export default SvgFigma;
