import * as React from "react";
import type { SVGProps } from "react";
const SvgCloudChange = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15.288 9.98c-.93-5.64-9.08-3.5-7.15 1.87M8.11 11.85c-2.82.2-2.81 4.3 0 4.5h6.67c.81.01 1.59-.3 2.19-.84.77-.67 1.08-1.6 1.02-2.5"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M2 15c0 3.87 3.13 7 7 7l-1.05-1.75M22 9c0-3.87-3.13-7-7-7l1.05 1.75"
    />
  </svg>
);
export default SvgCloudChange;
