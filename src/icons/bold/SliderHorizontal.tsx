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
      d="M9 22h6c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3H9C7.34 2 6 3.34 6 5v14c0 1.66 1.34 3 3 3M4.5 5.93v12.14a.5.5 0 0 1-.6.49C2.42 18.29 2 17.43 2 15.33V8.67c0-2.1.42-2.96 1.9-3.23a.5.5 0 0 1 .6.49M22 8.67v6.66c0 2.1-.42 2.96-1.9 3.23-.31.06-.6-.18-.6-.49V5.93a.5.5 0 0 1 .6-.49c1.48.27 1.9 1.13 1.9 3.23"
    />
  </svg>
);
export default SvgSliderHorizontal;
