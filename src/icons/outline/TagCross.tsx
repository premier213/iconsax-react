import * as React from "react";
import type { SVGProps } from "react";
const SvgTagCross = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17 21h-6.72c-1.62 0-3.17-.69-4.25-1.88L2.5 15.24a4.783 4.783 0 0 1 0-6.47l3.53-3.88A5.73 5.73 0 0 1 10.28 3H17c3.17 0 5.75 2.58 5.75 5.75v6.5c0 3.17-2.58 5.75-5.75 5.75M10.28 4.5c-1.19 0-2.34.51-3.14 1.39L3.6 9.78a3.3 3.3 0 0 0 0 4.45l3.53 3.88c.8.88 1.95 1.39 3.14 1.39H17a4.26 4.26 0 0 0 4.25-4.25v-6.5A4.26 4.26 0 0 0 17 4.5z"
    />
    <path
      fill="currentColor"
      d="M16 15.22c-.19 0-.38-.07-.53-.22l-4.94-4.95a.755.755 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l4.94 4.95c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22"
    />
    <path
      fill="currentColor"
      d="M11.06 15.22c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06L15.47 9c.29-.29.77-.29 1.06 0s.29.77 0 1.06L11.59 15c-.15.15-.34.22-.53.22"
    />
  </svg>
);
export default SvgTagCross;
