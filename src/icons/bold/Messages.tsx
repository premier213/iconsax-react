import * as React from "react";
import type { SVGProps } from "react";
const SvgMessages = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21.999 12.86c0 2.29-1.18 4.32-3 5.6l-1.34 2.95c-.31.67-1.21.8-1.68.23l-1.48-1.78c-1.86 0-3.57-.63-4.87-1.68l.6-.71c4.62-.35 8.27-4.01 8.27-8.47 0-.76-.11-1.51-.31-2.23 2.27 1.2 3.81 3.48 3.81 6.09"
    />
    <path
      fill="currentColor"
      d="M16.3 6.07C15.13 3.67 12.52 2 9.5 2 5.36 2 2 5.13 2 9c0 2.29 1.18 4.32 3 5.6l1.34 2.95c.31.67 1.21.79 1.68.23l.55-.66L9.5 16c4.14 0 7.5-3.13 7.5-7 0-1.05-.25-2.04-.7-2.93M12 9.75H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5c.41 0 .75.34.75.75s-.34.75-.75.75"
    />
  </svg>
);
export default SvgMessages;
