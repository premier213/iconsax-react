import * as React from "react";
import type { SVGProps } from "react";
const SvgCardSlash = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 8.5h13.24M6 16.5h1.29M11 16.5h3.5"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.98 20.5h9.58c3.56 0 4.44-.88 4.44-4.39V6.89M2 14.97v1.14c0 2.34.39 3.51 1.71 4.03M19.99 3.75c-.62-.18-1.42-.25-2.43-.25H6.44C2.89 3.5 2 4.38 2 7.89v3.05M22 2 2 22"
    />
  </svg>
);
export default SvgCardSlash;
