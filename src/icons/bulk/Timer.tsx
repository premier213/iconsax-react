import * as React from "react";
import type { SVGProps } from "react";
const SvgTimer = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18.35 19.68a3.63 3.63 0 0 1-3.4 2.32h-5.9a3.62 3.62 0 0 1-3.4-2.32c-.55-1.42-.17-2.99.95-4.01L10.65 12h2.71l4.04 3.67a3.635 3.635 0 0 1 .95 4.01"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M13.82 18.14h-3.64a.68.68 0 0 1 0-1.36h3.64c.38 0 .68.31.68.68s-.31.68-.68.68M18.35 4.32A3.63 3.63 0 0 0 14.95 2h-5.9a3.63 3.63 0 0 0-2.44 6.33L10.65 12h2.71l4.04-3.67a3.635 3.635 0 0 0 .95-4.01m-4.53 2.91h-3.64a.68.68 0 0 1-.68-.68c0-.37.31-.68.68-.68h3.64c.38 0 .68.31.68.68s-.31.68-.68.68"
    />
  </svg>
);
export default SvgTimer;
