import * as React from "react";
import type { SVGProps } from "react";
const SvgMouse = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 22.75c-4.55 0-8.25-3.7-8.25-8.25v-5c0-4.55 3.7-8.25 8.25-8.25s8.25 3.7 8.25 8.25v5c0 4.55-3.7 8.25-8.25 8.25m0-20c-3.72 0-6.75 3.03-6.75 6.75v5c0 3.72 3.03 6.75 6.75 6.75s6.75-3.03 6.75-6.75v-5c0-3.72-3.03-6.75-6.75-6.75"
    />
    <path
      fill="currentColor"
      d="M12 11.75c-1.24 0-2.25-1.01-2.25-2.25v-2c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v2c0 1.24-1.01 2.25-2.25 2.25m0-5c-.41 0-.75.34-.75.75v2c0 .41.34.75.75.75s.75-.34.75-.75v-2c0-.41-.34-.75-.75-.75"
    />
    <path
      fill="currentColor"
      d="M12 6.75c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v4c0 .41-.34.75-.75.75"
    />
  </svg>
);
export default SvgMouse;
