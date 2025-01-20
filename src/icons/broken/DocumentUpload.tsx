import * as React from "react";
import type { SVGProps } from "react";
const SvgDocumentUpload = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9 13.65V11l2 2M9 17v-1M9 11l-2 2M2 9c0-5 2-7 7-7h5"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M22 10v5c0 5-2 7-7 7H9c-5 0-7-2-7-7v-2.02M18 10c-3 0-4-1-4-4V2l8 8"
    />
  </svg>
);
export default SvgDocumentUpload;
