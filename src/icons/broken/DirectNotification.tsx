import * as React from "react";
import type { SVGProps } from "react";
const SvgDirectNotification = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.98 13h3.79a2 2 0 0 1 1.79 1.11l.89 1.79C9 17 10 17 10.24 17h3.53a2 2 0 0 0 1.79-1.11l.89-1.79a2 2 0 0 1 1.79-1.11h3.74M19 2c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3c0-.34-.06-.68-.16-.98"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M2.69 19c.96 2.1 2.96 3 6.31 3h6c5 0 7-2 7-7v-5M14 2H9C4 2 2 4 2 9v6"
    />
  </svg>
);
export default SvgDirectNotification;
