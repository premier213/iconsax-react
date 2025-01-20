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
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M5 17h14q3 0 3-3v-4q0-3-3-3H5q-3 0-3 3v4q0 3 3 3ZM18 7v5M6 7v4M10.05 7 10 12M14 7v3"
    />
  </svg>
);
export default SvgRuler;
