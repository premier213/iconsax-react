import * as React from "react";
import type { SVGProps } from "react";
const SvgWoman = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19 9a6.995 6.995 0 0 1-7.75 6.96A6.995 6.995 0 0 1 5 9c0-3.87 3.13-7 7-7s7 3.13 7 7"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M15.75 19c0 .41-.34.75-.75.75h-2.25V22c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2.25H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.25v-2.29c.25.03.5.04.75.04s.5-.01.75-.04v2.29H15c.41 0 .75.34.75.75"
    />
  </svg>
);
export default SvgWoman;
