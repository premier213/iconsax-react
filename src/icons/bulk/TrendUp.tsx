import * as React from "react";
import type { SVGProps } from "react";
const SvgTrendUp = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.83 9.41a.7.7 0 0 0-.38-.38.8.8 0 0 0-.26-.05h-1.86c-.39 0-.7.31-.7.7s.31.7.7.7h.18l-2.11 2.11-1.02-1.52a.71.71 0 0 0-.51-.31.68.68 0 0 0-.56.2l-2.98 2.98c-.27.27-.27.71 0 .99.14.14.31.2.49.2s.36-.07.49-.2l2.38-2.38 1.02 1.52c.12.17.3.29.51.31.22.02.41-.05.56-.2l2.72-2.72v.18c0 .39.31.7.7.7s.7-.31.7-.7V9.67c-.02-.09-.03-.18-.07-.26"
    />
  </svg>
);
export default SvgTrendUp;
