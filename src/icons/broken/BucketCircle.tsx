import * as React from "react";
import type { SVGProps } from "react";
const SvgBucketCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="m9.41 15.95-2.39-2.39c-.8-.8-.8-1.6 0-2.39l3.99-3.99 4.39 4.39c.22.22.22.58 0 .8l-3.59 3.59c-.8.79-1.6.79-2.4-.01M10.209 6.38l.8.8M6.459 12.33l9.03-.39"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.47 14.17s-1.1 1.2-1.1 1.93c0 .61.5 1.1 1.1 1.1.61 0 1.1-.5 1.1-1.1.01-.74-1.1-1.93-1.1-1.93"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85"
    />
  </svg>
);
export default SvgBucketCircle;
