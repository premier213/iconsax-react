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
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.41 17.03H3.62l-.09.5C3.24 19.99 4 22 7.5 22h8.99c3.51 0 4.27-2.01 3.97-4.47l-.9-7.5c-.23-1.94-.57-3.53-3.97-3.53h-7.2c-3.4 0-3.74 1.59-3.97 3.53L4.1 12.7l-.09.73"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8 8V4.5C8 3 9 2 10.5 2h3C15 2 16 3 16 4.5V8"
    />
  </svg>
);
export default SvgShoppingBag;
