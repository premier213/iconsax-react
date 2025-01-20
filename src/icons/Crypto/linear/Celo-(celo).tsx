import * as React from "react";
import type { SVGProps } from "react";
const SvgCeloCelo = (props: SVGProps<SVGSVGElement>) => (
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
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M15 16a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z"
    />
    <path
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M9 22A7 7 0 1 0 9 8a7 7 0 0 0 0 14Z"
    />
  </svg>
);
export default SvgCeloCelo;
