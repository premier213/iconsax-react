import * as React from "react";
import type { SVGProps } from "react";
const SvgReceiptItem = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22 6v2.42C22 10 21 11 19.42 11H16V4.01c0-1.11.91-2.02 2.02-2.01 1.09.01 2.09.45 2.81 1.17C21.55 3.9 22 4.9 22 6"
    />
    <path
      fill="currentColor"
      d="M2 7v14c0 .83.94 1.3 1.6.8l1.71-1.28c.4-.3.96-.26 1.32.1l1.66 1.67c.39.39 1.03.39 1.42 0l1.68-1.68c.35-.35.91-.39 1.3-.09l1.71 1.28c.66.49 1.6.02 1.6-.8V4c0-1.1.9-2 2-2H6C3 2 2 3.79 2 6z"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M12 12.26H9c-.41 0-.75.34-.75.75s.34.75.75.75h3c.41 0 .75-.34.75-.75s-.34-.75-.75-.75M9 9.76h3c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H9c-.41 0-.75.34-.75.75s.34.75.75.75M5.97 8.01c-.56 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1M5.97 12.01c-.56 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1"
    />
  </svg>
);
export default SvgReceiptItem;
