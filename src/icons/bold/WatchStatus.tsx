import * as React from "react";
import type { SVGProps } from "react";
const SvgWatchStatus = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 3.75H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75M16 21.75H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75M15.5 5h-7C6.17 5 5 6.17 5 8.5v7C5 17.83 6.17 19 8.5 19h7c2.33 0 3.5-1.17 3.5-3.5v-7C19 6.17 17.83 5 15.5 5m-5.75 9a.749.749 0 1 1-1.5 0v-1c0-.41.34-.75.75-.75s.75.34.75.75zm3 0c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-4c0-.41.34-.75.75-.75s.75.34.75.75zm3 0c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2c0-.41.34-.75.75-.75s.75.34.75.75z"
    />
  </svg>
);
export default SvgWatchStatus;
