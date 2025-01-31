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
      d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75m0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75"
    />
    <path
      fill="currentColor"
      d="M9.89 8.58c-.41 0-.75-.34-.75-.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.33.75-.75.75M14.11 8.58c-.41 0-.75-.34-.75-.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75M16.47 10.89H7.52c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8.95a.749.749 0 1 1 0 1.5"
    />
    <path
      fill="currentColor"
      d="M13.5 18.42h-3c-2.75 0-4.75-2-4.75-4.75v-3c0-2.75 2-4.75 4.75-4.75h3c2.75 0 4.75 2 4.75 4.75v3c0 2.75-2 4.75-4.75 4.75m-3-11c-2.25 0-3.25 1.63-3.25 3.25v3c0 1.62 1 3.25 3.25 3.25h3c2.25 0 3.25-1.63 3.25-3.25v-3c0-1.62-1-3.25-3.25-3.25z"
    />
  </svg>
);
export default SvgCalendarCircle;
