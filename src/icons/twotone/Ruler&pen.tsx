import * as React from "react";
import type { SVGProps } from "react";
const SvgRulerpen = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="M21.47 19V5q0-3-3-3h-4q-3 0-3 3v14q0 3 3 3h4q3 0 3-3Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M11.47 6h5M11.47 18h4M11.47 13.95l5 .05M11.47 10h3"
      opacity={0.4}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M5.49 2C3.86 2 2.53 3.33 2.53 4.95v12.96c0 .45.19 1.13.42 1.52l.82 1.36c.94 1.57 2.49 1.57 3.43 0l.82-1.36c.23-.39.42-1.07.42-1.52V4.95C8.44 3.33 7.11 2 5.49 2Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M8.44 7H2.53"
      opacity={0.4}
    />
  </svg>
);
export default SvgRulerpen;
