import * as React from "react";
import type { SVGProps } from "react";
const SvgDocumentSketch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 22 22"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 9v5c0 5-2 7-7 7H8c-5 0-7-2-7-7V8c0-5 2-7 7-7h5"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 9h-4c-3 0-4-1-4-4V1z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M7.32 11h2.65c.27 0 .61.18.75.4l1.13 1.7c.23.34.18.85-.11 1.14L9.28 16.7c-.35.35-.93.35-1.28 0l-2.46-2.46a.935.935 0 0 1-.11-1.14l1.13-1.7c.16-.22.5-.4.76-.4"
      clipRule="evenodd"
      opacity={0.4}
    />
  </svg>
);
export default SvgDocumentSketch;
