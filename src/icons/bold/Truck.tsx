import * as React from "react";
import type { SVGProps } from "react";
const SvgTruck = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14 2.92v8.31c0 1.02-.83 1.85-1.85 1.85H3c-.55 0-1-.45-1-1V5.69C2 3.65 3.65 2 5.69 2h7.38c.52 0 .93.41.93.92"
    />
    <path
      fill="currentColor"
      d="M21.5 15.5c.28 0 .5.22.5.5v1c0 1.66-1.34 3-3 3 0-1.65-1.35-3-3-3s-3 1.35-3 3h-2c0-1.65-1.35-3-3-3s-3 1.35-3 3c-1.66 0-3-1.34-3-3v-2c0-.55.45-1 1-1h9.5a2.5 2.5 0 0 0 2.5-2.5V6c0-.55.45-1 1-1h.84c.72 0 1.38.39 1.74 1.01l.64 1.12c.09.16-.03.37-.22.37a2.5 2.5 0 0 0-2.5 2.5v3a2.5 2.5 0 0 0 2.5 2.5z"
    />
    <path
      fill="currentColor"
      d="M8 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4M16 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4M22 12.53V14h-3c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1h1.29l1.45 2.54c.17.3.26.64.26.99"
    />
  </svg>
);
export default SvgTruck;
