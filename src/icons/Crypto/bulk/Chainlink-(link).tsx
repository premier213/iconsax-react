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
    <path fill="currentColor" d="M24 0H0v24h24z" />
    <path
      fill="currentColor"
      d="M3 8.18v7.65c0 .65.46 1.43 1.03 1.75l7 3.89c.53.3 1.41.3 1.94 0l7-3.89c.57-.31 1.03-1.1 1.03-1.75V8.18c0-.65-.46-1.43-1.03-1.75l-7-3.89c-.53-.3-1.41-.3-1.94 0l-7 3.89C3.46 6.74 3 7.53 3 8.18"
    />
  </svg>
);
export default SvgChainlinkLink;
