import * as React from "react";
import type { SVGProps } from "react";
const SvgReceived = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.998 18.2c-.2 0-.4-.1-.5-.2-.3-.3-.3-.8 0-1.1l14-14c.3-.3.8-.3 1.1 0s.3.8 0 1.1l-14 14c-.2.2-.4.2-.6.2"
    />
    <path
      fill="currentColor"
      d="M15.3 18.2H5c-.4 0-.8-.3-.8-.8V7.2c0-.4.3-.8.8-.8s.8.3.8.8v9.5h9.5c.4 0 .8.3.8.8s-.4.7-.8.7"
    />
    <path
      fill="currentColor"
      d="M20.5 22.8h-17c-.4 0-.8-.3-.8-.8s.3-.8.8-.8h17c.4 0 .8.3.8.8s-.4.8-.8.8"
      opacity={0.4}
    />
  </svg>
);
export default SvgReceived;
