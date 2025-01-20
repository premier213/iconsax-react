import * as React from "react";
import type { SVGProps } from "react";
const SvgTicketStar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.996 4h-10c-3.83 0-4.9.92-4.99 4.5 1.93 0 3.49 1.57 3.49 3.5s-1.56 3.49-3.49 3.5c.09 3.58 1.16 4.5 4.99 4.5h10c4 0 5-1 5-5V9c0-4-1-5-5-5"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.994 4v3.5M8.994 16.5V20M15.024 9.33l.62 1.25c.06.12.18.21.31.23l1.38.2c.34.05.48.47.23.71l-1 .97c-.1.09-.14.23-.12.37l.24 1.37c.06.34-.3.6-.6.44l-1.23-.65a.45.45 0 0 0-.39 0l-1.23.65c-.31.16-.66-.1-.6-.44l.24-1.37a.42.42 0 0 0-.12-.37l-.99-.97a.416.416 0 0 1 .23-.71l1.38-.2c.14-.02.25-.1.31-.23l.61-1.25c.14-.31.58-.31.73 0"
      opacity={0.4}
    />
  </svg>
);
export default SvgTicketStar;
