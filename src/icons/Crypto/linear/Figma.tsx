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
      d="M12 2H8.7C6.8 2 5.3 3.5 5.3 5.3s1.5 3.3 3.3 3.3H12zM12 8.7H8.7c-1.8 0-3.3 1.5-3.3 3.3s1.5 3.3 3.3 3.3H12zM12 15.3H8.7c-1.8 0-3.3 1.5-3.3 3.3s1.5 3.3 3.3 3.3 3.3-1.5 3.3-3.3zM12 2h3.3c1.8 0 3.3 1.5 3.3 3.3s-1.5 3.3-3.3 3.3H12zM15.3 8.7c1.8 0 3.3 1.5 3.3 3.3s-1.5 3.3-3.3 3.3S12 13.8 12 12s1.5-3.3 3.3-3.3Z"
    />
  </svg>
);
export default SvgFigma;
