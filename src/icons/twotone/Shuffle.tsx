import * as React from "react";
import type { SVGProps } from "react";
const SvgShuffle = (props: SVGProps<SVGSVGElement>) => (
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
      d="m3 17.98 2.55.01c.91 0 1.76-.45 2.26-1.2l6.39-9.58a2.69 2.69 0 0 1 2.26-1.2l4.55.02"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8.89 8.62-1.08-1.5A2.68 2.68 0 0 0 5.61 6L3 6.01"
      opacity={0.4}
    />
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
    >
      <path d="m19 19.98 2-2M12.97 15.38l1.22 1.57c.51.66 1.31 1.05 2.15 1.05l4.67-.02" />
    </g>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m21 6.02-2-2"
    />
  </svg>
);
export default SvgShuffle;
