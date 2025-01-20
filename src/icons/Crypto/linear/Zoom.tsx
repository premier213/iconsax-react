import * as React from "react";
import type { SVGProps } from "react";
const SvgZoom = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 9.7v2.8c0 1.5 1.3 2.8 2.8 2.8h3.7c.5 0 .9-.4.9-.9v-2.8c0-1.5-1.2-2.8-2.8-2.8H6.9c-.5 0-.9.4-.9.9Z"
      clipRule="evenodd"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M18 9.2v5.6l-2.8-1.9v-1.8z"
      clipRule="evenodd"
    />
    <path
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
    />
  </svg>
);
export default SvgZoom;
