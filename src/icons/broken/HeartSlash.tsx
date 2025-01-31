import * as React from "react";
import type { SVGProps } from "react";
const SvgHeartSlash = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24c1.15 0 2.22.35 3.11.96M6.11 17.5C3.9 15.43 2 12.48 2 8.68c0-1.54.62-2.94 1.63-3.95M21.74 7c.17.53.26 1.1.26 1.69 0 7-6.48 11.13-9.38 12.13-.34.12-.9.12-1.24 0-.65-.22-1.47-.6-2.36-1.13M22 2 2 22"
    />
  </svg>
);
export default SvgHeartSlash;
