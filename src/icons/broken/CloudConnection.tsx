import * as React from "react";
import type { SVGProps } from "react";
const SvgCloudConnection = (props: SVGProps<SVGSVGElement>) => (
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
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M6.41 9.51c-2.79-7.76 9-10.85 10.35-2.71 3.42.43 5 4.59 3.12 7.22M6.37 9.51c-4.08.29-4.07 6.2 0 6.49h9.66M12 16v3M10 21c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2M18 21h-4M10 21H6"
    />
  </svg>
);
export default SvgCloudConnection;
