import * as React from "react";
import type { SVGProps } from "react";
const SvgGps = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.5 5.365A7.5 7.5 0 1 1 5.365 8.5"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6M12 4V2M4 12H2M12 20v2M20 12h2"
    />
  </svg>
);
export default SvgGps;
