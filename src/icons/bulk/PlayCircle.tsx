import * as React from "react";
import type { SVGProps } from "react";
const SvgPlayCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.97 22c5.524 0 10-4.477 10-10s-4.476-10-10-10c-5.522 0-10 4.477-10 10s4.478 10 10 10"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="m14.97 10.23-2.9-1.67c-.72-.42-1.59-.42-2.31 0s-1.15 1.16-1.15 2v3.35c0 .83.43 1.58 1.15 2a2.29 2.29 0 0 0 2.3 0l2.9-1.67c.72-.42 1.15-1.16 1.15-2 .02-.84-.41-1.59-1.14-2.01"
    />
  </svg>
);
export default SvgPlayCircle;
