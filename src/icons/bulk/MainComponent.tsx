import * as React from "react";
import type { SVGProps } from "react";
const SvgMainComponent = (props: SVGProps<SVGSVGElement>) => (
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
      d="m20.95 14.55-2.67 2.67-1.06 1.06-2.67 2.67c-1.4 1.4-3.7 1.4-5.1 0l-2.67-2.67-1.06-1.06-2.67-2.67c-1.4-1.4-1.4-3.7 0-5.1l2.67-2.67 1.06-1.06 2.67-2.67c1.4-1.4 3.7-1.4 5.1 0l2.67 2.67 1.06 1.06 2.67 2.67c1.4 1.4 1.4 3.7 0 5.1"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="m13.06 12 5.22 5.22-1.06 1.06L12 13.06l-5.22 5.22-1.06-1.06L10.94 12 5.72 6.78l1.06-1.06L12 10.94l5.22-5.22 1.06 1.06z"
    />
  </svg>
);
export default SvgMainComponent;
