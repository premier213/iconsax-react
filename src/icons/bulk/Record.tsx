import * as React from "react";
import type { SVGProps } from "react";
const SvgRecord = (props: SVGProps<SVGSVGElement>) => (
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
      d="m20.12 8.13-1.42.85-13.94 8.36A8.97 8.97 0 0 1 3 12a9 9 0 0 1 9-9c3.58 0 6.68 2.1 8.12 5.13"
    />
    <path
      fill="currentColor"
      d="M21 12a9 9 0 0 1-9 9c-2.47 0-4.7-.99-6.33-2.61l.09-.05L19.7 9.98l.93-.55c.24.82.37 1.68.37 2.57"
      opacity={0.4}
    />
  </svg>
);
export default SvgRecord;
