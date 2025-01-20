import * as React from "react";
import type { SVGProps } from "react";
const SvgSpeaker = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9 22h6c3 0 4-1 4-4V6c0-3-1-4-4-4H9C6 2 5 3 5 6v12c0 3 1 4 4 4"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M12 18a3 3 0 1 0 0-6 3 3 0 0 0 0 6M12 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
      opacity={0.4}
    />
  </svg>
);
export default SvgSpeaker;
