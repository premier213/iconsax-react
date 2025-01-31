import * as React from "react";
import type { SVGProps } from "react";
const SvgLamp = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18.21 15.44H5.79c-1.03 0-1.94-.42-2.5-1.15s-.72-1.72-.45-2.71l2.2-8.08c.34-1.26 1.64-2.25 2.95-2.25H16c1.31 0 2.6.99 2.95 2.25l2.2 8.08c.27.99.11 1.98-.45 2.71s-1.46 1.15-2.49 1.15M7.99 2.75c-.63 0-1.34.54-1.5 1.15l-2.2 8.08c-.15.54-.08 1.04.2 1.41s.74.56 1.3.56h12.42c.56 0 1.03-.2 1.3-.56s.35-.86.2-1.41l-2.2-8.08c-.17-.61-.87-1.15-1.5-1.15z"
    />
    <path
      fill="currentColor"
      d="M12 22.75c-.41 0-.75-.34-.75-.75v-7c0-.41.34-.75.75-.75s.75.34.75.75v7c0 .41-.34.75-.75.75"
    />
    <path
      fill="currentColor"
      d="M16 22.75H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75"
    />
  </svg>
);
export default SvgLamp;
