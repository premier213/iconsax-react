import * as React from "react";
import type { SVGProps } from "react";
const SvgFingerCricle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 7.95c-1.79 0-3.25 1.46-3.25 3.25v1.6c0 1.79 1.46 3.25 3.25 3.25s3.25-1.46 3.25-3.25v-1.6c0-1.79-1.46-3.25-3.25-3.25m.9 5.29c0 .5-.4.9-.9.9s-.9-.4-.9-.9v-2.47c0-.49.4-.9.9-.9s.9.4.9.9z"
    />
    <path
      fill="currentColor"
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m4.75 10.8c0 2.62-2.13 4.75-4.75 4.75s-4.75-2.13-4.75-4.75v-1.6c0-2.62 2.13-4.75 4.75-4.75s4.75 2.13 4.75 4.75z"
    />
  </svg>
);
export default SvgFingerCricle;
