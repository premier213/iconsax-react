import * as React from "react";
import type { SVGProps } from "react";
const SvgFlashCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.97 22c5.524 0 10-4.477 10-10s-4.476-10-10-10c-5.522 0-10 4.477-10 10s4.478 10 10 10"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M15.25 11.3h-1.7V7.34c0-.92-.5-1.11-1.11-.42l-.44.5-3.72 4.23c-.51.58-.3 1.05.47 1.05h1.7v3.96c0 .92.5 1.11 1.11.42l.44-.5 3.72-4.23c.51-.58.3-1.05-.47-1.05"
    />
  </svg>
);
export default SvgFlashCircle;
