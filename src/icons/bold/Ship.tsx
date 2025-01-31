import * as React from "react";
import type { SVGProps } from "react";
const SvgShip = (props: SVGProps<SVGSVGElement>) => (
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
      d="m21.63 14.66-.41 1.86C20.51 19.72 18 22 14.38 22H9.62C6 22 3.49 19.72 2.78 16.52l-.41-1.86c-.2-.91.34-1.94 1.21-2.29L5 11.8l5.51-2.21c.48-.19.99-.29 1.49-.29s1.01.1 1.49.29L19 11.8l1.42.57c.87.35 1.41 1.38 1.21 2.29"
    />
    <path
      fill="currentColor"
      d="M19 8v1.44c0 .35-.36.6-.69.46l-4.27-1.71a5.6 5.6 0 0 0-4.09.01L5.69 9.91A.5.5 0 0 1 5 9.45V8c0-1.65 1.35-3 3-3h8c1.65 0 3 1.35 3 3M14.5 5h-5V3c0-.55.45-1 1-1h3c.55 0 1 .45 1 1z"
    />
  </svg>
);
export default SvgShip;
