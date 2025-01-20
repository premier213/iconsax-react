import * as React from "react";
import type { SVGProps } from "react";
const SvgDropbox = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 5 7.6 2 2 6l4.4 3zM12 5l4.4-3L22 6l-4.4 3zM12 14l-4.4 3L2 13l4.4-3zM12 14l4.4 3 5.6-4-4.4-3z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M19 15.5v3.3l-6.6 3c-.3.1-.6.1-.8 0l-6.6-3v-3.3"
    />
  </svg>
);
export default SvgDropbox;
