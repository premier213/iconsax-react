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
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M15.1 18H8.9c-1 0-1.9-.8-1.9-1.9V7.9C7 6.8 7.8 6 8.9 6h6.3c1 0 1.9.8 1.9 1.9v8.3c-.1 1-.9 1.8-2 1.8M12 8.5v2M10 10.5h4M12 15.5v-2M10 13.5h4"
    />
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
