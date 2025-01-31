import * as React from "react";
import type { SVGProps } from "react";
const SvgSliderHorizontal = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.5 5.06v13.88c0 .41-.34.75-.75.75S2 19.35 2 18.94V5.06c0-.41.34-.75.75-.75s.75.34.75.75M22 5.06v13.88c0 .41-.34.75-.75.75s-.75-.34-.75-.75V5.06c0-.41.34-.75.75-.75s.75.34.75.75"
    />
    <path
      fill="currentColor"
      d="M7.6 21.25h8.8c1.66 0 3-1.34 3-3V5.75c0-1.66-1.34-3-3-3H7.6c-1.66 0-3 1.34-3 3v12.5c0 1.66 1.34 3 3 3"
      opacity={0.4}
    />
  </svg>
);
export default SvgSliderHorizontal;
