import * as React from "react";
import type { SVGProps } from "react";
const SvgFlag = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.15 22.75c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v20c0 .41-.34.75-.75.75"
    />
    <path
      fill="currentColor"
      d="M16.35 16.75H5.15c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h11.2c1.09 0 1.6-.29 1.7-.54s-.05-.81-.83-1.58l-1.2-1.2c-.49-.43-.79-1.08-.82-1.8-.03-.76.27-1.51.82-2.06l1.2-1.2c.74-.74.97-1.34.86-1.6s-.68-.52-1.73-.52H5.15a.749.749 0 1 1 0-1.5h11.2c2.19 0 2.89.91 3.12 1.45.22.54.37 1.68-1.19 3.24l-1.2 1.2c-.25.25-.39.6-.38.95.01.3.13.57.34.76l1.24 1.23c1.53 1.53 1.38 2.67 1.16 3.22-.23.53-.94 1.45-3.09 1.45"
    />
  </svg>
);
export default SvgFlag;
