import * as React from "react";
import type { SVGProps } from "react";
const SvgMagicpen = (props: SVGProps<SVGSVGElement>) => (
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
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.98 10.02 19.5 7.5c.83-.83.83-2.17 0-3s-2.17-.83-3 0l-13 13c-.83.83-.83 2.17 0 3s2.17.83 3 0l8-8M18.01 8.99l-3-3"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.56 3.5 10 5l-1.5-.44L7 5l.44-1.5L7 2l1.5.44M4.5 8.44 6 8l-.44 1.5L6 11l-1.5-.44L3 11l.44-1.5L3 8zM18.44 14.5 18 13l1.5.44L21 13l-.44 1.5L21 16l-1.5-.44"
    />
  </svg>
);
export default SvgMagicpen;
