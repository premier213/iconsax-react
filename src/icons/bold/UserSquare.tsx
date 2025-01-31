import * as React from "react";
import type { SVGProps } from "react";
const SvgUserSquare = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.38c0 2.81 1.29 4.74 3.56 5.47.66.23 1.42.34 2.25.34h8.38c.83 0 1.59-.11 2.25-.34C20.71 20.93 22 19 22 16.19V7.81C22 4.17 19.83 2 16.19 2m4.31 14.19c0 2.14-.84 3.49-2.53 4.05-.97-1.91-3.27-3.27-5.97-3.27s-4.99 1.35-5.97 3.27h-.01c-1.67-.54-2.52-1.9-2.52-4.04V7.81c0-2.82 1.49-4.31 4.31-4.31h8.38c2.82 0 4.31 1.49 4.31 4.31z"
    />
    <path
      fill="currentColor"
      d="M12.002 8c-1.98 0-3.58 1.6-3.58 3.58s1.6 3.59 3.58 3.59 3.58-1.61 3.58-3.59S13.982 8 12.002 8"
    />
  </svg>
);
export default SvgUserSquare;
