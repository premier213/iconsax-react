import * as React from "react";
import type { SVGProps } from "react";
const SvgTimerPause = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 22.75c-5.24 0-9.5-4.26-9.5-9.5s4.26-9.5 9.5-9.5 9.5 4.26 9.5 9.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-4.41-3.59-8-8-8s-8 3.59-8 8 3.59 8 8 8c.41 0 .75.34.75.75s-.34.75-.75.75"
    />
    <path
      fill="currentColor"
      d="M12 13.75c-.41 0-.75-.34-.75-.75V8c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75M15 2.75H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75M19 21.75c-.41 0-.75-.34-.75-.75v-4c0-.41.34-.75.75-.75s.75.34.75.75v4c0 .41-.34.75-.75.75M16 21.75c-.41 0-.75-.34-.75-.75v-4c0-.41.34-.75.75-.75s.75.34.75.75v4c0 .41-.34.75-.75.75"
    />
  </svg>
);
export default SvgTimerPause;
