import * as React from "react";
import type { SVGProps } from "react";
const SvgMinusCirlce = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15.92 12.75h-8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8a.749.749 0 1 1 0 1.5"
    />
  </svg>
);
export default SvgMinusCirlce;
