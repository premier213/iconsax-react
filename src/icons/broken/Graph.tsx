import * as React from "react";
import type { SVGProps } from "react";
const SvgGraph = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.28 2.96C13 2 12 3.08 12 5.68v2.88C12 11 13 12 15 12h3.32c2.6 0 3.68-1 2.72-4.28A7 7 0 0 0 20 5.63M2.12 14.43A9.105 9.105 0 0 1 9.26 4.01M20 14.7a9.09 9.09 0 0 1-10.42 7.17c-2.23-.35-4.21-1.56-5.58-3.26"
    />
  </svg>
);
export default SvgGraph;
