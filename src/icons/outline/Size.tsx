import * as React from "react";
import type { SVGProps } from "react";
const SvgSize = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.72 22.75h-4.5c-4.15 0-6-1.85-6-6v-4.5c0-4.15 1.85-6 6-6h4.5c4.15 0 6 1.85 6 6v4.5c0 4.15-1.85 6-6 6m-4.5-15c-3.32 0-4.5 1.18-4.5 4.5v4.5c0 3.32 1.18 4.5 4.5 4.5h4.5c3.32 0 4.5-1.18 4.5-4.5v-4.5c0-3.32-1.18-4.5-4.5-4.5z"
    />
    <path
      fill="currentColor"
      d="M18.12 13.75h-1.15c-.41 0-.75-.34-.75-.75v-.75c0-3.32-1.18-4.5-4.5-4.5h-.75c-.41 0-.75-.34-.75-.75V5.85c0-3.18 1.42-4.6 4.6-4.6h3.3c3.18 0 4.6 1.42 4.6 4.6v3.3c0 3.18-1.42 4.6-4.6 4.6m-.4-1.5h.4c2.35 0 3.1-.75 3.1-3.1v-3.3c0-2.35-.75-3.1-3.1-3.1h-3.3c-2.35 0-3.1.75-3.1 3.1v.4c4.15 0 6 1.85 6 6"
    />
  </svg>
);
export default SvgSize;
