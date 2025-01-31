import * as React from "react";
import type { SVGProps } from "react";
const SvgTicket2 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19.03 14.97c0 1.29 1.06 2.34 2.35 2.34 0 3.75-.94 4.69-4.69 4.69H7.31c-3.75 0-4.69-.94-4.69-4.69v-.46a2.36 2.36 0 0 0 2.35-2.35 2.36 2.36 0 0 0-2.35-2.35v-.46C2.63 7.94 3.56 7 7.31 7h9.37c3.75 0 4.69.94 4.69 4.69v.94M16.33 7H7.24l2.93-2.93c2.39-2.39 3.59-2.39 5.98 0l.6.6c-.63.63-.78 1.56-.42 2.33"
    />
    <path
      stroke="currentColor"
      strokeDasharray="5 5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10 7v15"
    />
  </svg>
);
export default SvgTicket2;
