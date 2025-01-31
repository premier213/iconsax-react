import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowRight = (props: SVGProps<SVGSVGElement>) => (
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
      d="m16.03 11.47-3-3a.754.754 0 0 0-1.06 0c-.29.29-.29.77 0 1.06l1.72 1.72H8.5c-.41 0-.75.34-.75.75s.34.75.75.75h5.19l-1.72 1.72c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.38-.07.53-.22l3-3c.29-.29.29-.77 0-1.06"
    />
  </svg>
);
export default SvgArrowRight;
