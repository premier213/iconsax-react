import * as React from "react";
import type { SVGProps } from "react";
const SvgVideoPlay = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.73 2H9.27v4.36h5.46zM16.23 2v4.36h5.64c-.51-2.75-2.54-4.35-5.64-4.36M2 7.86v8.33C2 19.83 4.17 22 7.81 22h8.38c3.64 0 5.81-2.17 5.81-5.81V7.86zm12.44 8.32-2.08 1.2c-.44.25-.87.38-1.27.38-.3 0-.57-.07-.82-.21-.58-.33-.9-1.01-.9-1.89v-2.4c0-.88.32-1.56.9-1.89.58-.34 1.32-.28 2.09.17l2.08 1.2c.77.44 1.19 1.06 1.19 1.73s-.43 1.26-1.19 1.71M7.769 2c-3.1.01-5.13 1.61-5.64 4.36h5.64z"
    />
  </svg>
);
export default SvgVideoPlay;
