import * as React from "react";
import type { SVGProps } from "react";
const SvgGhost = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 2C6.5 2 2 6.58 2 12.18v7.89c0 1.26.75 1.6 1.67.76l1-.91c.37-.34.97-.34 1.34 0l2 1.83c.37.34.97.34 1.34 0l2-1.83c.37-.34.97-.34 1.34 0l2 1.83c.37.34.97.34 1.34 0l2-1.83c.37-.34.97-.34 1.34 0l1 .91c.92.84 1.67.5 1.67-.76v-7.89C22 6.58 17.5 2 12 2m0 4.62c1.31 0 2.38 1.07 2.38 2.38s-1.07 2.38-2.38 2.38S9.62 10.31 9.62 9 10.69 6.62 12 6.62m4.45 7.98A7.42 7.42 0 0 1 12 16.07c-1.57 0-3.14-.49-4.45-1.47a.75.75 0 0 1 .9-1.2 5.94 5.94 0 0 0 7.1 0 .75.75 0 0 1 .9 1.2"
    />
  </svg>
);
export default SvgGhost;
