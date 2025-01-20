import * as React from "react";
import type { SVGProps } from "react";
const SvgData = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20 14.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5M20 6.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5M20 22.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5M4 14.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5"
    />
    <path
      fill="currentColor"
      d="M19 12.75c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-7.25V7c0-1.58.67-2.25 2.25-2.25h5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-5c-2.42 0-3.75 1.33-3.75 3.75v4.25H5c-.41 0-.75.34-.75.75s.34.75.75.75h5.25V17c0 2.42 1.33 3.75 3.75 3.75h5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-5c-1.58 0-2.25-.67-2.25-2.25v-4.25z"
      opacity={0.4}
    />
  </svg>
);
export default SvgData;
