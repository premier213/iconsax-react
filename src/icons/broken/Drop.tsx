import * as React from "react";
import type { SVGProps } from "react";
const SvgDrop = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.9 13.9c0 4.46 3.63 8.1 8.1 8.1s8.1-3.63 8.1-8.09c.03-5.43-5.6-10.24-7.49-11.7M12.61 2.21a.99.99 0 0 0-1.219 0c-1.38 1.05-4.72 3.83-6.43 7.39"
    />
  </svg>
);
export default SvgDrop;
