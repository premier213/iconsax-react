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
      d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2M9.6 16.2c0 .99-.81 1.8-1.8 1.8S6 17.19 6 16.2s.81-1.8 1.8-1.8h.8c.55 0 1 .45 1 1zm0-7.6c0 .55-.45 1-1 1h-.8C6.81 9.6 6 8.79 6 7.8S6.81 6 7.8 6s1.8.81 1.8 1.8zm4.55 4.65c0 .49-.4.9-.9.9h-2.51c-.49 0-.9-.4-.9-.9v-2.51c0-.49.4-.9.9-.9h2.51c.49 0 .9.4.9.9zM16.2 18c-.99 0-1.8-.81-1.8-1.8v-.8c0-.55.45-1 1-1h.8c.99 0 1.8.81 1.8 1.8s-.81 1.8-1.8 1.8m0-8.4h-.8c-.55 0-1-.45-1-1v-.8c0-.99.81-1.8 1.8-1.8s1.8.81 1.8 1.8-.81 1.8-1.8 1.8"
    />
  </svg>
);
export default SvgCommandSquare;
