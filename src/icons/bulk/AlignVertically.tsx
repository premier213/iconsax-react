import * as React from "react";
import type { SVGProps } from "react";
const SvgAlignVertically = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17.4 19.25H6.6c-1.5 0-2.1-.64-2.1-2.23v-1.04c0-1.59.6-2.23 2.1-2.23h10.8c1.5 0 2.1.64 2.1 2.23v1.04c0 1.59-.6 2.23-2.1 2.23M12.75 19.25v2c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2zM12.75 10.75h-1.5v3h1.5zM12.75 2.75v2.5h-1.5v-2.5c0-.41.34-.75.75-.75s.75.34.75.75"
    />
    <path
      fill="currentColor"
      d="M15.4 10.75H8.6c-1.5 0-2.1-.64-2.1-2.23V7.48c0-1.59.6-2.23 2.1-2.23h6.8c1.5 0 2.1.64 2.1 2.23v1.04c0 1.59-.6 2.23-2.1 2.23"
      opacity={0.4}
    />
  </svg>
);
export default SvgAlignVertically;
