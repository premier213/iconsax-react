import * as React from "react";
import type { SVGProps } from "react";
const SvgTrendDown = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.88 12.47c0-.39-.31-.7-.7-.7s-.7.31-.7.7v.18l-2.72-2.72a.69.69 0 0 0-.56-.2c-.21.02-.4.13-.51.31l-1.02 1.52-2.36-2.38a.706.706 0 0 0-.99 0c-.27.27-.27.71 0 .99l2.98 2.98c.15.15.35.22.56.2s.4-.13.51-.31l1.02-1.52 2.11 2.11h-.18c-.39 0-.7.31-.7.7s.31.7.7.7h1.86c.09 0 .18-.02.27-.05.17-.07.31-.21.38-.38.04-.09.05-.18.05-.27z"
    />
  </svg>
);
export default SvgTrendDown;
