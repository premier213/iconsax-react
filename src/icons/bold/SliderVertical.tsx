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
      d="M22 15V9c0-1.66-1.34-3-3-3H5C3.34 6 2 7.34 2 9v6c0 1.66 1.34 3 3 3h14c1.66 0 3-1.34 3-3M5.93 19.5h12.14a.5.5 0 0 1 .49.6c-.27 1.48-1.14 1.9-3.23 1.9H8.67c-2.1 0-2.96-.42-3.23-1.9a.5.5 0 0 1 .49-.6M8.67 2h6.66c2.1 0 2.96.42 3.23 1.9.06.31-.18.6-.49.6H5.93a.5.5 0 0 1-.49-.6C5.71 2.42 6.57 2 8.67 2"
    />
  </svg>
);
export default SvgSliderVertical;
