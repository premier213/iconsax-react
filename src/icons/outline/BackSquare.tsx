import * as React from "react";
import type { SVGProps } from "react";
const SvgBackSquare = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75m-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25z"
    />
    <path
      fill="currentColor"
      d="M13.92 16.13H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.92c1.28 0 2.33-1.04 2.33-2.33s-1.04-2.33-2.33-2.33H7.15c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6.77c2.11 0 3.83 1.72 3.83 3.83s-1.72 3.83-3.83 3.83"
    />
    <path
      fill="currentColor"
      d="M8.57 11.52c-.19 0-.38-.07-.53-.22L6.47 9.73a.755.755 0 0 1 0-1.06L8.04 7.1c.29-.29.77-.29 1.06 0s.29.77 0 1.06L8.06 9.2l1.04 1.04a.75.75 0 0 1-.53 1.28"
    />
  </svg>
);
export default SvgBackSquare;
