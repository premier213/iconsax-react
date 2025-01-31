import * as React from "react";
import type { SVGProps } from "react";
const SvgLockCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M15.75 10.73V10c0-.93 0-3.75-3.75-3.75S8.25 9.07 8.25 10v.73c-1.22.27-1.63 1.06-1.63 2.77v1c0 2.2.68 2.88 2.88 2.88h5c2.2 0 2.88-.68 2.88-2.88v-1c0-1.71-.41-2.5-1.63-2.77M12 15.1c-.61 0-1.1-.49-1.1-1.1s.49-1.1 1.1-1.1 1.1.49 1.1 1.1-.49 1.1-1.1 1.1m2.25-4.48h-4.5V10c0-1.46.36-2.25 2.25-2.25s2.25.79 2.25 2.25z"
    />
  </svg>
);
export default SvgLockCircle;
