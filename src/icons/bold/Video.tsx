import * as React from "react";
import type { SVGProps } from "react";
const SvgVideo = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21.15 6.17c-.41-.22-1.27-.45-2.44.37l-1.47 1.04c-.11-3.11-1.46-4.33-4.74-4.33h-6C3.08 3.25 1.75 4.58 1.75 8v8c0 2.3 1.25 4.75 4.75 4.75h6c3.28 0 4.63-1.22 4.74-4.33l1.47 1.04c.62.44 1.16.58 1.59.58.37 0 .66-.11.85-.21.41-.21 1.1-.78 1.1-2.21V8.38c0-1.43-.69-2-1.1-2.21M11 11.38c-1.03 0-1.88-.84-1.88-1.88S9.97 7.62 11 7.62s1.88.84 1.88 1.88-.85 1.88-1.88 1.88"
    />
  </svg>
);
export default SvgVideo;
