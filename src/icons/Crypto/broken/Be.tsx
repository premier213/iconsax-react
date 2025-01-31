import * as React from "react";
import type { SVGProps } from "react";
const SvgBe = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 7c0-.55.45-1 1-1h5c1.66 0 3 1.34 3 3s-1.34 3-3 3H2h7c1.66 0 3 1.34 3 3s-1.34 3-3 3H3c-.55 0-1-.45-1-1v-6.03M14 14h8c0-2.21-1.79-4-4-4s-4 1.79-4 4m0 0c0 2.21 1.79 4 4 4h1.67M19.5 7.5h-3"
    />
  </svg>
);
export default SvgBe;
