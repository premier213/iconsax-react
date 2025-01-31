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
      d="M12 13.75c-.41 0-.75-.34-.75-.75V8c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75M14.89 3.45H9.11c-.4 0-.72-.32-.72-.72S8.71 2 9.11 2h5.78c.4 0 .72.32.72.72s-.32.73-.72.73"
    />
    <path
      fill="currentColor"
      d="M15 19.97v-2.94c0-1.27.76-2.03 2.03-2.03h2.94c.19 0 .36.02.53.06.11-.56.17-1.14.17-1.73 0-4.78-3.89-8.67-8.67-8.67s-8.67 3.89-8.67 8.67S7.22 22 12 22c1.21 0 2.36-.25 3.41-.7-.26-.34-.41-.78-.41-1.33"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M19.97 15h-2.93c-1.28 0-2.04.76-2.04 2.03v2.93c0 1.27.76 2.03 2.03 2.03h2.93c1.27 0 2.03-.76 2.03-2.03v-2.93C22 15.76 21.24 15 19.97 15m-2.05 5.06a.58.58 0 0 1-1.16 0v-3.11a.58.58 0 0 1 1.16 0zm2.33 0a.58.58 0 0 1-1.16 0v-3.11a.58.58 0 0 1 1.16 0z"
    />
  </svg>
);
export default SvgTimerPause;
