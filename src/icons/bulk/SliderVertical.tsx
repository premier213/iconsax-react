import * as React from "react";
import type { SVGProps } from "react";
const SvgSliderVertical = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18.94 3.5H5.06c-.41 0-.75-.34-.75-.75S4.65 2 5.06 2h13.88c.41 0 .75.34.75.75s-.34.75-.75.75M18.94 22H5.06c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h13.88c.41 0 .75.34.75.75s-.34.75-.75.75"
    />
    <path
      fill="currentColor"
      d="M2.75 7.6v8.8c0 1.66 1.34 3 3 3h12.5c1.66 0 3-1.34 3-3V7.6c0-1.66-1.34-3-3-3H5.75c-1.66 0-3 1.34-3 3"
      opacity={0.4}
    />
  </svg>
);
export default SvgSliderVertical;
