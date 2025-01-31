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
      d="M11.25 3.899v9.02c0 .33-.16.63-.43.82l-7.21 5.05c-.59.41-1.43.09-1.56-.62-.15-.86.05-1.87.65-2.96l3.12-5.61 2.94-5.29c.23-.41.48-.77.74-1.08.6-.7 1.75-.25 1.75.67M20.39 18.789l-7.21-5.05a1 1 0 0 1-.43-.82v-9.02c0-.92 1.15-1.37 1.75-.67.26.31.51.67.74 1.08l2.94 5.29 3.12 5.61c.6 1.09.8 2.1.65 2.96-.13.71-.97 1.03-1.56.62M5.26 19.14l6.15-4.1c.33-.22.87-.22 1.2 0l6.15 4.1c1.63 1.09 1.36 1.98-.6 1.98H5.85c-1.95-.01-2.22-.9-.59-1.98"
    />
  </svg>
);
export default SvgTriangle;
