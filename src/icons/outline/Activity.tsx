import * as React from "react";
import type { SVGProps } from "react";
const SvgActivity = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.33 15.24c-.16 0-.32-.05-.46-.16a.75.75 0 0 1-.14-1.05l2.38-3.09c.29-.37.7-.61 1.17-.67.46-.06.93.07 1.3.36l1.83 1.44c.07.06.14.06.19.05.04 0 .11-.02.17-.1l2.31-2.98a.74.74 0 0 1 1.05-.13c.33.25.39.72.13 1.05l-2.31 2.98c-.29.37-.7.61-1.17.66-.47.06-.93-.07-1.3-.36l-1.83-1.44a.22.22 0 0 0-.19-.05c-.04 0-.11.02-.17.1l-2.38 3.09c-.13.2-.35.3-.58.3"
    />
  </svg>
);
export default SvgActivity;
