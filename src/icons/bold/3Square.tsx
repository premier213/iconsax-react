import * as React from "react";
import type { SVGProps } from "react";
const Svg3Square = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 18.5v.88c0 1.87-.75 2.62-2.63 2.62H4.62C3.17 22 2 20.83 2 19.38v-4.75C2 12.75 2.75 12 4.62 12h.88v3.5c0 1.66 1.34 3 3 3z"
    />
    <path
      fill="currentColor"
      d="M17 13.5v.87c0 1.45-1.18 2.63-2.63 2.63H9.62C7.75 17 7 16.25 7 14.37V9.62C7 8.17 8.17 7 9.62 7h.88v3.5c0 1.66 1.34 3 3 3z"
    />
    <path
      fill="currentColor"
      d="M22 4.62v4.75c0 1.88-.75 2.63-2.63 2.63h-4.75C12.75 12 12 11.25 12 9.37V4.62C12 2.75 12.75 2 14.62 2h4.75C21.25 2 22 2.75 22 4.62"
    />
  </svg>
);
export default Svg3Square;
