import * as React from "react";
import type { SVGProps } from "react";
const SvgBubble = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15.59 12.26c2.83 0 5.13-2.3 5.13-5.13S18.42 2 15.59 2s-5.13 2.3-5.13 5.13c0 1.3.48 2.48 1.28 3.38M3.28 16.36c0 1.7 1.38 3.08 3.08 3.08s3.08-1.38 3.08-3.08-1.38-3.08-3.08-3.08"
    />
    <path
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M16.62 22a2.56 2.56 0 1 0 0-5.12 2.56 2.56 0 0 0 0 5.12Z"
    />
  </svg>
);
export default SvgBubble;
