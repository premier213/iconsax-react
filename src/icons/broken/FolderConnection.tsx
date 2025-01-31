import * as React from "react";
import type { SVGProps } from "react";
const SvgFolderConnection = (props: SVGProps<SVGSVGElement>) => (
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
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M12 16v3M10 21c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2M18 21h-4M10 21H6M5 5.5C5 2.7 5.7 2 8.5 2h1.05c1.05 0 1.28.31 1.68.84l1.05 1.4c.27.35.42.56 1.12.56h2.1c2.8 0 3.5.7 3.5 3.5v4.2c0 2.8-.7 3.5-3.5 3.5h-7C5.7 16 5 15.3 5 12.5V9.34"
    />
  </svg>
);
export default SvgFolderConnection;
