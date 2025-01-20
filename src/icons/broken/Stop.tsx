import * as React from "react";
import type { SVGProps } from "react";
const SvgStop = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 9.3C3 4.8 4.8 3 9.3 3h5.4C19.2 3 21 4.8 21 9.3v5.4c0 4.5-1.8 6.3-6.3 6.3H9.3C4.8 21 3 19.2 3 14.7v-.71"
    />
  </svg>
);
export default SvgStop;
