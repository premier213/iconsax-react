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
      d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M15.89 8.11c-1.48-1.47-3.88-1.47-5.35 0a3.78 3.78 0 0 0-.94 3.8l-2.35 2.35c-.16.17-.28.5-.24.74l.15 1.09c.05.36.39.7.75.75L9 17c.24.03.57-.07.74-.25l.41-.41c.1-.09.1-.25 0-.35l-.97-.97a.387.387 0 0 1 0-.53c.14-.14.38-.14.53 0l.97.97c.09.09.25.09.35 0l1.06-1.05c1.29.4 2.77.09 3.8-.93a3.8 3.8 0 0 0 0-5.37M13.25 12a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5"
    />
  </svg>
);
export default SvgKeySquare;
