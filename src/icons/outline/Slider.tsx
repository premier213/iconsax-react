import * as React from "react";
import type { SVGProps } from "react";
const SvgSlider = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15 22.75H9c-2.75 0-4.75-2-4.75-4.75V6c0-2.75 2-4.75 4.75-4.75h6c2.75 0 4.75 2 4.75 4.75v12c0 2.75-2 4.75-4.75 4.75m-6-20C6.75 2.75 5.75 4.38 5.75 6v12c0 1.62 1 3.25 3.25 3.25h6c2.25 0 3.25-1.63 3.25-3.25V6c0-1.62-1-3.25-3.25-3.25z"
    />
    <path
      fill="currentColor"
      d="M19 16.76H5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h14c.41 0 .75.34.75.75s-.34.75-.75.75M2 20.75c-.41 0-.75-.34-.75-.75V4c0-.41.34-.75.75-.75s.75.34.75.75v16c0 .41-.34.75-.75.75M22 20.75c-.41 0-.75-.34-.75-.75V4c0-.41.34-.75.75-.75s.75.34.75.75v16c0 .41-.34.75-.75.75"
    />
  </svg>
);
export default SvgSlider;
