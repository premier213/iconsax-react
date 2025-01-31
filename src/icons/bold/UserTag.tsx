import * as React from "react";
import type { SVGProps } from "react";
const SvgUserTag = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18 2H6C4.34 2 3 3.33 3 4.97v10.91c0 1.64 1.34 2.97 3 2.97h.76c.8 0 1.56.31 2.12.87l1.71 1.69c.78.77 2.05.77 2.83 0l1.71-1.69c.56-.56 1.33-.87 2.12-.87H18c1.66 0 3-1.33 3-2.97V4.97C21 3.33 19.66 2 18 2m-6 3.75c1.29 0 2.33 1.04 2.33 2.33s-1.04 2.33-2.33 2.33-2.33-1.05-2.33-2.33c0-1.29 1.04-2.33 2.33-2.33m2.68 9.31H9.32c-.81 0-1.28-.9-.83-1.57.68-1.01 2-1.69 3.51-1.69s2.83.68 3.51 1.69c.45.67-.03 1.57-.83 1.57"
    />
  </svg>
);
export default SvgUserTag;
