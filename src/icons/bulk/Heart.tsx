import * as React from "react";
import type { SVGProps } from "react";
const SvgHeart = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22 8.69c0 1.19-.19 2.29-.52 3.31H2.52C2.19 10.98 2 9.88 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.81 0 3.43.88 4.44 2.23a5.55 5.55 0 0 1 4.44-2.23C19.51 3.1 22 5.6 22 8.69"
    />
    <path
      fill="currentColor"
      d="M21.48 12c-1.58 5-6.45 7.99-8.86 8.81-.34.12-.9.12-1.24 0C8.97 19.99 4.1 17 2.52 12z"
      opacity={0.4}
    />
  </svg>
);
export default SvgHeart;
