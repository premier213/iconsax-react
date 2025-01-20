import * as React from "react";
import type { SVGProps } from "react";
const SvgSimcard = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 11v6c0 3 2 5 5 5h8c3 0 5-2 5-5v-6.93c0-1.33-.53-2.6-1.46-3.54l-3.07-3.07A5 5 0 0 0 12.93 2H8C5 2 3 4 3 7"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.5 14-2 2 2 2M14.5 14l2 2-2 2"
    />
  </svg>
);
export default SvgSimcard;
