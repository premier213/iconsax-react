import * as React from "react";
import type { SVGProps } from "react";
const SvgGame = (props: SVGProps<SVGSVGElement>) => (
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
      d="m9.57 12.46-3.05 3.05M6.55 12.49l3.05 3.05"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M13.53 14h.01M17.47 14h.01M15.5 15.98v-.02M15.5 12.04v-.02"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9 22h6c5 0 7-2 7-7v-2c0-5-2-7-7-7H9c-5 0-7 2-7 7v2c0 5 2 7 7 7M13.01 2 13 3.01A1 1 0 0 1 12 4h-.03c-.55 0-.99.45-.99 1s.45 1 1 1h1"
    />
  </svg>
);
export default SvgGame;
