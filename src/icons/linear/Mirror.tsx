import * as React from "react";
import type { SVGProps } from "react";
const SvgMirror = (props: SVGProps<SVGSVGElement>) => (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16M6 22h12"
    />
  </svg>
);
export default SvgMirror;
