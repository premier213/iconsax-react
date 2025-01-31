import * as React from "react";
import type { SVGProps } from "react";
const SvgSmartHome = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.4 21.81h6.2c1.43 0 2.8-1.16 3.04-2.57l1.33-7.96c.16-.98-.34-2.29-1.11-2.91l-6.93-5.54c-1.07-.86-2.8-.86-3.86-.01L3.14 8.37c-.78.62-1.28 1.93-1.11 2.91l.28 1.68"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M2 19c1.76.04 2.96 1.24 3 3M8 22c-.01-.76-.14-1.47-.37-2.12a5.69 5.69 0 0 0-3.51-3.51c-.65-.23-1.36-.36-2.12-.37"
      opacity={0.4}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M1.996 22h.009"
      opacity={0.4}
    />
  </svg>
);
export default SvgSmartHome;
