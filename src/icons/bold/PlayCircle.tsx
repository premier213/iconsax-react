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
      d="M11.969 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.47-10-10-10m3 12.23-2.9 1.67a2.28 2.28 0 0 1-2.3 0 2.29 2.29 0 0 1-1.15-2v-3.35c0-.83.43-1.58 1.15-2s1.58-.42 2.31 0l2.9 1.67c.72.42 1.15 1.16 1.15 2s-.43 1.59-1.16 2.01"
    />
  </svg>
);
export default SvgPlayCircle;
