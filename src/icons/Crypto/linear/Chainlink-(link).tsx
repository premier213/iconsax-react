import * as React from "react";
import type { SVGProps } from "react";
const SvgChainlinkLink = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 8.2v7.6c0 .7.4 1.4 1 1.7l7 3.9c.6.3 1.3.3 1.9 0l7-3.9c.6-.4 1-1 1-1.7V8.2c0-.7-.4-1.4-1-1.7l-7-3.9c-.6-.3-1.3-.3-1.9 0L4 6.4c-.6.4-1 1.1-1 1.8"
    />
  </svg>
);
export default SvgChainlinkLink;
