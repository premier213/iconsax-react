import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowCircleDown = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 15.01c-.19 0-.38-.07-.53-.22l-3.53-3.53a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l3 3 3-3c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-3.53 3.53c-.15.15-.34.22-.53.22"
    />
  </svg>
);
export default SvgArrowCircleDown;
