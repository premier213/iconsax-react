import * as React from "react";
import type { SVGProps } from "react";
const SvgCrop = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19 19.75H9.9c-4.33 0-5.65-1.32-5.65-5.65V5c0-.41.34-.75.75-.75h9.1c4.33 0 5.65 1.32 5.65 5.65V19c0 .41-.34.75-.75.75m-13.25-14v8.35c0 3.49.66 4.15 4.15 4.15h8.35V9.9c0-3.49-.66-4.15-4.15-4.15z"
    />
    <path
      fill="currentColor"
      d="M5 5.75c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75"
    />
    <path
      fill="currentColor"
      d="M5 5.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75M19 22.75c-.41 0-.75-.34-.75-.75v-3c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75"
    />
    <path
      fill="currentColor"
      d="M22 19.75h-3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75"
    />
  </svg>
);
export default SvgCrop;
