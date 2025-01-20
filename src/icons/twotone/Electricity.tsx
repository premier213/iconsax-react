import * as React from "react";
import type { SVGProps } from "react";
const SvgElectricity = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.5 16h3c2.5 0 4-1.8 4-4V6.91c0-1.05-.86-1.91-1.91-1.91H8.42c-1.05 0-1.91.86-1.91 1.91V12C6.5 14.2 8 16 10.5 16"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.5 2v3M14.5 2v3M12 22v-6"
      opacity={0.4}
    />
  </svg>
);
export default SvgElectricity;
