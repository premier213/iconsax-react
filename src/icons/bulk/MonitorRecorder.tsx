import * as React from "react";
import type { SVGProps } from "react";
const SvgMonitorRecorder = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20.97 7.19v6.18H2V7.19C2 4.88 3.88 3 6.19 3h10.59c2.31 0 4.19 1.88 4.19 4.19"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M2 13.37v.19c0 2.32 1.88 4.19 4.19 4.19h3.6c.55 0 1 .45 1 1v.82c0 .55-.45 1-1 1H7.53c-.39 0-.71.32-.71.71s.32.71.71.71h7.93c.39 0 .71-.32.71-.71s-.32-.71-.71-.71h-2.25c-.55 0-1-.45-1-1v-.82c0-.55.45-1 1-1h3.57c2.32 0 4.19-1.88 4.19-4.19v-.19zM21.99 2.36l-1.13.79v-.42c0-.95-.77-1.71-1.71-1.71h-4.28C13.84 1.01 13 1.85 13 2.88v3.28c0 .86.43 1.71 1.71 1.71h4.43c.95 0 1.71-.77 1.71-1.71v-.43l1.13.79c.57.39 1.02.15 1.02-.53v-3.1c0-.68-.45-.91-1.01-.53"
    />
  </svg>
);
export default SvgMonitorRecorder;
