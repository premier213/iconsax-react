import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowCircleUp = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2m4.06 11.79c-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-3-3-3 3c-.29.29-.77.29-1.06 0a.754.754 0 0 1 0-1.06l3.53-3.53c.29-.29.77-.29 1.06 0l3.53 3.53c.29.3.29.77 0 1.06"
    />
  </svg>
);
export default SvgArrowCircleUp;
