import * as React from "react";
import type { SVGProps } from "react";
const SvgMenuBoard = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.1 19.07C.66 20.53 1.73 22 3.24 22h13.14c1.04 0 1.93-.7 2.18-1.71l3.37-13.53c.12-.5.08-.99-.11-1.42-.33-.8-1.12-1.38-2.07-1.38H7.45c-.98 0-1.86.64-2.14 1.59l-2.63 8.46"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M16 22h4.78c1.29 0 2.3-1.09 2.21-2.38L22 6M9.68 6.38l1.04-4.32M16.38 6.39l.94-4.34M7.7 12h8M14.7 16H14M6.7 16H11"
    />
  </svg>
);
export default SvgMenuBoard;
