import * as React from "react";
import type { SVGProps } from "react";
const SvgMusicFilter = (props: SVGProps<SVGSVGElement>) => (
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
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M2 3h3M8 3h14M2 9h9M2 15h6M2 21h4"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.84 22a2.18 2.18 0 1 0 0-4.36 2.18 2.18 0 0 0 0 4.36"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M22 18.37V9.86c0-1.81-1.14-2.06-2.29-1.75L15.36 9.3c-.79.22-1.34.84-1.34 1.75v8.77"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.82 20.55a2.18 2.18 0 1 0 0-4.36 2.18 2.18 0 0 0 0 4.36M20.371 11.87l1.63-.45M14.02 13.6l2.35-.64"
    />
  </svg>
);
export default SvgMusicFilter;
