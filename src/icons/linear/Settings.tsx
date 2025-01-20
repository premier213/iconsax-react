import * as React from "react";
import type { SVGProps } from "react";
const SvgSettings = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 16.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9M2 12h5M17 12h5"
    />
  </svg>
);
export default SvgSettings;
