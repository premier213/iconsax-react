import * as React from "react";
import type { SVGProps } from "react";
const SvgSunFog = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18 15h2M4 15h11"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 5.5A6.5 6.5 0 0 0 5.5 12M18.5 12c0-2.31-1.21-4.35-3.03-5.5"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m4.99 4.99-.13-.13m14.15.13.13-.13zM12 2.08V2zM2.08 12H2zM22 12h-.08z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M6 18h12M9 21h6"
    />
  </svg>
);
export default SvgSunFog;
