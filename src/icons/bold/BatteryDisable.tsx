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
      d="M20.42 9c-.14-.01-.32-.02-.52-.02-.39 0-.7.31-.7.7v4.65c0 .39.31.7.7.7.2 0 .37-.01.54-.02C22 14.83 22 13.73 22 12.93v-1.86c0-.8 0-1.9-1.58-2.07M18.28 10.14v3.72c0 2.95-2.4 5.35-5.35 5.35H9.26c-.79 0-1.27-.87-.85-1.53L15.67 6.2c.36-.57 1.17-.62 1.62-.11.72.83.99 2.12.99 4.05M16.4 1.87a.745.745 0 0 0-1.03.23l-1.71 2.71c-.23-.01-.47-.02-.73-.02H7.35C3.25 4.79 2 6.04 2 10.14v3.72c0 3.05.7 4.51 2.74 5.06L3.37 21.1c-.22.35-.12.81.23 1.03.12.08.26.12.4.12.25 0 .49-.12.63-.35l12-19c.23-.35.12-.81-.23-1.03"
    />
  </svg>
);
export default SvgBatteryDisable;
