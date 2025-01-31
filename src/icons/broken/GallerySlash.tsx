import * as React from "react";
import type { SVGProps } from "react";
const SvgGallerySlash = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 9c0-5 2-7 7-7h6c2.19 0 3.8.38 4.92 1.23M3.37 20.1C2.43 18.97 2 17.31 2 15v-2.03M21.97 7.99c.02.32.03.66.03 1.01v6c0 5-2 7-7 7H9c-.74 0-1.42-.04-2.04-.14"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2M22 2 2 22M11.43 16.45c.3.3.79.3 1.09 0l5.03-5.04c.78-.78 2.04-.78 2.82 0L22 13.05"
    />
  </svg>
);
export default SvgGallerySlash;
