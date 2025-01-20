import * as React from "react";
import type { SVGProps } from "react";
const SvgSignpost = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13.03 2H8.96c-.4 0-.78.14-1.09.38L5.68 4.13c-.88.7-.88 2.03 0 2.73l2.19 1.75c.31.25.7.38 1.09.38h8.26c.97 0 1.75-.78 1.75-1.75v-3.5c0-.97-.78-1.75-1.75-1.75M6.8 12h8.26c.4 0 .78.14 1.09.38l2.19 1.75c.88.7.88 2.03 0 2.73l-2.19 1.75c-.31.25-.7.38-1.09.38H6.8c-.97 0-1.75-.78-1.75-1.75v-3.5c0-.96.78-1.74 1.75-1.74M12 12V9M12 22v-3M9 22h6"
    />
  </svg>
);
export default SvgSignpost;
