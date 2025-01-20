import * as React from "react";
import type { SVGProps } from "react";
const SvgMessageEdit = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 2H8Q2 2 2 8v13c0 .55.45 1 1 1h13q6 0 6-6V8q0-6-6-6"
    />
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      opacity={0.4}
    >
      <path d="m12.909 7.84-5.19 5.19c-.2.2-.39.59-.43.87l-.28 1.98c-.1.72.4 1.22 1.12 1.12l1.98-.28c.28-.04.67-.23.87-.43l5.19-5.19c.89-.89 1.32-1.93 0-3.25-1.32-1.33-2.36-.91-3.26-.01" />
      <path d="M12.168 8.58a4.69 4.69 0 0 0 3.25 3.25" />
    </g>
  </svg>
);
export default SvgMessageEdit;
