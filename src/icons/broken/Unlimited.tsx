import * as React from "react";
import type { SVGProps } from "react";
const SvgUnlimited = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20 15.77c-.73.49-1.6.78-2.54.78-1.5 0-2.81-.74-3.64-1.87M10.18 9.32a4.47 4.47 0 0 0-3.64-1.87c-2.51 0-4.55 2.04-4.55 4.55s2.04 4.55 4.55 4.55c1.69 0 3.26-.89 4.13-2.34L12 12l1.32-2.21a4.82 4.82 0 0 1 4.13-2.34C19.96 7.45 22 9.49 22 12"
    />
  </svg>
);
export default SvgUnlimited;
