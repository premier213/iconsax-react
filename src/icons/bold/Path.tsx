import * as React from "react";
import type { SVGProps } from "react";
const SvgPath = (props: SVGProps<SVGSVGElement>) => (
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
      d="m20.02 10.7-2.12 1.34c-.4.25-.91.19-1.24-.14l-4.53-4.53a1 1 0 0 1-.14-1.24l1.34-2.12c.82-1.29 2.46-1.35 3.67-.15l3.18 3.18c1.12 1.13 1.05 2.89-.16 3.66M14.71 19.95l-8.72 1.02q-.116.015-.23.022c-.684.04-.854-.767-.369-1.253l2.59-2.59c.32-.31.32-.8 0-1.11a.78.78 0 0 0-1.11 0l-2.59 2.59c-.485.486-1.285.315-1.249-.37a4 4 0 0 1 .019-.22l1.03-8.72c.26-2.18 1.06-2.9 3.36-2.76l1.5.09c.49.03.95.24 1.3.59l6.55 6.55c.35.35.56.81.58 1.3l.09 1.5c.23 2.31-.56 3.11-2.75 3.36"
    />
  </svg>
);
export default SvgPath;
