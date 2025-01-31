import * as React from "react";
import type { SVGProps } from "react";
const SvgSecurity = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.09 6.61c0-.82.62-1.75 1.39-2.06l5.57-2.28c1.25-.51 2.66-.51 3.91 0l5.57 2.28c.76.31 1.39 1.24 1.39 2.06V11c0 4.89-3.55 9.47-8.4 10.81-.33.09-.69.09-1.02 0C6.65 20.47 3.1 15.89 3.1 11"
    />
  </svg>
);
export default SvgSecurity;
