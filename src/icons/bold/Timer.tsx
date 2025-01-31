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
      d="M17.39 15.67 13.35 12h-2.71L6.6 15.67a3.6 3.6 0 0 0-.95 4.01A3.63 3.63 0 0 0 9.05 22h5.89c1.52 0 2.85-.91 3.4-2.32.55-1.42.18-2.99-.95-4.01m-3.57 2.47h-3.64a.68.68 0 0 1-.68-.68c0-.37.31-.68.68-.68h3.64c.38 0 .68.31.68.68s-.31.68-.68.68M18.35 4.32A3.63 3.63 0 0 0 14.95 2h-5.9a3.63 3.63 0 0 0-2.44 6.33L10.65 12h2.71l4.04-3.67a3.635 3.635 0 0 0 .95-4.01m-4.53 2.91h-3.64a.68.68 0 0 1-.68-.68c0-.37.31-.68.68-.68h3.64c.38 0 .68.31.68.68s-.31.68-.68.68"
    />
  </svg>
);
export default SvgTimer;
