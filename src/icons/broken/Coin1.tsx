import * as React from "react";
import type { SVGProps } from "react";
const SvgCoin1 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 11.4c0 .77.6 1.4 1.33 1.4h1.5c.64 0 1.16-.55 1.16-1.22 0-.73-.32-.99-.79-1.16l-2.4-.84c-.48-.17-.8-.43-.8-1.16 0-.67.52-1.22 1.16-1.22h1.5c.74.01 1.34.63 1.34 1.4M10 12.85v.74M10 6.41v.78"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.07 3.02A8 8 0 0 1 9.99 2c4.41 0 7.99 3.58 7.99 7.99s-3.58 7.99-7.99 7.99S2 14.4 2 9.99c0-1.23.28-2.4.78-3.44M12.98 19.88c.9 1.27 2.37 2.1 4.05 2.1 2.73 0 4.95-2.22 4.95-4.95 0-1.66-.82-3.13-2.07-4.03"
    />
  </svg>
);
export default SvgCoin1;
