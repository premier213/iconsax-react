import * as React from "react";
import type { SVGProps } from "react";
const SvgTextBlock = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7 9.63a.75.75 0 0 1-.34-1.42c3.34-1.67 7.33-1.67 10.67 0 .37.19.52.64.34 1.01a.76.76 0 0 1-1.01.34 10.49 10.49 0 0 0-9.33 0c-.1.05-.22.07-.33.07"
    />
    <path
      fill="currentColor"
      d="M12 17.04c-.41 0-.75-.34-.75-.75V7.93c0-.41.34-.75.75-.75s.75.34.75.75v8.37c0 .41-.34.74-.75.74"
    />
  </svg>
);
export default SvgTextBlock;
