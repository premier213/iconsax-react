import * as React from "react";
import type { SVGProps } from "react";
const SvgRadio = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.75 2v3H7c-.26 0-.51.01-.75.05V2c0-.41.34-.75.75-.75s.75.34.75.75"
    />
    <path
      fill="currentColor"
      d="M17 5H7c-.26 0-.51.01-.75.05C3.67 5.35 2 7.26 2 10v7c0 3 2 5 5 5h10c3 0 5-2 5-5v-7c0-3-2-5-5-5M7.88 16a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5m6.5.25h-.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.5c.41 0 .75.34.75.75s-.34.75-.75.75m3.5 0h-.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.5c.41 0 .75.34.75.75s-.34.75-.75.75m0-4h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75"
    />
  </svg>
);
export default SvgRadio;
