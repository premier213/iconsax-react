import * as React from "react";
import type { SVGProps } from "react";
const SvgMonitor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M22 10.63v2.15c0 3.56-.89 4.44-4.44 4.44H6.44c-3.55 0-4.44-.89-4.44-4.44V6.44C2 2.89 2.89 2 6.44 2h11.11C21.11 2 22 2.89 22 6.44M12 17.22V22M2 13h20M7.5 22h9"
    />
  </svg>
);
export default SvgMonitor;
