import * as React from "react";
import type { SVGProps } from "react";
const SvgCloud = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15.85 9.92c.52-.26 1.09-.4 1.67-.41M11.99 3.9c-4.01-.33-8.37 3.13-6.4 8.62"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M7.26 12.93a3.8 3.8 0 0 0-1.72-.41c-4.68.33-4.68 7.14 0 7.47h11.09c1.35.01 2.65-.49 3.64-1.4 3.29-2.87 1.53-8.64-2.8-9.19-.24-1.46-.78-2.61-1.49-3.47"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M15.84 9.84c.52-.26 1.09-.4 1.67-.41"
    />
  </svg>
);
export default SvgCloud;
