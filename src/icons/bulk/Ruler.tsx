import * as React from "react";
import type { SVGProps } from "react";
const SvgRuler = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 17h14c1.66 0 3-1.34 3-3v-4c0-1.66-1.34-3-3-3H5c-1.66 0-3 1.34-3 3v4c0 1.66 1.34 3 3 3"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M18.75 7v5c0 .41-.34.75-.75.75s-.75-.34-.75-.75V7zM6.75 7v3.8c0 .41-.34.75-.75.75s-.75-.34-.75-.75V7zM10.79 7l-.04 5.01c0 .41-.34.74-.75.74h-.01a.75.75 0 0 1-.74-.76L9.29 7zM14.75 7v2.6c0 .41-.34.75-.75.75s-.75-.34-.75-.75V7z"
    />
  </svg>
);
export default SvgRuler;
