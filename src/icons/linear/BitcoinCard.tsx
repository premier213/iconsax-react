import * as React from "react";
import type { SVGProps } from "react";
const SvgBitcoinCard = (props: SVGProps<SVGSVGElement>) => (
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
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M2 8.5h11M6 16.5h2M10.5 16.5h4"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M22 11.33v4.78c0 3.51-.89 4.39-4.44 4.39H6.44C2.89 20.5 2 19.62 2 16.11V7.89c0-3.51.89-4.39 4.44-4.39h6.84"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M17 3.25h3.13c.69 0 1.25.63 1.25 1.25 0 .69-.56 1.25-1.25 1.25H17zM17 5.75h3.57c.79 0 1.43.56 1.43 1.25s-.64 1.25-1.43 1.25H17zM18.76 8.25V9.5M18.76 2v1.25M18.19 3.25H16M18.19 8.25H16"
    />
  </svg>
);
export default SvgBitcoinCard;
