import * as React from "react";
import type { SVGProps } from "react";
const SvgLifebuoy = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.97 22c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 16.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9M4.9 4.93l3.54 3.53M4.9 19.07l3.54-3.53M19.05 19.07l-3.54-3.53M19.05 4.93l-3.54 3.53"
    />
  </svg>
);
export default SvgLifebuoy;
