import * as React from "react";
import type { SVGProps } from "react";
const SvgCoffee = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17.79 10.47V12H2v-1.53c0-2.32 1.89-4.21 4.21-4.21h7.37c2.32 0 4.21 1.89 4.21 4.21"
      opacity={0.6}
    />
    <path
      fill="currentColor"
      d="M17.79 12v5.79c0 2.32-1.89 4.21-4.21 4.21H6.21C3.89 22 2 20.11 2 17.79V12z"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M5.5 5.12c-.41 0-.75-.34-.75-.75V2.62c0-.41.34-.75.75-.75s.75.34.75.75v1.75c0 .42-.34.75-.75.75M9.5 5.12c-.41 0-.75-.34-.75-.75V2.62c0-.41.34-.75.75-.75s.75.34.75.75v1.75c0 .42-.34.75-.75.75M13.5 5.12c-.41 0-.75-.34-.75-.75V2.62c0-.41.34-.75.75-.75s.75.34.75.75v1.75c0 .42-.34.75-.75.75M21.65 14.32c0 2.15-1.74 3.89-3.89 3.89v-7.79c2.14 0 3.89 1.75 3.89 3.9"
    />
  </svg>
);
export default SvgCoffee;
