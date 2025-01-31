import * as React from "react";
import type { SVGProps } from "react";
const SvgToggleOn = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15.7 16.75h-2.4c-2.42 0-3.55-1.13-3.55-3.55v-2.4c0-2.42 1.13-3.55 3.55-3.55h2.4c2.42 0 3.55 1.13 3.55 3.55v2.4c0 2.42-1.13 3.55-3.55 3.55m-2.4-8c-1.59 0-2.05.46-2.05 2.05v2.4c0 1.59.46 2.05 2.05 2.05h2.4c1.59 0 2.05-.46 2.05-2.05v-2.4c0-1.59-.46-2.05-2.05-2.05z"
    />
    <path
      fill="currentColor"
      d="M17 20.75H7c-4.41 0-5.75-1.34-5.75-5.75V9c0-4.41 1.34-5.75 5.75-5.75h10c4.41 0 5.75 1.34 5.75 5.75v6c0 4.41-1.34 5.75-5.75 5.75m-10-16c-3.58 0-4.25.68-4.25 4.25v6c0 3.57.67 4.25 4.25 4.25h10c3.58 0 4.25-.68 4.25-4.25V9c0-3.57-.67-4.25-4.25-4.25z"
    />
  </svg>
);
export default SvgToggleOn;
