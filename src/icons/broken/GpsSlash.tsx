import * as React from "react";
import type { SVGProps } from "react";
const SvgGpsSlash = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9 18.88c.92.4 1.93.62 3 .62 4.14 0 7.5-3.36 7.5-7.5 0-1.07-.22-2.08-.62-3M4.77 10.01c-.18.63-.27 1.3-.27 1.99 0 2.01.79 3.84 2.08 5.19M17.21 6.6A7.5 7.5 0 0 0 12 4.5c-1.92 0-3.67.72-5 1.91M12 4V2M4 12H2M12 20v2M20 12h2M14.12 9.88l-4.24 4.24a2.996 2.996 0 1 1 4.24-4.24M22 2 2 22"
    />
  </svg>
);
export default SvgGpsSlash;
