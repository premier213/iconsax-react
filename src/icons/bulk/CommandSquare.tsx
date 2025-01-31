import * as React from "react";
import type { SVGProps } from "react";
const SvgCommandSquare = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.19 2H7.82C4.18 2 2.01 4.17 2.01 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M10.75 14.15h2.51c.49 0 .9-.4.9-.9v-2.51c0-.49-.4-.9-.9-.9h-2.51c-.49 0-.9.4-.9.9v2.51c0 .5.4.9.9.9M7.8 18c.99 0 1.8-.81 1.8-1.8v-.8c0-.55-.45-1-1-1h-.8c-.99 0-1.8.81-1.8 1.8S6.81 18 7.8 18M7.8 9.6h.8c.55 0 1-.45 1-1v-.8c0-.99-.81-1.8-1.8-1.8S6 6.81 6 7.8s.81 1.8 1.8 1.8M15.4 9.6h.8c.99 0 1.8-.81 1.8-1.8S17.19 6 16.2 6s-1.8.81-1.8 1.8v.8c0 .55.45 1 1 1M16.2 18c.99 0 1.8-.81 1.8-1.8s-.81-1.8-1.8-1.8h-.8c-.55 0-1 .45-1 1v.8c0 .99.81 1.8 1.8 1.8"
    />
  </svg>
);
export default SvgCommandSquare;
