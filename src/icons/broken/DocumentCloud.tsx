import * as React from "react";
import type { SVGProps } from "react";
const SvgDocumentCloud = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 13v2c0 5 2 7 7 7M14 2H9C4 2 2 4 2 9M22 10v3M22 10h-4c-3 0-4-1-4-4V2z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M13.76 18.26c-2.35.17-2.35 3.57 0 3.74h5.56c.67 0 1.33-.25 1.82-.7 1.65-1.44.77-4.32-1.4-4.59-.78-4.69-7.56-2.91-5.96 1.56"
    />
  </svg>
);
export default SvgDocumentCloud;
