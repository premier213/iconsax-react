import * as React from "react";
import type { SVGProps } from "react";
const SvgKeySquare = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13.25 12a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5"
    />
    <path
      fill="currentColor"
      d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2m-.3 11.47a3.78 3.78 0 0 1-3.8.93l-1.06 1.05c-.09.09-.25.09-.35 0l-.97-.97a.387.387 0 0 0-.53 0c-.15.14-.14.38 0 .53l.97.97c.1.1.1.26 0 .35l-.41.41c-.17.18-.5.29-.74.26l-1.09-.15c-.36-.05-.69-.39-.75-.75l-.15-1.09c-.04-.24.08-.57.24-.74l2.35-2.35c-.4-1.3-.09-2.77.94-3.8 1.47-1.47 3.87-1.47 5.35 0a3.78 3.78 0 0 1 0 5.35"
    />
  </svg>
);
export default SvgKeySquare;
