import * as React from "react";
import type { SVGProps } from "react";
const SvgEraser = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2m-3.67 13.75-1.26 1.26c-.64.65-1.69.65-2.34 0l-1.93-1.93c-.65-.65-.64-1.69 0-2.34l1.27-1.26c.2-.19.51-.19.71 0l3.56 3.56c.19.2.19.52-.01.71m4.49-4.49-3.08 3.08c-.2.2-.51.2-.71 0l-3.56-3.56c-.2-.2-.2-.51 0-.71l3.08-3.08c.64-.65 1.69-.65 2.34 0l1.93 1.93c.65.65.65 1.7 0 2.34"
    />
  </svg>
);
export default SvgEraser;
