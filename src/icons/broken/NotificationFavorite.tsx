import * as React from "react";
import type { SVGProps } from "react";
const SvgNotificationFavorite = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19 2c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3c0-.36-.06-.7-.18-1.01M6.81 14.93c-.35-1.1.06-2.47 1.22-2.84.61-.2 1.36-.03 1.79.56.4-.61 1.18-.75 1.78-.56 1.16.37 1.57 1.74 1.22 2.84-.55 1.75-2.47 2.66-3 2.66-.54-.01-2.44-.9-3.01-2.66"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M2 14.97V15c0 5 2 7 7 7h6c5 0 7-2 7-7v-5M14 2H9C4 2 2 4 2 9v2"
    />
  </svg>
);
export default SvgNotificationFavorite;
