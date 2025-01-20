import * as React from "react";
import type { SVGProps } from "react";
const SvgCommand = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 8H8v8h8zM2 19c0 1.65 1.35 3 3 3s3-1.35 3-3v-3H5c-1.65 0-3 1.35-3 3M5 2C3.35 2 2 3.35 2 5s1.35 3 3 3h3V5c0-1.65-1.35-3-3-3M22 5c0-1.65-1.35-3-3-3s-3 1.35-3 3v3h3c1.65 0 3-1.35 3-3M19 16h-3v3c0 1.65 1.35 3 3 3s3-1.35 3-3-1.35-3-3-3"
    />
  </svg>
);
export default SvgCommand;
