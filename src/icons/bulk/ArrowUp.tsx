import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowUp = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="m15.53 10.97-3-3a.754.754 0 0 0-1.06 0l-3 3c-.29.29-.29.77 0 1.06s.77.29 1.06 0l1.72-1.72v5.19c0 .41.34.75.75.75s.75-.34.75-.75v-5.19l1.72 1.72c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.29-.77 0-1.06"
    />
  </svg>
);
export default SvgArrowUp;
