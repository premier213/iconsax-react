import * as React from "react";
import type { SVGProps } from "react";
const SvgChart = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7 14.69c-.41 0-.75-.34-.75-.75v-3.21c0-.41.34-.75.75-.75s.75.34.75.75v3.21c0 .42-.34.75-.75.75M12 16.43c-.41 0-.75-.34-.75-.75V9c0-.41.34-.75.75-.75s.75.34.75.75v6.68c0 .41-.34.75-.75.75M17 14.69c-.41 0-.75-.34-.75-.75v-3.21c0-.41.34-.75.75-.75s.75.34.75.75v3.21c0 .42-.34.75-.75.75"
    />
    <path
      fill="currentColor"
      d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75m-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25z"
    />
  </svg>
);
export default SvgChart;
