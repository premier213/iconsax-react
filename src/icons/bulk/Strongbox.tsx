import * as React from "react";
import type { SVGProps } from "react";
const SvgStrongbox = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.19 2H7.82C4.18 2 2.01 4.17 2.01 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M22 10.16h-7.67c-.01-.07-.01-.15-.03-.22-.21-.8-.86-1.45-1.66-1.66-1.44-.38-2.75.56-2.97 1.88H2v1.5h7.91c.2.38.48.7.84.92v1.98a1.25 1.25 0 0 0 2.5 0v-1.98c.36-.22.64-.54.84-.92H22z"
    />
  </svg>
);
export default SvgStrongbox;
