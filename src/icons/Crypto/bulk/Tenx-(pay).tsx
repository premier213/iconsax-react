import * as React from "react";
import type { SVGProps } from "react";
const SvgTenxPay = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path fill="currentColor" d="M24 0H0v24h24z" opacity={0.58} />
    <path
      fill="currentColor"
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M12 12 9.46 9.46a.996.996 0 0 0-1.41 0L6.21 11.3a.996.996 0 0 0 0 1.41l1.84 1.84c.39.39 1.02.39 1.41 0l5.09-5.09a.996.996 0 0 1 1.41 0l1.84 1.84c.39.39.39 1.02 0 1.41l-1.84 1.84a.996.996 0 0 1-1.41 0z"
    />
  </svg>
);
export default SvgTenxPay;
