import * as React from "react";
import type { SVGProps } from "react";
const SvgNote1 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 2v3M16 2v3M7 13h8M7 17h5M3 9.65c0-4.7 1.67-5.96 5-6.15h8c3.33.18 5 1.45 5 6.15v6.18c0 4.12-1 6.18-6 6.18H9c-5 0-6-2.06-6-6.18v-2.02"
    />
  </svg>
);
export default SvgNote1;
