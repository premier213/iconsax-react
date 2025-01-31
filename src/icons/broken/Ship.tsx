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
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.11 20.46c-1.17-.97-1.97-2.34-2.33-3.94l-.41-1.86c-.2-.91.34-1.94 1.21-2.29L5 11.8l5.51-2.21c.96-.38 2.02-.38 2.98 0L19 11.8l1.42.57c.87.35 1.41 1.38 1.21 2.29l-.41 1.86C20.51 19.72 18 22 14.38 22H9.62M12 22V10"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19 8v3.8l-5.51-2.21c-.96-.38-2.02-.38-2.98 0L5 11.8V8c0-1.65 1.35-3 3-3h8c1.65 0 3 1.35 3 3M14.5 5h-5V3c0-.55.45-1 1-1h3c.55 0 1 .45 1 1z"
    />
  </svg>
);
export default SvgShip;
