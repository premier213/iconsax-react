import * as React from "react";
import type { SVGProps } from "react";
const SvgAirplane = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.96 14.04v-1.11c0-.43-.32-.64-.71-.47l-5.01 2.16c-.79.34-1.43-.08-1.43-.93v-1.32c0-.68.51-1.47 1.14-1.73l5.7-2.45c.16-.08.3-.29.3-.47V4.66c0-.96.71-2.11 1.56-2.55.3-.15.66-.15.96 0 .86.44 1.57 1.58 1.57 2.54v3.06c0 .18.14.39.3.47l1.04.44z"
    />
    <path
      fill="currentColor"
      d="M21.19 12.37v1.32c0 .85-.64 1.27-1.43.93l-5.01-2.16c-.4-.16-.71.04-.71.47v2.91c0 .23.13.56.3.72l2.32 2.33c.24.24.35.72.24 1.05l-.45 1.36c-.2.59-.87.86-1.42.59l-2.38-2c-.36-.31-.95-.31-1.31 0l-2.38 2c-.55.28-1.22 0-1.4-.59l-.45-1.36c-.11-.34 0-.81.24-1.05l2.32-2.33c.16-.16.29-.49.29-.72v-1.8l5.42-5.42 4.67 2.01c.63.27 1.14 1.06 1.14 1.74"
      opacity={0.4}
    />
  </svg>
);
export default SvgAirplane;
