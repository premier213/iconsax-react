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
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M12 9.87c-.49 0-.9.4-.9.9v2.47c0 .5.4.9.9.9s.9-.4.9-.9v-2.47c0-.5-.41-.9-.9-.9"
    />
    <path
      fill="currentColor"
      d="M12 17.55c-2.62 0-4.75-2.13-4.75-4.75v-1.6c0-2.62 2.13-4.75 4.75-4.75s4.75 2.13 4.75 4.75v1.6c0 2.62-2.13 4.75-4.75 4.75m0-9.6c-1.79 0-3.25 1.46-3.25 3.25v1.6c0 1.79 1.46 3.25 3.25 3.25s3.25-1.46 3.25-3.25v-1.6c0-1.79-1.46-3.25-3.25-3.25"
    />
  </svg>
);
export default SvgFingerCricle;
