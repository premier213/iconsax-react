import * as React from "react";
import type { SVGProps } from "react";
const SvgScreenmirroring = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 12.98V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.6 18.5h3.8c1.5 0 2.1-.6 2.1-2.1v-1.8c0-1.5-.6-2.1-2.1-2.1h-3.8c-1.5 0-2.1.6-2.1 2.1v1.8c0 1.5.6 2.1 2.1 2.1"
    />
  </svg>
);
export default SvgScreenmirroring;
