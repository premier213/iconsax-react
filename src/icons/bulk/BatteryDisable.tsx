import * as React from "react";
import type { SVGProps } from "react";
const SvgBatteryDisable = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20.42 9c-.14-.01-.32-.02-.52-.02-.39 0-.7.31-.7.7v4.65c0 .39.31.7.7.7.2 0 .37-.01.54-.02C22 14.83 22 13.73 22 12.93v-1.86c0-.8 0-1.9-1.58-2.07"
    />
    <path
      fill="currentColor"
      d="M14.5 4.87 5.52 19.09C2.87 18.71 2 17.27 2 13.86v-3.72c0-4.1 1.25-5.35 5.35-5.35h5.58c.58 0 1.1.02 1.57.08M18.28 10.14v3.72c0 2.95-2.4 5.35-5.35 5.35H7.45l8.78-13.9c1.52.69 2.05 2.15 2.05 4.83"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M4 22.25c-.14 0-.28-.04-.4-.12a.736.736 0 0 1-.23-1.03l12-19c.22-.35.69-.45 1.03-.23.35.22.46.68.23 1.03l-12 19c-.14.23-.38.35-.63.35"
    />
  </svg>
);
export default SvgBatteryDisable;
