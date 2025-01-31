import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowBottom = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.999 18.75c-1.42 0-2.72-.9-3.66-2.53l-2.67-4.63c-.95-1.63-1.07-3.2-.36-4.43s2.14-1.91 4.02-1.91h5.34c1.88 0 3.31.68 4.02 1.91s.58 2.81-.36 4.44l-2.67 4.63c-.94 1.62-2.24 2.52-3.66 2.52m-2.67-12c-1.33 0-2.29.41-2.72 1.16-.44.75-.31 1.79.35 2.93l2.67 4.63c.66 1.15 1.5 1.78 2.36 1.78s1.7-.63 2.36-1.78l2.67-4.63c.66-1.15.79-2.19.36-2.94s-1.4-1.16-2.72-1.16h-5.33z"
    />
  </svg>
);
export default SvgArrowBottom;
