import * as React from "react";
import type { SVGProps } from "react";
const SvgMouse = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13.298 2.115a.473.473 0 0 0-.548.477v2.86c0 .199.12.374.286.484.503.336.834.91.834 1.563v2c0 1.03-.84 1.88-1.87 1.88-1.04 0-1.88-.85-1.88-1.88v-2c0-.653.338-1.227.844-1.563.165-.11.286-.285.286-.483v-2.86a.473.473 0 0 0-.548-.478A7.5 7.5 0 0 0 6.7 4.2a7.48 7.48 0 0 0-2.2 5.3v5c0 4.13 3.37 7.5 7.5 7.5s7.5-3.37 7.5-7.5v-5c0-3.69-2.687-6.766-6.202-7.384"
    />
  </svg>
);
export default SvgMouse;
