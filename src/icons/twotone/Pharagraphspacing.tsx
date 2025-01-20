import * as React from "react";
import type { SVGProps } from "react";
const SvgPharagraphspacing = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 22h18M3 2h18"
    />
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
    >
      <path d="M12 6v12M14.83 7.72 12 4.89 9.17 7.72M14.83 15.89 12 18.72l-2.83-2.83" />
    </g>
  </svg>
);
export default SvgPharagraphspacing;
