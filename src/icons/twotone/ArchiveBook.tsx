import * as React from "react";
import type { SVGProps } from "react";
const SvgArchiveBook = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21 7v10c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V7c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M15.5 2v7.86c0 .44-.52.66-.84.37l-2.32-2.14a.496.496 0 0 0-.68 0l-2.32 2.14c-.32.29-.84.07-.84-.37V2zM13.25 14h4.25M9 18h8.5"
      opacity={0.4}
    />
  </svg>
);
export default SvgArchiveBook;
