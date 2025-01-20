import * as React from "react";
import type { SVGProps } from "react";
const SvgThetaTheta = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
  >
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      opacity={0.4}
    >
      <path d="M15.15 18h-6.3C7.83 18 7 17.17 7 16.15v-8.3C7 6.83 7.83 6 8.85 6h6.3C16.17 6 17 6.83 17 7.85v8.3c0 1.02-.83 1.85-1.85 1.85M12 8.5v2M10 10.5h4M12 15.5v-2M10 13.5h4" />
    </g>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15 22H9c-5 0-7-2-7-7V9c0-5 2-7 7-7h6c5 0 7 2 7 7v6c0 5-2 7-7 7"
    />
  </svg>
);
export default SvgThetaTheta;
