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
      d="M3.24 15.27c-.38.14-.8.22-1.23.22C2.1 19.08 3.17 20 7 20h10c4 0 5-1 5-5V9c0-4-1-5-5-5H7c-3.83 0-4.9.92-4.99 4.5 1.93 0 3.49 1.57 3.49 3.5M9 4v3.5M9 16.5V20"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.86 14.21a.45.45 0 0 0-.39 0l-1.23.65c-.31.16-.66-.1-.6-.44l.24-1.37a.42.42 0 0 0-.12-.37l-.99-.97A.416.416 0 0 1 12 11l1.38-.2c.14-.02.25-.1.31-.23l.61-1.25a.41.41 0 0 1 .74 0l.62 1.25c.06.12.18.21.31.23l1.38.2c.34.05.48.47.23.71l-1 .97c-.1.09-.14.23-.12.37"
    />
  </svg>
);
export default SvgTicketStar;
