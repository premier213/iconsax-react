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
    <path fill="currentColor" d="M9 22A7 7 0 1 0 9 8a7 7 0 0 0 0 14" />
    <path
      fill="currentColor"
      d="M22 9a6.97 6.97 0 0 1-3.86 6.25c-.31.16-.66-.09-.69-.43a8.96 8.96 0 0 0-8.27-8.27c-.35-.03-.59-.38-.43-.69A6.97 6.97 0 0 1 15 2c3.87 0 7 3.13 7 7"
    />
  </svg>
);
export default SvgCeloCelo;
