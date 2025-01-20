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
      d="M12 2c4.42 0 8 3.58 8 8s-3.58 8-8 8-8-3.58-8-8c0-2.71 1.35-5.11 3.41-6.55M16 22h2M6 22h7"
    />
  </svg>
);
export default SvgMirror;
