import * as React from "react";
import type { SVGProps } from "react";
const SvgMask = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22 12c0 5.04-3.74 9.21-8.59 9.9-.46.07-.93.1-1.41.1-2.76 0-5.26-1.12-7.07-2.93A9.97 9.97 0 0 1 2 12C2 6.48 6.48 2 12 2c2.76 0 5.26 1.12 7.07 2.93A9.97 9.97 0 0 1 22 12"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="m14.83 10.23-2.48 2.48 6.53 6.53c-.36.35-.75.67-1.16.96l-6.43-6.43-2.47 2.47 5.12 5.13c.11.11.18.25.21.39v.01c-.24.05-.49.1-.74.13-.32.05-.64.08-.97.09L7.76 17.3l-2.28 2.28a9 9 0 0 1-.55-.51 9 9 0 0 1-.51-.55l14.1-14.1c.19.16.37.33.55.51s.35.36.51.55l-3.69 3.69 5.69 5.69c-.16.53-.36 1.03-.6 1.52z"
    />
  </svg>
);
export default SvgMask;
