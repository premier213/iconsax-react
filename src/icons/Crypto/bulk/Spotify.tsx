import * as React from "react";
import type { SVGProps } from "react";
const SvgSpotify = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path fill="currentColor" d="M24 0H0v24h24z" opacity={0.58} />
    <path
      fill="currentColor"
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M17.48 11.42c-.15 0-.3-.05-.44-.14-2.98-2.14-6.8-2.61-10.2-1.25a.75.75 0 0 1-.97-.42c-.15-.38.04-.82.42-.97 3.88-1.54 8.23-1.01 11.63 1.43.34.24.41.71.17 1.05-.14.19-.37.3-.61.3"
    />
    <path
      fill="currentColor"
      d="M15.91 14.11c-.15 0-.3-.05-.44-.14a7.6 7.6 0 0 0-7.26-.89.753.753 0 0 1-.97-.42.75.75 0 0 1 .42-.97 9.08 9.08 0 0 1 8.68 1.07c.34.24.41.71.17 1.05-.14.19-.37.3-.6.3M14.81 16.9c-.15 0-.3-.05-.44-.14a5.55 5.55 0 0 0-5.27-.65.753.753 0 0 1-.97-.42.75.75 0 0 1 .42-.97c2.24-.89 4.74-.58 6.69.82.34.24.41.71.17 1.05a.71.71 0 0 1-.6.31"
    />
  </svg>
);
export default SvgSpotify;
