import * as React from "react";
import type { SVGProps } from "react";
const SvgVolumeCross = (props: SVGProps<SVGSVGElement>) => (
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
      d="m22.53 13.42-1.45-1.45 1.4-1.4c.29-.29.29-.77 0-1.06a.754.754 0 0 0-1.06 0l-1.4 1.4-1.45-1.45a.754.754 0 0 0-1.06 0c-.29.29-.29.77 0 1.06l1.45 1.45-1.49 1.49c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.38-.07.53-.22l1.49-1.49 1.45 1.45c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.29-.76 0-1.06"
    />
    <path
      fill="currentColor"
      d="M15.75 7.41v9.18c0 1.72-.62 3.01-1.73 3.63a3 3 0 0 1-1.47.37c-.8 0-1.66-.27-2.54-.82l-2.92-1.83c-.2-.12-.43-.19-.66-.19H5.5V6.25h.93c.23 0 .46-.07.66-.19l2.92-1.83c1.46-.91 2.89-1.07 4.01-.45 1.11.62 1.73 1.91 1.73 3.63"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M5.5 6.25v11.5H5c-2.42 0-3.75-1.33-3.75-3.75v-4c0-2.42 1.33-3.75 3.75-3.75z"
    />
  </svg>
);
export default SvgVolumeCross;
