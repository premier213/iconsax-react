import * as React from "react";
import type { SVGProps } from "react";
const SvgGrid3 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22 7.81v6.69H12V2h4.19C19.83 2 22 4.17 22 7.81"
      opacity={0.6}
    />
    <path
      fill="currentColor"
      d="M12 9.5V22H7.81C4.17 22 2 19.83 2 16.19V9.5z"
    />
    <path
      fill="currentColor"
      d="M12 2v7.5H2V7.81C2 4.17 4.17 2 7.81 2zM22 14.5v1.69c0 3.64-2.17 5.81-5.81 5.81H12v-7.5z"
      opacity={0.4}
    />
  </svg>
);
export default SvgGrid3;
