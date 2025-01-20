import * as React from "react";
import type { SVGProps } from "react";
const SvgTimer = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15.24 2H8.76C5 2 4.71 5.38 6.74 7.22l10.52 9.56C19.29 18.62 19 22 15.24 22H8.76C5 22 4.71 18.62 6.74 16.78l10.52-9.56C19.29 5.38 19 2 15.24 2"
    />
  </svg>
);
export default SvgTimer;
