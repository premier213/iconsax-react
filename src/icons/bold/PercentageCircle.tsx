import * as React from "react";
import type { SVGProps } from "react";
const SvgPercentageCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2M8.73 7.66c.81 0 1.48.66 1.48 1.48 0 .81-.66 1.48-1.48 1.48-.81 0-1.48-.66-1.48-1.48s.66-1.48 1.48-1.48m.12 8.14c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l6.55-6.55c.29-.29.77-.29 1.06 0s.29.77 0 1.06zm6.42.54c-.81 0-1.48-.66-1.48-1.48 0-.81.66-1.48 1.48-1.48.81 0 1.48.66 1.48 1.48s-.66 1.48-1.48 1.48"
    />
  </svg>
);
export default SvgPercentageCircle;
