import * as React from "react";
import type { SVGProps } from "react";
const SvgKey = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.99 2.15c2.38-.46 4.95.23 6.8 2.07 2.95 2.95 2.95 7.76 0 10.7a7.58 7.58 0 0 1-7.6 1.87l-4.71 4.7c-.34.35-1.01.56-1.49.49l-2.18-.3c-.72-.1-1.39-.78-1.5-1.5L2.01 18c-.07-.48.16-1.15.49-1.49l1.12-1.12 3.57-3.57c-.8-2.6-.18-5.55 1.88-7.6M6.89 17.49l2.3 2.3"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.5 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
    />
  </svg>
);
export default SvgKey;
