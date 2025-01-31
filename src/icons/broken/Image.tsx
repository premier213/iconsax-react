import * as React from "react";
import type { SVGProps } from "react";
const SvgImage = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.33 12.84c-.96 1.73-2.75 1.88-3.99.33l-.22-.28c-1.29-1.62-3.11-1.42-4.04.43l-1.72 3.45c-1.2 2.4.55 5.23 3.23 5.23h12.76c2.59 0 4.34-2.65 3.32-5.04l-3.13-7.31c-1.06-2.48-3.01-2.58-4.32-.22M9.97 5c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3c.36 0 .7.06 1.01.18"
    />
  </svg>
);
export default SvgImage;
