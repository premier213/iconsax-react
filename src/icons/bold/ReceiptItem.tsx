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
      d="M7 2H6C3 2 2 3.79 2 6v15c0 .83.94 1.3 1.6.8l1.71-1.28c.4-.3.96-.26 1.32.1l1.66 1.67c.39.39 1.03.39 1.42 0l1.68-1.68c.35-.35.91-.39 1.3-.09l1.71 1.28c.66.49 1.6.02 1.6-.8V4c0-1.1.9-2 2-2zM5.97 14.01c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m0-4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1M12 13.76H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75m0-4H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75"
    />
    <path
      fill="currentColor"
      d="M18.01 2v1.5c.66 0 1.29.27 1.75.72.48.49.74 1.12.74 1.78v2.42c0 .74-.33 1.08-1.08 1.08H17.5V4.01c0-.28.23-.51.51-.51zm0 0C16.9 2 16 2.9 16 4.01V11h3.42C21 11 22 10 22 8.42V6c0-1.1-.45-2.1-1.17-2.83A4.04 4.04 0 0 0 18.01 2c.01 0 0 0 0 0"
    />
  </svg>
);
export default SvgReceiptItem;
