import * as React from "react";
import type { SVGProps } from "react";
const SvgCardSlash = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22 9v7.46c0 2.29-1.86 4.14-4.15 4.14H6.4l3.57-3.57 1.28-1.28L18 9zM15 9 4 20c-1.2-.72-2-2.04-2-3.54V9z"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M22 7.54V9h-4l3.47-3.47c.34.59.53 1.28.53 2.01M20 4l-5 5H2V7.54C2 5.25 3.86 3.4 6.15 3.4h11.7c.79 0 1.52.22 2.15.6M8.21 15.79l-1.46 1.46H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.07 0 .14.01.21.04M15.25 16.5c0 .41-.34.75-.75.75h-4c-.2 0-.39-.09-.53-.22l1.28-1.28h3.25c.41 0 .75.34.75.75"
    />
    <path
      fill="currentColor"
      d="M21.77 2.23c-.3-.3-.79-.3-1.09 0L2.23 20.69c-.3.3-.3.79 0 1.09a.758.758 0 0 0 1.08-.01L21.77 3.31c.31-.3.31-.78 0-1.08"
    />
  </svg>
);
export default SvgCardSlash;
