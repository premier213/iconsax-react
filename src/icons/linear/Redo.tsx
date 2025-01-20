import * as React from "react";
import type { SVGProps } from "react";
const SvgRedo = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.87 18.31h-8c-2.76 0-5-2.24-5-5s2.24-5 5-5h11"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17.57 10.81 2.56-2.56-2.56-2.56"
    />
  </svg>
);
export default SvgRedo;
