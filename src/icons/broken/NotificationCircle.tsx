import * as React from "react";
import type { SVGProps } from "react";
const SvgNotificationCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.02 16.4A9.98 9.98 0 0 0 12 22c5.52 0 10-4.48 10-10 0-.68-.07-1.35-.2-1.99M14.02 2.2C13.36 2.07 12.69 2 12 2 6.48 2 2 6.48 2 12M19 2c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3c0-.36-.06-.7-.18-1.01"
    />
  </svg>
);
export default SvgNotificationCircle;
