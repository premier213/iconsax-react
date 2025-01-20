import * as React from "react";
import type { SVGProps } from "react";
const SvgHospital = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 22h20M17 2H7C4 2 3 3.79 3 6v16h18V6c0-2.21-1-4-4-4"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M14.06 15H9.93c-.51 0-.94.42-.94.94V22h6v-6.06a.924.924 0 0 0-.93-.94"
      opacity={0.4}
    />
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      opacity={0.4}
    >
      <path d="M12 6v5M9.5 8.5h5" />
    </g>
  </svg>
);
export default SvgHospital;
