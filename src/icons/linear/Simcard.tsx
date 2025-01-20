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
      d="m19.54 6.54-3.07-3.07a5 5 0 0 0-3.54-1.46H8c-3 0-5 2-5 5v10c0 3 2 5 5 5h8c3 0 5-2 5-5v-6.93a5 5 0 0 0-1.46-3.54"
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
