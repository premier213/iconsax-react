import * as React from "react";
import type { SVGProps } from "react";
const SvgBuildings = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.11 4c-.08.3-.11.63-.11 1v3H5V6c0-1.1.9-2 2-2z"
      opacity={0.6}
    />
    <path
      fill="currentColor"
      d="M10 19V8H5q-3 0-3 3v8q0 3 3 3h8q-3 0-3-3m-3.25-2c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-4c0-.41.34-.75.75-.75s.75.34.75.75z"
    />
    <path
      fill="currentColor"
      d="M14 22h-1q-3 0-3-3V5q0-3 3-3h6q3 0 3 3v14q0 3-3 3h-1"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M18 18v4h-4v-4c0-.55.45-1 1-1h2c.55 0 1 .45 1 1M14 13.75c-.41 0-.75-.34-.75-.75V8c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75M18 13.75c-.41 0-.75-.34-.75-.75V8c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75"
    />
  </svg>
);
export default SvgBuildings;
