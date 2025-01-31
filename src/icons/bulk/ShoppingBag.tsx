import * as React from "react";
import type { SVGProps } from "react";
const SvgShoppingBag = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.49 22H7.51C4 22 3.24 19.99 3.53 17.53l.9-7.5C4.66 8.09 5 6.5 8.4 6.5h7.2c3.4 0 3.74 1.59 3.97 3.53l.75 6.25.15 1.25.03.24c.21 2.35-.61 4.23-4.01 4.23"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M16 8.75c-.41 0-.75-.34-.75-.75V4.5c0-1.08-.67-1.75-1.75-1.75h-3c-1.08 0-1.75.67-1.75 1.75V8c0 .41-.34.75-.75.75s-.75-.34-.75-.75V4.5c0-1.91 1.34-3.25 3.25-3.25h3c1.91 0 3.25 1.34 3.25 3.25V8c0 .41-.34.75-.75.75M20.5 17.77c-.03.01-.06.01-.09.01H8a.749.749 0 1 1 0-1.5h12.32l.15 1.25z"
    />
  </svg>
);
export default SvgShoppingBag;
