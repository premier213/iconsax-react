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
      d="M12 7.75c-1.89 0-2.25.79-2.25 2.25v.62h4.5V10c0-1.46-.36-2.25-2.25-2.25M11.998 15.098a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2"
    />
    <path
      fill="currentColor"
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m5.38 12.5c0 2.2-.68 2.88-2.88 2.88h-5c-2.2 0-2.88-.68-2.88-2.88v-1c0-1.71.41-2.5 1.63-2.77V10c0-.93 0-3.75 3.75-3.75s3.75 2.82 3.75 3.75v.73c1.22.27 1.63 1.06 1.63 2.77z"
    />
  </svg>
);
export default SvgLockCircle;
