import * as React from "react";
import type { SVGProps } from "react";
const SvgCalendarCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17.15 9.44a3.64 3.64 0 0 0-2.3-2.06v-.79c0-.41-.34-.75-.75-.75s-.75.34-.75.75v.59h-2.71v-.59c0-.41-.34-.75-.75-.75s-.75.34-.75.75v.79a3.64 3.64 0 0 0-2.3 2.06c-.14.33.1.71.46.71h9.37c.38-.01.62-.38.48-.71M17 11.14c.28 0 .5.22.5.5v2.53c0 2.2-1.5 4-4 4h-3c-2.5 0-4-1.8-4-4v-2.53c0-.28.22-.5.5-.5z"
    />
  </svg>
);
export default SvgCalendarCircle;
