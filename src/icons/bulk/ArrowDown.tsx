import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowDown = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15.53 11.97a.754.754 0 0 0-1.06 0l-1.72 1.72V8.5c0-.41-.34-.75-.75-.75s-.75.34-.75.75v5.19l-1.72-1.72a.754.754 0 0 0-1.06 0c-.29.29-.29.77 0 1.06l3 3c.15.15.34.22.53.22s.38-.07.53-.22l3-3c.29-.29.29-.77 0-1.06"
    />
  </svg>
);
export default SvgArrowDown;
