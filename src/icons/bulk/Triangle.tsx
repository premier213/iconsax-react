import * as React from "react";
import type { SVGProps } from "react";
const SvgTriangle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 2.59v11.02l-9.35 6.54c-.85-1.01-.9-2.54.05-4.25l3.12-5.61L8.76 5c.89-1.6 2.06-2.41 3.24-2.41"
    />
    <path
      fill="currentColor"
      d="M21.35 20.15c-.65.79-1.78 1.26-3.29 1.26H5.94c-1.51 0-2.64-.47-3.29-1.26L12 13.61z"
      opacity={0.6}
    />
    <path
      fill="currentColor"
      d="M21.35 20.15 12 13.61V2.59c1.18 0 2.35.81 3.24 2.41l2.94 5.29 3.12 5.61c.95 1.71.9 3.24.05 4.25"
      opacity={0.4}
    />
  </svg>
);
export default SvgTriangle;
