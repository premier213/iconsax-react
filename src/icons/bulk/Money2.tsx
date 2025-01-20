import * as React from "react";
import type { SVGProps } from "react";
const SvgMoney2 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22 9v6h-1c-3 0-4 1-4 4v1.5H7V19c0-3-1-4-4-4H2V9h1c3 0 4-1 4-4V3.5h10V5c0 3 1 4 4 4z"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6M7 3.5V5c0 3-1 4-4 4H2v-.5c0-3.5 2-5 5-5M22 8.5V9h-1c-3 0-4-1-4-4V3.5c3 0 5 1.5 5 5M7 19v1.5c-3 0-5-1.5-5-5V15h1c3 0 4 1 4 4M22 15v.5c0 3.5-2 5-5 5V19c0-3 1-4 4-4z"
    />
  </svg>
);
export default SvgMoney2;
