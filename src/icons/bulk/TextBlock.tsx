import * as React from "react";
import type { SVGProps } from "react";
const SvgTextBlock = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M17.34 8.21a11.99 11.99 0 0 0-10.67 0c-.38.19-.53.64-.34 1.01a.753.753 0 0 0 1.01.33c1.23-.61 2.56-.95 3.91-1.05v7.79c0 .41.34.75.75.75s.75-.34.75-.75V8.5c1.35.1 2.68.44 3.91 1.05.37.18.82.04 1.01-.34.19-.36.04-.81-.33-1"
    />
  </svg>
);
export default SvgTextBlock;
