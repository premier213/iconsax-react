import * as React from "react";
import type { SVGProps } from "react";
const SvgAnkrAnkr = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.99 3.5 12 2l8.89 4.44v3.34M3.11 9.78V6.44l1.84-.91M3.11 14.22v3.34L12 22l8.89-4.44v-3.34M12 22v-5.56"
    />
    <path
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M12 16.44a4.44 4.44 0 1 0 0-8.88 4.44 4.44 0 0 0 0 8.88Z"
    />
  </svg>
);
export default SvgAnkrAnkr;
