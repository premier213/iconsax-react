import * as React from "react";
import type { SVGProps } from "react";
const SvgCloudFog = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.29 11.62C1.09 2.69 14.62-.87 16.17 8.5c1.93.24 3.34 1.52 4.03 3.12"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M14.541 8.93c.52-.26 1.09-.4 1.67-.41M18 15.03h2M4 15.03h11M6 18.03h12M9 21.03h6"
    />
  </svg>
);
export default SvgCloudFog;
