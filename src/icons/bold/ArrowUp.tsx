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
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m3.53 10.03c-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-1.72-1.72v5.19c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-5.19l-1.72 1.72c-.29.29-.77.29-1.06 0a.754.754 0 0 1 0-1.06l3-3c.29-.29.77-.29 1.06 0l3 3c.29.29.29.77 0 1.06"
    />
  </svg>
);
export default SvgArrowUp;
