import * as React from "react";
import type { SVGProps } from "react";
const SvgAutonioNiox = (props: SVGProps<SVGSVGElement>) => (
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
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="m12 5.86-2.57 4.28h5.14zM8.57 11.86 6 16.14h5.14zM15.43 11.86l-2.57 4.28H18z"
      opacity={0.4}
    />
  </svg>
);
export default SvgAutonioNiox;
