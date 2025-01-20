import * as React from "react";
import type { SVGProps } from "react";
const SvgPlayCricle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19.07 19.07c3.91-3.91 3.91-10.24 0-14.14M4.93 4.93c-3.91 3.91-3.91 10.24 0 14.14M8.7 21.41c1.07.37 2.18.55 3.3.55 1.12-.01 2.23-.18 3.3-.55M8.7 2.59c1.07-.37 2.18-.55 3.3-.55s2.23.18 3.3.55"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M8.74 10.33c0-2.08 1.47-2.93 3.27-1.89l1.45.84 1.45.84c1.8 1.04 1.8 2.74 0 3.78l-1.45.84-1.45.84c-1.8 1.04-3.27.19-3.27-1.89"
    />
  </svg>
);
export default SvgPlayCricle;
