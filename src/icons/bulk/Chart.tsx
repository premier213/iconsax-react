import * as React from "react";
import type { SVGProps } from "react";
const SvgChart = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M7 14.35c-.41 0-.75-.34-.75-.75v-3.2c0-.41.34-.75.75-.75s.75.34.75.75v3.21c0 .41-.34.74-.75.74M12 16.09c-.41 0-.75-.34-.75-.75V8.66c0-.41.34-.75.75-.75s.75.34.75.75v6.68c0 .41-.34.75-.75.75M17 14.35c-.41 0-.75-.34-.75-.75v-3.2c0-.41.34-.75.75-.75s.75.34.75.75v3.21c0 .41-.34.74-.75.74"
    />
  </svg>
);
export default SvgChart;
