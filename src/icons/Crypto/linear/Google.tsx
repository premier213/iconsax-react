import * as React from "react";
import type { SVGProps } from "react";
const SvgGoogle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15.2 3H8.8L1.4 15.7 4.6 21h14.8s3.2-5.5 3.2-5.4S15.2 3 15.2 3M8.8 3l10.6 18M15.2 3 4.6 21M1.5 15.7H22"
    />
  </svg>
);
export default SvgGoogle;
