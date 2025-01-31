import * as React from "react";
import type { SVGProps } from "react";
const SvgScissor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2m1.57 12.68a.75.75 0 0 1-.9 1.2l-3.95-2.95-2.41 1.8c.01.1.03.2.03.3a2.3 2.3 0 1 1-2.3-2.3c.62 0 1.17.25 1.58.64l1.84-1.38-1.83-1.37a2.3 2.3 0 1 1 .7-1.65c0 .1-.02.19-.03.28l2.4 1.8 3.95-2.95a.75.75 0 0 1 .9 1.2l-3.6 2.69z"
    />
  </svg>
);
export default SvgScissor;
