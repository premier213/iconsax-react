import * as React from "react";
import type { SVGProps } from "react";
const SvgGoogle = (props: SVGProps<SVGSVGElement>) => (
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
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M3.27 7.51C2.59 8.87 2.2 10.39 2.2 12s.39 3.13 1.07 4.49l.01-.01v.01A9.96 9.96 0 0 0 12.2 22c2.7 0 4.97-.89 6.62-2.42 1.89-1.74 2.98-4.31 2.98-7.36 0-.82-.07-1.42-.21-2.04H12.2v3.71h5.51c-.11.92-.71 2.31-2.04 3.24-.84.59-1.98 1-3.47 1-2.64 0-4.89-1.74-5.69-4.16-.21-.62-.33-1.29-.33-1.98s.12-1.36.32-1.98c.06-.18.13-.37.21-.54.95-2.13 3.05-3.61 5.49-3.61 1.88 0 3.14.81 3.87 1.49l2.82-2.76c-1.73-1.61-3.99-2.6-6.69-2.6-2.15 0-4.14.68-5.77 1.83"
    />
  </svg>
);
export default SvgGoogle;
