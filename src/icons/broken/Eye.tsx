import * as React from "react";
import type { SVGProps } from "react";
const SvgEye = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.03 14c-.39-.57-.61-1.26-.61-2 0-1.98 1.6-3.58 3.58-3.58s3.58 1.6 3.58 3.58-1.6 3.58-3.58 3.58"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.56 5.58c-1.69-1.2-3.59-1.85-5.56-1.85-3.53 0-6.82 2.08-9.11 5.68-.9 1.41-.9 3.78 0 5.19 2.29 3.6 5.58 5.68 9.11 5.68s6.82-2.08 9.11-5.68c.9-1.41.9-3.78 0-5.19"
    />
  </svg>
);
export default SvgEye;
