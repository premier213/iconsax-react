import * as React from "react";
import type { SVGProps } from "react";
const SvgDaiDai = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path fill="currentColor" d="M24 0H0v24h24z" />
    <path
      fill="currentColor"
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M12 17.75H8c-.41 0-.75-.34-.75-.75V7c0-.41.34-.75.75-.75h4c3.17 0 5.75 2.58 5.75 5.75s-2.58 5.75-5.75 5.75m-3.25-1.5H12A4.26 4.26 0 0 0 16.25 12 4.26 4.26 0 0 0 12 7.75H8.75z"
    />
    <path
      fill="currentColor"
      d="M18.52 10.75H6.48c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h12.04c.41 0 .75.34.75.75s-.34.75-.75.75M18.52 14.75H6.48c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h12.04c.41 0 .75.34.75.75s-.34.75-.75.75"
    />
  </svg>
);
export default SvgDaiDai;
