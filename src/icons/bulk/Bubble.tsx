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
      fill="currentColor"
      d="M15.59 1.75c-2.97 0-5.38 2.41-5.38 5.38s2.41 5.38 5.38 5.38 5.38-2.41 5.38-5.38-2.41-5.38-5.38-5.38"
    />
    <path
      fill="currentColor"
      d="M6.36 13.03a3.329 3.329 0 1 0 3.33 3.33c0-1.84-1.5-3.33-3.33-3.33M16.62 16.62c-1.55 0-2.81 1.26-2.81 2.81s1.26 2.81 2.81 2.81 2.81-1.26 2.81-2.81-1.26-2.81-2.81-2.81"
      opacity={0.4}
    />
  </svg>
);
export default SvgBubble;
