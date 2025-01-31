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
      d="M20.97 10.37v3.19a4.2 4.2 0 0 1-4.2 4.2h-3.56c-.55 0-1 .44-1 1v.82c0 .55.45 1 1 1h2.26c.39 0 .71.31.71.71 0 .39-.32.71-.71.71H7.53c-.39 0-.71-.32-.71-.71 0-.4.32-.71.71-.71h2.26c.55 0 1-.45 1-1v-.82c0-.56-.45-1-1-1h-3.6c-2.31 0-4.19-1.88-4.19-4.2V7.19C2 4.88 3.88 3 6.19 3h4.31c.55 0 1 .45 1 1v2.15c0 1.93 1.29 3.22 3.21 3.22h5.26c.55 0 1 .45 1 1"
    />
    <path
      fill="currentColor"
      d="m21.99 2.36-1.13.79v-.42c0-.95-.77-1.71-1.71-1.71h-4.28C13.84 1.01 13 1.85 13 2.88v3.28c0 .86.43 1.71 1.71 1.71h4.43c.95 0 1.71-.77 1.71-1.71v-.43l1.13.79c.57.39 1.02.15 1.02-.53v-3.1c0-.68-.45-.91-1.01-.53"
    />
  </svg>
);
export default SvgMonitorRecorder;
